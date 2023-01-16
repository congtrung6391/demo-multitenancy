import { NextApiRequest, NextApiResponse } from 'next';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/types';
import InformationService from '../service/information.service';

export default class InformationController {
  static updateInformationByUserId = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { id } = req.query;
      // TODO: handle authorization, wait for middleware on BE
      const informationUpdated =
        await InformationService.updateInformationByUserId(
          id as string,
          req.body,
        );
      return res.status(200).json({
        status: true,
        data: informationUpdated,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };

  static getInformationByUserId = async (
    req: NextApiRequest,
    res: NextApiResponse,
  ) => {
    try {
      const { id } = req.query;
      // TODO: handle authorization, wait for middleware on BE
      const information = await InformationService.getInformationByUserId(
        id as string,
      );
      return res.status(200).json({
        status: true,
        data: information,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };
}
