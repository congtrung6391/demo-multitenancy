import { NextApiRequest, NextApiResponse } from 'next';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/types';
import CareerService from '../service/career.serivce';

export default class CareerController {
  static createCareer = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { id } = req.query;
      const newCareer = await CareerService.create(id as string, req.body);

      return res.status(201).json({
        status: true,
        data: newCareer,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error.message as string,
      });
    }
  };

  static getListByUserId = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { id, jobTitle, company, page, limit } = req.query;
      const careerList = await CareerService.getListByUserId(id as string, {
        jobTitle: jobTitle ? (jobTitle as string) : '',
        company: company ? (company as string) : '',
        page: page ? parseInt(page as string, 10) : 1,
        limit: limit ? parseInt(limit as string, 10) : 20,
      });

      return res.status(200).json({
        status: true,
        data: careerList,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error.message as string,
      });
    }
  };

  static getById = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { careerId } = req.query;
      const career = await CareerService.getById(careerId as string);
      return res.status(200).json({
        status: true,
        data: career,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error as string,
      });
    }
  };

  static updateCareerById = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { careerId } = req.query;
      const careerUpdated = await CareerService.updateCareerById(
        careerId as string,
        req.body,
      );
      return res.status(200).json({
        status: true,
        data: careerUpdated,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error as string,
      });
    }
  };

  static deleteById = async (
    req: NextApiRequest,
    res: NextApiResponse<ApiSuccessResponse | ApiErrorResponse>,
  ) => {
    try {
      const { careerId } = req.query;
      const careerDeleted = await CareerService.deleteById(careerId as string);

      return res.status(200).json({
        status: true,
        data: careerDeleted,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        message: error as string,
      });
    }
  };
}
