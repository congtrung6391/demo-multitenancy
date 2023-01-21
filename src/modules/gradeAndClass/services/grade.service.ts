import getPrismaClient from '@lib/prisma/prisma';
import prisma from '@lib/prisma/prisma';
import type { PrismaClient } from '@prisma/client';

import {
  CreateGradeServiceProps,
  GetGradeListServiceProps,
  UpdateGradeInfoByIdServiceProps,
} from '../types';

export default class GradeService {
  static create = async (
    tenant: string,
    { name, code }: CreateGradeServiceProps,
  ) => {
    const prismaRequest = await getPrismaClient(tenant);
    await prismaRequest.$connect();
    const existingGrade = await prismaRequest.grade.findUnique({
      where: {
        code: code,
      },
    });

    if (existingGrade) {
      throw new Error('existed');
    }

    const newGrade = await prismaRequest.grade.create({
      data: {
        name: name,
        code: code,
      },
    });

    await prismaRequest.$disconnect();

    return newGrade;
  };

  static getPublicList = async (
    tenant: string,
    { params }: GetGradeListServiceProps,
  ) => {
    const prismaRequest = await getPrismaClient(tenant);
    await prismaRequest.$connect();

    const { name, code, page, limit } = params;

    const whereFilter = {
      AND: [
        { code: { contains: code } },
        { name: { contains: name } },
        { archived: false },
      ],
    };

    const [totalGradeItem, gradeItems] = await prismaRequest.$transaction([
      prismaRequest.grade.count({
        where: whereFilter,
      }),
      prismaRequest.grade.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: whereFilter,
        orderBy: {
          createdAt: 'desc',
        },
      }),
    ]);

    await prismaRequest.$disconnect();

    return {
      totalItems: totalGradeItem,
      items: gradeItems,
      itemPerPage: limit,
    };
  };

  static getById = async (id: string) => {
    const grade = await prisma.grade.findUnique({
      where: {
        id: id,
      },
    });

    return grade;
  };

  static updateInfoById = async (
    id: string,
    data: UpdateGradeInfoByIdServiceProps,
  ) => {
    const grade = await prisma.grade.update({
      where: {
        id: id,
      },
      data: data,
    });

    return grade;
  };

  static deleteById = async (id: string) => {
    const grade = await prisma.grade.update({
      where: {
        id: id,
      },
      data: {
        archived: true,
      },
    });

    return grade;
  };
}
