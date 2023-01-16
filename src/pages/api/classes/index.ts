import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import ClassController from '@share/controllers/class.controller';

export default function classHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return ClassController.getList(req, res);
    case 'POST':
      return ClassController.create(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
