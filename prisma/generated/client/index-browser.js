
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.CareerScalarFieldEnum = makeEnum({
  id: 'id',
  company: 'company',
  endDate: 'endDate',
  jobTitle: 'jobTitle',
  startDate: 'startDate',
  userId: 'userId'
});

exports.Prisma.ClassScalarFieldEnum = makeEnum({
  id: 'id',
  gradeId: 'gradeId',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  description: 'description'
});

exports.Prisma.EducationScalarFieldEnum = makeEnum({
  id: 'id',
  degree: 'degree',
  school: 'school',
  startDate: 'startDate',
  endDate: 'endDate',
  userId: 'userId'
});

exports.Prisma.GradeScalarFieldEnum = makeEnum({
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  code: 'code',
  name: 'name'
});

exports.Prisma.InformationScalarFieldEnum = makeEnum({
  id: 'id',
  bio: 'bio',
  avatarUrl: 'avatarUrl',
  emailPublicity: 'emailPublicity',
  phone: 'phone',
  phonePublicity: 'phonePublicity',
  facebookUrl: 'facebookUrl',
  facebookPublicity: 'facebookPublicity',
  dateOfBirth: 'dateOfBirth',
  dateOfBirthPublicity: 'dateOfBirthPublicity',
  userId: 'userId',
  className: 'className',
  gradeCode: 'gradeCode',
  gradeName: 'gradeName',
  userEmail: 'userEmail',
  coverImageUrl: 'coverImageUrl'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TestTableScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Test_model_2ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Test_model_3ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Test_model_4ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Test_model_5ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  username: 'username',
  password: 'password',
  image: 'image',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accessStatus: 'accessStatus',
  accessLevel: 'accessLevel',
  accessMode: 'accessMode',
  classId: 'classId'
});
exports.AccessLevel = makeEnum({
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  ALUMNI: 'ALUMNI',
  CLASS_MOD: 'CLASS_MOD',
  GRADE_MOD: 'GRADE_MOD'
});

exports.AccessMode = makeEnum({
  FULL_ACCESS: 'FULL_ACCESS',
  READ_ONLY: 'READ_ONLY'
});

exports.AccessStatus = makeEnum({
  PENDING: 'PENDING',
  APPROVED: 'APPROVED'
});

exports.ScopePublicity = makeEnum({
  PRIVATE: 'PRIVATE',
  CLASS: 'CLASS',
  GRADE: 'GRADE',
  SCHOOL: 'SCHOOL'
});

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  User: 'User',
  Grade: 'Grade',
  Class: 'Class',
  Information: 'Information',
  Career: 'Career',
  Education: 'Education',
  TestTable: 'TestTable',
  test_model_2: 'test_model_2',
  test_model_3: 'test_model_3',
  test_model_4: 'test_model_4',
  test_model_5: 'test_model_5'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
