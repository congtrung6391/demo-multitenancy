import { NextApiRequest, NextApiResponse } from 'next';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/types';
import SessionService from '../services/session.service';

export default class SessionController {
  static signUp = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const newAlum = await SessionService.signUp(req.body);
      return res.status(201).json({
        status: true,
        data: newAlum,
      });
    } catch (error: any) {
      if (error.message === 'existed') {
        return res.status(400).json({
          status: false,
          message: 'Username or Email is already existed',
        });
      }
      return res.status(500).json({
        status: false,
        message: error as string,
      });
    }
  };

  static signIn = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const user = await SessionService.signIn(req.body);
      return res.status(200).json({
        status: true,
        data: user,
      });
    } catch (error: any) {
      if (error.message === 'sign-in failed') {
        return res.status(400).json({
          status: false,
          message: 'Wrong username or password',
        });
      }
      return res.status(500).json({
        status: false,
        message: error as string,
      });
    }
  };
}
