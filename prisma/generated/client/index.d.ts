
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  username: string | null
  password: string | null
  image: string | null
  archived: boolean
  createdAt: Date
  updatedAt: Date
  accessStatus: AccessStatus
  accessLevel: AccessLevel
  accessMode: AccessMode
  classId: string | null
}

/**
 * Model Grade
 * 
 */
export type Grade = {
  id: string
  archived: boolean
  createdAt: Date
  updatedAt: Date
  code: string
  name: string
}

/**
 * Model Class
 * 
 */
export type Class = {
  id: string
  gradeId: string
  archived: boolean
  createdAt: Date
  updatedAt: Date
  name: string
  description: string | null
}

/**
 * Model Information
 * 
 */
export type Information = {
  id: string
  bio: string | null
  avatarUrl: string | null
  emailPublicity: ScopePublicity
  phone: string | null
  phonePublicity: ScopePublicity
  facebookUrl: string | null
  facebookPublicity: ScopePublicity
  dateOfBirth: Date | null
  dateOfBirthPublicity: ScopePublicity
  userId: string
  className: string | null
  gradeCode: string | null
  gradeName: string | null
  userEmail: string | null
  coverImageUrl: string | null
}

/**
 * Model Career
 * 
 */
export type Career = {
  id: string
  company: string
  endDate: Date
  jobTitle: string
  startDate: Date
  userId: string
}

/**
 * Model Education
 * 
 */
export type Education = {
  id: string
  degree: string | null
  school: string
  startDate: Date | null
  endDate: Date | null
  userId: string
}

/**
 * Model TestTable
 * 
 */
export type TestTable = {
  id: string
  name: string
}

/**
 * Model test_model_2
 * 
 */
export type test_model_2 = {
  id: string
  name: string
}

/**
 * Model test_model_3
 * 
 */
export type test_model_3 = {
  id: string
  name: string
}

/**
 * Model test_model_4
 * 
 */
export type test_model_4 = {
  id: string
  name: string
}

/**
 * Model test_model_5
 * 
 */
export type test_model_5 = {
  id: string
  name: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AccessLevel: {
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  ALUMNI: 'ALUMNI',
  CLASS_MOD: 'CLASS_MOD',
  GRADE_MOD: 'GRADE_MOD'
};

export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel]


export const AccessMode: {
  FULL_ACCESS: 'FULL_ACCESS',
  READ_ONLY: 'READ_ONLY'
};

export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode]


export const AccessStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED'
};

export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus]


export const ScopePublicity: {
  PRIVATE: 'PRIVATE',
  CLASS: 'CLASS',
  GRADE: 'GRADE',
  SCHOOL: 'SCHOOL'
};

