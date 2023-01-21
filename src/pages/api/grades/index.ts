import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import GradeController from 'src/modules/gradeAndClass/controllers/grade.controller';

import nc from 'next-connect';
import { PrismaClient } from '@prisma/client';
import { getTenantData } from '@share/utils/getTenantData';
/*
export default function gradeHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return GradeController.getPublicList(req, res);
    case 'POST':
      return GradeController.create(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
*/

const handler = nc({
  onError: (err, req, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  .use(async (req, res, next) => {
    const hostname = req.headers.host || '';

    const currentHost =
      process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
        ? hostname.replace('.vercel.app', '')
        : hostname.replace('.localhost:3005', '');

    if (currentHost == 'app') {
      next();
    }

    if (currentHost) {
      req.tenant = currentHost;
    }

    next();
  })
  .get(GradeController.getPublicList)
  .post(GradeController.create);

export default handler;
