import { PrismaClient } from '@prisma/client';
import { getTenantData } from '@share/utils/getTenantData';

declare global {
  // eslint-disable-next-line no-var
  var prismaClientMapper: { [key: string]: PrismaClient };
}
global.prismaClientMapper = {};

const getPrismaClient = async (
  tenantSubdomain: string,
): Promise<PrismaClient> => {
  if (global.prismaClientMapper[tenantSubdomain]) {
    return global.prismaClientMapper[tenantSubdomain];
  }

  const tenantData = await getTenantData(tenantSubdomain);
  console.log(tenantData);

  const newPrismaClient = await new PrismaClient({
    datasources: {
      db: {
        url: `${process.env.BASE_DATABASE_URL}?schema=${tenantData.data.tenantId}`,
      },
    },
  });
  await newPrismaClient.$disconnect();

  global.prismaClientMapper[tenantSubdomain] = newPrismaClient;

  return newPrismaClient;
};

// const prisma = global.prisma || new PrismaClient();
// // const prisma = null;

// if (process.env.NODE_ENV === 'development') {
//   global.prisma = prisma;
// }

export default getPrismaClient;
