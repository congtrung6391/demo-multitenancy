
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\generated\\client",
    "generated\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"AccessLevel\",\"values\":[{\"name\":\"SCHOOL_ADMIN\",\"dbName\":null},{\"name\":\"ALUMNI\",\"dbName\":null},{\"name\":\"CLASS_MOD\",\"dbName\":null},{\"name\":\"GRADE_MOD\",\"dbName\":null}],\"dbName\":null},{\"name\":\"AccessStatus\",\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"APPROVED\",\"dbName\":null}],\"dbName\":null},{\"name\":\"AccessMode\",\"values\":[{\"name\":\"FULL_ACCESS\",\"dbName\":null},{\"name\":\"READ_ONLY\",\"dbName\":null}],\"dbName\":null},{\"name\":\"ScopePublicity\",\"values\":[{\"name\":\"PRIVATE\",\"dbName\":null},{\"name\":\"CLASS\",\"dbName\":null},{\"name\":\"GRADE\",\"dbName\":null},{\"name\":\"SCHOOL\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"Account\",\"dbName\":\"accounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"providerAccountId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"providerAccountId\"]}],\"isGenerated\":false},{\"name\":\"User\",\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"accessStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AccessStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AccessLevel\",\"default\":\"ALUMNI\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessMode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AccessMode\",\"default\":\"FULL_ACCESS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"careers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Career\",\"relationName\":\"CareerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Education\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Education\",\"relationName\":\"EducationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"information\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Information\",\"relationName\":\"InformationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"class\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Class\",\"relationName\":\"ClassToUser\",\"relationFromFields\":[\"classId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"email\"]}],\"isGenerated\":false},{\"name\":\"Grade\",\"dbName\":\"grades\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Class\",\"relationName\":\"ClassToGrade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Class\",\"dbName\":\"classes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gradeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grade\",\"relationName\":\"ClassToGrade\",\"relationFromFields\":[\"gradeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ClassToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Information\",\"dbName\":\"informations\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailPublicity\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ScopePublicity\",\"default\":\"PRIVATE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phonePublicity\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ScopePublicity\",\"default\":\"PRIVATE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facebookUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facebookPublicity\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ScopePublicity\",\"default\":\"PRIVATE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOfBirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOfBirthPublicity\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ScopePublicity\",\"default\":\"PRIVATE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"className\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gradeCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gradeName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coverImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"InformationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Career\",\"dbName\":\"careers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CareerToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Education\",\"dbName\":\"educations\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"degree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"school\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"EducationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TestTable\",\"dbName\":\"test_model\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"test_model_2\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"test_model_3\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"test_model_4\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"test_model_5\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Account\",\"plural\":\"accounts\",\"findUnique\":\"findUniqueAccount\",\"findUniqueOrThrow\":\"findUniqueAccountOrThrow\",\"findFirst\":\"findFirstAccount\",\"findFirstOrThrow\":\"findFirstAccountOrThrow\",\"findMany\":\"findManyAccount\",\"create\":\"createOneAccount\",\"createMany\":\"createManyAccount\",\"delete\":\"deleteOneAccount\",\"update\":\"updateOneAccount\",\"deleteMany\":\"deleteManyAccount\",\"updateMany\":\"updateManyAccount\",\"upsert\":\"upsertOneAccount\",\"aggregate\":\"aggregateAccount\",\"groupBy\":\"groupByAccount\"},{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findUniqueOrThrow\":\"findUniqueUserOrThrow\",\"findFirst\":\"findFirstUser\",\"findFirstOrThrow\":\"findFirstUserOrThrow\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"Grade\",\"plural\":\"grades\",\"findUnique\":\"findUniqueGrade\",\"findUniqueOrThrow\":\"findUniqueGradeOrThrow\",\"findFirst\":\"findFirstGrade\",\"findFirstOrThrow\":\"findFirstGradeOrThrow\",\"findMany\":\"findManyGrade\",\"create\":\"createOneGrade\",\"createMany\":\"createManyGrade\",\"delete\":\"deleteOneGrade\",\"update\":\"updateOneGrade\",\"deleteMany\":\"deleteManyGrade\",\"updateMany\":\"updateManyGrade\",\"upsert\":\"upsertOneGrade\",\"aggregate\":\"aggregateGrade\",\"groupBy\":\"groupByGrade\"},{\"model\":\"Class\",\"plural\":\"classes\",\"findUnique\":\"findUniqueClass\",\"findUniqueOrThrow\":\"findUniqueClassOrThrow\",\"findFirst\":\"findFirstClass\",\"findFirstOrThrow\":\"findFirstClassOrThrow\",\"findMany\":\"findManyClass\",\"create\":\"createOneClass\",\"createMany\":\"createManyClass\",\"delete\":\"deleteOneClass\",\"update\":\"updateOneClass\",\"deleteMany\":\"deleteManyClass\",\"updateMany\":\"updateManyClass\",\"upsert\":\"upsertOneClass\",\"aggregate\":\"aggregateClass\",\"groupBy\":\"groupByClass\"},{\"model\":\"Information\",\"plural\":\"information\",\"findUnique\":\"findUniqueInformation\",\"findUniqueOrThrow\":\"findUniqueInformationOrThrow\",\"findFirst\":\"findFirstInformation\",\"findFirstOrThrow\":\"findFirstInformationOrThrow\",\"findMany\":\"findManyInformation\",\"create\":\"createOneInformation\",\"createMany\":\"createManyInformation\",\"delete\":\"deleteOneInformation\",\"update\":\"updateOneInformation\",\"deleteMany\":\"deleteManyInformation\",\"updateMany\":\"updateManyInformation\",\"upsert\":\"upsertOneInformation\",\"aggregate\":\"aggregateInformation\",\"groupBy\":\"groupByInformation\"},{\"model\":\"Career\",\"plural\":\"careers\",\"findUnique\":\"findUniqueCareer\",\"findUniqueOrThrow\":\"findUniqueCareerOrThrow\",\"findFirst\":\"findFirstCareer\",\"findFirstOrThrow\":\"findFirstCareerOrThrow\",\"findMany\":\"findManyCareer\",\"create\":\"createOneCareer\",\"createMany\":\"createManyCareer\",\"delete\":\"deleteOneCareer\",\"update\":\"updateOneCareer\",\"deleteMany\":\"deleteManyCareer\",\"updateMany\":\"updateManyCareer\",\"upsert\":\"upsertOneCareer\",\"aggregate\":\"aggregateCareer\",\"groupBy\":\"groupByCareer\"},{\"model\":\"Education\",\"plural\":\"educations\",\"findUnique\":\"findUniqueEducation\",\"findUniqueOrThrow\":\"findUniqueEducationOrThrow\",\"findFirst\":\"findFirstEducation\",\"findFirstOrThrow\":\"findFirstEducationOrThrow\",\"findMany\":\"findManyEducation\",\"create\":\"createOneEducation\",\"createMany\":\"createManyEducation\",\"delete\":\"deleteOneEducation\",\"update\":\"updateOneEducation\",\"deleteMany\":\"deleteManyEducation\",\"updateMany\":\"updateManyEducation\",\"upsert\":\"upsertOneEducation\",\"aggregate\":\"aggregateEducation\",\"groupBy\":\"groupByEducation\"},{\"model\":\"TestTable\",\"plural\":\"testTables\",\"findUnique\":\"findUniqueTestTable\",\"findUniqueOrThrow\":\"findUniqueTestTableOrThrow\",\"findFirst\":\"findFirstTestTable\",\"findFirstOrThrow\":\"findFirstTestTableOrThrow\",\"findMany\":\"findManyTestTable\",\"create\":\"createOneTestTable\",\"createMany\":\"createManyTestTable\",\"delete\":\"deleteOneTestTable\",\"update\":\"updateOneTestTable\",\"deleteMany\":\"deleteManyTestTable\",\"updateMany\":\"updateManyTestTable\",\"upsert\":\"upsertOneTestTable\",\"aggregate\":\"aggregateTestTable\",\"groupBy\":\"groupByTestTable\"},{\"model\":\"test_model_2\",\"plural\":\"test_model_2s\",\"findUnique\":\"findUniquetest_model_2\",\"findUniqueOrThrow\":\"findUniquetest_model_2OrThrow\",\"findFirst\":\"findFirsttest_model_2\",\"findFirstOrThrow\":\"findFirsttest_model_2OrThrow\",\"findMany\":\"findManytest_model_2\",\"create\":\"createOnetest_model_2\",\"createMany\":\"createManytest_model_2\",\"delete\":\"deleteOnetest_model_2\",\"update\":\"updateOnetest_model_2\",\"deleteMany\":\"deleteManytest_model_2\",\"updateMany\":\"updateManytest_model_2\",\"upsert\":\"upsertOnetest_model_2\",\"aggregate\":\"aggregatetest_model_2\",\"groupBy\":\"groupBytest_model_2\"},{\"model\":\"test_model_3\",\"plural\":\"test_model_3s\",\"findUnique\":\"findUniquetest_model_3\",\"findUniqueOrThrow\":\"findUniquetest_model_3OrThrow\",\"findFirst\":\"findFirsttest_model_3\",\"findFirstOrThrow\":\"findFirsttest_model_3OrThrow\",\"findMany\":\"findManytest_model_3\",\"create\":\"createOnetest_model_3\",\"createMany\":\"createManytest_model_3\",\"delete\":\"deleteOnetest_model_3\",\"update\":\"updateOnetest_model_3\",\"deleteMany\":\"deleteManytest_model_3\",\"updateMany\":\"updateManytest_model_3\",\"upsert\":\"upsertOnetest_model_3\",\"aggregate\":\"aggregatetest_model_3\",\"groupBy\":\"groupBytest_model_3\"},{\"model\":\"test_model_4\",\"plural\":\"test_model_4s\",\"findUnique\":\"findUniquetest_model_4\",\"findUniqueOrThrow\":\"findUniquetest_model_4OrThrow\",\"findFirst\":\"findFirsttest_model_4\",\"findFirstOrThrow\":\"findFirsttest_model_4OrThrow\",\"findMany\":\"findManytest_model_4\",\"create\":\"createOnetest_model_4\",\"createMany\":\"createManytest_model_4\",\"delete\":\"deleteOnetest_model_4\",\"update\":\"updateOnetest_model_4\",\"deleteMany\":\"deleteManytest_model_4\",\"updateMany\":\"updateManytest_model_4\",\"upsert\":\"upsertOnetest_model_4\",\"aggregate\":\"aggregatetest_model_4\",\"groupBy\":\"groupBytest_model_4\"},{\"model\":\"test_model_5\",\"plural\":\"test_model_5s\",\"findUnique\":\"findUniquetest_model_5\",\"findUniqueOrThrow\":\"findUniquetest_model_5OrThrow\",\"findFirst\":\"findFirsttest_model_5\",\"findFirstOrThrow\":\"findFirsttest_model_5OrThrow\",\"findMany\":\"findManytest_model_5\",\"create\":\"createOnetest_model_5\",\"createMany\":\"createManytest_model_5\",\"delete\":\"deleteOnetest_model_5\",\"update\":\"updateOnetest_model_5\",\"deleteMany\":\"deleteManytest_model_5\",\"updateMany\":\"updateManytest_model_5\",\"upsert\":\"upsertOnetest_model_5\",\"aggregate\":\"aggregatetest_model_5\",\"groupBy\":\"groupBytest_model_5\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Projects\\capstone\\demo-multitenancy\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.7.1",
  "engineVersion": "272861e07ab64f234d3ffc4094e32bd61775599c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\generated\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\generated\\client\\schema.prisma")