export type ScopePublicity = (typeof ScopePublicity)[keyof typeof ScopePublicity]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<GlobalReject>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<GlobalReject>;

  /**
   * `prisma.information`: Exposes CRUD operations for the **Information** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Information
    * const information = await prisma.information.findMany()
    * ```
    */
  get information(): Prisma.InformationDelegate<GlobalReject>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<GlobalReject>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<GlobalReject>;

  /**
   * `prisma.testTable`: Exposes CRUD operations for the **TestTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestTables
    * const testTables = await prisma.testTable.findMany()
    * ```
    */
  get testTable(): Prisma.TestTableDelegate<GlobalReject>;

  /**
   * `prisma.test_model_2`: Exposes CRUD operations for the **test_model_2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_model_2s
    * const test_model_2s = await prisma.test_model_2.findMany()
    * ```
    */
  get test_model_2(): Prisma.test_model_2Delegate<GlobalReject>;

  /**
   * `prisma.test_model_3`: Exposes CRUD operations for the **test_model_3** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_model_3s
    * const test_model_3s = await prisma.test_model_3.findMany()
    * ```
    */
  get test_model_3(): Prisma.test_model_3Delegate<GlobalReject>;

  /**
   * `prisma.test_model_4`: Exposes CRUD operations for the **test_model_4** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_model_4s
    * const test_model_4s = await prisma.test_model_4.findMany()
    * ```
    */
  get test_model_4(): Prisma.test_model_4Delegate<GlobalReject>;

  /**
   * `prisma.test_model_5`: Exposes CRUD operations for the **test_model_5** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_model_5s
    * const test_model_5s = await prisma.test_model_5.findMany()
    * ```
    */
  get test_model_5(): Prisma.test_model_5Delegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    careers: number
    Education: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    careers?: boolean
    Education?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type GradeCountOutputType
   */


  export type GradeCountOutputType = {
    classes: number
  }

  export type GradeCountOutputTypeSelect = {
    classes?: boolean
  }

  export type GradeCountOutputTypeGetPayload<S extends boolean | null | undefined | GradeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GradeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GradeCountOutputTypeArgs)
    ? GradeCountOutputType 
    : S extends { select: any } & (GradeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GradeCountOutputType ? GradeCountOutputType[P] : never
  } 
      : GradeCountOutputType




  // Custom InputTypes

  /**
   * GradeCountOutputType without action
   */
  export type GradeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GradeCountOutputType
     * 
    **/
    select?: GradeCountOutputTypeSelect | null
  }



  /**
   * Count Type ClassCountOutputType
   */


  export type ClassCountOutputType = {
    users: number
  }

  export type ClassCountOutputTypeSelect = {
    users?: boolean
  }

  export type ClassCountOutputTypeGetPayload<S extends boolean | null | undefined | ClassCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClassCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClassCountOutputTypeArgs)
    ? ClassCountOutputType 
    : S extends { select: any } & (ClassCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClassCountOutputType ? ClassCountOutputType[P] : never
  } 
      : ClassCountOutputType




  // Custom InputTypes

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     * 
    **/
    select?: ClassCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }


  export type AccountInclude = {
    user?: boolean | UserArgs
  } 

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    password: string | null
    image: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    accessStatus: AccessStatus | null
    accessLevel: AccessLevel | null
    accessMode: AccessMode | null
    classId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    password: string | null
    image: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    accessStatus: AccessStatus | null
    accessLevel: AccessLevel | null
    accessMode: AccessMode | null
    classId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    username: number
    password: number
    image: number
    archived: number
    createdAt: number
    updatedAt: number
    accessStatus: number
    accessLevel: number
    accessMode: number
    classId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    password?: true
    image?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    accessStatus?: true
    accessLevel?: true
    accessMode?: true
    classId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    password?: true
    image?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    accessStatus?: true
    accessLevel?: true
    accessMode?: true
    classId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    password?: true
    image?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    accessStatus?: true
    accessLevel?: true
    accessMode?: true
    classId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    password: string | null
    image: string | null
    archived: boolean
    createdAt: Date
    updatedAt: Date
    accessStatus: AccessStatus
    accessLevel: AccessLevel
    accessMode: AccessMode
    classId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    username?: boolean
    password?: boolean
    image?: boolean
    archived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessStatus?: boolean
    accessLevel?: boolean
    accessMode?: boolean
    classId?: boolean
    accounts?: boolean | AccountFindManyArgs
    careers?: boolean | CareerFindManyArgs
    Education?: boolean | EducationFindManyArgs
    information?: boolean | InformationArgs
    class?: boolean | ClassArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    careers?: boolean | CareerFindManyArgs
    Education?: boolean | EducationFindManyArgs
    information?: boolean | InformationArgs
    class?: boolean | ClassArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'careers' ? Array < CareerGetPayload<S['include'][P]>>  :
        P extends 'Education' ? Array < EducationGetPayload<S['include'][P]>>  :
        P extends 'information' ? InformationGetPayload<S['include'][P]> | null :
        P extends 'class' ? ClassGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'careers' ? Array < CareerGetPayload<S['select'][P]>>  :
        P extends 'Education' ? Array < EducationGetPayload<S['select'][P]>>  :
        P extends 'information' ? InformationGetPayload<S['select'][P]> | null :
        P extends 'class' ? ClassGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs= {}>(args?: Subset<T, AccountFindManyArgs>): PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    careers<T extends CareerFindManyArgs= {}>(args?: Subset<T, CareerFindManyArgs>): PrismaPromise<Array<CareerGetPayload<T>>| Null>;

    Education<T extends EducationFindManyArgs= {}>(args?: Subset<T, EducationFindManyArgs>): PrismaPromise<Array<EducationGetPayload<T>>| Null>;

    information<T extends InformationArgs= {}>(args?: Subset<T, InformationArgs>): Prisma__InformationClient<InformationGetPayload<T> | Null>;

    class<T extends ClassArgs= {}>(args?: Subset<T, ClassArgs>): Prisma__ClassClient<ClassGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Grade
   */


  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeMinAggregateOutputType = {
    id: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    code: string | null
    name: string | null
  }

  export type GradeMaxAggregateOutputType = {
    id: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    code: string | null
    name: string | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    archived: number
    createdAt: number
    updatedAt: number
    code: number
    name: number
    _all: number
  }


  export type GradeMinAggregateInputType = {
    id?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    name?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    name?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    code?: true
    name?: true
    _all?: true
  }

  export type GradeAggregateArgs = {
    /**
     * Filter which Grade to aggregate.
     * 
    **/
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     * 
    **/
    orderBy?: Enumerable<GradeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs = {
    where?: GradeWhereInput
    orderBy?: Enumerable<GradeOrderByWithAggregationInput>
    by: Array<GradeScalarFieldEnum>
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }


  export type GradeGroupByOutputType = {
    id: string
    archived: boolean
    createdAt: Date
    updatedAt: Date
    code: string
    name: string
    _count: GradeCountAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect = {
    id?: boolean
    archived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean
    name?: boolean
    classes?: boolean | ClassFindManyArgs
    _count?: boolean | GradeCountOutputTypeArgs
  }


  export type GradeInclude = {
    classes?: boolean | ClassFindManyArgs
    _count?: boolean | GradeCountOutputTypeArgs
  } 

  export type GradeGetPayload<S extends boolean | null | undefined | GradeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Grade :
    S extends undefined ? never :
    S extends { include: any } & (GradeArgs | GradeFindManyArgs)
    ? Grade  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'classes' ? Array < ClassGetPayload<S['include'][P]>>  :
        P extends '_count' ? GradeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GradeArgs | GradeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'classes' ? Array < ClassGetPayload<S['select'][P]>>  :
        P extends '_count' ? GradeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Grade ? Grade[P] : never
  } 
      : Grade


  type GradeCountArgs = Merge<
    Omit<GradeFindManyArgs, 'select' | 'include'> & {
      select?: GradeCountAggregateInputType | true
    }
  >

  export interface GradeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GradeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GradeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Grade'> extends True ? Prisma__GradeClient<GradeGetPayload<T>> : Prisma__GradeClient<GradeGetPayload<T> | null, null>

    /**
     * Find one Grade that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GradeFindUniqueOrThrowArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GradeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GradeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Grade'> extends True ? Prisma__GradeClient<GradeGetPayload<T>> : Prisma__GradeClient<GradeGetPayload<T> | null, null>

    /**
     * Find the first Grade that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GradeFindFirstOrThrowArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GradeFindManyArgs>(
      args?: SelectSubset<T, GradeFindManyArgs>
    ): PrismaPromise<Array<GradeGetPayload<T>>>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
    **/
    create<T extends GradeCreateArgs>(
      args: SelectSubset<T, GradeCreateArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Create many Grades.
     *     @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     *     @example
     *     // Create many Grades
     *     const grade = await prisma.grade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GradeCreateManyArgs>(
      args?: SelectSubset<T, GradeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
    **/
    delete<T extends GradeDeleteArgs>(
      args: SelectSubset<T, GradeDeleteArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GradeUpdateArgs>(
      args: SelectSubset<T, GradeUpdateArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GradeDeleteManyArgs>(
      args?: SelectSubset<T, GradeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GradeUpdateManyArgs>(
      args: SelectSubset<T, GradeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
    **/
    upsert<T extends GradeUpsertArgs>(
      args: SelectSubset<T, GradeUpsertArgs>
    ): Prisma__GradeClient<GradeGetPayload<T>>

    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GradeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    classes<T extends ClassFindManyArgs= {}>(args?: Subset<T, ClassFindManyArgs>): PrismaPromise<Array<ClassGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Grade base type for findUnique actions
   */
  export type GradeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter, which Grade to fetch.
     * 
    **/
    where: GradeWhereUniqueInput
  }

  /**
   * Grade: findUnique
   */
  export interface GradeFindUniqueArgs extends GradeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter, which Grade to fetch.
     * 
    **/
    where: GradeWhereUniqueInput
  }


  /**
   * Grade base type for findFirst actions
   */
  export type GradeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter, which Grade to fetch.
     * 
    **/
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     * 
    **/
    orderBy?: Enumerable<GradeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     * 
    **/
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     * 
    **/
    distinct?: Enumerable<GradeScalarFieldEnum>
  }

  /**
   * Grade: findFirst
   */
  export interface GradeFindFirstArgs extends GradeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter, which Grade to fetch.
     * 
    **/
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     * 
    **/
    orderBy?: Enumerable<GradeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     * 
    **/
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     * 
    **/
    distinct?: Enumerable<GradeScalarFieldEnum>
  }


  /**
   * Grade findMany
   */
  export type GradeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter, which Grades to fetch.
     * 
    **/
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     * 
    **/
    orderBy?: Enumerable<GradeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     * 
    **/
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GradeScalarFieldEnum>
  }


  /**
   * Grade create
   */
  export type GradeCreateArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * The data needed to create a Grade.
     * 
    **/
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }


  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs = {
    /**
     * The data used to create many Grades.
     * 
    **/
    data: Enumerable<GradeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Grade update
   */
  export type GradeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * The data needed to update a Grade.
     * 
    **/
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     * 
    **/
    where: GradeWhereUniqueInput
  }


  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs = {
    /**
     * The data used to update Grades.
     * 
    **/
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     * 
    **/
    where?: GradeWhereInput
  }


  /**
   * Grade upsert
   */
  export type GradeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * The filter to search for the Grade to update in case it exists.
     * 
    **/
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     * 
    **/
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }


  /**
   * Grade delete
   */
  export type GradeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
    /**
     * Filter which Grade to delete.
     * 
    **/
    where: GradeWhereUniqueInput
  }


  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs = {
    /**
     * Filter which Grades to delete
     * 
    **/
    where?: GradeWhereInput
  }


  /**
   * Grade without action
   */
  export type GradeArgs = {
    /**
     * Select specific fields to fetch from the Grade
     * 
    **/
    select?: GradeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GradeInclude | null
  }



  /**
   * Model Class
   */


  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    gradeId: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    gradeId: string | null
    archived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    gradeId: number
    archived: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    gradeId?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    gradeId?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    gradeId?: true
    archived?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ClassAggregateArgs = {
    /**
     * Filter which Class to aggregate.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs = {
    where?: ClassWhereInput
    orderBy?: Enumerable<ClassOrderByWithAggregationInput>
    by: Array<ClassScalarFieldEnum>
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }


  export type ClassGroupByOutputType = {
    id: string
    gradeId: string
    archived: boolean
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect = {
    id?: boolean
    gradeId?: boolean
    archived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    grade?: boolean | GradeArgs
    users?: boolean | UserFindManyArgs
    _count?: boolean | ClassCountOutputTypeArgs
  }


  export type ClassInclude = {
    grade?: boolean | GradeArgs
    users?: boolean | UserFindManyArgs
    _count?: boolean | ClassCountOutputTypeArgs
  } 

  export type ClassGetPayload<S extends boolean | null | undefined | ClassArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Class :
    S extends undefined ? never :
    S extends { include: any } & (ClassArgs | ClassFindManyArgs)
    ? Class  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'grade' ? GradeGetPayload<S['include'][P]> :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClassCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClassArgs | ClassFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'grade' ? GradeGetPayload<S['select'][P]> :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClassCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Class ? Class[P] : never
  } 
      : Class


  type ClassCountArgs = Merge<
    Omit<ClassFindManyArgs, 'select' | 'include'> & {
      select?: ClassCountAggregateInputType | true
    }
  >

  export interface ClassDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClassFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Class'> extends True ? Prisma__ClassClient<ClassGetPayload<T>> : Prisma__ClassClient<ClassGetPayload<T> | null, null>

    /**
     * Find one Class that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClassFindUniqueOrThrowArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClassFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Class'> extends True ? Prisma__ClassClient<ClassGetPayload<T>> : Prisma__ClassClient<ClassGetPayload<T> | null, null>

    /**
     * Find the first Class that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClassFindFirstOrThrowArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassFindManyArgs>(
      args?: SelectSubset<T, ClassFindManyArgs>
    ): PrismaPromise<Array<ClassGetPayload<T>>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
    **/
    create<T extends ClassCreateArgs>(
      args: SelectSubset<T, ClassCreateArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Create many Classes.
     *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const class = await prisma.class.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassCreateManyArgs>(
      args?: SelectSubset<T, ClassCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
    **/
    delete<T extends ClassDeleteArgs>(
      args: SelectSubset<T, ClassDeleteArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassUpdateArgs>(
      args: SelectSubset<T, ClassUpdateArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassDeleteManyArgs>(
      args?: SelectSubset<T, ClassDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassUpdateManyArgs>(
      args: SelectSubset<T, ClassUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
    **/
    upsert<T extends ClassUpsertArgs>(
      args: SelectSubset<T, ClassUpsertArgs>
    ): Prisma__ClassClient<ClassGetPayload<T>>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClassClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    grade<T extends GradeArgs= {}>(args?: Subset<T, GradeArgs>): Prisma__GradeClient<GradeGetPayload<T> | Null>;

    users<T extends UserFindManyArgs= {}>(args?: Subset<T, UserFindManyArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Class base type for findUnique actions
   */
  export type ClassFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where: ClassWhereUniqueInput
  }

  /**
   * Class: findUnique
   */
  export interface ClassFindUniqueArgs extends ClassFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class base type for findFirst actions
   */
  export type ClassFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     * 
    **/
    distinct?: Enumerable<ClassScalarFieldEnum>
  }

  /**
   * Class: findFirst
   */
  export interface ClassFindFirstArgs extends ClassFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     * 
    **/
    distinct?: Enumerable<ClassScalarFieldEnum>
  }


  /**
   * Class findMany
   */
  export type ClassFindManyArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Classes to fetch.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClassScalarFieldEnum>
  }


  /**
   * Class create
   */
  export type ClassCreateArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The data needed to create a Class.
     * 
    **/
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }


  /**
   * Class createMany
   */
  export type ClassCreateManyArgs = {
    /**
     * The data used to create many Classes.
     * 
    **/
    data: Enumerable<ClassCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Class update
   */
  export type ClassUpdateArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The data needed to update a Class.
     * 
    **/
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs = {
    /**
     * The data used to update Classes.
     * 
    **/
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     * 
    **/
    where?: ClassWhereInput
  }


  /**
   * Class upsert
   */
  export type ClassUpsertArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The filter to search for the Class to update in case it exists.
     * 
    **/
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     * 
    **/
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }


  /**
   * Class delete
   */
  export type ClassDeleteArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter which Class to delete.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs = {
    /**
     * Filter which Classes to delete
     * 
    **/
    where?: ClassWhereInput
  }


  /**
   * Class without action
   */
  export type ClassArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
  }



  /**
   * Model Information
   */


  export type AggregateInformation = {
    _count: InformationCountAggregateOutputType | null
    _min: InformationMinAggregateOutputType | null
    _max: InformationMaxAggregateOutputType | null
  }

  export type InformationMinAggregateOutputType = {
    id: string | null
    bio: string | null
    avatarUrl: string | null
    emailPublicity: ScopePublicity | null
    phone: string | null
    phonePublicity: ScopePublicity | null
    facebookUrl: string | null
    facebookPublicity: ScopePublicity | null
    dateOfBirth: Date | null
    dateOfBirthPublicity: ScopePublicity | null
    userId: string | null
    className: string | null
    gradeCode: string | null
    gradeName: string | null
    userEmail: string | null
    coverImageUrl: string | null
  }

  export type InformationMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    avatarUrl: string | null
    emailPublicity: ScopePublicity | null
    phone: string | null
    phonePublicity: ScopePublicity | null
    facebookUrl: string | null
    facebookPublicity: ScopePublicity | null
    dateOfBirth: Date | null
    dateOfBirthPublicity: ScopePublicity | null
    userId: string | null
    className: string | null
    gradeCode: string | null
    gradeName: string | null
    userEmail: string | null
    coverImageUrl: string | null
  }

  export type InformationCountAggregateOutputType = {
    id: number
    bio: number
    avatarUrl: number
    emailPublicity: number
    phone: number
    phonePublicity: number
    facebookUrl: number
    facebookPublicity: number
    dateOfBirth: number
    dateOfBirthPublicity: number
    userId: number
    className: number
    gradeCode: number
    gradeName: number
    userEmail: number
    coverImageUrl: number
    _all: number
  }


  export type InformationMinAggregateInputType = {
    id?: true
    bio?: true
    avatarUrl?: true
    emailPublicity?: true
    phone?: true
    phonePublicity?: true
    facebookUrl?: true
    facebookPublicity?: true
    dateOfBirth?: true
    dateOfBirthPublicity?: true
    userId?: true
    className?: true
    gradeCode?: true
    gradeName?: true
    userEmail?: true
    coverImageUrl?: true
  }

  export type InformationMaxAggregateInputType = {
    id?: true
    bio?: true
    avatarUrl?: true
    emailPublicity?: true
    phone?: true
    phonePublicity?: true
    facebookUrl?: true
    facebookPublicity?: true
    dateOfBirth?: true
    dateOfBirthPublicity?: true
    userId?: true
    className?: true
    gradeCode?: true
    gradeName?: true
    userEmail?: true
    coverImageUrl?: true
  }

  export type InformationCountAggregateInputType = {
    id?: true
    bio?: true
    avatarUrl?: true
    emailPublicity?: true
    phone?: true
    phonePublicity?: true
    facebookUrl?: true
    facebookPublicity?: true
    dateOfBirth?: true
    dateOfBirthPublicity?: true
    userId?: true
    className?: true
    gradeCode?: true
    gradeName?: true
    userEmail?: true
    coverImageUrl?: true
    _all?: true
  }

  export type InformationAggregateArgs = {
    /**
     * Filter which Information to aggregate.
     * 
    **/
    where?: InformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Information to fetch.
     * 
    **/
    orderBy?: Enumerable<InformationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Information from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Information.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Information
    **/
    _count?: true | InformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InformationMaxAggregateInputType
  }

  export type GetInformationAggregateType<T extends InformationAggregateArgs> = {
        [P in keyof T & keyof AggregateInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInformation[P]>
      : GetScalarType<T[P], AggregateInformation[P]>
  }




  export type InformationGroupByArgs = {
    where?: InformationWhereInput
    orderBy?: Enumerable<InformationOrderByWithAggregationInput>
    by: Array<InformationScalarFieldEnum>
    having?: InformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InformationCountAggregateInputType | true
    _min?: InformationMinAggregateInputType
    _max?: InformationMaxAggregateInputType
  }


  export type InformationGroupByOutputType = {
    id: string
    bio: string | null
    avatarUrl: string | null
    emailPublicity: ScopePublicity
    phone: string | null
    phonePublicity: ScopePublicity
    facebookUrl: string | null
    facebookPublicity: ScopePublicity
    dateOfBirth: Date | null
    dateOfBirthPublicity: ScopePublicity
    userId: string
    className: string | null
    gradeCode: string | null
    gradeName: string | null
    userEmail: string | null
    coverImageUrl: string | null
    _count: InformationCountAggregateOutputType | null
    _min: InformationMinAggregateOutputType | null
    _max: InformationMaxAggregateOutputType | null
  }

  type GetInformationGroupByPayload<T extends InformationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InformationGroupByOutputType[P]>
            : GetScalarType<T[P], InformationGroupByOutputType[P]>
        }
      >
    >


  export type InformationSelect = {
    id?: boolean
    bio?: boolean
    avatarUrl?: boolean
    emailPublicity?: boolean
    phone?: boolean
    phonePublicity?: boolean
    facebookUrl?: boolean
    facebookPublicity?: boolean
    dateOfBirth?: boolean
    dateOfBirthPublicity?: boolean
    userId?: boolean
    className?: boolean
    gradeCode?: boolean
    gradeName?: boolean
    userEmail?: boolean
    coverImageUrl?: boolean
    user?: boolean | UserArgs
  }


  export type InformationInclude = {
    user?: boolean | UserArgs
  } 

  export type InformationGetPayload<S extends boolean | null | undefined | InformationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Information :
    S extends undefined ? never :
    S extends { include: any } & (InformationArgs | InformationFindManyArgs)
    ? Information  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (InformationArgs | InformationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Information ? Information[P] : never
  } 
      : Information


  type InformationCountArgs = Merge<
    Omit<InformationFindManyArgs, 'select' | 'include'> & {
      select?: InformationCountAggregateInputType | true
    }
  >

  export interface InformationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Information that matches the filter.
     * @param {InformationFindUniqueArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InformationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InformationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Information'> extends True ? Prisma__InformationClient<InformationGetPayload<T>> : Prisma__InformationClient<InformationGetPayload<T> | null, null>

    /**
     * Find one Information that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InformationFindUniqueOrThrowArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InformationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InformationFindUniqueOrThrowArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Find the first Information that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationFindFirstArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InformationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InformationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Information'> extends True ? Prisma__InformationClient<InformationGetPayload<T>> : Prisma__InformationClient<InformationGetPayload<T> | null, null>

    /**
     * Find the first Information that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationFindFirstOrThrowArgs} args - Arguments to find a Information
     * @example
     * // Get one Information
     * const information = await prisma.information.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InformationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InformationFindFirstOrThrowArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Find zero or more Information that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Information
     * const information = await prisma.information.findMany()
     * 
     * // Get first 10 Information
     * const information = await prisma.information.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const informationWithIdOnly = await prisma.information.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InformationFindManyArgs>(
      args?: SelectSubset<T, InformationFindManyArgs>
    ): PrismaPromise<Array<InformationGetPayload<T>>>

    /**
     * Create a Information.
     * @param {InformationCreateArgs} args - Arguments to create a Information.
     * @example
     * // Create one Information
     * const Information = await prisma.information.create({
     *   data: {
     *     // ... data to create a Information
     *   }
     * })
     * 
    **/
    create<T extends InformationCreateArgs>(
      args: SelectSubset<T, InformationCreateArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Create many Information.
     *     @param {InformationCreateManyArgs} args - Arguments to create many Information.
     *     @example
     *     // Create many Information
     *     const information = await prisma.information.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InformationCreateManyArgs>(
      args?: SelectSubset<T, InformationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Information.
     * @param {InformationDeleteArgs} args - Arguments to delete one Information.
     * @example
     * // Delete one Information
     * const Information = await prisma.information.delete({
     *   where: {
     *     // ... filter to delete one Information
     *   }
     * })
     * 
    **/
    delete<T extends InformationDeleteArgs>(
      args: SelectSubset<T, InformationDeleteArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Update one Information.
     * @param {InformationUpdateArgs} args - Arguments to update one Information.
     * @example
     * // Update one Information
     * const information = await prisma.information.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InformationUpdateArgs>(
      args: SelectSubset<T, InformationUpdateArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Delete zero or more Information.
     * @param {InformationDeleteManyArgs} args - Arguments to filter Information to delete.
     * @example
     * // Delete a few Information
     * const { count } = await prisma.information.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InformationDeleteManyArgs>(
      args?: SelectSubset<T, InformationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Information
     * const information = await prisma.information.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InformationUpdateManyArgs>(
      args: SelectSubset<T, InformationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Information.
     * @param {InformationUpsertArgs} args - Arguments to update or create a Information.
     * @example
     * // Update or create a Information
     * const information = await prisma.information.upsert({
     *   create: {
     *     // ... data to create a Information
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Information we want to update
     *   }
     * })
    **/
    upsert<T extends InformationUpsertArgs>(
      args: SelectSubset<T, InformationUpsertArgs>
    ): Prisma__InformationClient<InformationGetPayload<T>>

    /**
     * Count the number of Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationCountArgs} args - Arguments to filter Information to count.
     * @example
     * // Count the number of Information
     * const count = await prisma.information.count({
     *   where: {
     *     // ... the filter for the Information we want to count
     *   }
     * })
    **/
    count<T extends InformationCountArgs>(
      args?: Subset<T, InformationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InformationAggregateArgs>(args: Subset<T, InformationAggregateArgs>): PrismaPromise<GetInformationAggregateType<T>>

    /**
     * Group by Information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InformationGroupByArgs['orderBy'] }
        : { orderBy?: InformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInformationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Information.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InformationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Information base type for findUnique actions
   */
  export type InformationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter, which Information to fetch.
     * 
    **/
    where: InformationWhereUniqueInput
  }

  /**
   * Information: findUnique
   */
  export interface InformationFindUniqueArgs extends InformationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Information findUniqueOrThrow
   */
  export type InformationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter, which Information to fetch.
     * 
    **/
    where: InformationWhereUniqueInput
  }


  /**
   * Information base type for findFirst actions
   */
  export type InformationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter, which Information to fetch.
     * 
    **/
    where?: InformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Information to fetch.
     * 
    **/
    orderBy?: Enumerable<InformationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Information.
     * 
    **/
    cursor?: InformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Information from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Information.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Information.
     * 
    **/
    distinct?: Enumerable<InformationScalarFieldEnum>
  }

  /**
   * Information: findFirst
   */
  export interface InformationFindFirstArgs extends InformationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Information findFirstOrThrow
   */
  export type InformationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter, which Information to fetch.
     * 
    **/
    where?: InformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Information to fetch.
     * 
    **/
    orderBy?: Enumerable<InformationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Information.
     * 
    **/
    cursor?: InformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Information from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Information.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Information.
     * 
    **/
    distinct?: Enumerable<InformationScalarFieldEnum>
  }


  /**
   * Information findMany
   */
  export type InformationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter, which Information to fetch.
     * 
    **/
    where?: InformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Information to fetch.
     * 
    **/
    orderBy?: Enumerable<InformationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Information.
     * 
    **/
    cursor?: InformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Information from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Information.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InformationScalarFieldEnum>
  }


  /**
   * Information create
   */
  export type InformationCreateArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * The data needed to create a Information.
     * 
    **/
    data: XOR<InformationCreateInput, InformationUncheckedCreateInput>
  }


  /**
   * Information createMany
   */
  export type InformationCreateManyArgs = {
    /**
     * The data used to create many Information.
     * 
    **/
    data: Enumerable<InformationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Information update
   */
  export type InformationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * The data needed to update a Information.
     * 
    **/
    data: XOR<InformationUpdateInput, InformationUncheckedUpdateInput>
    /**
     * Choose, which Information to update.
     * 
    **/
    where: InformationWhereUniqueInput
  }


  /**
   * Information updateMany
   */
  export type InformationUpdateManyArgs = {
    /**
     * The data used to update Information.
     * 
    **/
    data: XOR<InformationUpdateManyMutationInput, InformationUncheckedUpdateManyInput>
    /**
     * Filter which Information to update
     * 
    **/
    where?: InformationWhereInput
  }


  /**
   * Information upsert
   */
  export type InformationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * The filter to search for the Information to update in case it exists.
     * 
    **/
    where: InformationWhereUniqueInput
    /**
     * In case the Information found by the `where` argument doesn't exist, create a new Information with this data.
     * 
    **/
    create: XOR<InformationCreateInput, InformationUncheckedCreateInput>
    /**
     * In case the Information was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InformationUpdateInput, InformationUncheckedUpdateInput>
  }


  /**
   * Information delete
   */
  export type InformationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
    /**
     * Filter which Information to delete.
     * 
    **/
    where: InformationWhereUniqueInput
  }


  /**
   * Information deleteMany
   */
  export type InformationDeleteManyArgs = {
    /**
     * Filter which Information to delete
     * 
    **/
    where?: InformationWhereInput
  }


  /**
   * Information without action
   */
  export type InformationArgs = {
    /**
     * Select specific fields to fetch from the Information
     * 
    **/
    select?: InformationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InformationInclude | null
  }



  /**
   * Model Career
   */


  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerMinAggregateOutputType = {
    id: string | null
    company: string | null
    endDate: Date | null
    jobTitle: string | null
    startDate: Date | null
    userId: string | null
  }

  export type CareerMaxAggregateOutputType = {
    id: string | null
    company: string | null
    endDate: Date | null
    jobTitle: string | null
    startDate: Date | null
    userId: string | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    company: number
    endDate: number
    jobTitle: number
    startDate: number
    userId: number
    _all: number
  }


  export type CareerMinAggregateInputType = {
    id?: true
    company?: true
    endDate?: true
    jobTitle?: true
    startDate?: true
    userId?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    company?: true
    endDate?: true
    jobTitle?: true
    startDate?: true
    userId?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    company?: true
    endDate?: true
    jobTitle?: true
    startDate?: true
    userId?: true
    _all?: true
  }

  export type CareerAggregateArgs = {
    /**
     * Filter which Career to aggregate.
     * 
    **/
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     * 
    **/
    orderBy?: Enumerable<CareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs = {
    where?: CareerWhereInput
    orderBy?: Enumerable<CareerOrderByWithAggregationInput>
    by: Array<CareerScalarFieldEnum>
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }


  export type CareerGroupByOutputType = {
    id: string
    company: string
    endDate: Date
    jobTitle: string
    startDate: Date
    userId: string
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect = {
    id?: boolean
    company?: boolean
    endDate?: boolean
    jobTitle?: boolean
    startDate?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type CareerInclude = {
    user?: boolean | UserArgs
  } 

  export type CareerGetPayload<S extends boolean | null | undefined | CareerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Career :
    S extends undefined ? never :
    S extends { include: any } & (CareerArgs | CareerFindManyArgs)
    ? Career  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CareerArgs | CareerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Career ? Career[P] : never
  } 
      : Career


  type CareerCountArgs = Merge<
    Omit<CareerFindManyArgs, 'select' | 'include'> & {
      select?: CareerCountAggregateInputType | true
    }
  >

  export interface CareerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CareerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CareerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Career'> extends True ? Prisma__CareerClient<CareerGetPayload<T>> : Prisma__CareerClient<CareerGetPayload<T> | null, null>

    /**
     * Find one Career that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CareerFindUniqueOrThrowArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CareerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CareerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Career'> extends True ? Prisma__CareerClient<CareerGetPayload<T>> : Prisma__CareerClient<CareerGetPayload<T> | null, null>

    /**
     * Find the first Career that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CareerFindFirstOrThrowArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CareerFindManyArgs>(
      args?: SelectSubset<T, CareerFindManyArgs>
    ): PrismaPromise<Array<CareerGetPayload<T>>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
    **/
    create<T extends CareerCreateArgs>(
      args: SelectSubset<T, CareerCreateArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Create many Careers.
     *     @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     *     @example
     *     // Create many Careers
     *     const career = await prisma.career.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CareerCreateManyArgs>(
      args?: SelectSubset<T, CareerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
    **/
    delete<T extends CareerDeleteArgs>(
      args: SelectSubset<T, CareerDeleteArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CareerUpdateArgs>(
      args: SelectSubset<T, CareerUpdateArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CareerDeleteManyArgs>(
      args?: SelectSubset<T, CareerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CareerUpdateManyArgs>(
      args: SelectSubset<T, CareerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
    **/
    upsert<T extends CareerUpsertArgs>(
      args: SelectSubset<T, CareerUpsertArgs>
    ): Prisma__CareerClient<CareerGetPayload<T>>

    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CareerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Career base type for findUnique actions
   */
  export type CareerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter, which Career to fetch.
     * 
    **/
    where: CareerWhereUniqueInput
  }

  /**
   * Career: findUnique
   */
  export interface CareerFindUniqueArgs extends CareerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter, which Career to fetch.
     * 
    **/
    where: CareerWhereUniqueInput
  }


  /**
   * Career base type for findFirst actions
   */
  export type CareerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter, which Career to fetch.
     * 
    **/
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     * 
    **/
    orderBy?: Enumerable<CareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     * 
    **/
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     * 
    **/
    distinct?: Enumerable<CareerScalarFieldEnum>
  }

  /**
   * Career: findFirst
   */
  export interface CareerFindFirstArgs extends CareerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter, which Career to fetch.
     * 
    **/
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     * 
    **/
    orderBy?: Enumerable<CareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     * 
    **/
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     * 
    **/
    distinct?: Enumerable<CareerScalarFieldEnum>
  }


  /**
   * Career findMany
   */
  export type CareerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter, which Careers to fetch.
     * 
    **/
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     * 
    **/
    orderBy?: Enumerable<CareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     * 
    **/
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CareerScalarFieldEnum>
  }


  /**
   * Career create
   */
  export type CareerCreateArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * The data needed to create a Career.
     * 
    **/
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }


  /**
   * Career createMany
   */
  export type CareerCreateManyArgs = {
    /**
     * The data used to create many Careers.
     * 
    **/
    data: Enumerable<CareerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Career update
   */
  export type CareerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * The data needed to update a Career.
     * 
    **/
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     * 
    **/
    where: CareerWhereUniqueInput
  }


  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs = {
    /**
     * The data used to update Careers.
     * 
    **/
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     * 
    **/
    where?: CareerWhereInput
  }


  /**
   * Career upsert
   */
  export type CareerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * The filter to search for the Career to update in case it exists.
     * 
    **/
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     * 
    **/
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }


  /**
   * Career delete
   */
  export type CareerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
    /**
     * Filter which Career to delete.
     * 
    **/
    where: CareerWhereUniqueInput
  }


  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs = {
    /**
     * Filter which Careers to delete
     * 
    **/
    where?: CareerWhereInput
  }


  /**
   * Career without action
   */
  export type CareerArgs = {
    /**
     * Select specific fields to fetch from the Career
     * 
    **/
    select?: CareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CareerInclude | null
  }



  /**
   * Model Education
   */


  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    degree: string | null
    school: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    degree: string | null
    school: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    degree: number
    school: number
    startDate: number
    endDate: number
    userId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    startDate?: true
    endDate?: true
    userId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    startDate?: true
    endDate?: true
    userId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    startDate?: true
    endDate?: true
    userId?: true
    _all?: true
  }

  export type EducationAggregateArgs = {
    /**
     * Filter which Education to aggregate.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs = {
    where?: EducationWhereInput
    orderBy?: Enumerable<EducationOrderByWithAggregationInput>
    by: Array<EducationScalarFieldEnum>
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }


  export type EducationGroupByOutputType = {
    id: string
    degree: string | null
    school: string
    startDate: Date | null
    endDate: Date | null
    userId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect = {
    id?: boolean
    degree?: boolean
    school?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type EducationInclude = {
    user?: boolean | UserArgs
  } 

  export type EducationGetPayload<S extends boolean | null | undefined | EducationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Education :
    S extends undefined ? never :
    S extends { include: any } & (EducationArgs | EducationFindManyArgs)
    ? Education  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EducationArgs | EducationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Education ? Education[P] : never
  } 
      : Education


  type EducationCountArgs = Merge<
    Omit<EducationFindManyArgs, 'select' | 'include'> & {
      select?: EducationCountAggregateInputType | true
    }
  >

  export interface EducationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EducationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EducationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Education'> extends True ? Prisma__EducationClient<EducationGetPayload<T>> : Prisma__EducationClient<EducationGetPayload<T> | null, null>

    /**
     * Find one Education that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EducationFindUniqueOrThrowArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EducationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EducationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Education'> extends True ? Prisma__EducationClient<EducationGetPayload<T>> : Prisma__EducationClient<EducationGetPayload<T> | null, null>

    /**
     * Find the first Education that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EducationFindFirstOrThrowArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EducationFindManyArgs>(
      args?: SelectSubset<T, EducationFindManyArgs>
    ): PrismaPromise<Array<EducationGetPayload<T>>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
    **/
    create<T extends EducationCreateArgs>(
      args: SelectSubset<T, EducationCreateArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Create many Educations.
     *     @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     *     @example
     *     // Create many Educations
     *     const education = await prisma.education.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EducationCreateManyArgs>(
      args?: SelectSubset<T, EducationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
    **/
    delete<T extends EducationDeleteArgs>(
      args: SelectSubset<T, EducationDeleteArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EducationUpdateArgs>(
      args: SelectSubset<T, EducationUpdateArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EducationDeleteManyArgs>(
      args?: SelectSubset<T, EducationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EducationUpdateManyArgs>(
      args: SelectSubset<T, EducationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
    **/
    upsert<T extends EducationUpsertArgs>(
      args: SelectSubset<T, EducationUpsertArgs>
    ): Prisma__EducationClient<EducationGetPayload<T>>

    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EducationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Education base type for findUnique actions
   */
  export type EducationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where: EducationWhereUniqueInput
  }

  /**
   * Education: findUnique
   */
  export interface EducationFindUniqueArgs extends EducationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where: EducationWhereUniqueInput
  }


  /**
   * Education base type for findFirst actions
   */
  export type EducationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     * 
    **/
    distinct?: Enumerable<EducationScalarFieldEnum>
  }

  /**
   * Education: findFirst
   */
  export interface EducationFindFirstArgs extends EducationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter, which Education to fetch.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     * 
    **/
    distinct?: Enumerable<EducationScalarFieldEnum>
  }


  /**
   * Education findMany
   */
  export type EducationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter, which Educations to fetch.
     * 
    **/
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     * 
    **/
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EducationScalarFieldEnum>
  }


  /**
   * Education create
   */
  export type EducationCreateArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * The data needed to create a Education.
     * 
    **/
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }


  /**
   * Education createMany
   */
  export type EducationCreateManyArgs = {
    /**
     * The data used to create many Educations.
     * 
    **/
    data: Enumerable<EducationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Education update
   */
  export type EducationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * The data needed to update a Education.
     * 
    **/
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     * 
    **/
    where: EducationWhereUniqueInput
  }


  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs = {
    /**
     * The data used to update Educations.
     * 
    **/
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     * 
    **/
    where?: EducationWhereInput
  }


  /**
   * Education upsert
   */
  export type EducationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * The filter to search for the Education to update in case it exists.
     * 
    **/
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     * 
    **/
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }


  /**
   * Education delete
   */
  export type EducationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
    /**
     * Filter which Education to delete.
     * 
    **/
    where: EducationWhereUniqueInput
  }


  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs = {
    /**
     * Filter which Educations to delete
     * 
    **/
    where?: EducationWhereInput
  }


  /**
   * Education without action
   */
  export type EducationArgs = {
    /**
     * Select specific fields to fetch from the Education
     * 
    **/
    select?: EducationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationInclude | null
  }



  /**
   * Model TestTable
   */


  export type AggregateTestTable = {
    _count: TestTableCountAggregateOutputType | null
    _min: TestTableMinAggregateOutputType | null
    _max: TestTableMaxAggregateOutputType | null
  }

  export type TestTableMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TestTableMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TestTableCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TestTableMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestTableMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestTableCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TestTableAggregateArgs = {
    /**
     * Filter which TestTable to aggregate.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestTables
    **/
    _count?: true | TestTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestTableMaxAggregateInputType
  }

  export type GetTestTableAggregateType<T extends TestTableAggregateArgs> = {
        [P in keyof T & keyof AggregateTestTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestTable[P]>
      : GetScalarType<T[P], AggregateTestTable[P]>
  }




  export type TestTableGroupByArgs = {
    where?: TestTableWhereInput
    orderBy?: Enumerable<TestTableOrderByWithAggregationInput>
    by: Array<TestTableScalarFieldEnum>
    having?: TestTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestTableCountAggregateInputType | true
    _min?: TestTableMinAggregateInputType
    _max?: TestTableMaxAggregateInputType
  }


  export type TestTableGroupByOutputType = {
    id: string
    name: string
    _count: TestTableCountAggregateOutputType | null
    _min: TestTableMinAggregateOutputType | null
    _max: TestTableMaxAggregateOutputType | null
  }

  type GetTestTableGroupByPayload<T extends TestTableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TestTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestTableGroupByOutputType[P]>
            : GetScalarType<T[P], TestTableGroupByOutputType[P]>
        }
      >
    >


  export type TestTableSelect = {
    id?: boolean
    name?: boolean
  }


  export type TestTableGetPayload<S extends boolean | null | undefined | TestTableArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestTable :
    S extends undefined ? never :
    S extends { include: any } & (TestTableArgs | TestTableFindManyArgs)
    ? TestTable 
    : S extends { select: any } & (TestTableArgs | TestTableFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TestTable ? TestTable[P] : never
  } 
      : TestTable


  type TestTableCountArgs = Merge<
    Omit<TestTableFindManyArgs, 'select' | 'include'> & {
      select?: TestTableCountAggregateInputType | true
    }
  >

  export interface TestTableDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one TestTable that matches the filter.
     * @param {TestTableFindUniqueArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestTable'> extends True ? Prisma__TestTableClient<TestTableGetPayload<T>> : Prisma__TestTableClient<TestTableGetPayload<T> | null, null>

    /**
     * Find one TestTable that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestTableFindUniqueOrThrowArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestTableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestTableFindUniqueOrThrowArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Find the first TestTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindFirstArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestTable'> extends True ? Prisma__TestTableClient<TestTableGetPayload<T>> : Prisma__TestTableClient<TestTableGetPayload<T> | null, null>

    /**
     * Find the first TestTable that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindFirstOrThrowArgs} args - Arguments to find a TestTable
     * @example
     * // Get one TestTable
     * const testTable = await prisma.testTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestTableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestTableFindFirstOrThrowArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Find zero or more TestTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestTables
     * const testTables = await prisma.testTable.findMany()
     * 
     * // Get first 10 TestTables
     * const testTables = await prisma.testTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testTableWithIdOnly = await prisma.testTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestTableFindManyArgs>(
      args?: SelectSubset<T, TestTableFindManyArgs>
    ): PrismaPromise<Array<TestTableGetPayload<T>>>

    /**
     * Create a TestTable.
     * @param {TestTableCreateArgs} args - Arguments to create a TestTable.
     * @example
     * // Create one TestTable
     * const TestTable = await prisma.testTable.create({
     *   data: {
     *     // ... data to create a TestTable
     *   }
     * })
     * 
    **/
    create<T extends TestTableCreateArgs>(
      args: SelectSubset<T, TestTableCreateArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Create many TestTables.
     *     @param {TestTableCreateManyArgs} args - Arguments to create many TestTables.
     *     @example
     *     // Create many TestTables
     *     const testTable = await prisma.testTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestTableCreateManyArgs>(
      args?: SelectSubset<T, TestTableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TestTable.
     * @param {TestTableDeleteArgs} args - Arguments to delete one TestTable.
     * @example
     * // Delete one TestTable
     * const TestTable = await prisma.testTable.delete({
     *   where: {
     *     // ... filter to delete one TestTable
     *   }
     * })
     * 
    **/
    delete<T extends TestTableDeleteArgs>(
      args: SelectSubset<T, TestTableDeleteArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Update one TestTable.
     * @param {TestTableUpdateArgs} args - Arguments to update one TestTable.
     * @example
     * // Update one TestTable
     * const testTable = await prisma.testTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestTableUpdateArgs>(
      args: SelectSubset<T, TestTableUpdateArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Delete zero or more TestTables.
     * @param {TestTableDeleteManyArgs} args - Arguments to filter TestTables to delete.
     * @example
     * // Delete a few TestTables
     * const { count } = await prisma.testTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestTableDeleteManyArgs>(
      args?: SelectSubset<T, TestTableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestTables
     * const testTable = await prisma.testTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestTableUpdateManyArgs>(
      args: SelectSubset<T, TestTableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TestTable.
     * @param {TestTableUpsertArgs} args - Arguments to update or create a TestTable.
     * @example
     * // Update or create a TestTable
     * const testTable = await prisma.testTable.upsert({
     *   create: {
     *     // ... data to create a TestTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestTable we want to update
     *   }
     * })
    **/
    upsert<T extends TestTableUpsertArgs>(
      args: SelectSubset<T, TestTableUpsertArgs>
    ): Prisma__TestTableClient<TestTableGetPayload<T>>

    /**
     * Count the number of TestTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableCountArgs} args - Arguments to filter TestTables to count.
     * @example
     * // Count the number of TestTables
     * const count = await prisma.testTable.count({
     *   where: {
     *     // ... the filter for the TestTables we want to count
     *   }
     * })
    **/
    count<T extends TestTableCountArgs>(
      args?: Subset<T, TestTableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestTableAggregateArgs>(args: Subset<T, TestTableAggregateArgs>): PrismaPromise<GetTestTableAggregateType<T>>

    /**
     * Group by TestTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestTableGroupByArgs['orderBy'] }
        : { orderBy?: TestTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestTableGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TestTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestTableClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TestTable base type for findUnique actions
   */
  export type TestTableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where: TestTableWhereUniqueInput
  }

  /**
   * TestTable: findUnique
   */
  export interface TestTableFindUniqueArgs extends TestTableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestTable findUniqueOrThrow
   */
  export type TestTableFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where: TestTableWhereUniqueInput
  }


  /**
   * TestTable base type for findFirst actions
   */
  export type TestTableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestTables.
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestTables.
     * 
    **/
    distinct?: Enumerable<TestTableScalarFieldEnum>
  }

  /**
   * TestTable: findFirst
   */
  export interface TestTableFindFirstArgs extends TestTableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestTable findFirstOrThrow
   */
  export type TestTableFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTable to fetch.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestTables.
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestTables.
     * 
    **/
    distinct?: Enumerable<TestTableScalarFieldEnum>
  }


  /**
   * TestTable findMany
   */
  export type TestTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter, which TestTables to fetch.
     * 
    **/
    where?: TestTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTables to fetch.
     * 
    **/
    orderBy?: Enumerable<TestTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestTables.
     * 
    **/
    cursor?: TestTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TestTableScalarFieldEnum>
  }


  /**
   * TestTable create
   */
  export type TestTableCreateArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The data needed to create a TestTable.
     * 
    **/
    data: XOR<TestTableCreateInput, TestTableUncheckedCreateInput>
  }


  /**
   * TestTable createMany
   */
  export type TestTableCreateManyArgs = {
    /**
     * The data used to create many TestTables.
     * 
    **/
    data: Enumerable<TestTableCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TestTable update
   */
  export type TestTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The data needed to update a TestTable.
     * 
    **/
    data: XOR<TestTableUpdateInput, TestTableUncheckedUpdateInput>
    /**
     * Choose, which TestTable to update.
     * 
    **/
    where: TestTableWhereUniqueInput
  }


  /**
   * TestTable updateMany
   */
  export type TestTableUpdateManyArgs = {
    /**
     * The data used to update TestTables.
     * 
    **/
    data: XOR<TestTableUpdateManyMutationInput, TestTableUncheckedUpdateManyInput>
    /**
     * Filter which TestTables to update
     * 
    **/
    where?: TestTableWhereInput
  }


  /**
   * TestTable upsert
   */
  export type TestTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * The filter to search for the TestTable to update in case it exists.
     * 
    **/
    where: TestTableWhereUniqueInput
    /**
     * In case the TestTable found by the `where` argument doesn't exist, create a new TestTable with this data.
     * 
    **/
    create: XOR<TestTableCreateInput, TestTableUncheckedCreateInput>
    /**
     * In case the TestTable was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TestTableUpdateInput, TestTableUncheckedUpdateInput>
  }


  /**
   * TestTable delete
   */
  export type TestTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
    /**
     * Filter which TestTable to delete.
     * 
    **/
    where: TestTableWhereUniqueInput
  }


  /**
   * TestTable deleteMany
   */
  export type TestTableDeleteManyArgs = {
    /**
     * Filter which TestTables to delete
     * 
    **/
    where?: TestTableWhereInput
  }


  /**
   * TestTable without action
   */
  export type TestTableArgs = {
    /**
     * Select specific fields to fetch from the TestTable
     * 
    **/
    select?: TestTableSelect | null
  }



  /**
   * Model test_model_2
   */


  export type AggregateTest_model_2 = {
    _count: Test_model_2CountAggregateOutputType | null
    _min: Test_model_2MinAggregateOutputType | null
    _max: Test_model_2MaxAggregateOutputType | null
  }

  export type Test_model_2MinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_2MaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_2CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Test_model_2MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_2MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_2CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Test_model_2AggregateArgs = {
    /**
     * Filter which test_model_2 to aggregate.
     * 
    **/
    where?: test_model_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_2s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: test_model_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_2s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_2s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_model_2s
    **/
    _count?: true | Test_model_2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_model_2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_model_2MaxAggregateInputType
  }

  export type GetTest_model_2AggregateType<T extends Test_model_2AggregateArgs> = {
        [P in keyof T & keyof AggregateTest_model_2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_model_2[P]>
      : GetScalarType<T[P], AggregateTest_model_2[P]>
  }




  export type Test_model_2GroupByArgs = {
    where?: test_model_2WhereInput
    orderBy?: Enumerable<test_model_2OrderByWithAggregationInput>
    by: Array<Test_model_2ScalarFieldEnum>
    having?: test_model_2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_model_2CountAggregateInputType | true
    _min?: Test_model_2MinAggregateInputType
    _max?: Test_model_2MaxAggregateInputType
  }


  export type Test_model_2GroupByOutputType = {
    id: string
    name: string
    _count: Test_model_2CountAggregateOutputType | null
    _min: Test_model_2MinAggregateOutputType | null
    _max: Test_model_2MaxAggregateOutputType | null
  }

  type GetTest_model_2GroupByPayload<T extends Test_model_2GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Test_model_2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_model_2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_model_2GroupByOutputType[P]>
            : GetScalarType<T[P], Test_model_2GroupByOutputType[P]>
        }
      >
    >


  export type test_model_2Select = {
    id?: boolean
    name?: boolean
  }


  export type test_model_2GetPayload<S extends boolean | null | undefined | test_model_2Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? test_model_2 :
    S extends undefined ? never :
    S extends { include: any } & (test_model_2Args | test_model_2FindManyArgs)
    ? test_model_2 
    : S extends { select: any } & (test_model_2Args | test_model_2FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof test_model_2 ? test_model_2[P] : never
  } 
      : test_model_2


  type test_model_2CountArgs = Merge<
    Omit<test_model_2FindManyArgs, 'select' | 'include'> & {
      select?: Test_model_2CountAggregateInputType | true
    }
  >

  export interface test_model_2Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Test_model_2 that matches the filter.
     * @param {test_model_2FindUniqueArgs} args - Arguments to find a Test_model_2
     * @example
     * // Get one Test_model_2
     * const test_model_2 = await prisma.test_model_2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_model_2FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, test_model_2FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'test_model_2'> extends True ? Prisma__test_model_2Client<test_model_2GetPayload<T>> : Prisma__test_model_2Client<test_model_2GetPayload<T> | null, null>

    /**
     * Find one Test_model_2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {test_model_2FindUniqueOrThrowArgs} args - Arguments to find a Test_model_2
     * @example
     * // Get one Test_model_2
     * const test_model_2 = await prisma.test_model_2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_model_2FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, test_model_2FindUniqueOrThrowArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Find the first Test_model_2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_2FindFirstArgs} args - Arguments to find a Test_model_2
     * @example
     * // Get one Test_model_2
     * const test_model_2 = await prisma.test_model_2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_model_2FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, test_model_2FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'test_model_2'> extends True ? Prisma__test_model_2Client<test_model_2GetPayload<T>> : Prisma__test_model_2Client<test_model_2GetPayload<T> | null, null>

    /**
     * Find the first Test_model_2 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_2FindFirstOrThrowArgs} args - Arguments to find a Test_model_2
     * @example
     * // Get one Test_model_2
     * const test_model_2 = await prisma.test_model_2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_model_2FindFirstOrThrowArgs>(
      args?: SelectSubset<T, test_model_2FindFirstOrThrowArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Find zero or more Test_model_2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_model_2s
     * const test_model_2s = await prisma.test_model_2.findMany()
     * 
     * // Get first 10 Test_model_2s
     * const test_model_2s = await prisma.test_model_2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_model_2WithIdOnly = await prisma.test_model_2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends test_model_2FindManyArgs>(
      args?: SelectSubset<T, test_model_2FindManyArgs>
    ): PrismaPromise<Array<test_model_2GetPayload<T>>>

    /**
     * Create a Test_model_2.
     * @param {test_model_2CreateArgs} args - Arguments to create a Test_model_2.
     * @example
     * // Create one Test_model_2
     * const Test_model_2 = await prisma.test_model_2.create({
     *   data: {
     *     // ... data to create a Test_model_2
     *   }
     * })
     * 
    **/
    create<T extends test_model_2CreateArgs>(
      args: SelectSubset<T, test_model_2CreateArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Create many Test_model_2s.
     *     @param {test_model_2CreateManyArgs} args - Arguments to create many Test_model_2s.
     *     @example
     *     // Create many Test_model_2s
     *     const test_model_2 = await prisma.test_model_2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends test_model_2CreateManyArgs>(
      args?: SelectSubset<T, test_model_2CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test_model_2.
     * @param {test_model_2DeleteArgs} args - Arguments to delete one Test_model_2.
     * @example
     * // Delete one Test_model_2
     * const Test_model_2 = await prisma.test_model_2.delete({
     *   where: {
     *     // ... filter to delete one Test_model_2
     *   }
     * })
     * 
    **/
    delete<T extends test_model_2DeleteArgs>(
      args: SelectSubset<T, test_model_2DeleteArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Update one Test_model_2.
     * @param {test_model_2UpdateArgs} args - Arguments to update one Test_model_2.
     * @example
     * // Update one Test_model_2
     * const test_model_2 = await prisma.test_model_2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_model_2UpdateArgs>(
      args: SelectSubset<T, test_model_2UpdateArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Delete zero or more Test_model_2s.
     * @param {test_model_2DeleteManyArgs} args - Arguments to filter Test_model_2s to delete.
     * @example
     * // Delete a few Test_model_2s
     * const { count } = await prisma.test_model_2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_model_2DeleteManyArgs>(
      args?: SelectSubset<T, test_model_2DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_model_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_model_2s
     * const test_model_2 = await prisma.test_model_2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_model_2UpdateManyArgs>(
      args: SelectSubset<T, test_model_2UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_model_2.
     * @param {test_model_2UpsertArgs} args - Arguments to update or create a Test_model_2.
     * @example
     * // Update or create a Test_model_2
     * const test_model_2 = await prisma.test_model_2.upsert({
     *   create: {
     *     // ... data to create a Test_model_2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_model_2 we want to update
     *   }
     * })
    **/
    upsert<T extends test_model_2UpsertArgs>(
      args: SelectSubset<T, test_model_2UpsertArgs>
    ): Prisma__test_model_2Client<test_model_2GetPayload<T>>

    /**
     * Count the number of Test_model_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_2CountArgs} args - Arguments to filter Test_model_2s to count.
     * @example
     * // Count the number of Test_model_2s
     * const count = await prisma.test_model_2.count({
     *   where: {
     *     // ... the filter for the Test_model_2s we want to count
     *   }
     * })
    **/
    count<T extends test_model_2CountArgs>(
      args?: Subset<T, test_model_2CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_model_2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_model_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_model_2AggregateArgs>(args: Subset<T, Test_model_2AggregateArgs>): PrismaPromise<GetTest_model_2AggregateType<T>>

    /**
     * Group by Test_model_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Test_model_2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_model_2GroupByArgs['orderBy'] }
        : { orderBy?: Test_model_2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Test_model_2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_model_2GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for test_model_2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__test_model_2Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * test_model_2 base type for findUnique actions
   */
  export type test_model_2FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter, which test_model_2 to fetch.
     * 
    **/
    where: test_model_2WhereUniqueInput
  }

  /**
   * test_model_2: findUnique
   */
  export interface test_model_2FindUniqueArgs extends test_model_2FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_2 findUniqueOrThrow
   */
  export type test_model_2FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter, which test_model_2 to fetch.
     * 
    **/
    where: test_model_2WhereUniqueInput
  }


  /**
   * test_model_2 base type for findFirst actions
   */
  export type test_model_2FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter, which test_model_2 to fetch.
     * 
    **/
    where?: test_model_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_2s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_2s.
     * 
    **/
    cursor?: test_model_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_2s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_2s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_2s.
     * 
    **/
    distinct?: Enumerable<Test_model_2ScalarFieldEnum>
  }

  /**
   * test_model_2: findFirst
   */
  export interface test_model_2FindFirstArgs extends test_model_2FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_2 findFirstOrThrow
   */
  export type test_model_2FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter, which test_model_2 to fetch.
     * 
    **/
    where?: test_model_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_2s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_2s.
     * 
    **/
    cursor?: test_model_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_2s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_2s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_2s.
     * 
    **/
    distinct?: Enumerable<Test_model_2ScalarFieldEnum>
  }


  /**
   * test_model_2 findMany
   */
  export type test_model_2FindManyArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter, which test_model_2s to fetch.
     * 
    **/
    where?: test_model_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_2s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_model_2s.
     * 
    **/
    cursor?: test_model_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_2s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_2s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Test_model_2ScalarFieldEnum>
  }


  /**
   * test_model_2 create
   */
  export type test_model_2CreateArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * The data needed to create a test_model_2.
     * 
    **/
    data: XOR<test_model_2CreateInput, test_model_2UncheckedCreateInput>
  }


  /**
   * test_model_2 createMany
   */
  export type test_model_2CreateManyArgs = {
    /**
     * The data used to create many test_model_2s.
     * 
    **/
    data: Enumerable<test_model_2CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * test_model_2 update
   */
  export type test_model_2UpdateArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * The data needed to update a test_model_2.
     * 
    **/
    data: XOR<test_model_2UpdateInput, test_model_2UncheckedUpdateInput>
    /**
     * Choose, which test_model_2 to update.
     * 
    **/
    where: test_model_2WhereUniqueInput
  }


  /**
   * test_model_2 updateMany
   */
  export type test_model_2UpdateManyArgs = {
    /**
     * The data used to update test_model_2s.
     * 
    **/
    data: XOR<test_model_2UpdateManyMutationInput, test_model_2UncheckedUpdateManyInput>
    /**
     * Filter which test_model_2s to update
     * 
    **/
    where?: test_model_2WhereInput
  }


  /**
   * test_model_2 upsert
   */
  export type test_model_2UpsertArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * The filter to search for the test_model_2 to update in case it exists.
     * 
    **/
    where: test_model_2WhereUniqueInput
    /**
     * In case the test_model_2 found by the `where` argument doesn't exist, create a new test_model_2 with this data.
     * 
    **/
    create: XOR<test_model_2CreateInput, test_model_2UncheckedCreateInput>
    /**
     * In case the test_model_2 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<test_model_2UpdateInput, test_model_2UncheckedUpdateInput>
  }


  /**
   * test_model_2 delete
   */
  export type test_model_2DeleteArgs = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
    /**
     * Filter which test_model_2 to delete.
     * 
    **/
    where: test_model_2WhereUniqueInput
  }


  /**
   * test_model_2 deleteMany
   */
  export type test_model_2DeleteManyArgs = {
    /**
     * Filter which test_model_2s to delete
     * 
    **/
    where?: test_model_2WhereInput
  }


  /**
   * test_model_2 without action
   */
  export type test_model_2Args = {
    /**
     * Select specific fields to fetch from the test_model_2
     * 
    **/
    select?: test_model_2Select | null
  }



  /**
   * Model test_model_3
   */


  export type AggregateTest_model_3 = {
    _count: Test_model_3CountAggregateOutputType | null
    _min: Test_model_3MinAggregateOutputType | null
    _max: Test_model_3MaxAggregateOutputType | null
  }

  export type Test_model_3MinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_3MaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_3CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Test_model_3MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_3MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_3CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Test_model_3AggregateArgs = {
    /**
     * Filter which test_model_3 to aggregate.
     * 
    **/
    where?: test_model_3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_3s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: test_model_3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_3s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_3s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_model_3s
    **/
    _count?: true | Test_model_3CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_model_3MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_model_3MaxAggregateInputType
  }

  export type GetTest_model_3AggregateType<T extends Test_model_3AggregateArgs> = {
        [P in keyof T & keyof AggregateTest_model_3]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_model_3[P]>
      : GetScalarType<T[P], AggregateTest_model_3[P]>
  }




  export type Test_model_3GroupByArgs = {
    where?: test_model_3WhereInput
    orderBy?: Enumerable<test_model_3OrderByWithAggregationInput>
    by: Array<Test_model_3ScalarFieldEnum>
    having?: test_model_3ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_model_3CountAggregateInputType | true
    _min?: Test_model_3MinAggregateInputType
    _max?: Test_model_3MaxAggregateInputType
  }


  export type Test_model_3GroupByOutputType = {
    id: string
    name: string
    _count: Test_model_3CountAggregateOutputType | null
    _min: Test_model_3MinAggregateOutputType | null
    _max: Test_model_3MaxAggregateOutputType | null
  }

  type GetTest_model_3GroupByPayload<T extends Test_model_3GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Test_model_3GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_model_3GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_model_3GroupByOutputType[P]>
            : GetScalarType<T[P], Test_model_3GroupByOutputType[P]>
        }
      >
    >


  export type test_model_3Select = {
    id?: boolean
    name?: boolean
  }


  export type test_model_3GetPayload<S extends boolean | null | undefined | test_model_3Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? test_model_3 :
    S extends undefined ? never :
    S extends { include: any } & (test_model_3Args | test_model_3FindManyArgs)
    ? test_model_3 
    : S extends { select: any } & (test_model_3Args | test_model_3FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof test_model_3 ? test_model_3[P] : never
  } 
      : test_model_3


  type test_model_3CountArgs = Merge<
    Omit<test_model_3FindManyArgs, 'select' | 'include'> & {
      select?: Test_model_3CountAggregateInputType | true
    }
  >

  export interface test_model_3Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Test_model_3 that matches the filter.
     * @param {test_model_3FindUniqueArgs} args - Arguments to find a Test_model_3
     * @example
     * // Get one Test_model_3
     * const test_model_3 = await prisma.test_model_3.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_model_3FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, test_model_3FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'test_model_3'> extends True ? Prisma__test_model_3Client<test_model_3GetPayload<T>> : Prisma__test_model_3Client<test_model_3GetPayload<T> | null, null>

    /**
     * Find one Test_model_3 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {test_model_3FindUniqueOrThrowArgs} args - Arguments to find a Test_model_3
     * @example
     * // Get one Test_model_3
     * const test_model_3 = await prisma.test_model_3.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_model_3FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, test_model_3FindUniqueOrThrowArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Find the first Test_model_3 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_3FindFirstArgs} args - Arguments to find a Test_model_3
     * @example
     * // Get one Test_model_3
     * const test_model_3 = await prisma.test_model_3.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_model_3FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, test_model_3FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'test_model_3'> extends True ? Prisma__test_model_3Client<test_model_3GetPayload<T>> : Prisma__test_model_3Client<test_model_3GetPayload<T> | null, null>

    /**
     * Find the first Test_model_3 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_3FindFirstOrThrowArgs} args - Arguments to find a Test_model_3
     * @example
     * // Get one Test_model_3
     * const test_model_3 = await prisma.test_model_3.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_model_3FindFirstOrThrowArgs>(
      args?: SelectSubset<T, test_model_3FindFirstOrThrowArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Find zero or more Test_model_3s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_3FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_model_3s
     * const test_model_3s = await prisma.test_model_3.findMany()
     * 
     * // Get first 10 Test_model_3s
     * const test_model_3s = await prisma.test_model_3.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_model_3WithIdOnly = await prisma.test_model_3.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends test_model_3FindManyArgs>(
      args?: SelectSubset<T, test_model_3FindManyArgs>
    ): PrismaPromise<Array<test_model_3GetPayload<T>>>

    /**
     * Create a Test_model_3.
     * @param {test_model_3CreateArgs} args - Arguments to create a Test_model_3.
     * @example
     * // Create one Test_model_3
     * const Test_model_3 = await prisma.test_model_3.create({
     *   data: {
     *     // ... data to create a Test_model_3
     *   }
     * })
     * 
    **/
    create<T extends test_model_3CreateArgs>(
      args: SelectSubset<T, test_model_3CreateArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Create many Test_model_3s.
     *     @param {test_model_3CreateManyArgs} args - Arguments to create many Test_model_3s.
     *     @example
     *     // Create many Test_model_3s
     *     const test_model_3 = await prisma.test_model_3.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends test_model_3CreateManyArgs>(
      args?: SelectSubset<T, test_model_3CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test_model_3.
     * @param {test_model_3DeleteArgs} args - Arguments to delete one Test_model_3.
     * @example
     * // Delete one Test_model_3
     * const Test_model_3 = await prisma.test_model_3.delete({
     *   where: {
     *     // ... filter to delete one Test_model_3
     *   }
     * })
     * 
    **/
    delete<T extends test_model_3DeleteArgs>(
      args: SelectSubset<T, test_model_3DeleteArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Update one Test_model_3.
     * @param {test_model_3UpdateArgs} args - Arguments to update one Test_model_3.
     * @example
     * // Update one Test_model_3
     * const test_model_3 = await prisma.test_model_3.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_model_3UpdateArgs>(
      args: SelectSubset<T, test_model_3UpdateArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Delete zero or more Test_model_3s.
     * @param {test_model_3DeleteManyArgs} args - Arguments to filter Test_model_3s to delete.
     * @example
     * // Delete a few Test_model_3s
     * const { count } = await prisma.test_model_3.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_model_3DeleteManyArgs>(
      args?: SelectSubset<T, test_model_3DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_model_3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_3UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_model_3s
     * const test_model_3 = await prisma.test_model_3.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_model_3UpdateManyArgs>(
      args: SelectSubset<T, test_model_3UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_model_3.
     * @param {test_model_3UpsertArgs} args - Arguments to update or create a Test_model_3.
     * @example
     * // Update or create a Test_model_3
     * const test_model_3 = await prisma.test_model_3.upsert({
     *   create: {
     *     // ... data to create a Test_model_3
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_model_3 we want to update
     *   }
     * })
    **/
    upsert<T extends test_model_3UpsertArgs>(
      args: SelectSubset<T, test_model_3UpsertArgs>
    ): Prisma__test_model_3Client<test_model_3GetPayload<T>>

    /**
     * Count the number of Test_model_3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_3CountArgs} args - Arguments to filter Test_model_3s to count.
     * @example
     * // Count the number of Test_model_3s
     * const count = await prisma.test_model_3.count({
     *   where: {
     *     // ... the filter for the Test_model_3s we want to count
     *   }
     * })
    **/
    count<T extends test_model_3CountArgs>(
      args?: Subset<T, test_model_3CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_model_3CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_model_3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_3AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_model_3AggregateArgs>(args: Subset<T, Test_model_3AggregateArgs>): PrismaPromise<GetTest_model_3AggregateType<T>>

    /**
     * Group by Test_model_3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_3GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Test_model_3GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_model_3GroupByArgs['orderBy'] }
        : { orderBy?: Test_model_3GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Test_model_3GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_model_3GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for test_model_3.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__test_model_3Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * test_model_3 base type for findUnique actions
   */
  export type test_model_3FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter, which test_model_3 to fetch.
     * 
    **/
    where: test_model_3WhereUniqueInput
  }

  /**
   * test_model_3: findUnique
   */
  export interface test_model_3FindUniqueArgs extends test_model_3FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_3 findUniqueOrThrow
   */
  export type test_model_3FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter, which test_model_3 to fetch.
     * 
    **/
    where: test_model_3WhereUniqueInput
  }


  /**
   * test_model_3 base type for findFirst actions
   */
  export type test_model_3FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter, which test_model_3 to fetch.
     * 
    **/
    where?: test_model_3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_3s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_3s.
     * 
    **/
    cursor?: test_model_3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_3s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_3s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_3s.
     * 
    **/
    distinct?: Enumerable<Test_model_3ScalarFieldEnum>
  }

  /**
   * test_model_3: findFirst
   */
  export interface test_model_3FindFirstArgs extends test_model_3FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_3 findFirstOrThrow
   */
  export type test_model_3FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter, which test_model_3 to fetch.
     * 
    **/
    where?: test_model_3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_3s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_3s.
     * 
    **/
    cursor?: test_model_3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_3s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_3s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_3s.
     * 
    **/
    distinct?: Enumerable<Test_model_3ScalarFieldEnum>
  }


  /**
   * test_model_3 findMany
   */
  export type test_model_3FindManyArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter, which test_model_3s to fetch.
     * 
    **/
    where?: test_model_3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_3s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_model_3s.
     * 
    **/
    cursor?: test_model_3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_3s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_3s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Test_model_3ScalarFieldEnum>
  }


  /**
   * test_model_3 create
   */
  export type test_model_3CreateArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * The data needed to create a test_model_3.
     * 
    **/
    data: XOR<test_model_3CreateInput, test_model_3UncheckedCreateInput>
  }


  /**
   * test_model_3 createMany
   */
  export type test_model_3CreateManyArgs = {
    /**
     * The data used to create many test_model_3s.
     * 
    **/
    data: Enumerable<test_model_3CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * test_model_3 update
   */
  export type test_model_3UpdateArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * The data needed to update a test_model_3.
     * 
    **/
    data: XOR<test_model_3UpdateInput, test_model_3UncheckedUpdateInput>
    /**
     * Choose, which test_model_3 to update.
     * 
    **/
    where: test_model_3WhereUniqueInput
  }


  /**
   * test_model_3 updateMany
   */
  export type test_model_3UpdateManyArgs = {
    /**
     * The data used to update test_model_3s.
     * 
    **/
    data: XOR<test_model_3UpdateManyMutationInput, test_model_3UncheckedUpdateManyInput>
    /**
     * Filter which test_model_3s to update
     * 
    **/
    where?: test_model_3WhereInput
  }


  /**
   * test_model_3 upsert
   */
  export type test_model_3UpsertArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * The filter to search for the test_model_3 to update in case it exists.
     * 
    **/
    where: test_model_3WhereUniqueInput
    /**
     * In case the test_model_3 found by the `where` argument doesn't exist, create a new test_model_3 with this data.
     * 
    **/
    create: XOR<test_model_3CreateInput, test_model_3UncheckedCreateInput>
    /**
     * In case the test_model_3 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<test_model_3UpdateInput, test_model_3UncheckedUpdateInput>
  }


  /**
   * test_model_3 delete
   */
  export type test_model_3DeleteArgs = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
    /**
     * Filter which test_model_3 to delete.
     * 
    **/
    where: test_model_3WhereUniqueInput
  }


  /**
   * test_model_3 deleteMany
   */
  export type test_model_3DeleteManyArgs = {
    /**
     * Filter which test_model_3s to delete
     * 
    **/
    where?: test_model_3WhereInput
  }


  /**
   * test_model_3 without action
   */
  export type test_model_3Args = {
    /**
     * Select specific fields to fetch from the test_model_3
     * 
    **/
    select?: test_model_3Select | null
  }



  /**
   * Model test_model_4
   */


  export type AggregateTest_model_4 = {
    _count: Test_model_4CountAggregateOutputType | null
    _min: Test_model_4MinAggregateOutputType | null
    _max: Test_model_4MaxAggregateOutputType | null
  }

  export type Test_model_4MinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_4MaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_4CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Test_model_4MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_4MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_4CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Test_model_4AggregateArgs = {
    /**
     * Filter which test_model_4 to aggregate.
     * 
    **/
    where?: test_model_4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_4s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_4OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: test_model_4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_4s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_4s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_model_4s
    **/
    _count?: true | Test_model_4CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_model_4MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_model_4MaxAggregateInputType
  }

  export type GetTest_model_4AggregateType<T extends Test_model_4AggregateArgs> = {
        [P in keyof T & keyof AggregateTest_model_4]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_model_4[P]>
      : GetScalarType<T[P], AggregateTest_model_4[P]>
  }




  export type Test_model_4GroupByArgs = {
    where?: test_model_4WhereInput
    orderBy?: Enumerable<test_model_4OrderByWithAggregationInput>
    by: Array<Test_model_4ScalarFieldEnum>
    having?: test_model_4ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_model_4CountAggregateInputType | true
    _min?: Test_model_4MinAggregateInputType
    _max?: Test_model_4MaxAggregateInputType
  }


  export type Test_model_4GroupByOutputType = {
    id: string
    name: string
    _count: Test_model_4CountAggregateOutputType | null
    _min: Test_model_4MinAggregateOutputType | null
    _max: Test_model_4MaxAggregateOutputType | null
  }

  type GetTest_model_4GroupByPayload<T extends Test_model_4GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Test_model_4GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_model_4GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_model_4GroupByOutputType[P]>
            : GetScalarType<T[P], Test_model_4GroupByOutputType[P]>
        }
      >
    >


  export type test_model_4Select = {
    id?: boolean
    name?: boolean
  }


  export type test_model_4GetPayload<S extends boolean | null | undefined | test_model_4Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? test_model_4 :
    S extends undefined ? never :
    S extends { include: any } & (test_model_4Args | test_model_4FindManyArgs)
    ? test_model_4 
    : S extends { select: any } & (test_model_4Args | test_model_4FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof test_model_4 ? test_model_4[P] : never
  } 
      : test_model_4


  type test_model_4CountArgs = Merge<
    Omit<test_model_4FindManyArgs, 'select' | 'include'> & {
      select?: Test_model_4CountAggregateInputType | true
    }
  >

  export interface test_model_4Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Test_model_4 that matches the filter.
     * @param {test_model_4FindUniqueArgs} args - Arguments to find a Test_model_4
     * @example
     * // Get one Test_model_4
     * const test_model_4 = await prisma.test_model_4.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_model_4FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, test_model_4FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'test_model_4'> extends True ? Prisma__test_model_4Client<test_model_4GetPayload<T>> : Prisma__test_model_4Client<test_model_4GetPayload<T> | null, null>

    /**
     * Find one Test_model_4 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {test_model_4FindUniqueOrThrowArgs} args - Arguments to find a Test_model_4
     * @example
     * // Get one Test_model_4
     * const test_model_4 = await prisma.test_model_4.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_model_4FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, test_model_4FindUniqueOrThrowArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Find the first Test_model_4 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_4FindFirstArgs} args - Arguments to find a Test_model_4
     * @example
     * // Get one Test_model_4
     * const test_model_4 = await prisma.test_model_4.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_model_4FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, test_model_4FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'test_model_4'> extends True ? Prisma__test_model_4Client<test_model_4GetPayload<T>> : Prisma__test_model_4Client<test_model_4GetPayload<T> | null, null>

    /**
     * Find the first Test_model_4 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_4FindFirstOrThrowArgs} args - Arguments to find a Test_model_4
     * @example
     * // Get one Test_model_4
     * const test_model_4 = await prisma.test_model_4.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_model_4FindFirstOrThrowArgs>(
      args?: SelectSubset<T, test_model_4FindFirstOrThrowArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Find zero or more Test_model_4s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_4FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_model_4s
     * const test_model_4s = await prisma.test_model_4.findMany()
     * 
     * // Get first 10 Test_model_4s
     * const test_model_4s = await prisma.test_model_4.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_model_4WithIdOnly = await prisma.test_model_4.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends test_model_4FindManyArgs>(
      args?: SelectSubset<T, test_model_4FindManyArgs>
    ): PrismaPromise<Array<test_model_4GetPayload<T>>>

    /**
     * Create a Test_model_4.
     * @param {test_model_4CreateArgs} args - Arguments to create a Test_model_4.
     * @example
     * // Create one Test_model_4
     * const Test_model_4 = await prisma.test_model_4.create({
     *   data: {
     *     // ... data to create a Test_model_4
     *   }
     * })
     * 
    **/
    create<T extends test_model_4CreateArgs>(
      args: SelectSubset<T, test_model_4CreateArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Create many Test_model_4s.
     *     @param {test_model_4CreateManyArgs} args - Arguments to create many Test_model_4s.
     *     @example
     *     // Create many Test_model_4s
     *     const test_model_4 = await prisma.test_model_4.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends test_model_4CreateManyArgs>(
      args?: SelectSubset<T, test_model_4CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test_model_4.
     * @param {test_model_4DeleteArgs} args - Arguments to delete one Test_model_4.
     * @example
     * // Delete one Test_model_4
     * const Test_model_4 = await prisma.test_model_4.delete({
     *   where: {
     *     // ... filter to delete one Test_model_4
     *   }
     * })
     * 
    **/
    delete<T extends test_model_4DeleteArgs>(
      args: SelectSubset<T, test_model_4DeleteArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Update one Test_model_4.
     * @param {test_model_4UpdateArgs} args - Arguments to update one Test_model_4.
     * @example
     * // Update one Test_model_4
     * const test_model_4 = await prisma.test_model_4.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_model_4UpdateArgs>(
      args: SelectSubset<T, test_model_4UpdateArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Delete zero or more Test_model_4s.
     * @param {test_model_4DeleteManyArgs} args - Arguments to filter Test_model_4s to delete.
     * @example
     * // Delete a few Test_model_4s
     * const { count } = await prisma.test_model_4.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_model_4DeleteManyArgs>(
      args?: SelectSubset<T, test_model_4DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_model_4s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_4UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_model_4s
     * const test_model_4 = await prisma.test_model_4.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_model_4UpdateManyArgs>(
      args: SelectSubset<T, test_model_4UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_model_4.
     * @param {test_model_4UpsertArgs} args - Arguments to update or create a Test_model_4.
     * @example
     * // Update or create a Test_model_4
     * const test_model_4 = await prisma.test_model_4.upsert({
     *   create: {
     *     // ... data to create a Test_model_4
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_model_4 we want to update
     *   }
     * })
    **/
    upsert<T extends test_model_4UpsertArgs>(
      args: SelectSubset<T, test_model_4UpsertArgs>
    ): Prisma__test_model_4Client<test_model_4GetPayload<T>>

    /**
     * Count the number of Test_model_4s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_4CountArgs} args - Arguments to filter Test_model_4s to count.
     * @example
     * // Count the number of Test_model_4s
     * const count = await prisma.test_model_4.count({
     *   where: {
     *     // ... the filter for the Test_model_4s we want to count
     *   }
     * })
    **/
    count<T extends test_model_4CountArgs>(
      args?: Subset<T, test_model_4CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_model_4CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_model_4.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_4AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_model_4AggregateArgs>(args: Subset<T, Test_model_4AggregateArgs>): PrismaPromise<GetTest_model_4AggregateType<T>>

    /**
     * Group by Test_model_4.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_4GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Test_model_4GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_model_4GroupByArgs['orderBy'] }
        : { orderBy?: Test_model_4GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Test_model_4GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_model_4GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for test_model_4.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__test_model_4Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * test_model_4 base type for findUnique actions
   */
  export type test_model_4FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter, which test_model_4 to fetch.
     * 
    **/
    where: test_model_4WhereUniqueInput
  }

  /**
   * test_model_4: findUnique
   */
  export interface test_model_4FindUniqueArgs extends test_model_4FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_4 findUniqueOrThrow
   */
  export type test_model_4FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter, which test_model_4 to fetch.
     * 
    **/
    where: test_model_4WhereUniqueInput
  }


  /**
   * test_model_4 base type for findFirst actions
   */
  export type test_model_4FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter, which test_model_4 to fetch.
     * 
    **/
    where?: test_model_4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_4s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_4OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_4s.
     * 
    **/
    cursor?: test_model_4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_4s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_4s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_4s.
     * 
    **/
    distinct?: Enumerable<Test_model_4ScalarFieldEnum>
  }

  /**
   * test_model_4: findFirst
   */
  export interface test_model_4FindFirstArgs extends test_model_4FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_4 findFirstOrThrow
   */
  export type test_model_4FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter, which test_model_4 to fetch.
     * 
    **/
    where?: test_model_4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_4s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_4OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_4s.
     * 
    **/
    cursor?: test_model_4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_4s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_4s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_4s.
     * 
    **/
    distinct?: Enumerable<Test_model_4ScalarFieldEnum>
  }


  /**
   * test_model_4 findMany
   */
  export type test_model_4FindManyArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter, which test_model_4s to fetch.
     * 
    **/
    where?: test_model_4WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_4s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_4OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_model_4s.
     * 
    **/
    cursor?: test_model_4WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_4s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_4s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Test_model_4ScalarFieldEnum>
  }


  /**
   * test_model_4 create
   */
  export type test_model_4CreateArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * The data needed to create a test_model_4.
     * 
    **/
    data: XOR<test_model_4CreateInput, test_model_4UncheckedCreateInput>
  }


  /**
   * test_model_4 createMany
   */
  export type test_model_4CreateManyArgs = {
    /**
     * The data used to create many test_model_4s.
     * 
    **/
    data: Enumerable<test_model_4CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * test_model_4 update
   */
  export type test_model_4UpdateArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * The data needed to update a test_model_4.
     * 
    **/
    data: XOR<test_model_4UpdateInput, test_model_4UncheckedUpdateInput>
    /**
     * Choose, which test_model_4 to update.
     * 
    **/
    where: test_model_4WhereUniqueInput
  }


  /**
   * test_model_4 updateMany
   */
  export type test_model_4UpdateManyArgs = {
    /**
     * The data used to update test_model_4s.
     * 
    **/
    data: XOR<test_model_4UpdateManyMutationInput, test_model_4UncheckedUpdateManyInput>
    /**
     * Filter which test_model_4s to update
     * 
    **/
    where?: test_model_4WhereInput
  }


  /**
   * test_model_4 upsert
   */
  export type test_model_4UpsertArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * The filter to search for the test_model_4 to update in case it exists.
     * 
    **/
    where: test_model_4WhereUniqueInput
    /**
     * In case the test_model_4 found by the `where` argument doesn't exist, create a new test_model_4 with this data.
     * 
    **/
    create: XOR<test_model_4CreateInput, test_model_4UncheckedCreateInput>
    /**
     * In case the test_model_4 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<test_model_4UpdateInput, test_model_4UncheckedUpdateInput>
  }


  /**
   * test_model_4 delete
   */
  export type test_model_4DeleteArgs = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
    /**
     * Filter which test_model_4 to delete.
     * 
    **/
    where: test_model_4WhereUniqueInput
  }


  /**
   * test_model_4 deleteMany
   */
  export type test_model_4DeleteManyArgs = {
    /**
     * Filter which test_model_4s to delete
     * 
    **/
    where?: test_model_4WhereInput
  }


  /**
   * test_model_4 without action
   */
  export type test_model_4Args = {
    /**
     * Select specific fields to fetch from the test_model_4
     * 
    **/
    select?: test_model_4Select | null
  }



  /**
   * Model test_model_5
   */


  export type AggregateTest_model_5 = {
    _count: Test_model_5CountAggregateOutputType | null
    _min: Test_model_5MinAggregateOutputType | null
    _max: Test_model_5MaxAggregateOutputType | null
  }

  export type Test_model_5MinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_5MaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type Test_model_5CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Test_model_5MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_5MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Test_model_5CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Test_model_5AggregateArgs = {
    /**
     * Filter which test_model_5 to aggregate.
     * 
    **/
    where?: test_model_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_5s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_5OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: test_model_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_5s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_5s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_model_5s
    **/
    _count?: true | Test_model_5CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_model_5MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_model_5MaxAggregateInputType
  }

  export type GetTest_model_5AggregateType<T extends Test_model_5AggregateArgs> = {
        [P in keyof T & keyof AggregateTest_model_5]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_model_5[P]>
      : GetScalarType<T[P], AggregateTest_model_5[P]>
  }




  export type Test_model_5GroupByArgs = {
    where?: test_model_5WhereInput
    orderBy?: Enumerable<test_model_5OrderByWithAggregationInput>
    by: Array<Test_model_5ScalarFieldEnum>
    having?: test_model_5ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_model_5CountAggregateInputType | true
    _min?: Test_model_5MinAggregateInputType
    _max?: Test_model_5MaxAggregateInputType
  }


  export type Test_model_5GroupByOutputType = {
    id: string
    name: string
    _count: Test_model_5CountAggregateOutputType | null
    _min: Test_model_5MinAggregateOutputType | null
    _max: Test_model_5MaxAggregateOutputType | null
  }

  type GetTest_model_5GroupByPayload<T extends Test_model_5GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Test_model_5GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_model_5GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_model_5GroupByOutputType[P]>
            : GetScalarType<T[P], Test_model_5GroupByOutputType[P]>
        }
      >
    >


  export type test_model_5Select = {
    id?: boolean
    name?: boolean
  }


  export type test_model_5GetPayload<S extends boolean | null | undefined | test_model_5Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? test_model_5 :
    S extends undefined ? never :
    S extends { include: any } & (test_model_5Args | test_model_5FindManyArgs)
    ? test_model_5 
    : S extends { select: any } & (test_model_5Args | test_model_5FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof test_model_5 ? test_model_5[P] : never
  } 
      : test_model_5


  type test_model_5CountArgs = Merge<
    Omit<test_model_5FindManyArgs, 'select' | 'include'> & {
      select?: Test_model_5CountAggregateInputType | true
    }
  >

  export interface test_model_5Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Test_model_5 that matches the filter.
     * @param {test_model_5FindUniqueArgs} args - Arguments to find a Test_model_5
     * @example
     * // Get one Test_model_5
     * const test_model_5 = await prisma.test_model_5.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test_model_5FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, test_model_5FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'test_model_5'> extends True ? Prisma__test_model_5Client<test_model_5GetPayload<T>> : Prisma__test_model_5Client<test_model_5GetPayload<T> | null, null>

    /**
     * Find one Test_model_5 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {test_model_5FindUniqueOrThrowArgs} args - Arguments to find a Test_model_5
     * @example
     * // Get one Test_model_5
     * const test_model_5 = await prisma.test_model_5.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test_model_5FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, test_model_5FindUniqueOrThrowArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Find the first Test_model_5 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_5FindFirstArgs} args - Arguments to find a Test_model_5
     * @example
     * // Get one Test_model_5
     * const test_model_5 = await prisma.test_model_5.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test_model_5FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, test_model_5FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'test_model_5'> extends True ? Prisma__test_model_5Client<test_model_5GetPayload<T>> : Prisma__test_model_5Client<test_model_5GetPayload<T> | null, null>

    /**
     * Find the first Test_model_5 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_5FindFirstOrThrowArgs} args - Arguments to find a Test_model_5
     * @example
     * // Get one Test_model_5
     * const test_model_5 = await prisma.test_model_5.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test_model_5FindFirstOrThrowArgs>(
      args?: SelectSubset<T, test_model_5FindFirstOrThrowArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Find zero or more Test_model_5s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_5FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_model_5s
     * const test_model_5s = await prisma.test_model_5.findMany()
     * 
     * // Get first 10 Test_model_5s
     * const test_model_5s = await prisma.test_model_5.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_model_5WithIdOnly = await prisma.test_model_5.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends test_model_5FindManyArgs>(
      args?: SelectSubset<T, test_model_5FindManyArgs>
    ): PrismaPromise<Array<test_model_5GetPayload<T>>>

    /**
     * Create a Test_model_5.
     * @param {test_model_5CreateArgs} args - Arguments to create a Test_model_5.
     * @example
     * // Create one Test_model_5
     * const Test_model_5 = await prisma.test_model_5.create({
     *   data: {
     *     // ... data to create a Test_model_5
     *   }
     * })
     * 
    **/
    create<T extends test_model_5CreateArgs>(
      args: SelectSubset<T, test_model_5CreateArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Create many Test_model_5s.
     *     @param {test_model_5CreateManyArgs} args - Arguments to create many Test_model_5s.
     *     @example
     *     // Create many Test_model_5s
     *     const test_model_5 = await prisma.test_model_5.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends test_model_5CreateManyArgs>(
      args?: SelectSubset<T, test_model_5CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test_model_5.
     * @param {test_model_5DeleteArgs} args - Arguments to delete one Test_model_5.
     * @example
     * // Delete one Test_model_5
     * const Test_model_5 = await prisma.test_model_5.delete({
     *   where: {
     *     // ... filter to delete one Test_model_5
     *   }
     * })
     * 
    **/
    delete<T extends test_model_5DeleteArgs>(
      args: SelectSubset<T, test_model_5DeleteArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Update one Test_model_5.
     * @param {test_model_5UpdateArgs} args - Arguments to update one Test_model_5.
     * @example
     * // Update one Test_model_5
     * const test_model_5 = await prisma.test_model_5.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test_model_5UpdateArgs>(
      args: SelectSubset<T, test_model_5UpdateArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Delete zero or more Test_model_5s.
     * @param {test_model_5DeleteManyArgs} args - Arguments to filter Test_model_5s to delete.
     * @example
     * // Delete a few Test_model_5s
     * const { count } = await prisma.test_model_5.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test_model_5DeleteManyArgs>(
      args?: SelectSubset<T, test_model_5DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_model_5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_5UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_model_5s
     * const test_model_5 = await prisma.test_model_5.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test_model_5UpdateManyArgs>(
      args: SelectSubset<T, test_model_5UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test_model_5.
     * @param {test_model_5UpsertArgs} args - Arguments to update or create a Test_model_5.
     * @example
     * // Update or create a Test_model_5
     * const test_model_5 = await prisma.test_model_5.upsert({
     *   create: {
     *     // ... data to create a Test_model_5
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_model_5 we want to update
     *   }
     * })
    **/
    upsert<T extends test_model_5UpsertArgs>(
      args: SelectSubset<T, test_model_5UpsertArgs>
    ): Prisma__test_model_5Client<test_model_5GetPayload<T>>

    /**
     * Count the number of Test_model_5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_model_5CountArgs} args - Arguments to filter Test_model_5s to count.
     * @example
     * // Count the number of Test_model_5s
     * const count = await prisma.test_model_5.count({
     *   where: {
     *     // ... the filter for the Test_model_5s we want to count
     *   }
     * })
    **/
    count<T extends test_model_5CountArgs>(
      args?: Subset<T, test_model_5CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_model_5CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_model_5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_5AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_model_5AggregateArgs>(args: Subset<T, Test_model_5AggregateArgs>): PrismaPromise<GetTest_model_5AggregateType<T>>

    /**
     * Group by Test_model_5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_model_5GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Test_model_5GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_model_5GroupByArgs['orderBy'] }
        : { orderBy?: Test_model_5GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Test_model_5GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_model_5GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for test_model_5.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__test_model_5Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * test_model_5 base type for findUnique actions
   */
  export type test_model_5FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter, which test_model_5 to fetch.
     * 
    **/
    where: test_model_5WhereUniqueInput
  }

  /**
   * test_model_5: findUnique
   */
  export interface test_model_5FindUniqueArgs extends test_model_5FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_5 findUniqueOrThrow
   */
  export type test_model_5FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter, which test_model_5 to fetch.
     * 
    **/
    where: test_model_5WhereUniqueInput
  }


  /**
   * test_model_5 base type for findFirst actions
   */
  export type test_model_5FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter, which test_model_5 to fetch.
     * 
    **/
    where?: test_model_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_5s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_5OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_5s.
     * 
    **/
    cursor?: test_model_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_5s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_5s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_5s.
     * 
    **/
    distinct?: Enumerable<Test_model_5ScalarFieldEnum>
  }

  /**
   * test_model_5: findFirst
   */
  export interface test_model_5FindFirstArgs extends test_model_5FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test_model_5 findFirstOrThrow
   */
  export type test_model_5FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter, which test_model_5 to fetch.
     * 
    **/
    where?: test_model_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_5s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_5OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_model_5s.
     * 
    **/
    cursor?: test_model_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_5s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_5s.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_model_5s.
     * 
    **/
    distinct?: Enumerable<Test_model_5ScalarFieldEnum>
  }


  /**
   * test_model_5 findMany
   */
  export type test_model_5FindManyArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter, which test_model_5s to fetch.
     * 
    **/
    where?: test_model_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_model_5s to fetch.
     * 
    **/
    orderBy?: Enumerable<test_model_5OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_model_5s.
     * 
    **/
    cursor?: test_model_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_model_5s from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_model_5s.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Test_model_5ScalarFieldEnum>
  }


  /**
   * test_model_5 create
   */
  export type test_model_5CreateArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * The data needed to create a test_model_5.
     * 
    **/
    data: XOR<test_model_5CreateInput, test_model_5UncheckedCreateInput>
  }


  /**
   * test_model_5 createMany
   */
  export type test_model_5CreateManyArgs = {
    /**
     * The data used to create many test_model_5s.
     * 
    **/
    data: Enumerable<test_model_5CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * test_model_5 update
   */
  export type test_model_5UpdateArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * The data needed to update a test_model_5.
     * 
    **/
    data: XOR<test_model_5UpdateInput, test_model_5UncheckedUpdateInput>
    /**
     * Choose, which test_model_5 to update.
     * 
    **/
    where: test_model_5WhereUniqueInput
  }


  /**
   * test_model_5 updateMany
   */
  export type test_model_5UpdateManyArgs = {
    /**
     * The data used to update test_model_5s.
     * 
    **/
    data: XOR<test_model_5UpdateManyMutationInput, test_model_5UncheckedUpdateManyInput>
    /**
     * Filter which test_model_5s to update
     * 
    **/
    where?: test_model_5WhereInput
  }


  /**
   * test_model_5 upsert
   */
  export type test_model_5UpsertArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * The filter to search for the test_model_5 to update in case it exists.
     * 
    **/
    where: test_model_5WhereUniqueInput
    /**
     * In case the test_model_5 found by the `where` argument doesn't exist, create a new test_model_5 with this data.
     * 
    **/
    create: XOR<test_model_5CreateInput, test_model_5UncheckedCreateInput>
    /**
     * In case the test_model_5 was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<test_model_5UpdateInput, test_model_5UncheckedUpdateInput>
  }


  /**
   * test_model_5 delete
   */
  export type test_model_5DeleteArgs = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
    /**
     * Filter which test_model_5 to delete.
     * 
    **/
    where: test_model_5WhereUniqueInput
  }


  /**
   * test_model_5 deleteMany
   */
  export type test_model_5DeleteManyArgs = {
    /**
     * Filter which test_model_5s to delete
     * 
    **/
    where?: test_model_5WhereInput
  }


  /**
   * test_model_5 without action
   */
  export type test_model_5Args = {
    /**
     * Select specific fields to fetch from the test_model_5
     * 
    **/
    select?: test_model_5Select | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
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
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    company: 'company',
    endDate: 'endDate',
    jobTitle: 'jobTitle',
    startDate: 'startDate',
    userId: 'userId'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    gradeId: 'gradeId',
    archived: 'archived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    degree: 'degree',
    school: 'school',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    archived: 'archived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    code: 'code',
    name: 'name'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const InformationScalarFieldEnum: {
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
  };

  export type InformationScalarFieldEnum = (typeof InformationScalarFieldEnum)[keyof typeof InformationScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestTableScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TestTableScalarFieldEnum = (typeof TestTableScalarFieldEnum)[keyof typeof TestTableScalarFieldEnum]


  export const Test_model_2ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Test_model_2ScalarFieldEnum = (typeof Test_model_2ScalarFieldEnum)[keyof typeof Test_model_2ScalarFieldEnum]


  export const Test_model_3ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Test_model_3ScalarFieldEnum = (typeof Test_model_3ScalarFieldEnum)[keyof typeof Test_model_3ScalarFieldEnum]


  export const Test_model_4ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Test_model_4ScalarFieldEnum = (typeof Test_model_4ScalarFieldEnum)[keyof typeof Test_model_4ScalarFieldEnum]


  export const Test_model_5ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Test_model_5ScalarFieldEnum = (typeof Test_model_5ScalarFieldEnum)[keyof typeof Test_model_5ScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    username?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    archived?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    accessStatus?: EnumAccessStatusFilter | AccessStatus
    accessLevel?: EnumAccessLevelFilter | AccessLevel
    accessMode?: EnumAccessModeFilter | AccessMode
    classId?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    careers?: CareerListRelationFilter
    Education?: EducationListRelationFilter
    information?: XOR<InformationRelationFilter, InformationWhereInput> | null
    class?: XOR<ClassRelationFilter, ClassWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessStatus?: SortOrder
    accessLevel?: SortOrder
    accessMode?: SortOrder
    classId?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    careers?: CareerOrderByRelationAggregateInput
    Education?: EducationOrderByRelationAggregateInput
    information?: InformationOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    username?: string
    id_email?: UserIdEmailCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessStatus?: SortOrder
    accessLevel?: SortOrder
    accessMode?: SortOrder
    classId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    username?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    archived?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    accessStatus?: EnumAccessStatusWithAggregatesFilter | AccessStatus
    accessLevel?: EnumAccessLevelWithAggregatesFilter | AccessLevel
    accessMode?: EnumAccessModeWithAggregatesFilter | AccessMode
    classId?: StringNullableWithAggregatesFilter | string | null
  }

  export type GradeWhereInput = {
    AND?: Enumerable<GradeWhereInput>
    OR?: Enumerable<GradeWhereInput>
    NOT?: Enumerable<GradeWhereInput>
    id?: StringFilter | string
    archived?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    code?: StringFilter | string
    name?: StringFilter | string
    classes?: ClassListRelationFilter
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    name?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type GradeWhereUniqueInput = {
    id?: string
    code?: string
  }

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GradeScalarWhereWithAggregatesInput>
    OR?: Enumerable<GradeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GradeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    archived?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ClassWhereInput = {
    AND?: Enumerable<ClassWhereInput>
    OR?: Enumerable<ClassWhereInput>
    NOT?: Enumerable<ClassWhereInput>
    id?: StringFilter | string
    gradeId?: StringFilter | string
    archived?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    grade?: XOR<GradeRelationFilter, GradeWhereInput>
    users?: UserListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    gradeId?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    grade?: GradeOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = {
    id?: string
  }

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    gradeId?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClassScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClassScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClassScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    gradeId?: StringWithAggregatesFilter | string
    archived?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type InformationWhereInput = {
    AND?: Enumerable<InformationWhereInput>
    OR?: Enumerable<InformationWhereInput>
    NOT?: Enumerable<InformationWhereInput>
    id?: StringFilter | string
    bio?: StringNullableFilter | string | null
    avatarUrl?: StringNullableFilter | string | null
    emailPublicity?: EnumScopePublicityFilter | ScopePublicity
    phone?: StringNullableFilter | string | null
    phonePublicity?: EnumScopePublicityFilter | ScopePublicity
    facebookUrl?: StringNullableFilter | string | null
    facebookPublicity?: EnumScopePublicityFilter | ScopePublicity
    dateOfBirth?: DateTimeNullableFilter | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFilter | ScopePublicity
    userId?: StringFilter | string
    className?: StringNullableFilter | string | null
    gradeCode?: StringNullableFilter | string | null
    gradeName?: StringNullableFilter | string | null
    userEmail?: StringNullableFilter | string | null
    coverImageUrl?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type InformationOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    emailPublicity?: SortOrder
    phone?: SortOrder
    phonePublicity?: SortOrder
    facebookUrl?: SortOrder
    facebookPublicity?: SortOrder
    dateOfBirth?: SortOrder
    dateOfBirthPublicity?: SortOrder
    userId?: SortOrder
    className?: SortOrder
    gradeCode?: SortOrder
    gradeName?: SortOrder
    userEmail?: SortOrder
    coverImageUrl?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InformationWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type InformationOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    emailPublicity?: SortOrder
    phone?: SortOrder
    phonePublicity?: SortOrder
    facebookUrl?: SortOrder
    facebookPublicity?: SortOrder
    dateOfBirth?: SortOrder
    dateOfBirthPublicity?: SortOrder
    userId?: SortOrder
    className?: SortOrder
    gradeCode?: SortOrder
    gradeName?: SortOrder
    userEmail?: SortOrder
    coverImageUrl?: SortOrder
    _count?: InformationCountOrderByAggregateInput
    _max?: InformationMaxOrderByAggregateInput
    _min?: InformationMinOrderByAggregateInput
  }

  export type InformationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InformationScalarWhereWithAggregatesInput>
    OR?: Enumerable<InformationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InformationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    avatarUrl?: StringNullableWithAggregatesFilter | string | null
    emailPublicity?: EnumScopePublicityWithAggregatesFilter | ScopePublicity
    phone?: StringNullableWithAggregatesFilter | string | null
    phonePublicity?: EnumScopePublicityWithAggregatesFilter | ScopePublicity
    facebookUrl?: StringNullableWithAggregatesFilter | string | null
    facebookPublicity?: EnumScopePublicityWithAggregatesFilter | ScopePublicity
    dateOfBirth?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityWithAggregatesFilter | ScopePublicity
    userId?: StringWithAggregatesFilter | string
    className?: StringNullableWithAggregatesFilter | string | null
    gradeCode?: StringNullableWithAggregatesFilter | string | null
    gradeName?: StringNullableWithAggregatesFilter | string | null
    userEmail?: StringNullableWithAggregatesFilter | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter | string | null
  }

  export type CareerWhereInput = {
    AND?: Enumerable<CareerWhereInput>
    OR?: Enumerable<CareerWhereInput>
    NOT?: Enumerable<CareerWhereInput>
    id?: StringFilter | string
    company?: StringFilter | string
    endDate?: DateTimeFilter | Date | string
    jobTitle?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    endDate?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CareerWhereUniqueInput = {
    id?: string
  }

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    endDate?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    userId?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CareerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CareerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CareerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    company?: StringWithAggregatesFilter | string
    endDate?: DateTimeWithAggregatesFilter | Date | string
    jobTitle?: StringWithAggregatesFilter | string
    startDate?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
  }

  export type EducationWhereInput = {
    AND?: Enumerable<EducationWhereInput>
    OR?: Enumerable<EducationWhereInput>
    NOT?: Enumerable<EducationWhereInput>
    id?: StringFilter | string
    degree?: StringNullableFilter | string | null
    school?: StringFilter | string
    startDate?: DateTimeNullableFilter | Date | string | null
    endDate?: DateTimeNullableFilter | Date | string | null
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = {
    id?: string
  }

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EducationScalarWhereWithAggregatesInput>
    OR?: Enumerable<EducationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EducationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    degree?: StringNullableWithAggregatesFilter | string | null
    school?: StringWithAggregatesFilter | string
    startDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    userId?: StringWithAggregatesFilter | string
  }

  export type TestTableWhereInput = {
    AND?: Enumerable<TestTableWhereInput>
    OR?: Enumerable<TestTableWhereInput>
    NOT?: Enumerable<TestTableWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type TestTableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestTableWhereUniqueInput = {
    id?: string
  }

  export type TestTableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TestTableCountOrderByAggregateInput
    _max?: TestTableMaxOrderByAggregateInput
    _min?: TestTableMinOrderByAggregateInput
  }

  export type TestTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestTableScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type test_model_2WhereInput = {
    AND?: Enumerable<test_model_2WhereInput>
    OR?: Enumerable<test_model_2WhereInput>
    NOT?: Enumerable<test_model_2WhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type test_model_2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_2WhereUniqueInput = {
    id?: string
  }

  export type test_model_2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: test_model_2CountOrderByAggregateInput
    _max?: test_model_2MaxOrderByAggregateInput
    _min?: test_model_2MinOrderByAggregateInput
  }

  export type test_model_2ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<test_model_2ScalarWhereWithAggregatesInput>
    OR?: Enumerable<test_model_2ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<test_model_2ScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type test_model_3WhereInput = {
    AND?: Enumerable<test_model_3WhereInput>
    OR?: Enumerable<test_model_3WhereInput>
    NOT?: Enumerable<test_model_3WhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type test_model_3OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_3WhereUniqueInput = {
    id?: string
  }

  export type test_model_3OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: test_model_3CountOrderByAggregateInput
    _max?: test_model_3MaxOrderByAggregateInput
    _min?: test_model_3MinOrderByAggregateInput
  }

  export type test_model_3ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<test_model_3ScalarWhereWithAggregatesInput>
    OR?: Enumerable<test_model_3ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<test_model_3ScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type test_model_4WhereInput = {
    AND?: Enumerable<test_model_4WhereInput>
    OR?: Enumerable<test_model_4WhereInput>
    NOT?: Enumerable<test_model_4WhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type test_model_4OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_4WhereUniqueInput = {
    id?: string
  }

  export type test_model_4OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: test_model_4CountOrderByAggregateInput
    _max?: test_model_4MaxOrderByAggregateInput
    _min?: test_model_4MinOrderByAggregateInput
  }

  export type test_model_4ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<test_model_4ScalarWhereWithAggregatesInput>
    OR?: Enumerable<test_model_4ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<test_model_4ScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type test_model_5WhereInput = {
    AND?: Enumerable<test_model_5WhereInput>
    OR?: Enumerable<test_model_5WhereInput>
    NOT?: Enumerable<test_model_5WhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type test_model_5OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_5WhereUniqueInput = {
    id?: string
  }

  export type test_model_5OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: test_model_5CountOrderByAggregateInput
    _max?: test_model_5MaxOrderByAggregateInput
    _min?: test_model_5MinOrderByAggregateInput
  }

  export type test_model_5ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<test_model_5ScalarWhereWithAggregatesInput>
    OR?: Enumerable<test_model_5ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<test_model_5ScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountCreateNestedManyWithoutUserInput
    careers?: CareerCreateNestedManyWithoutUserInput
    Education?: EducationCreateNestedManyWithoutUserInput
    information?: InformationCreateNestedOneWithoutUserInput
    class?: ClassCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    careers?: CareerUncheckedCreateNestedManyWithoutUserInput
    Education?: EducationUncheckedCreateNestedManyWithoutUserInput
    information?: InformationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUpdateManyWithoutUserNestedInput
    careers?: CareerUpdateManyWithoutUserNestedInput
    Education?: EducationUpdateManyWithoutUserNestedInput
    information?: InformationUpdateOneWithoutUserNestedInput
    class?: ClassUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    careers?: CareerUncheckedUpdateManyWithoutUserNestedInput
    Education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    information?: InformationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GradeCreateInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    code: string
    name: string
    classes?: ClassCreateNestedManyWithoutGradeInput
  }

  export type GradeUncheckedCreateInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    code: string
    name: string
    classes?: ClassUncheckedCreateNestedManyWithoutGradeInput
  }

  export type GradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutGradeNestedInput
  }

  export type GradeCreateManyInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    code: string
    name: string
  }

  export type GradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    grade: GradeCreateNestedOneWithoutClassesInput
    users?: UserCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    gradeId: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: GradeUpdateOneRequiredWithoutClassesNestedInput
    users?: UserUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradeId?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    gradeId: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradeId?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InformationCreateInput = {
    id?: string
    bio?: string | null
    avatarUrl?: string | null
    emailPublicity?: ScopePublicity
    phone?: string | null
    phonePublicity?: ScopePublicity
    facebookUrl?: string | null
    facebookPublicity?: ScopePublicity
    dateOfBirth?: Date | string | null
    dateOfBirthPublicity?: ScopePublicity
    className?: string | null
    gradeCode?: string | null
    gradeName?: string | null
    userEmail?: string | null
    coverImageUrl?: string | null
    user: UserCreateNestedOneWithoutInformationInput
  }

  export type InformationUncheckedCreateInput = {
    id?: string
    bio?: string | null
    avatarUrl?: string | null
    emailPublicity?: ScopePublicity
    phone?: string | null
    phonePublicity?: ScopePublicity
    facebookUrl?: string | null
    facebookPublicity?: ScopePublicity
    dateOfBirth?: Date | string | null
    dateOfBirthPublicity?: ScopePublicity
    userId: string
    className?: string | null
    gradeCode?: string | null
    gradeName?: string | null
    userEmail?: string | null
    coverImageUrl?: string | null
  }

  export type InformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInformationNestedInput
  }

  export type InformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    userId?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InformationCreateManyInput = {
    id?: string
    bio?: string | null
    avatarUrl?: string | null
    emailPublicity?: ScopePublicity
    phone?: string | null
    phonePublicity?: ScopePublicity
    facebookUrl?: string | null
    facebookPublicity?: ScopePublicity
    dateOfBirth?: Date | string | null
    dateOfBirthPublicity?: ScopePublicity
    userId: string
    className?: string | null
    gradeCode?: string | null
    gradeName?: string | null
    userEmail?: string | null
    coverImageUrl?: string | null
  }

  export type InformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    userId?: StringFieldUpdateOperationsInput | string
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CareerCreateInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
    user: UserCreateNestedOneWithoutCareersInput
  }

  export type CareerUncheckedCreateInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
    userId: string
  }

  export type CareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CareerCreateManyInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
    userId: string
  }

  export type CareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    userId: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TestTableCreateInput = {
    id?: string
    name: string
  }

  export type TestTableUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type TestTableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestTableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestTableCreateManyInput = {
    id?: string
    name: string
  }

  export type TestTableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestTableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_2CreateInput = {
    id: string
    name: string
  }

  export type test_model_2UncheckedCreateInput = {
    id: string
    name: string
  }

  export type test_model_2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_2CreateManyInput = {
    id: string
    name: string
  }

  export type test_model_2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_3CreateInput = {
    id: string
    name: string
  }

  export type test_model_3UncheckedCreateInput = {
    id: string
    name: string
  }

  export type test_model_3UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_3UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_3CreateManyInput = {
    id: string
    name: string
  }

  export type test_model_3UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_3UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_4CreateInput = {
    id: string
    name: string
  }

  export type test_model_4UncheckedCreateInput = {
    id: string
    name: string
  }

  export type test_model_4UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_4UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_4CreateManyInput = {
    id: string
    name: string
  }

  export type test_model_4UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_4UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_5CreateInput = {
    id: string
    name: string
  }

  export type test_model_5UncheckedCreateInput = {
    id: string
    name: string
  }

  export type test_model_5UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_5UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_5CreateManyInput = {
    id: string
    name: string
  }

  export type test_model_5UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type test_model_5UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumAccessStatusFilter = {
    equals?: AccessStatus
    in?: Enumerable<AccessStatus>
    notIn?: Enumerable<AccessStatus>
    not?: NestedEnumAccessStatusFilter | AccessStatus
  }

  export type EnumAccessLevelFilter = {
    equals?: AccessLevel
    in?: Enumerable<AccessLevel>
    notIn?: Enumerable<AccessLevel>
    not?: NestedEnumAccessLevelFilter | AccessLevel
  }

  export type EnumAccessModeFilter = {
    equals?: AccessMode
    in?: Enumerable<AccessMode>
    notIn?: Enumerable<AccessMode>
    not?: NestedEnumAccessModeFilter | AccessMode
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CareerListRelationFilter = {
    every?: CareerWhereInput
    some?: CareerWhereInput
    none?: CareerWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type InformationRelationFilter = {
    is?: InformationWhereInput | null
    isNot?: InformationWhereInput | null
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserIdEmailCompoundUniqueInput = {
    id: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessStatus?: SortOrder
    accessLevel?: SortOrder
    accessMode?: SortOrder
    classId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessStatus?: SortOrder
    accessLevel?: SortOrder
    accessMode?: SortOrder
    classId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    password?: SortOrder
    image?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessStatus?: SortOrder
    accessLevel?: SortOrder
    accessMode?: SortOrder
    classId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumAccessStatusWithAggregatesFilter = {
    equals?: AccessStatus
    in?: Enumerable<AccessStatus>
    notIn?: Enumerable<AccessStatus>
    not?: NestedEnumAccessStatusWithAggregatesFilter | AccessStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAccessStatusFilter
    _max?: NestedEnumAccessStatusFilter
  }

  export type EnumAccessLevelWithAggregatesFilter = {
    equals?: AccessLevel
    in?: Enumerable<AccessLevel>
    notIn?: Enumerable<AccessLevel>
    not?: NestedEnumAccessLevelWithAggregatesFilter | AccessLevel
    _count?: NestedIntFilter
    _min?: NestedEnumAccessLevelFilter
    _max?: NestedEnumAccessLevelFilter
  }

  export type EnumAccessModeWithAggregatesFilter = {
    equals?: AccessMode
    in?: Enumerable<AccessMode>
    notIn?: Enumerable<AccessMode>
    not?: NestedEnumAccessModeWithAggregatesFilter | AccessMode
    _count?: NestedIntFilter
    _min?: NestedEnumAccessModeFilter
    _max?: NestedEnumAccessModeFilter
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type GradeRelationFilter = {
    is?: GradeWhereInput
    isNot?: GradeWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    gradeId?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    gradeId?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    gradeId?: SortOrder
    archived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EnumScopePublicityFilter = {
    equals?: ScopePublicity
    in?: Enumerable<ScopePublicity>
    notIn?: Enumerable<ScopePublicity>
    not?: NestedEnumScopePublicityFilter | ScopePublicity
  }

  export type InformationCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    emailPublicity?: SortOrder
    phone?: SortOrder
    phonePublicity?: SortOrder
    facebookUrl?: SortOrder
    facebookPublicity?: SortOrder
    dateOfBirth?: SortOrder
    dateOfBirthPublicity?: SortOrder
    userId?: SortOrder
    className?: SortOrder
    gradeCode?: SortOrder
    gradeName?: SortOrder
    userEmail?: SortOrder
    coverImageUrl?: SortOrder
  }

  export type InformationMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    emailPublicity?: SortOrder
    phone?: SortOrder
    phonePublicity?: SortOrder
    facebookUrl?: SortOrder
    facebookPublicity?: SortOrder
    dateOfBirth?: SortOrder
    dateOfBirthPublicity?: SortOrder
    userId?: SortOrder
    className?: SortOrder
    gradeCode?: SortOrder
    gradeName?: SortOrder
    userEmail?: SortOrder
    coverImageUrl?: SortOrder
  }

  export type InformationMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    emailPublicity?: SortOrder
    phone?: SortOrder
    phonePublicity?: SortOrder
    facebookUrl?: SortOrder
    facebookPublicity?: SortOrder
    dateOfBirth?: SortOrder
    dateOfBirthPublicity?: SortOrder
    userId?: SortOrder
    className?: SortOrder
    gradeCode?: SortOrder
    gradeName?: SortOrder
    userEmail?: SortOrder
    coverImageUrl?: SortOrder
  }

  export type EnumScopePublicityWithAggregatesFilter = {
    equals?: ScopePublicity
    in?: Enumerable<ScopePublicity>
    notIn?: Enumerable<ScopePublicity>
    not?: NestedEnumScopePublicityWithAggregatesFilter | ScopePublicity
    _count?: NestedIntFilter
    _min?: NestedEnumScopePublicityFilter
    _max?: NestedEnumScopePublicityFilter
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    endDate?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    userId?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    endDate?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    userId?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    endDate?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    userId?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
  }

  export type TestTableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestTableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestTableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_3CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_3MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_3MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_4CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_4MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_4MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_5CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_5MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type test_model_5MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CareerCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CareerCreateWithoutUserInput>, Enumerable<CareerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CareerCreateOrConnectWithoutUserInput>
    createMany?: CareerCreateManyUserInputEnvelope
    connect?: Enumerable<CareerWhereUniqueInput>
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EducationCreateWithoutUserInput>, Enumerable<EducationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EducationCreateOrConnectWithoutUserInput>
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: Enumerable<EducationWhereUniqueInput>
  }

  export type InformationCreateNestedOneWithoutUserInput = {
    create?: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
    connectOrCreate?: InformationCreateOrConnectWithoutUserInput
    connect?: InformationWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClassCreateWithoutUsersInput, ClassUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutUsersInput
    connect?: ClassWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type CareerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CareerCreateWithoutUserInput>, Enumerable<CareerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CareerCreateOrConnectWithoutUserInput>
    createMany?: CareerCreateManyUserInputEnvelope
    connect?: Enumerable<CareerWhereUniqueInput>
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EducationCreateWithoutUserInput>, Enumerable<EducationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EducationCreateOrConnectWithoutUserInput>
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: Enumerable<EducationWhereUniqueInput>
  }

  export type InformationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
    connectOrCreate?: InformationCreateOrConnectWithoutUserInput
    connect?: InformationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAccessStatusFieldUpdateOperationsInput = {
    set?: AccessStatus
  }

  export type EnumAccessLevelFieldUpdateOperationsInput = {
    set?: AccessLevel
  }

  export type EnumAccessModeFieldUpdateOperationsInput = {
    set?: AccessMode
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CareerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CareerCreateWithoutUserInput>, Enumerable<CareerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CareerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CareerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CareerCreateManyUserInputEnvelope
    set?: Enumerable<CareerWhereUniqueInput>
    disconnect?: Enumerable<CareerWhereUniqueInput>
    delete?: Enumerable<CareerWhereUniqueInput>
    connect?: Enumerable<CareerWhereUniqueInput>
    update?: Enumerable<CareerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CareerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CareerScalarWhereInput>
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EducationCreateWithoutUserInput>, Enumerable<EducationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EducationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EducationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EducationCreateManyUserInputEnvelope
    set?: Enumerable<EducationWhereUniqueInput>
    disconnect?: Enumerable<EducationWhereUniqueInput>
    delete?: Enumerable<EducationWhereUniqueInput>
    connect?: Enumerable<EducationWhereUniqueInput>
    update?: Enumerable<EducationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EducationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EducationScalarWhereInput>
  }

  export type InformationUpdateOneWithoutUserNestedInput = {
    create?: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
    connectOrCreate?: InformationCreateOrConnectWithoutUserInput
    upsert?: InformationUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: InformationWhereUniqueInput
    update?: XOR<InformationUpdateWithoutUserInput, InformationUncheckedUpdateWithoutUserInput>
  }

  export type ClassUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ClassCreateWithoutUsersInput, ClassUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutUsersInput
    upsert?: ClassUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<ClassUpdateWithoutUsersInput, ClassUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type CareerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CareerCreateWithoutUserInput>, Enumerable<CareerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CareerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CareerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CareerCreateManyUserInputEnvelope
    set?: Enumerable<CareerWhereUniqueInput>
    disconnect?: Enumerable<CareerWhereUniqueInput>
    delete?: Enumerable<CareerWhereUniqueInput>
    connect?: Enumerable<CareerWhereUniqueInput>
    update?: Enumerable<CareerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CareerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CareerScalarWhereInput>
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EducationCreateWithoutUserInput>, Enumerable<EducationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EducationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EducationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EducationCreateManyUserInputEnvelope
    set?: Enumerable<EducationWhereUniqueInput>
    disconnect?: Enumerable<EducationWhereUniqueInput>
    delete?: Enumerable<EducationWhereUniqueInput>
    connect?: Enumerable<EducationWhereUniqueInput>
    update?: Enumerable<EducationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EducationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EducationScalarWhereInput>
  }

  export type InformationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
    connectOrCreate?: InformationCreateOrConnectWithoutUserInput
    upsert?: InformationUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: InformationWhereUniqueInput
    update?: XOR<InformationUpdateWithoutUserInput, InformationUncheckedUpdateWithoutUserInput>
  }

  export type ClassCreateNestedManyWithoutGradeInput = {
    create?: XOR<Enumerable<ClassCreateWithoutGradeInput>, Enumerable<ClassUncheckedCreateWithoutGradeInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutGradeInput>
    createMany?: ClassCreateManyGradeInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
  }

  export type ClassUncheckedCreateNestedManyWithoutGradeInput = {
    create?: XOR<Enumerable<ClassCreateWithoutGradeInput>, Enumerable<ClassUncheckedCreateWithoutGradeInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutGradeInput>
    createMany?: ClassCreateManyGradeInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
  }

  export type ClassUpdateManyWithoutGradeNestedInput = {
    create?: XOR<Enumerable<ClassCreateWithoutGradeInput>, Enumerable<ClassUncheckedCreateWithoutGradeInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutGradeInput>
    upsert?: Enumerable<ClassUpsertWithWhereUniqueWithoutGradeInput>
    createMany?: ClassCreateManyGradeInputEnvelope
    set?: Enumerable<ClassWhereUniqueInput>
    disconnect?: Enumerable<ClassWhereUniqueInput>
    delete?: Enumerable<ClassWhereUniqueInput>
    connect?: Enumerable<ClassWhereUniqueInput>
    update?: Enumerable<ClassUpdateWithWhereUniqueWithoutGradeInput>
    updateMany?: Enumerable<ClassUpdateManyWithWhereWithoutGradeInput>
    deleteMany?: Enumerable<ClassScalarWhereInput>
  }

  export type ClassUncheckedUpdateManyWithoutGradeNestedInput = {
    create?: XOR<Enumerable<ClassCreateWithoutGradeInput>, Enumerable<ClassUncheckedCreateWithoutGradeInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutGradeInput>
    upsert?: Enumerable<ClassUpsertWithWhereUniqueWithoutGradeInput>
    createMany?: ClassCreateManyGradeInputEnvelope
    set?: Enumerable<ClassWhereUniqueInput>
    disconnect?: Enumerable<ClassWhereUniqueInput>
    delete?: Enumerable<ClassWhereUniqueInput>
    connect?: Enumerable<ClassWhereUniqueInput>
    update?: Enumerable<ClassUpdateWithWhereUniqueWithoutGradeInput>
    updateMany?: Enumerable<ClassUpdateManyWithWhereWithoutGradeInput>
    deleteMany?: Enumerable<ClassScalarWhereInput>
  }

  export type GradeCreateNestedOneWithoutClassesInput = {
    create?: XOR<GradeCreateWithoutClassesInput, GradeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: GradeCreateOrConnectWithoutClassesInput
    connect?: GradeWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutClassInput = {
    create?: XOR<Enumerable<UserCreateWithoutClassInput>, Enumerable<UserUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutClassInput>
    createMany?: UserCreateManyClassInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<Enumerable<UserCreateWithoutClassInput>, Enumerable<UserUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutClassInput>
    createMany?: UserCreateManyClassInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type GradeUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<GradeCreateWithoutClassesInput, GradeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: GradeCreateOrConnectWithoutClassesInput
    upsert?: GradeUpsertWithoutClassesInput
    connect?: GradeWhereUniqueInput
    update?: XOR<GradeUpdateWithoutClassesInput, GradeUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateManyWithoutClassNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutClassInput>, Enumerable<UserUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutClassInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutClassInput>
    createMany?: UserCreateManyClassInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutClassInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutClassInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutClassInput>, Enumerable<UserUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutClassInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutClassInput>
    createMany?: UserCreateManyClassInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutClassInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutClassInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutInformationInput = {
    create?: XOR<UserCreateWithoutInformationInput, UserUncheckedCreateWithoutInformationInput>
    connectOrCreate?: UserCreateOrConnectWithoutInformationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumScopePublicityFieldUpdateOperationsInput = {
    set?: ScopePublicity
  }

  export type UserUpdateOneRequiredWithoutInformationNestedInput = {
    create?: XOR<UserCreateWithoutInformationInput, UserUncheckedCreateWithoutInformationInput>
    connectOrCreate?: UserCreateOrConnectWithoutInformationInput
    upsert?: UserUpsertWithoutInformationInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInformationInput, UserUncheckedUpdateWithoutInformationInput>
  }

  export type UserCreateNestedOneWithoutCareersInput = {
    create?: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareersInput
    upsert?: UserUpsertWithoutCareersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCareersInput, UserUncheckedUpdateWithoutCareersInput>
  }

  export type UserCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    upsert?: UserUpsertWithoutEducationInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumAccessStatusFilter = {
    equals?: AccessStatus
    in?: Enumerable<AccessStatus>
    notIn?: Enumerable<AccessStatus>
    not?: NestedEnumAccessStatusFilter | AccessStatus
  }

  export type NestedEnumAccessLevelFilter = {
    equals?: AccessLevel
    in?: Enumerable<AccessLevel>
    notIn?: Enumerable<AccessLevel>
    not?: NestedEnumAccessLevelFilter | AccessLevel
  }

  export type NestedEnumAccessModeFilter = {
    equals?: AccessMode
    in?: Enumerable<AccessMode>
    notIn?: Enumerable<AccessMode>
    not?: NestedEnumAccessModeFilter | AccessMode
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumAccessStatusWithAggregatesFilter = {
    equals?: AccessStatus
    in?: Enumerable<AccessStatus>
    notIn?: Enumerable<AccessStatus>
    not?: NestedEnumAccessStatusWithAggregatesFilter | AccessStatus
    _count?: NestedIntFilter
    _min?: NestedEnumAccessStatusFilter
    _max?: NestedEnumAccessStatusFilter
  }

  export type NestedEnumAccessLevelWithAggregatesFilter = {
    equals?: AccessLevel
    in?: Enumerable<AccessLevel>
    notIn?: Enumerable<AccessLevel>
    not?: NestedEnumAccessLevelWithAggregatesFilter | AccessLevel
    _count?: NestedIntFilter
    _min?: NestedEnumAccessLevelFilter
    _max?: NestedEnumAccessLevelFilter
  }

  export type NestedEnumAccessModeWithAggregatesFilter = {
    equals?: AccessMode
    in?: Enumerable<AccessMode>
    notIn?: Enumerable<AccessMode>
    not?: NestedEnumAccessModeWithAggregatesFilter | AccessMode
    _count?: NestedIntFilter
    _min?: NestedEnumAccessModeFilter
    _max?: NestedEnumAccessModeFilter
  }

  export type NestedEnumScopePublicityFilter = {
    equals?: ScopePublicity
    in?: Enumerable<ScopePublicity>
    notIn?: Enumerable<ScopePublicity>
    not?: NestedEnumScopePublicityFilter | ScopePublicity
  }

  export type NestedEnumScopePublicityWithAggregatesFilter = {
    equals?: ScopePublicity
    in?: Enumerable<ScopePublicity>
    notIn?: Enumerable<ScopePublicity>
    not?: NestedEnumScopePublicityWithAggregatesFilter | ScopePublicity
    _count?: NestedIntFilter
    _min?: NestedEnumScopePublicityFilter
    _max?: NestedEnumScopePublicityFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    careers?: CareerCreateNestedManyWithoutUserInput
    Education?: EducationCreateNestedManyWithoutUserInput
    information?: InformationCreateNestedOneWithoutUserInput
    class?: ClassCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
    careers?: CareerUncheckedCreateNestedManyWithoutUserInput
    Education?: EducationUncheckedCreateNestedManyWithoutUserInput
    information?: InformationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    careers?: CareerUpdateManyWithoutUserNestedInput
    Education?: EducationUpdateManyWithoutUserNestedInput
    information?: InformationUpdateOneWithoutUserNestedInput
    class?: ClassUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    careers?: CareerUncheckedUpdateManyWithoutUserNestedInput
    Education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    information?: InformationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CareerCreateWithoutUserInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
  }

  export type CareerUncheckedCreateWithoutUserInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
  }

  export type CareerCreateOrConnectWithoutUserInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutUserInput, CareerUncheckedCreateWithoutUserInput>
  }

  export type CareerCreateManyUserInputEnvelope = {
    data: Enumerable<CareerCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutUserInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: Enumerable<EducationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type InformationCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    avatarUrl?: string | null
    emailPublicity?: ScopePublicity
    phone?: string | null
    phonePublicity?: ScopePublicity
    facebookUrl?: string | null
    facebookPublicity?: ScopePublicity
    dateOfBirth?: Date | string | null
    dateOfBirthPublicity?: ScopePublicity
    className?: string | null
    gradeCode?: string | null
    gradeName?: string | null
    userEmail?: string | null
    coverImageUrl?: string | null
  }

  export type InformationUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    avatarUrl?: string | null
    emailPublicity?: ScopePublicity
    phone?: string | null
    phonePublicity?: ScopePublicity
    facebookUrl?: string | null
    facebookPublicity?: ScopePublicity
    dateOfBirth?: Date | string | null
    dateOfBirthPublicity?: ScopePublicity
    className?: string | null
    gradeCode?: string | null
    gradeName?: string | null
    userEmail?: string | null
    coverImageUrl?: string | null
  }

  export type InformationCreateOrConnectWithoutUserInput = {
    where: InformationWhereUniqueInput
    create: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
  }

  export type ClassCreateWithoutUsersInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    grade: GradeCreateNestedOneWithoutClassesInput
  }

  export type ClassUncheckedCreateWithoutUsersInput = {
    id?: string
    gradeId: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
  }

  export type ClassCreateOrConnectWithoutUsersInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutUsersInput, ClassUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type CareerUpsertWithWhereUniqueWithoutUserInput = {
    where: CareerWhereUniqueInput
    update: XOR<CareerUpdateWithoutUserInput, CareerUncheckedUpdateWithoutUserInput>
    create: XOR<CareerCreateWithoutUserInput, CareerUncheckedCreateWithoutUserInput>
  }

  export type CareerUpdateWithWhereUniqueWithoutUserInput = {
    where: CareerWhereUniqueInput
    data: XOR<CareerUpdateWithoutUserInput, CareerUncheckedUpdateWithoutUserInput>
  }

  export type CareerUpdateManyWithWhereWithoutUserInput = {
    where: CareerScalarWhereInput
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyWithoutCareersInput>
  }

  export type CareerScalarWhereInput = {
    AND?: Enumerable<CareerScalarWhereInput>
    OR?: Enumerable<CareerScalarWhereInput>
    NOT?: Enumerable<CareerScalarWhereInput>
    id?: StringFilter | string
    company?: StringFilter | string
    endDate?: DateTimeFilter | Date | string
    jobTitle?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    userId?: StringFilter | string
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutEducationInput>
  }

  export type EducationScalarWhereInput = {
    AND?: Enumerable<EducationScalarWhereInput>
    OR?: Enumerable<EducationScalarWhereInput>
    NOT?: Enumerable<EducationScalarWhereInput>
    id?: StringFilter | string
    degree?: StringNullableFilter | string | null
    school?: StringFilter | string
    startDate?: DateTimeNullableFilter | Date | string | null
    endDate?: DateTimeNullableFilter | Date | string | null
    userId?: StringFilter | string
  }

  export type InformationUpsertWithoutUserInput = {
    update: XOR<InformationUpdateWithoutUserInput, InformationUncheckedUpdateWithoutUserInput>
    create: XOR<InformationCreateWithoutUserInput, InformationUncheckedCreateWithoutUserInput>
  }

  export type InformationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InformationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirthPublicity?: EnumScopePublicityFieldUpdateOperationsInput | ScopePublicity
    className?: NullableStringFieldUpdateOperationsInput | string | null
    gradeCode?: NullableStringFieldUpdateOperationsInput | string | null
    gradeName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpsertWithoutUsersInput = {
    update: XOR<ClassUpdateWithoutUsersInput, ClassUncheckedUpdateWithoutUsersInput>
    create: XOR<ClassCreateWithoutUsersInput, ClassUncheckedCreateWithoutUsersInput>
  }

  export type ClassUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: GradeUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradeId?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateWithoutGradeInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutGradeInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutGradeInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutGradeInput, ClassUncheckedCreateWithoutGradeInput>
  }

  export type ClassCreateManyGradeInputEnvelope = {
    data: Enumerable<ClassCreateManyGradeInput>
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutGradeInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutGradeInput, ClassUncheckedUpdateWithoutGradeInput>
    create: XOR<ClassCreateWithoutGradeInput, ClassUncheckedCreateWithoutGradeInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutGradeInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutGradeInput, ClassUncheckedUpdateWithoutGradeInput>
  }

  export type ClassUpdateManyWithWhereWithoutGradeInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutClassesInput>
  }

  export type ClassScalarWhereInput = {
    AND?: Enumerable<ClassScalarWhereInput>
    OR?: Enumerable<ClassScalarWhereInput>
    NOT?: Enumerable<ClassScalarWhereInput>
    id?: StringFilter | string
    gradeId?: StringFilter | string
    archived?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
  }

  export type GradeCreateWithoutClassesInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    code: string
    name: string
  }

  export type GradeUncheckedCreateWithoutClassesInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    code: string
    name: string
  }

  export type GradeCreateOrConnectWithoutClassesInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutClassesInput, GradeUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutClassInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountCreateNestedManyWithoutUserInput
    careers?: CareerCreateNestedManyWithoutUserInput
    Education?: EducationCreateNestedManyWithoutUserInput
    information?: InformationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    careers?: CareerUncheckedCreateNestedManyWithoutUserInput
    Education?: EducationUncheckedCreateNestedManyWithoutUserInput
    information?: InformationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type UserCreateManyClassInputEnvelope = {
    data: Enumerable<UserCreateManyClassInput>
    skipDuplicates?: boolean
  }

  export type GradeUpsertWithoutClassesInput = {
    update: XOR<GradeUpdateWithoutClassesInput, GradeUncheckedUpdateWithoutClassesInput>
    create: XOR<GradeCreateWithoutClassesInput, GradeUncheckedCreateWithoutClassesInput>
  }

  export type GradeUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutClassInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClassInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
  }

  export type UserUpdateManyWithWhereWithoutClassInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    username?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    archived?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    accessStatus?: EnumAccessStatusFilter | AccessStatus
    accessLevel?: EnumAccessLevelFilter | AccessLevel
    accessMode?: EnumAccessModeFilter | AccessMode
    classId?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutInformationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountCreateNestedManyWithoutUserInput
    careers?: CareerCreateNestedManyWithoutUserInput
    Education?: EducationCreateNestedManyWithoutUserInput
    class?: ClassCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutInformationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    careers?: CareerUncheckedCreateNestedManyWithoutUserInput
    Education?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInformationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInformationInput, UserUncheckedCreateWithoutInformationInput>
  }

  export type UserUpsertWithoutInformationInput = {
    update: XOR<UserUpdateWithoutInformationInput, UserUncheckedUpdateWithoutInformationInput>
    create: XOR<UserCreateWithoutInformationInput, UserUncheckedCreateWithoutInformationInput>
  }

  export type UserUpdateWithoutInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUpdateManyWithoutUserNestedInput
    careers?: CareerUpdateManyWithoutUserNestedInput
    Education?: EducationUpdateManyWithoutUserNestedInput
    class?: ClassUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    careers?: CareerUncheckedUpdateManyWithoutUserNestedInput
    Education?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCareersInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountCreateNestedManyWithoutUserInput
    Education?: EducationCreateNestedManyWithoutUserInput
    information?: InformationCreateNestedOneWithoutUserInput
    class?: ClassCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCareersInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Education?: EducationUncheckedCreateNestedManyWithoutUserInput
    information?: InformationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
  }

  export type UserUpsertWithoutCareersInput = {
    update: XOR<UserUpdateWithoutCareersInput, UserUncheckedUpdateWithoutCareersInput>
    create: XOR<UserCreateWithoutCareersInput, UserUncheckedCreateWithoutCareersInput>
  }

  export type UserUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Education?: EducationUpdateManyWithoutUserNestedInput
    information?: InformationUpdateOneWithoutUserNestedInput
    class?: ClassUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    information?: InformationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutEducationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    accounts?: AccountCreateNestedManyWithoutUserInput
    careers?: CareerCreateNestedManyWithoutUserInput
    information?: InformationCreateNestedOneWithoutUserInput
    class?: ClassCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEducationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
    classId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    careers?: CareerUncheckedCreateNestedManyWithoutUserInput
    information?: InformationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEducationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
  }

  export type UserUpsertWithoutEducationInput = {
    update: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
  }

  export type UserUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUpdateManyWithoutUserNestedInput
    careers?: CareerUpdateManyWithoutUserNestedInput
    information?: InformationUpdateOneWithoutUserNestedInput
    class?: ClassUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    careers?: CareerUncheckedUpdateManyWithoutUserNestedInput
    information?: InformationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type CareerCreateManyUserInput = {
    id?: string
    company: string
    endDate: Date | string
    jobTitle: string
    startDate: Date | string
  }

  export type EducationCreateManyUserInput = {
    id?: string
    degree?: string | null
    school: string
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CareerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateManyWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EducationUncheckedUpdateManyWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassCreateManyGradeInput = {
    id?: string
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
  }

  export type ClassUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyClassInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    password?: string | null
    image?: string | null
    archived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accessStatus?: AccessStatus
    accessLevel?: AccessLevel
    accessMode?: AccessMode
  }

  export type UserUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUpdateManyWithoutUserNestedInput
    careers?: CareerUpdateManyWithoutUserNestedInput
    Education?: EducationUpdateManyWithoutUserNestedInput
    information?: InformationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    careers?: CareerUncheckedUpdateManyWithoutUserNestedInput
    Education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    information?: InformationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessStatus?: EnumAccessStatusFieldUpdateOperationsInput | AccessStatus
    accessLevel?: EnumAccessLevelFieldUpdateOperationsInput | AccessLevel
    accessMode?: EnumAccessModeFieldUpdateOperationsInput | AccessMode
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}