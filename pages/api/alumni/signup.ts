import {
  createAlum,
  findUserByEmail,
  findUserByUsername,
} from '@/lib/prisma/alumni';
import { NextApiRequest, NextApiResponse } from 'next';
import { AlumCreateRequest } from 'pages/types/apiRequests';
import { hashSync } from 'bcrypt';
import { ApiErrorResponse, ApiSuccessResponse } from 'pages/types/apiResponses';

const signup = async (
  request: NextApiRequest,
  response: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
) => {
  try {
    const { email, username, password } =
      request.body as unknown as AlumCreateRequest;
    const isEmailExisted = await findUserByEmail(email);
    if (isEmailExisted) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Email is already existed',
      });
    }

    const isUsernameExisted = await findUserByUsername(username);
    if (isUsernameExisted) {
      return response.status(400).json({
        status: 'ERROR',
        message: 'Username is already existed',
      });
    }

    const passwordEncrypted = hashSync(password, 10);

    const newAlum = await createAlum({
      username,
      email,
      password: passwordEncrypted,
    });
    return response.status(201).json({
      status: 'OK',
      data: newAlum,
    });
  } catch (error) {
    return response.status(500).json({
      status: 'ERROR',
      message: error as string,
    });
  }
};

export default signup;
