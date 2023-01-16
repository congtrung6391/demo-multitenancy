import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import SessionController from 'src/modules/sessions/controllers/session.controller';

/**
 * @swagger
 * /api/signIn:
 *   post:
 *     tags:
 *     -  Authentication
 *     description: Sign In
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *         type: long
 *         required: true
 *       - in: query
 *         name: password
 *         schema:
 *         type: long
 *         required: true
 *     responses:
 *       200:
 *         description: successfully
 */
export default function signInHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return SessionController.signIn(req, res);
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
