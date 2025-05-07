
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPermission
 * 
 */
export type UserPermission = $Result.DefaultSelection<Prisma.$UserPermissionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model ExpiredRefreshToken
 * 
 */
export type ExpiredRefreshToken = $Result.DefaultSelection<Prisma.$ExpiredRefreshTokenPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model BusinessDetails
 * 
 */
export type BusinessDetails = $Result.DefaultSelection<Prisma.$BusinessDetailsPayload>
/**
 * Model FavoritedBusiness
 * 
 */
export type FavoritedBusiness = $Result.DefaultSelection<Prisma.$FavoritedBusinessPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model BusinessAddress
 * 
 */
export type BusinessAddress = $Result.DefaultSelection<Prisma.$BusinessAddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ImageFileExtension: {
  JPG: 'JPG',
  PNG: 'PNG',
  SVG: 'SVG'
};

export type ImageFileExtension = (typeof ImageFileExtension)[keyof typeof ImageFileExtension]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ImageFileExtension = $Enums.ImageFileExtension

export const ImageFileExtension: typeof $Enums.ImageFileExtension

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.image.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPermission`: Exposes CRUD operations for the **UserPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPermissions
    * const userPermissions = await prisma.userPermission.findMany()
    * ```
    */
  get userPermission(): Prisma.UserPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expiredRefreshToken`: Exposes CRUD operations for the **ExpiredRefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpiredRefreshTokens
    * const expiredRefreshTokens = await prisma.expiredRefreshToken.findMany()
    * ```
    */
  get expiredRefreshToken(): Prisma.ExpiredRefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessDetails`: Exposes CRUD operations for the **BusinessDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessDetails
    * const businessDetails = await prisma.businessDetails.findMany()
    * ```
    */
  get businessDetails(): Prisma.BusinessDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoritedBusiness`: Exposes CRUD operations for the **FavoritedBusiness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoritedBusinesses
    * const favoritedBusinesses = await prisma.favoritedBusiness.findMany()
    * ```
    */
  get favoritedBusiness(): Prisma.FavoritedBusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessAddress`: Exposes CRUD operations for the **BusinessAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessAddresses
    * const businessAddresses = await prisma.businessAddress.findMany()
    * ```
    */
  get businessAddress(): Prisma.BusinessAddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Image: 'Image',
    User: 'User',
    UserPermission: 'UserPermission',
    Account: 'Account',
    ExpiredRefreshToken: 'ExpiredRefreshToken',
    Country: 'Country',
    Province: 'Province',
    City: 'City',
    Business: 'Business',
    BusinessDetails: 'BusinessDetails',
    FavoritedBusiness: 'FavoritedBusiness',
    Rating: 'Rating',
    Address: 'Address',
    BusinessAddress: 'BusinessAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "image" | "user" | "userPermission" | "account" | "expiredRefreshToken" | "country" | "province" | "city" | "business" | "businessDetails" | "favoritedBusiness" | "rating" | "address" | "businessAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPermission: {
        payload: Prisma.$UserPermissionPayload<ExtArgs>
        fields: Prisma.UserPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findFirst: {
            args: Prisma.UserPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findMany: {
            args: Prisma.UserPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          create: {
            args: Prisma.UserPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          createMany: {
            args: Prisma.UserPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          update: {
            args: Prisma.UserPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          aggregate: {
            args: Prisma.UserPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPermission>
          }
          groupBy: {
            args: Prisma.UserPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      ExpiredRefreshToken: {
        payload: Prisma.$ExpiredRefreshTokenPayload<ExtArgs>
        fields: Prisma.ExpiredRefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpiredRefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpiredRefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.ExpiredRefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpiredRefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          findMany: {
            args: Prisma.ExpiredRefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>[]
          }
          create: {
            args: Prisma.ExpiredRefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          createMany: {
            args: Prisma.ExpiredRefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpiredRefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          update: {
            args: Prisma.ExpiredRefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.ExpiredRefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpiredRefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpiredRefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiredRefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.ExpiredRefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpiredRefreshToken>
          }
          groupBy: {
            args: Prisma.ExpiredRefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpiredRefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpiredRefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ExpiredRefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      BusinessDetails: {
        payload: Prisma.$BusinessDetailsPayload<ExtArgs>
        fields: Prisma.BusinessDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          findFirst: {
            args: Prisma.BusinessDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          findMany: {
            args: Prisma.BusinessDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>[]
          }
          create: {
            args: Prisma.BusinessDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          createMany: {
            args: Prisma.BusinessDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          update: {
            args: Prisma.BusinessDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessDetailsPayload>
          }
          aggregate: {
            args: Prisma.BusinessDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessDetails>
          }
          groupBy: {
            args: Prisma.BusinessDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessDetailsCountAggregateOutputType> | number
          }
        }
      }
      FavoritedBusiness: {
        payload: Prisma.$FavoritedBusinessPayload<ExtArgs>
        fields: Prisma.FavoritedBusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritedBusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritedBusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          findFirst: {
            args: Prisma.FavoritedBusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritedBusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          findMany: {
            args: Prisma.FavoritedBusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>[]
          }
          create: {
            args: Prisma.FavoritedBusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          createMany: {
            args: Prisma.FavoritedBusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoritedBusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          update: {
            args: Prisma.FavoritedBusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          deleteMany: {
            args: Prisma.FavoritedBusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritedBusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritedBusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritedBusinessPayload>
          }
          aggregate: {
            args: Prisma.FavoritedBusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoritedBusiness>
          }
          groupBy: {
            args: Prisma.FavoritedBusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritedBusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritedBusinessCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritedBusinessCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      BusinessAddress: {
        payload: Prisma.$BusinessAddressPayload<ExtArgs>
        fields: Prisma.BusinessAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          findFirst: {
            args: Prisma.BusinessAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          findMany: {
            args: Prisma.BusinessAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>[]
          }
          create: {
            args: Prisma.BusinessAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          createMany: {
            args: Prisma.BusinessAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          update: {
            args: Prisma.BusinessAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          deleteMany: {
            args: Prisma.BusinessAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          aggregate: {
            args: Prisma.BusinessAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessAddress>
          }
          groupBy: {
            args: Prisma.BusinessAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessAddressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    image?: ImageOmit
    user?: UserOmit
    userPermission?: UserPermissionOmit
    account?: AccountOmit
    expiredRefreshToken?: ExpiredRefreshTokenOmit
    country?: CountryOmit
    province?: ProvinceOmit
    city?: CityOmit
    business?: BusinessOmit
    businessDetails?: BusinessDetailsOmit
    favoritedBusiness?: FavoritedBusinessOmit
    rating?: RatingOmit
    address?: AddressOmit
    businessAddress?: BusinessAddressOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    ProfileAccount: number
    ProfileBusiness: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProfileAccount?: boolean | ImageCountOutputTypeCountProfileAccountArgs
    ProfileBusiness?: boolean | ImageCountOutputTypeCountProfileBusinessArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountProfileAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountProfileBusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Permissions: number
    ImageUploads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    ImageUploads?: boolean | UserCountOutputTypeCountImageUploadsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImageUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    Favorites: number
    Ratings: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorites?: boolean | AccountCountOutputTypeCountFavoritesArgs
    Ratings?: boolean | AccountCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritedBusinessWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    Provinces: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | CountryCountOutputTypeCountProvincesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    Cities: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cities?: boolean | ProvinceCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    Businesses: number
    Address: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Businesses?: boolean | CityCountOutputTypeCountBusinessesArgs
    Address?: boolean | CityCountOutputTypeCountAddressArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    Favorites: number
    Ratings: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorites?: boolean | BusinessCountOutputTypeCountFavoritesArgs
    Ratings?: boolean | BusinessCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritedBusinessWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type RatingCountOutputType
   */

  export type RatingCountOutputType = {
    Children: number
  }

  export type RatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Children?: boolean | RatingCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingCountOutputType
     */
    select?: RatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RatingCountOutputType without action
   */
  export type RatingCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    aspect: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    aspect: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    uploadedById: string | null
    aspect: number | null
    path: string | null
    filename: string | null
    extension: $Enums.ImageFileExtension | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    uploadedById: string | null
    aspect: number | null
    path: string | null
    filename: string | null
    extension: $Enums.ImageFileExtension | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    uploadedById: number
    aspect: number
    path: number
    filename: number
    extension: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    aspect?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    aspect?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    uploadedById?: true
    aspect?: true
    path?: true
    filename?: true
    extension?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    uploadedById?: true
    aspect?: true
    path?: true
    filename?: true
    extension?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    uploadedById?: true
    aspect?: true
    path?: true
    filename?: true
    extension?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    uploadedById: string
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploadedById?: boolean
    aspect?: boolean
    path?: boolean
    filename?: boolean
    extension?: boolean
    UploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    ProfileAccount?: boolean | Image$ProfileAccountArgs<ExtArgs>
    ProfileBusiness?: boolean | Image$ProfileBusinessArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    uploadedById?: boolean
    aspect?: boolean
    path?: boolean
    filename?: boolean
    extension?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uploadedById" | "aspect" | "path" | "filename" | "extension", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    ProfileAccount?: boolean | Image$ProfileAccountArgs<ExtArgs>
    ProfileBusiness?: boolean | Image$ProfileBusinessArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      UploadedBy: Prisma.$UserPayload<ExtArgs>
      ProfileAccount: Prisma.$AccountPayload<ExtArgs>[]
      ProfileBusiness: Prisma.$BusinessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uploadedById: string
      aspect: number
      path: string
      filename: string
      extension: $Enums.ImageFileExtension
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProfileAccount<T extends Image$ProfileAccountArgs<ExtArgs> = {}>(args?: Subset<T, Image$ProfileAccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfileBusiness<T extends Image$ProfileBusinessArgs<ExtArgs> = {}>(args?: Subset<T, Image$ProfileBusinessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly uploadedById: FieldRef<"Image", 'String'>
    readonly aspect: FieldRef<"Image", 'Float'>
    readonly path: FieldRef<"Image", 'String'>
    readonly filename: FieldRef<"Image", 'String'>
    readonly extension: FieldRef<"Image", 'ImageFileExtension'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.ProfileAccount
   */
  export type Image$ProfileAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Image.ProfileBusiness
   */
  export type Image$ProfileBusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
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
    email: string | null
    hash: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hash: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hash: number
    isVerified: number
    role: number
    refreshToken: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    isVerified?: true
    role?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    isVerified?: true
    role?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    isVerified?: true
    role?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hash: string
    isVerified: boolean
    role: $Enums.Role
    refreshToken: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    isVerified?: boolean
    role?: boolean
    refreshToken?: boolean
    Permissions?: boolean | User$PermissionsArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    ImageUploads?: boolean | User$ImageUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hash?: boolean
    isVerified?: boolean
    role?: boolean
    refreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hash" | "isVerified" | "role" | "refreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Permissions?: boolean | User$PermissionsArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    ImageUploads?: boolean | User$ImageUploadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Permissions: Prisma.$UserPermissionPayload<ExtArgs>[]
      Account: Prisma.$AccountPayload<ExtArgs> | null
      ImageUploads: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hash: string
      isVerified: boolean
      role: $Enums.Role
      refreshToken: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Permissions<T extends User$PermissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$PermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ImageUploads<T extends User$ImageUploadsArgs<ExtArgs> = {}>(args?: Subset<T, User$ImageUploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Permissions
   */
  export type User$PermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * User.ImageUploads
   */
  export type User$ImageUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPermission
   */

  export type AggregateUserPermission = {
    _count: UserPermissionCountAggregateOutputType | null
    _avg: UserPermissionAvgAggregateOutputType | null
    _sum: UserPermissionSumAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  export type UserPermissionAvgAggregateOutputType = {
    id: number | null
    accessLevel: number | null
  }

  export type UserPermissionSumAggregateOutputType = {
    id: number | null
    accessLevel: number | null
  }

  export type UserPermissionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    accessLevel: number | null
    scope: string | null
  }

  export type UserPermissionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    accessLevel: number | null
    scope: string | null
  }

  export type UserPermissionCountAggregateOutputType = {
    id: number
    userId: number
    accessLevel: number
    scope: number
    _all: number
  }


  export type UserPermissionAvgAggregateInputType = {
    id?: true
    accessLevel?: true
  }

  export type UserPermissionSumAggregateInputType = {
    id?: true
    accessLevel?: true
  }

  export type UserPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
    scope?: true
  }

  export type UserPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
    scope?: true
  }

  export type UserPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
    scope?: true
    _all?: true
  }

  export type UserPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermission to aggregate.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPermissions
    **/
    _count?: true | UserPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPermissionMaxAggregateInputType
  }

  export type GetUserPermissionAggregateType<T extends UserPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPermission[P]>
      : GetScalarType<T[P], AggregateUserPermission[P]>
  }




  export type UserPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithAggregationInput | UserPermissionOrderByWithAggregationInput[]
    by: UserPermissionScalarFieldEnum[] | UserPermissionScalarFieldEnum
    having?: UserPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPermissionCountAggregateInputType | true
    _avg?: UserPermissionAvgAggregateInputType
    _sum?: UserPermissionSumAggregateInputType
    _min?: UserPermissionMinAggregateInputType
    _max?: UserPermissionMaxAggregateInputType
  }

  export type UserPermissionGroupByOutputType = {
    id: number
    userId: string
    accessLevel: number
    scope: string
    _count: UserPermissionCountAggregateOutputType | null
    _avg: UserPermissionAvgAggregateOutputType | null
    _sum: UserPermissionSumAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  type GetUserPermissionGroupByPayload<T extends UserPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
    scope?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>



  export type UserPermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
    scope?: boolean
  }

  export type UserPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accessLevel" | "scope", ExtArgs["result"]["userPermission"]>
  export type UserPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPermission"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      accessLevel: number
      scope: string
    }, ExtArgs["result"]["userPermission"]>
    composites: {}
  }

  type UserPermissionGetPayload<S extends boolean | null | undefined | UserPermissionDefaultArgs> = $Result.GetResult<Prisma.$UserPermissionPayload, S>

  type UserPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPermissionCountAggregateInputType | true
    }

  export interface UserPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPermission'], meta: { name: 'UserPermission' } }
    /**
     * Find zero or one UserPermission that matches the filter.
     * @param {UserPermissionFindUniqueArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPermissionFindUniqueArgs>(args: SelectSubset<T, UserPermissionFindUniqueArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPermissionFindFirstArgs>(args?: SelectSubset<T, UserPermissionFindFirstArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPermissions
     * const userPermissions = await prisma.userPermission.findMany()
     * 
     * // Get first 10 UserPermissions
     * const userPermissions = await prisma.userPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPermissionFindManyArgs>(args?: SelectSubset<T, UserPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPermission.
     * @param {UserPermissionCreateArgs} args - Arguments to create a UserPermission.
     * @example
     * // Create one UserPermission
     * const UserPermission = await prisma.userPermission.create({
     *   data: {
     *     // ... data to create a UserPermission
     *   }
     * })
     * 
     */
    create<T extends UserPermissionCreateArgs>(args: SelectSubset<T, UserPermissionCreateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPermissions.
     * @param {UserPermissionCreateManyArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPermissionCreateManyArgs>(args?: SelectSubset<T, UserPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPermission.
     * @param {UserPermissionDeleteArgs} args - Arguments to delete one UserPermission.
     * @example
     * // Delete one UserPermission
     * const UserPermission = await prisma.userPermission.delete({
     *   where: {
     *     // ... filter to delete one UserPermission
     *   }
     * })
     * 
     */
    delete<T extends UserPermissionDeleteArgs>(args: SelectSubset<T, UserPermissionDeleteArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPermission.
     * @param {UserPermissionUpdateArgs} args - Arguments to update one UserPermission.
     * @example
     * // Update one UserPermission
     * const userPermission = await prisma.userPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPermissionUpdateArgs>(args: SelectSubset<T, UserPermissionUpdateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPermissions.
     * @param {UserPermissionDeleteManyArgs} args - Arguments to filter UserPermissions to delete.
     * @example
     * // Delete a few UserPermissions
     * const { count } = await prisma.userPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPermissionDeleteManyArgs>(args?: SelectSubset<T, UserPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPermissionUpdateManyArgs>(args: SelectSubset<T, UserPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPermission.
     * @param {UserPermissionUpsertArgs} args - Arguments to update or create a UserPermission.
     * @example
     * // Update or create a UserPermission
     * const userPermission = await prisma.userPermission.upsert({
     *   create: {
     *     // ... data to create a UserPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPermission we want to update
     *   }
     * })
     */
    upsert<T extends UserPermissionUpsertArgs>(args: SelectSubset<T, UserPermissionUpsertArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionCountArgs} args - Arguments to filter UserPermissions to count.
     * @example
     * // Count the number of UserPermissions
     * const count = await prisma.userPermission.count({
     *   where: {
     *     // ... the filter for the UserPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserPermissionCountArgs>(
      args?: Subset<T, UserPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPermissionAggregateArgs>(args: Subset<T, UserPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserPermissionAggregateType<T>>

    /**
     * Group by UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionGroupByArgs} args - Group by arguments.
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
      T extends UserPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPermission model
   */
  readonly fields: UserPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPermission model
   */
  interface UserPermissionFieldRefs {
    readonly id: FieldRef<"UserPermission", 'Int'>
    readonly userId: FieldRef<"UserPermission", 'String'>
    readonly accessLevel: FieldRef<"UserPermission", 'Int'>
    readonly scope: FieldRef<"UserPermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPermission findUnique
   */
  export type UserPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findUniqueOrThrow
   */
  export type UserPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findFirst
   */
  export type UserPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findFirstOrThrow
   */
  export type UserPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findMany
   */
  export type UserPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermissions to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission create
   */
  export type UserPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPermission.
     */
    data: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
  }

  /**
   * UserPermission createMany
   */
  export type UserPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPermission update
   */
  export type UserPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPermission.
     */
    data: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserPermission to update.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission updateMany
   */
  export type UserPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to update.
     */
    limit?: number
  }

  /**
   * UserPermission upsert
   */
  export type UserPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPermission to update in case it exists.
     */
    where: UserPermissionWhereUniqueInput
    /**
     * In case the UserPermission found by the `where` argument doesn't exist, create a new UserPermission with this data.
     */
    create: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
    /**
     * In case the UserPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
  }

  /**
   * UserPermission delete
   */
  export type UserPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter which UserPermission to delete.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission deleteMany
   */
  export type UserPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermissions to delete
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to delete.
     */
    limit?: number
  }

  /**
   * UserPermission without action
   */
  export type UserPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
  }


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
    profileImageId: number | null
  }

  export type AccountSumAggregateOutputType = {
    profileImageId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    profileImageId: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    profileImageId: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    email: number
    username: number
    profileImageId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    profileImageId?: true
  }

  export type AccountSumAggregateInputType = {
    profileImageId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    profileImageId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    profileImageId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    profileImageId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
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




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
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
    email: string
    username: string | null
    profileImageId: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    profileImageId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProfileImage?: boolean | Account$ProfileImageArgs<ExtArgs>
    Favorites?: boolean | Account$FavoritesArgs<ExtArgs>
    Ratings?: boolean | Account$RatingsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    profileImageId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "profileImageId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProfileImage?: boolean | Account$ProfileImageArgs<ExtArgs>
    Favorites?: boolean | Account$FavoritesArgs<ExtArgs>
    Ratings?: boolean | Account$RatingsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ProfileImage: Prisma.$ImagePayload<ExtArgs> | null
      Favorites: Prisma.$FavoritedBusinessPayload<ExtArgs>[]
      Ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      profileImageId: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
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
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProfileImage<T extends Account$ProfileImageArgs<ExtArgs> = {}>(args?: Subset<T, Account$ProfileImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Favorites<T extends Account$FavoritesArgs<ExtArgs> = {}>(args?: Subset<T, Account$FavoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ratings<T extends Account$RatingsArgs<ExtArgs> = {}>(args?: Subset<T, Account$RatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly username: FieldRef<"Account", 'String'>
    readonly profileImageId: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.ProfileImage
   */
  export type Account$ProfileImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Account.Favorites
   */
  export type Account$FavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    where?: FavoritedBusinessWhereInput
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    cursor?: FavoritedBusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritedBusinessScalarFieldEnum | FavoritedBusinessScalarFieldEnum[]
  }

  /**
   * Account.Ratings
   */
  export type Account$RatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model ExpiredRefreshToken
   */

  export type AggregateExpiredRefreshToken = {
    _count: ExpiredRefreshTokenCountAggregateOutputType | null
    _avg: ExpiredRefreshTokenAvgAggregateOutputType | null
    _sum: ExpiredRefreshTokenSumAggregateOutputType | null
    _min: ExpiredRefreshTokenMinAggregateOutputType | null
    _max: ExpiredRefreshTokenMaxAggregateOutputType | null
  }

  export type ExpiredRefreshTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type ExpiredRefreshTokenSumAggregateOutputType = {
    id: number | null
  }

  export type ExpiredRefreshTokenMinAggregateOutputType = {
    id: number | null
    savedAt: Date | null
    token: string | null
  }

  export type ExpiredRefreshTokenMaxAggregateOutputType = {
    id: number | null
    savedAt: Date | null
    token: string | null
  }

  export type ExpiredRefreshTokenCountAggregateOutputType = {
    id: number
    savedAt: number
    token: number
    _all: number
  }


  export type ExpiredRefreshTokenAvgAggregateInputType = {
    id?: true
  }

  export type ExpiredRefreshTokenSumAggregateInputType = {
    id?: true
  }

  export type ExpiredRefreshTokenMinAggregateInputType = {
    id?: true
    savedAt?: true
    token?: true
  }

  export type ExpiredRefreshTokenMaxAggregateInputType = {
    id?: true
    savedAt?: true
    token?: true
  }

  export type ExpiredRefreshTokenCountAggregateInputType = {
    id?: true
    savedAt?: true
    token?: true
    _all?: true
  }

  export type ExpiredRefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpiredRefreshToken to aggregate.
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiredRefreshTokens to fetch.
     */
    orderBy?: ExpiredRefreshTokenOrderByWithRelationInput | ExpiredRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpiredRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiredRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiredRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpiredRefreshTokens
    **/
    _count?: true | ExpiredRefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpiredRefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpiredRefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpiredRefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpiredRefreshTokenMaxAggregateInputType
  }

  export type GetExpiredRefreshTokenAggregateType<T extends ExpiredRefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateExpiredRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpiredRefreshToken[P]>
      : GetScalarType<T[P], AggregateExpiredRefreshToken[P]>
  }




  export type ExpiredRefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpiredRefreshTokenWhereInput
    orderBy?: ExpiredRefreshTokenOrderByWithAggregationInput | ExpiredRefreshTokenOrderByWithAggregationInput[]
    by: ExpiredRefreshTokenScalarFieldEnum[] | ExpiredRefreshTokenScalarFieldEnum
    having?: ExpiredRefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpiredRefreshTokenCountAggregateInputType | true
    _avg?: ExpiredRefreshTokenAvgAggregateInputType
    _sum?: ExpiredRefreshTokenSumAggregateInputType
    _min?: ExpiredRefreshTokenMinAggregateInputType
    _max?: ExpiredRefreshTokenMaxAggregateInputType
  }

  export type ExpiredRefreshTokenGroupByOutputType = {
    id: number
    savedAt: Date
    token: string
    _count: ExpiredRefreshTokenCountAggregateOutputType | null
    _avg: ExpiredRefreshTokenAvgAggregateOutputType | null
    _sum: ExpiredRefreshTokenSumAggregateOutputType | null
    _min: ExpiredRefreshTokenMinAggregateOutputType | null
    _max: ExpiredRefreshTokenMaxAggregateOutputType | null
  }

  type GetExpiredRefreshTokenGroupByPayload<T extends ExpiredRefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpiredRefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpiredRefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpiredRefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ExpiredRefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type ExpiredRefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    savedAt?: boolean
    token?: boolean
  }, ExtArgs["result"]["expiredRefreshToken"]>



  export type ExpiredRefreshTokenSelectScalar = {
    id?: boolean
    savedAt?: boolean
    token?: boolean
  }

  export type ExpiredRefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "savedAt" | "token", ExtArgs["result"]["expiredRefreshToken"]>

  export type $ExpiredRefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpiredRefreshToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      savedAt: Date
      token: string
    }, ExtArgs["result"]["expiredRefreshToken"]>
    composites: {}
  }

  type ExpiredRefreshTokenGetPayload<S extends boolean | null | undefined | ExpiredRefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$ExpiredRefreshTokenPayload, S>

  type ExpiredRefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpiredRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpiredRefreshTokenCountAggregateInputType | true
    }

  export interface ExpiredRefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpiredRefreshToken'], meta: { name: 'ExpiredRefreshToken' } }
    /**
     * Find zero or one ExpiredRefreshToken that matches the filter.
     * @param {ExpiredRefreshTokenFindUniqueArgs} args - Arguments to find a ExpiredRefreshToken
     * @example
     * // Get one ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpiredRefreshTokenFindUniqueArgs>(args: SelectSubset<T, ExpiredRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpiredRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpiredRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a ExpiredRefreshToken
     * @example
     * // Get one ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpiredRefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpiredRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpiredRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenFindFirstArgs} args - Arguments to find a ExpiredRefreshToken
     * @example
     * // Get one ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpiredRefreshTokenFindFirstArgs>(args?: SelectSubset<T, ExpiredRefreshTokenFindFirstArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpiredRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a ExpiredRefreshToken
     * @example
     * // Get one ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpiredRefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpiredRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpiredRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpiredRefreshTokens
     * const expiredRefreshTokens = await prisma.expiredRefreshToken.findMany()
     * 
     * // Get first 10 ExpiredRefreshTokens
     * const expiredRefreshTokens = await prisma.expiredRefreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expiredRefreshTokenWithIdOnly = await prisma.expiredRefreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpiredRefreshTokenFindManyArgs>(args?: SelectSubset<T, ExpiredRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpiredRefreshToken.
     * @param {ExpiredRefreshTokenCreateArgs} args - Arguments to create a ExpiredRefreshToken.
     * @example
     * // Create one ExpiredRefreshToken
     * const ExpiredRefreshToken = await prisma.expiredRefreshToken.create({
     *   data: {
     *     // ... data to create a ExpiredRefreshToken
     *   }
     * })
     * 
     */
    create<T extends ExpiredRefreshTokenCreateArgs>(args: SelectSubset<T, ExpiredRefreshTokenCreateArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpiredRefreshTokens.
     * @param {ExpiredRefreshTokenCreateManyArgs} args - Arguments to create many ExpiredRefreshTokens.
     * @example
     * // Create many ExpiredRefreshTokens
     * const expiredRefreshToken = await prisma.expiredRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpiredRefreshTokenCreateManyArgs>(args?: SelectSubset<T, ExpiredRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpiredRefreshToken.
     * @param {ExpiredRefreshTokenDeleteArgs} args - Arguments to delete one ExpiredRefreshToken.
     * @example
     * // Delete one ExpiredRefreshToken
     * const ExpiredRefreshToken = await prisma.expiredRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one ExpiredRefreshToken
     *   }
     * })
     * 
     */
    delete<T extends ExpiredRefreshTokenDeleteArgs>(args: SelectSubset<T, ExpiredRefreshTokenDeleteArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpiredRefreshToken.
     * @param {ExpiredRefreshTokenUpdateArgs} args - Arguments to update one ExpiredRefreshToken.
     * @example
     * // Update one ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpiredRefreshTokenUpdateArgs>(args: SelectSubset<T, ExpiredRefreshTokenUpdateArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpiredRefreshTokens.
     * @param {ExpiredRefreshTokenDeleteManyArgs} args - Arguments to filter ExpiredRefreshTokens to delete.
     * @example
     * // Delete a few ExpiredRefreshTokens
     * const { count } = await prisma.expiredRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpiredRefreshTokenDeleteManyArgs>(args?: SelectSubset<T, ExpiredRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpiredRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpiredRefreshTokens
     * const expiredRefreshToken = await prisma.expiredRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpiredRefreshTokenUpdateManyArgs>(args: SelectSubset<T, ExpiredRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpiredRefreshToken.
     * @param {ExpiredRefreshTokenUpsertArgs} args - Arguments to update or create a ExpiredRefreshToken.
     * @example
     * // Update or create a ExpiredRefreshToken
     * const expiredRefreshToken = await prisma.expiredRefreshToken.upsert({
     *   create: {
     *     // ... data to create a ExpiredRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpiredRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends ExpiredRefreshTokenUpsertArgs>(args: SelectSubset<T, ExpiredRefreshTokenUpsertArgs<ExtArgs>>): Prisma__ExpiredRefreshTokenClient<$Result.GetResult<Prisma.$ExpiredRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpiredRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenCountArgs} args - Arguments to filter ExpiredRefreshTokens to count.
     * @example
     * // Count the number of ExpiredRefreshTokens
     * const count = await prisma.expiredRefreshToken.count({
     *   where: {
     *     // ... the filter for the ExpiredRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends ExpiredRefreshTokenCountArgs>(
      args?: Subset<T, ExpiredRefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpiredRefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpiredRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpiredRefreshTokenAggregateArgs>(args: Subset<T, ExpiredRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetExpiredRefreshTokenAggregateType<T>>

    /**
     * Group by ExpiredRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiredRefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends ExpiredRefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpiredRefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: ExpiredRefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExpiredRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpiredRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpiredRefreshToken model
   */
  readonly fields: ExpiredRefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpiredRefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpiredRefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpiredRefreshToken model
   */
  interface ExpiredRefreshTokenFieldRefs {
    readonly id: FieldRef<"ExpiredRefreshToken", 'Int'>
    readonly savedAt: FieldRef<"ExpiredRefreshToken", 'DateTime'>
    readonly token: FieldRef<"ExpiredRefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExpiredRefreshToken findUnique
   */
  export type ExpiredRefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which ExpiredRefreshToken to fetch.
     */
    where: ExpiredRefreshTokenWhereUniqueInput
  }

  /**
   * ExpiredRefreshToken findUniqueOrThrow
   */
  export type ExpiredRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which ExpiredRefreshToken to fetch.
     */
    where: ExpiredRefreshTokenWhereUniqueInput
  }

  /**
   * ExpiredRefreshToken findFirst
   */
  export type ExpiredRefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which ExpiredRefreshToken to fetch.
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiredRefreshTokens to fetch.
     */
    orderBy?: ExpiredRefreshTokenOrderByWithRelationInput | ExpiredRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpiredRefreshTokens.
     */
    cursor?: ExpiredRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiredRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiredRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpiredRefreshTokens.
     */
    distinct?: ExpiredRefreshTokenScalarFieldEnum | ExpiredRefreshTokenScalarFieldEnum[]
  }

  /**
   * ExpiredRefreshToken findFirstOrThrow
   */
  export type ExpiredRefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which ExpiredRefreshToken to fetch.
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiredRefreshTokens to fetch.
     */
    orderBy?: ExpiredRefreshTokenOrderByWithRelationInput | ExpiredRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpiredRefreshTokens.
     */
    cursor?: ExpiredRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiredRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiredRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpiredRefreshTokens.
     */
    distinct?: ExpiredRefreshTokenScalarFieldEnum | ExpiredRefreshTokenScalarFieldEnum[]
  }

  /**
   * ExpiredRefreshToken findMany
   */
  export type ExpiredRefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which ExpiredRefreshTokens to fetch.
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiredRefreshTokens to fetch.
     */
    orderBy?: ExpiredRefreshTokenOrderByWithRelationInput | ExpiredRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpiredRefreshTokens.
     */
    cursor?: ExpiredRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiredRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiredRefreshTokens.
     */
    skip?: number
    distinct?: ExpiredRefreshTokenScalarFieldEnum | ExpiredRefreshTokenScalarFieldEnum[]
  }

  /**
   * ExpiredRefreshToken create
   */
  export type ExpiredRefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a ExpiredRefreshToken.
     */
    data: XOR<ExpiredRefreshTokenCreateInput, ExpiredRefreshTokenUncheckedCreateInput>
  }

  /**
   * ExpiredRefreshToken createMany
   */
  export type ExpiredRefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpiredRefreshTokens.
     */
    data: ExpiredRefreshTokenCreateManyInput | ExpiredRefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpiredRefreshToken update
   */
  export type ExpiredRefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a ExpiredRefreshToken.
     */
    data: XOR<ExpiredRefreshTokenUpdateInput, ExpiredRefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which ExpiredRefreshToken to update.
     */
    where: ExpiredRefreshTokenWhereUniqueInput
  }

  /**
   * ExpiredRefreshToken updateMany
   */
  export type ExpiredRefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpiredRefreshTokens.
     */
    data: XOR<ExpiredRefreshTokenUpdateManyMutationInput, ExpiredRefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which ExpiredRefreshTokens to update
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * Limit how many ExpiredRefreshTokens to update.
     */
    limit?: number
  }

  /**
   * ExpiredRefreshToken upsert
   */
  export type ExpiredRefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the ExpiredRefreshToken to update in case it exists.
     */
    where: ExpiredRefreshTokenWhereUniqueInput
    /**
     * In case the ExpiredRefreshToken found by the `where` argument doesn't exist, create a new ExpiredRefreshToken with this data.
     */
    create: XOR<ExpiredRefreshTokenCreateInput, ExpiredRefreshTokenUncheckedCreateInput>
    /**
     * In case the ExpiredRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpiredRefreshTokenUpdateInput, ExpiredRefreshTokenUncheckedUpdateInput>
  }

  /**
   * ExpiredRefreshToken delete
   */
  export type ExpiredRefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
    /**
     * Filter which ExpiredRefreshToken to delete.
     */
    where: ExpiredRefreshTokenWhereUniqueInput
  }

  /**
   * ExpiredRefreshToken deleteMany
   */
  export type ExpiredRefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpiredRefreshTokens to delete
     */
    where?: ExpiredRefreshTokenWhereInput
    /**
     * Limit how many ExpiredRefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * ExpiredRefreshToken without action
   */
  export type ExpiredRefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiredRefreshToken
     */
    select?: ExpiredRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpiredRefreshToken
     */
    omit?: ExpiredRefreshTokenOmit<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    Provinces?: boolean | Country$ProvincesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>



  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provinces?: boolean | Country$ProvincesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      Provinces: Prisma.$ProvincePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Provinces<T extends Country$ProvincesArgs<ExtArgs> = {}>(args?: Subset<T, Country$ProvincesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly code: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.Provinces
   */
  export type Country$ProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    cursor?: ProvinceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    countryId: number | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    countryId: number | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    code: number
    name: number
    countryId: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    countryId?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    countryId?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    countryId?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    code: string
    name: string
    countryId: number
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    countryId?: boolean
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Cities?: boolean | Province$CitiesArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>



  export type ProvinceSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    countryId?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "countryId", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Cities?: boolean | Province$CitiesArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      Country: Prisma.$CountryPayload<ExtArgs>
      Cities: Prisma.$CityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      countryId: number
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
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
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cities<T extends Province$CitiesArgs<ExtArgs> = {}>(args?: Subset<T, Province$CitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'Int'>
    readonly code: FieldRef<"Province", 'String'>
    readonly name: FieldRef<"Province", 'String'>
    readonly countryId: FieldRef<"Province", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province.Cities
   */
  export type Province$CitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    provinceId: number | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    provinceId: number | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    code: number
    name: number
    provinceId: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    provinceId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    provinceId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    provinceId?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    code: string
    name: string
    provinceId: number
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    provinceId?: boolean
    Province?: boolean | ProvinceDefaultArgs<ExtArgs>
    Businesses?: boolean | City$BusinessesArgs<ExtArgs>
    Address?: boolean | City$AddressArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>



  export type CitySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    provinceId?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "provinceId", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Province?: boolean | ProvinceDefaultArgs<ExtArgs>
    Businesses?: boolean | City$BusinessesArgs<ExtArgs>
    Address?: boolean | City$AddressArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      Province: Prisma.$ProvincePayload<ExtArgs>
      Businesses: Prisma.$BusinessPayload<ExtArgs>[]
      Address: Prisma.$AddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      provinceId: number
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Businesses<T extends City$BusinessesArgs<ExtArgs> = {}>(args?: Subset<T, City$BusinessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Address<T extends City$AddressArgs<ExtArgs> = {}>(args?: Subset<T, City$AddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly code: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly provinceId: FieldRef<"City", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.Businesses
   */
  export type City$BusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * City.Address
   */
  export type City$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    profileImageId: number | null
    cityId: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    profileImageId: number | null
    cityId: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    profileImageId: number | null
    websiteUrl: string | null
    cityId: number | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    profileImageId: number | null
    websiteUrl: string | null
    cityId: number | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    description: number
    profileImageId: number
    websiteUrl: number
    cityId: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    profileImageId?: true
    cityId?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    profileImageId?: true
    cityId?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    profileImageId?: true
    websiteUrl?: true
    cityId?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    profileImageId?: true
    websiteUrl?: true
    cityId?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    profileImageId?: true
    websiteUrl?: true
    cityId?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    name: string
    description: string | null
    profileImageId: number | null
    websiteUrl: string | null
    cityId: number
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    profileImageId?: boolean
    websiteUrl?: boolean
    cityId?: boolean
    City?: boolean | CityDefaultArgs<ExtArgs>
    Favorites?: boolean | Business$FavoritesArgs<ExtArgs>
    Ratings?: boolean | Business$RatingsArgs<ExtArgs>
    Address?: boolean | Business$AddressArgs<ExtArgs>
    BusinessDetails?: boolean | Business$BusinessDetailsArgs<ExtArgs>
    ProfileImage?: boolean | Business$ProfileImageArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>



  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    profileImageId?: boolean
    websiteUrl?: boolean
    cityId?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "profileImageId" | "websiteUrl" | "cityId", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    City?: boolean | CityDefaultArgs<ExtArgs>
    Favorites?: boolean | Business$FavoritesArgs<ExtArgs>
    Ratings?: boolean | Business$RatingsArgs<ExtArgs>
    Address?: boolean | Business$AddressArgs<ExtArgs>
    BusinessDetails?: boolean | Business$BusinessDetailsArgs<ExtArgs>
    ProfileImage?: boolean | Business$ProfileImageArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      City: Prisma.$CityPayload<ExtArgs>
      Favorites: Prisma.$FavoritedBusinessPayload<ExtArgs>[]
      Ratings: Prisma.$RatingPayload<ExtArgs>[]
      Address: Prisma.$BusinessAddressPayload<ExtArgs> | null
      BusinessDetails: Prisma.$BusinessDetailsPayload<ExtArgs> | null
      ProfileImage: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      profileImageId: number | null
      websiteUrl: string | null
      cityId: number
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    City<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Favorites<T extends Business$FavoritesArgs<ExtArgs> = {}>(args?: Subset<T, Business$FavoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ratings<T extends Business$RatingsArgs<ExtArgs> = {}>(args?: Subset<T, Business$RatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Address<T extends Business$AddressArgs<ExtArgs> = {}>(args?: Subset<T, Business$AddressArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BusinessDetails<T extends Business$BusinessDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Business$BusinessDetailsArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProfileImage<T extends Business$ProfileImageArgs<ExtArgs> = {}>(args?: Subset<T, Business$ProfileImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly name: FieldRef<"Business", 'String'>
    readonly description: FieldRef<"Business", 'String'>
    readonly profileImageId: FieldRef<"Business", 'Int'>
    readonly websiteUrl: FieldRef<"Business", 'String'>
    readonly cityId: FieldRef<"Business", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.Favorites
   */
  export type Business$FavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    where?: FavoritedBusinessWhereInput
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    cursor?: FavoritedBusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritedBusinessScalarFieldEnum | FavoritedBusinessScalarFieldEnum[]
  }

  /**
   * Business.Ratings
   */
  export type Business$RatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Business.Address
   */
  export type Business$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    where?: BusinessAddressWhereInput
  }

  /**
   * Business.BusinessDetails
   */
  export type Business$BusinessDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    where?: BusinessDetailsWhereInput
  }

  /**
   * Business.ProfileImage
   */
  export type Business$ProfileImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model BusinessDetails
   */

  export type AggregateBusinessDetails = {
    _count: BusinessDetailsCountAggregateOutputType | null
    _avg: BusinessDetailsAvgAggregateOutputType | null
    _sum: BusinessDetailsSumAggregateOutputType | null
    _min: BusinessDetailsMinAggregateOutputType | null
    _max: BusinessDetailsMaxAggregateOutputType | null
  }

  export type BusinessDetailsAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessDetailsSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessDetailsMinAggregateOutputType = {
    id: number | null
  }

  export type BusinessDetailsMaxAggregateOutputType = {
    id: number | null
  }

  export type BusinessDetailsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type BusinessDetailsAvgAggregateInputType = {
    id?: true
  }

  export type BusinessDetailsSumAggregateInputType = {
    id?: true
  }

  export type BusinessDetailsMinAggregateInputType = {
    id?: true
  }

  export type BusinessDetailsMaxAggregateInputType = {
    id?: true
  }

  export type BusinessDetailsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type BusinessDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDetails to aggregate.
     */
    where?: BusinessDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDetails to fetch.
     */
    orderBy?: BusinessDetailsOrderByWithRelationInput | BusinessDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessDetails
    **/
    _count?: true | BusinessDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessDetailsMaxAggregateInputType
  }

  export type GetBusinessDetailsAggregateType<T extends BusinessDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessDetails[P]>
      : GetScalarType<T[P], AggregateBusinessDetails[P]>
  }




  export type BusinessDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessDetailsWhereInput
    orderBy?: BusinessDetailsOrderByWithAggregationInput | BusinessDetailsOrderByWithAggregationInput[]
    by: BusinessDetailsScalarFieldEnum[] | BusinessDetailsScalarFieldEnum
    having?: BusinessDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessDetailsCountAggregateInputType | true
    _avg?: BusinessDetailsAvgAggregateInputType
    _sum?: BusinessDetailsSumAggregateInputType
    _min?: BusinessDetailsMinAggregateInputType
    _max?: BusinessDetailsMaxAggregateInputType
  }

  export type BusinessDetailsGroupByOutputType = {
    id: number
    _count: BusinessDetailsCountAggregateOutputType | null
    _avg: BusinessDetailsAvgAggregateOutputType | null
    _sum: BusinessDetailsSumAggregateOutputType | null
    _min: BusinessDetailsMinAggregateOutputType | null
    _max: BusinessDetailsMaxAggregateOutputType | null
  }

  type GetBusinessDetailsGroupByPayload<T extends BusinessDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BusinessDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessDetails"]>



  export type BusinessDetailsSelectScalar = {
    id?: boolean
  }

  export type BusinessDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["businessDetails"]>
  export type BusinessDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $BusinessDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessDetails"
    objects: {
      Business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["businessDetails"]>
    composites: {}
  }

  type BusinessDetailsGetPayload<S extends boolean | null | undefined | BusinessDetailsDefaultArgs> = $Result.GetResult<Prisma.$BusinessDetailsPayload, S>

  type BusinessDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessDetailsCountAggregateInputType | true
    }

  export interface BusinessDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessDetails'], meta: { name: 'BusinessDetails' } }
    /**
     * Find zero or one BusinessDetails that matches the filter.
     * @param {BusinessDetailsFindUniqueArgs} args - Arguments to find a BusinessDetails
     * @example
     * // Get one BusinessDetails
     * const businessDetails = await prisma.businessDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessDetailsFindUniqueArgs>(args: SelectSubset<T, BusinessDetailsFindUniqueArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessDetailsFindUniqueOrThrowArgs} args - Arguments to find a BusinessDetails
     * @example
     * // Get one BusinessDetails
     * const businessDetails = await prisma.businessDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsFindFirstArgs} args - Arguments to find a BusinessDetails
     * @example
     * // Get one BusinessDetails
     * const businessDetails = await prisma.businessDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessDetailsFindFirstArgs>(args?: SelectSubset<T, BusinessDetailsFindFirstArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsFindFirstOrThrowArgs} args - Arguments to find a BusinessDetails
     * @example
     * // Get one BusinessDetails
     * const businessDetails = await prisma.businessDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessDetails
     * const businessDetails = await prisma.businessDetails.findMany()
     * 
     * // Get first 10 BusinessDetails
     * const businessDetails = await prisma.businessDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessDetailsWithIdOnly = await prisma.businessDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessDetailsFindManyArgs>(args?: SelectSubset<T, BusinessDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessDetails.
     * @param {BusinessDetailsCreateArgs} args - Arguments to create a BusinessDetails.
     * @example
     * // Create one BusinessDetails
     * const BusinessDetails = await prisma.businessDetails.create({
     *   data: {
     *     // ... data to create a BusinessDetails
     *   }
     * })
     * 
     */
    create<T extends BusinessDetailsCreateArgs>(args: SelectSubset<T, BusinessDetailsCreateArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessDetails.
     * @param {BusinessDetailsCreateManyArgs} args - Arguments to create many BusinessDetails.
     * @example
     * // Create many BusinessDetails
     * const businessDetails = await prisma.businessDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessDetailsCreateManyArgs>(args?: SelectSubset<T, BusinessDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessDetails.
     * @param {BusinessDetailsDeleteArgs} args - Arguments to delete one BusinessDetails.
     * @example
     * // Delete one BusinessDetails
     * const BusinessDetails = await prisma.businessDetails.delete({
     *   where: {
     *     // ... filter to delete one BusinessDetails
     *   }
     * })
     * 
     */
    delete<T extends BusinessDetailsDeleteArgs>(args: SelectSubset<T, BusinessDetailsDeleteArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessDetails.
     * @param {BusinessDetailsUpdateArgs} args - Arguments to update one BusinessDetails.
     * @example
     * // Update one BusinessDetails
     * const businessDetails = await prisma.businessDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessDetailsUpdateArgs>(args: SelectSubset<T, BusinessDetailsUpdateArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessDetails.
     * @param {BusinessDetailsDeleteManyArgs} args - Arguments to filter BusinessDetails to delete.
     * @example
     * // Delete a few BusinessDetails
     * const { count } = await prisma.businessDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDetailsDeleteManyArgs>(args?: SelectSubset<T, BusinessDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessDetails
     * const businessDetails = await prisma.businessDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessDetailsUpdateManyArgs>(args: SelectSubset<T, BusinessDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessDetails.
     * @param {BusinessDetailsUpsertArgs} args - Arguments to update or create a BusinessDetails.
     * @example
     * // Update or create a BusinessDetails
     * const businessDetails = await prisma.businessDetails.upsert({
     *   create: {
     *     // ... data to create a BusinessDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessDetails we want to update
     *   }
     * })
     */
    upsert<T extends BusinessDetailsUpsertArgs>(args: SelectSubset<T, BusinessDetailsUpsertArgs<ExtArgs>>): Prisma__BusinessDetailsClient<$Result.GetResult<Prisma.$BusinessDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsCountArgs} args - Arguments to filter BusinessDetails to count.
     * @example
     * // Count the number of BusinessDetails
     * const count = await prisma.businessDetails.count({
     *   where: {
     *     // ... the filter for the BusinessDetails we want to count
     *   }
     * })
    **/
    count<T extends BusinessDetailsCountArgs>(
      args?: Subset<T, BusinessDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessDetailsAggregateArgs>(args: Subset<T, BusinessDetailsAggregateArgs>): Prisma.PrismaPromise<GetBusinessDetailsAggregateType<T>>

    /**
     * Group by BusinessDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessDetailsGroupByArgs} args - Group by arguments.
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
      T extends BusinessDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BusinessDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BusinessDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessDetails model
   */
  readonly fields: BusinessDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessDetails model
   */
  interface BusinessDetailsFieldRefs {
    readonly id: FieldRef<"BusinessDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BusinessDetails findUnique
   */
  export type BusinessDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDetails to fetch.
     */
    where: BusinessDetailsWhereUniqueInput
  }

  /**
   * BusinessDetails findUniqueOrThrow
   */
  export type BusinessDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDetails to fetch.
     */
    where: BusinessDetailsWhereUniqueInput
  }

  /**
   * BusinessDetails findFirst
   */
  export type BusinessDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDetails to fetch.
     */
    where?: BusinessDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDetails to fetch.
     */
    orderBy?: BusinessDetailsOrderByWithRelationInput | BusinessDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessDetails.
     */
    cursor?: BusinessDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessDetails.
     */
    distinct?: BusinessDetailsScalarFieldEnum | BusinessDetailsScalarFieldEnum[]
  }

  /**
   * BusinessDetails findFirstOrThrow
   */
  export type BusinessDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDetails to fetch.
     */
    where?: BusinessDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDetails to fetch.
     */
    orderBy?: BusinessDetailsOrderByWithRelationInput | BusinessDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessDetails.
     */
    cursor?: BusinessDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessDetails.
     */
    distinct?: BusinessDetailsScalarFieldEnum | BusinessDetailsScalarFieldEnum[]
  }

  /**
   * BusinessDetails findMany
   */
  export type BusinessDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BusinessDetails to fetch.
     */
    where?: BusinessDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessDetails to fetch.
     */
    orderBy?: BusinessDetailsOrderByWithRelationInput | BusinessDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessDetails.
     */
    cursor?: BusinessDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessDetails.
     */
    skip?: number
    distinct?: BusinessDetailsScalarFieldEnum | BusinessDetailsScalarFieldEnum[]
  }

  /**
   * BusinessDetails create
   */
  export type BusinessDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessDetails.
     */
    data: XOR<BusinessDetailsCreateInput, BusinessDetailsUncheckedCreateInput>
  }

  /**
   * BusinessDetails createMany
   */
  export type BusinessDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessDetails.
     */
    data: BusinessDetailsCreateManyInput | BusinessDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessDetails update
   */
  export type BusinessDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessDetails.
     */
    data: XOR<BusinessDetailsUpdateInput, BusinessDetailsUncheckedUpdateInput>
    /**
     * Choose, which BusinessDetails to update.
     */
    where: BusinessDetailsWhereUniqueInput
  }

  /**
   * BusinessDetails updateMany
   */
  export type BusinessDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessDetails.
     */
    data: XOR<BusinessDetailsUpdateManyMutationInput, BusinessDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BusinessDetails to update
     */
    where?: BusinessDetailsWhereInput
    /**
     * Limit how many BusinessDetails to update.
     */
    limit?: number
  }

  /**
   * BusinessDetails upsert
   */
  export type BusinessDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessDetails to update in case it exists.
     */
    where: BusinessDetailsWhereUniqueInput
    /**
     * In case the BusinessDetails found by the `where` argument doesn't exist, create a new BusinessDetails with this data.
     */
    create: XOR<BusinessDetailsCreateInput, BusinessDetailsUncheckedCreateInput>
    /**
     * In case the BusinessDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessDetailsUpdateInput, BusinessDetailsUncheckedUpdateInput>
  }

  /**
   * BusinessDetails delete
   */
  export type BusinessDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
    /**
     * Filter which BusinessDetails to delete.
     */
    where: BusinessDetailsWhereUniqueInput
  }

  /**
   * BusinessDetails deleteMany
   */
  export type BusinessDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessDetails to delete
     */
    where?: BusinessDetailsWhereInput
    /**
     * Limit how many BusinessDetails to delete.
     */
    limit?: number
  }

  /**
   * BusinessDetails without action
   */
  export type BusinessDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessDetails
     */
    select?: BusinessDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessDetails
     */
    omit?: BusinessDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessDetailsInclude<ExtArgs> | null
  }


  /**
   * Model FavoritedBusiness
   */

  export type AggregateFavoritedBusiness = {
    _count: FavoritedBusinessCountAggregateOutputType | null
    _avg: FavoritedBusinessAvgAggregateOutputType | null
    _sum: FavoritedBusinessSumAggregateOutputType | null
    _min: FavoritedBusinessMinAggregateOutputType | null
    _max: FavoritedBusinessMaxAggregateOutputType | null
  }

  export type FavoritedBusinessAvgAggregateOutputType = {
    businessId: number | null
  }

  export type FavoritedBusinessSumAggregateOutputType = {
    businessId: number | null
  }

  export type FavoritedBusinessMinAggregateOutputType = {
    businessId: number | null
    accountId: string | null
  }

  export type FavoritedBusinessMaxAggregateOutputType = {
    businessId: number | null
    accountId: string | null
  }

  export type FavoritedBusinessCountAggregateOutputType = {
    businessId: number
    accountId: number
    _all: number
  }


  export type FavoritedBusinessAvgAggregateInputType = {
    businessId?: true
  }

  export type FavoritedBusinessSumAggregateInputType = {
    businessId?: true
  }

  export type FavoritedBusinessMinAggregateInputType = {
    businessId?: true
    accountId?: true
  }

  export type FavoritedBusinessMaxAggregateInputType = {
    businessId?: true
    accountId?: true
  }

  export type FavoritedBusinessCountAggregateInputType = {
    businessId?: true
    accountId?: true
    _all?: true
  }

  export type FavoritedBusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoritedBusiness to aggregate.
     */
    where?: FavoritedBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoritedBusinesses to fetch.
     */
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritedBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoritedBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoritedBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoritedBusinesses
    **/
    _count?: true | FavoritedBusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritedBusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritedBusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritedBusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritedBusinessMaxAggregateInputType
  }

  export type GetFavoritedBusinessAggregateType<T extends FavoritedBusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoritedBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoritedBusiness[P]>
      : GetScalarType<T[P], AggregateFavoritedBusiness[P]>
  }




  export type FavoritedBusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritedBusinessWhereInput
    orderBy?: FavoritedBusinessOrderByWithAggregationInput | FavoritedBusinessOrderByWithAggregationInput[]
    by: FavoritedBusinessScalarFieldEnum[] | FavoritedBusinessScalarFieldEnum
    having?: FavoritedBusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritedBusinessCountAggregateInputType | true
    _avg?: FavoritedBusinessAvgAggregateInputType
    _sum?: FavoritedBusinessSumAggregateInputType
    _min?: FavoritedBusinessMinAggregateInputType
    _max?: FavoritedBusinessMaxAggregateInputType
  }

  export type FavoritedBusinessGroupByOutputType = {
    businessId: number
    accountId: string
    _count: FavoritedBusinessCountAggregateOutputType | null
    _avg: FavoritedBusinessAvgAggregateOutputType | null
    _sum: FavoritedBusinessSumAggregateOutputType | null
    _min: FavoritedBusinessMinAggregateOutputType | null
    _max: FavoritedBusinessMaxAggregateOutputType | null
  }

  type GetFavoritedBusinessGroupByPayload<T extends FavoritedBusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritedBusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritedBusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritedBusinessGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritedBusinessGroupByOutputType[P]>
        }
      >
    >


  export type FavoritedBusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    businessId?: boolean
    accountId?: boolean
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoritedBusiness"]>



  export type FavoritedBusinessSelectScalar = {
    businessId?: boolean
    accountId?: boolean
  }

  export type FavoritedBusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"businessId" | "accountId", ExtArgs["result"]["favoritedBusiness"]>
  export type FavoritedBusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $FavoritedBusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoritedBusiness"
    objects: {
      Business: Prisma.$BusinessPayload<ExtArgs>
      Account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      businessId: number
      accountId: string
    }, ExtArgs["result"]["favoritedBusiness"]>
    composites: {}
  }

  type FavoritedBusinessGetPayload<S extends boolean | null | undefined | FavoritedBusinessDefaultArgs> = $Result.GetResult<Prisma.$FavoritedBusinessPayload, S>

  type FavoritedBusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritedBusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritedBusinessCountAggregateInputType | true
    }

  export interface FavoritedBusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoritedBusiness'], meta: { name: 'FavoritedBusiness' } }
    /**
     * Find zero or one FavoritedBusiness that matches the filter.
     * @param {FavoritedBusinessFindUniqueArgs} args - Arguments to find a FavoritedBusiness
     * @example
     * // Get one FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritedBusinessFindUniqueArgs>(args: SelectSubset<T, FavoritedBusinessFindUniqueArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoritedBusiness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritedBusinessFindUniqueOrThrowArgs} args - Arguments to find a FavoritedBusiness
     * @example
     * // Get one FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritedBusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritedBusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoritedBusiness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessFindFirstArgs} args - Arguments to find a FavoritedBusiness
     * @example
     * // Get one FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritedBusinessFindFirstArgs>(args?: SelectSubset<T, FavoritedBusinessFindFirstArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoritedBusiness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessFindFirstOrThrowArgs} args - Arguments to find a FavoritedBusiness
     * @example
     * // Get one FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritedBusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritedBusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoritedBusinesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoritedBusinesses
     * const favoritedBusinesses = await prisma.favoritedBusiness.findMany()
     * 
     * // Get first 10 FavoritedBusinesses
     * const favoritedBusinesses = await prisma.favoritedBusiness.findMany({ take: 10 })
     * 
     * // Only select the `businessId`
     * const favoritedBusinessWithBusinessIdOnly = await prisma.favoritedBusiness.findMany({ select: { businessId: true } })
     * 
     */
    findMany<T extends FavoritedBusinessFindManyArgs>(args?: SelectSubset<T, FavoritedBusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoritedBusiness.
     * @param {FavoritedBusinessCreateArgs} args - Arguments to create a FavoritedBusiness.
     * @example
     * // Create one FavoritedBusiness
     * const FavoritedBusiness = await prisma.favoritedBusiness.create({
     *   data: {
     *     // ... data to create a FavoritedBusiness
     *   }
     * })
     * 
     */
    create<T extends FavoritedBusinessCreateArgs>(args: SelectSubset<T, FavoritedBusinessCreateArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoritedBusinesses.
     * @param {FavoritedBusinessCreateManyArgs} args - Arguments to create many FavoritedBusinesses.
     * @example
     * // Create many FavoritedBusinesses
     * const favoritedBusiness = await prisma.favoritedBusiness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritedBusinessCreateManyArgs>(args?: SelectSubset<T, FavoritedBusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoritedBusiness.
     * @param {FavoritedBusinessDeleteArgs} args - Arguments to delete one FavoritedBusiness.
     * @example
     * // Delete one FavoritedBusiness
     * const FavoritedBusiness = await prisma.favoritedBusiness.delete({
     *   where: {
     *     // ... filter to delete one FavoritedBusiness
     *   }
     * })
     * 
     */
    delete<T extends FavoritedBusinessDeleteArgs>(args: SelectSubset<T, FavoritedBusinessDeleteArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoritedBusiness.
     * @param {FavoritedBusinessUpdateArgs} args - Arguments to update one FavoritedBusiness.
     * @example
     * // Update one FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritedBusinessUpdateArgs>(args: SelectSubset<T, FavoritedBusinessUpdateArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoritedBusinesses.
     * @param {FavoritedBusinessDeleteManyArgs} args - Arguments to filter FavoritedBusinesses to delete.
     * @example
     * // Delete a few FavoritedBusinesses
     * const { count } = await prisma.favoritedBusiness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritedBusinessDeleteManyArgs>(args?: SelectSubset<T, FavoritedBusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoritedBusinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoritedBusinesses
     * const favoritedBusiness = await prisma.favoritedBusiness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritedBusinessUpdateManyArgs>(args: SelectSubset<T, FavoritedBusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoritedBusiness.
     * @param {FavoritedBusinessUpsertArgs} args - Arguments to update or create a FavoritedBusiness.
     * @example
     * // Update or create a FavoritedBusiness
     * const favoritedBusiness = await prisma.favoritedBusiness.upsert({
     *   create: {
     *     // ... data to create a FavoritedBusiness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoritedBusiness we want to update
     *   }
     * })
     */
    upsert<T extends FavoritedBusinessUpsertArgs>(args: SelectSubset<T, FavoritedBusinessUpsertArgs<ExtArgs>>): Prisma__FavoritedBusinessClient<$Result.GetResult<Prisma.$FavoritedBusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoritedBusinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessCountArgs} args - Arguments to filter FavoritedBusinesses to count.
     * @example
     * // Count the number of FavoritedBusinesses
     * const count = await prisma.favoritedBusiness.count({
     *   where: {
     *     // ... the filter for the FavoritedBusinesses we want to count
     *   }
     * })
    **/
    count<T extends FavoritedBusinessCountArgs>(
      args?: Subset<T, FavoritedBusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritedBusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoritedBusiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritedBusinessAggregateArgs>(args: Subset<T, FavoritedBusinessAggregateArgs>): Prisma.PrismaPromise<GetFavoritedBusinessAggregateType<T>>

    /**
     * Group by FavoritedBusiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritedBusinessGroupByArgs} args - Group by arguments.
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
      T extends FavoritedBusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritedBusinessGroupByArgs['orderBy'] }
        : { orderBy?: FavoritedBusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoritedBusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritedBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoritedBusiness model
   */
  readonly fields: FavoritedBusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoritedBusiness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritedBusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoritedBusiness model
   */
  interface FavoritedBusinessFieldRefs {
    readonly businessId: FieldRef<"FavoritedBusiness", 'Int'>
    readonly accountId: FieldRef<"FavoritedBusiness", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavoritedBusiness findUnique
   */
  export type FavoritedBusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter, which FavoritedBusiness to fetch.
     */
    where: FavoritedBusinessWhereUniqueInput
  }

  /**
   * FavoritedBusiness findUniqueOrThrow
   */
  export type FavoritedBusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter, which FavoritedBusiness to fetch.
     */
    where: FavoritedBusinessWhereUniqueInput
  }

  /**
   * FavoritedBusiness findFirst
   */
  export type FavoritedBusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter, which FavoritedBusiness to fetch.
     */
    where?: FavoritedBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoritedBusinesses to fetch.
     */
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoritedBusinesses.
     */
    cursor?: FavoritedBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoritedBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoritedBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoritedBusinesses.
     */
    distinct?: FavoritedBusinessScalarFieldEnum | FavoritedBusinessScalarFieldEnum[]
  }

  /**
   * FavoritedBusiness findFirstOrThrow
   */
  export type FavoritedBusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter, which FavoritedBusiness to fetch.
     */
    where?: FavoritedBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoritedBusinesses to fetch.
     */
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoritedBusinesses.
     */
    cursor?: FavoritedBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoritedBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoritedBusinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoritedBusinesses.
     */
    distinct?: FavoritedBusinessScalarFieldEnum | FavoritedBusinessScalarFieldEnum[]
  }

  /**
   * FavoritedBusiness findMany
   */
  export type FavoritedBusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter, which FavoritedBusinesses to fetch.
     */
    where?: FavoritedBusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoritedBusinesses to fetch.
     */
    orderBy?: FavoritedBusinessOrderByWithRelationInput | FavoritedBusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoritedBusinesses.
     */
    cursor?: FavoritedBusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoritedBusinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoritedBusinesses.
     */
    skip?: number
    distinct?: FavoritedBusinessScalarFieldEnum | FavoritedBusinessScalarFieldEnum[]
  }

  /**
   * FavoritedBusiness create
   */
  export type FavoritedBusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoritedBusiness.
     */
    data: XOR<FavoritedBusinessCreateInput, FavoritedBusinessUncheckedCreateInput>
  }

  /**
   * FavoritedBusiness createMany
   */
  export type FavoritedBusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoritedBusinesses.
     */
    data: FavoritedBusinessCreateManyInput | FavoritedBusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoritedBusiness update
   */
  export type FavoritedBusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoritedBusiness.
     */
    data: XOR<FavoritedBusinessUpdateInput, FavoritedBusinessUncheckedUpdateInput>
    /**
     * Choose, which FavoritedBusiness to update.
     */
    where: FavoritedBusinessWhereUniqueInput
  }

  /**
   * FavoritedBusiness updateMany
   */
  export type FavoritedBusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoritedBusinesses.
     */
    data: XOR<FavoritedBusinessUpdateManyMutationInput, FavoritedBusinessUncheckedUpdateManyInput>
    /**
     * Filter which FavoritedBusinesses to update
     */
    where?: FavoritedBusinessWhereInput
    /**
     * Limit how many FavoritedBusinesses to update.
     */
    limit?: number
  }

  /**
   * FavoritedBusiness upsert
   */
  export type FavoritedBusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoritedBusiness to update in case it exists.
     */
    where: FavoritedBusinessWhereUniqueInput
    /**
     * In case the FavoritedBusiness found by the `where` argument doesn't exist, create a new FavoritedBusiness with this data.
     */
    create: XOR<FavoritedBusinessCreateInput, FavoritedBusinessUncheckedCreateInput>
    /**
     * In case the FavoritedBusiness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritedBusinessUpdateInput, FavoritedBusinessUncheckedUpdateInput>
  }

  /**
   * FavoritedBusiness delete
   */
  export type FavoritedBusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
    /**
     * Filter which FavoritedBusiness to delete.
     */
    where: FavoritedBusinessWhereUniqueInput
  }

  /**
   * FavoritedBusiness deleteMany
   */
  export type FavoritedBusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoritedBusinesses to delete
     */
    where?: FavoritedBusinessWhereInput
    /**
     * Limit how many FavoritedBusinesses to delete.
     */
    limit?: number
  }

  /**
   * FavoritedBusiness without action
   */
  export type FavoritedBusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoritedBusiness
     */
    select?: FavoritedBusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoritedBusiness
     */
    omit?: FavoritedBusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritedBusinessInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
    parentRatingId: number | null
    atmosphereRating: number | null
    serviceRating: number | null
    speedRating: number | null
    catalogRating: number | null
    priceRating: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    businessId: number | null
    parentRatingId: number | null
    atmosphereRating: number | null
    serviceRating: number | null
    speedRating: number | null
    catalogRating: number | null
    priceRating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    businessId: number | null
    accountId: string | null
    parentRatingId: number | null
    createdAt: Date | null
    atmosphereRating: number | null
    serviceRating: number | null
    speedRating: number | null
    catalogRating: number | null
    priceRating: number | null
    atmosphereNote: string | null
    serviceNote: string | null
    speedNote: string | null
    catalogNote: string | null
    priceNote: string | null
    overallNote: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    businessId: number | null
    accountId: string | null
    parentRatingId: number | null
    createdAt: Date | null
    atmosphereRating: number | null
    serviceRating: number | null
    speedRating: number | null
    catalogRating: number | null
    priceRating: number | null
    atmosphereNote: string | null
    serviceNote: string | null
    speedNote: string | null
    catalogNote: string | null
    priceNote: string | null
    overallNote: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    businessId: number
    accountId: number
    parentRatingId: number
    createdAt: number
    atmosphereRating: number
    serviceRating: number
    speedRating: number
    catalogRating: number
    priceRating: number
    atmosphereNote: number
    serviceNote: number
    speedNote: number
    catalogNote: number
    priceNote: number
    overallNote: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    businessId?: true
    parentRatingId?: true
    atmosphereRating?: true
    serviceRating?: true
    speedRating?: true
    catalogRating?: true
    priceRating?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    businessId?: true
    parentRatingId?: true
    atmosphereRating?: true
    serviceRating?: true
    speedRating?: true
    catalogRating?: true
    priceRating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    businessId?: true
    accountId?: true
    parentRatingId?: true
    createdAt?: true
    atmosphereRating?: true
    serviceRating?: true
    speedRating?: true
    catalogRating?: true
    priceRating?: true
    atmosphereNote?: true
    serviceNote?: true
    speedNote?: true
    catalogNote?: true
    priceNote?: true
    overallNote?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    businessId?: true
    accountId?: true
    parentRatingId?: true
    createdAt?: true
    atmosphereRating?: true
    serviceRating?: true
    speedRating?: true
    catalogRating?: true
    priceRating?: true
    atmosphereNote?: true
    serviceNote?: true
    speedNote?: true
    catalogNote?: true
    priceNote?: true
    overallNote?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    businessId?: true
    accountId?: true
    parentRatingId?: true
    createdAt?: true
    atmosphereRating?: true
    serviceRating?: true
    speedRating?: true
    catalogRating?: true
    priceRating?: true
    atmosphereNote?: true
    serviceNote?: true
    speedNote?: true
    catalogNote?: true
    priceNote?: true
    overallNote?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    businessId: number
    accountId: string
    parentRatingId: number
    createdAt: Date
    atmosphereRating: number | null
    serviceRating: number | null
    speedRating: number | null
    catalogRating: number | null
    priceRating: number | null
    atmosphereNote: string | null
    serviceNote: string | null
    speedNote: string | null
    catalogNote: string | null
    priceNote: string | null
    overallNote: string | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    accountId?: boolean
    parentRatingId?: boolean
    createdAt?: boolean
    atmosphereRating?: boolean
    serviceRating?: boolean
    speedRating?: boolean
    catalogRating?: boolean
    priceRating?: boolean
    atmosphereNote?: boolean
    serviceNote?: boolean
    speedNote?: boolean
    catalogNote?: boolean
    priceNote?: boolean
    overallNote?: boolean
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Parent?: boolean | Rating$ParentArgs<ExtArgs>
    Children?: boolean | Rating$ChildrenArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>



  export type RatingSelectScalar = {
    id?: boolean
    businessId?: boolean
    accountId?: boolean
    parentRatingId?: boolean
    createdAt?: boolean
    atmosphereRating?: boolean
    serviceRating?: boolean
    speedRating?: boolean
    catalogRating?: boolean
    priceRating?: boolean
    atmosphereNote?: boolean
    serviceNote?: boolean
    speedNote?: boolean
    catalogNote?: boolean
    priceNote?: boolean
    overallNote?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "accountId" | "parentRatingId" | "createdAt" | "atmosphereRating" | "serviceRating" | "speedRating" | "catalogRating" | "priceRating" | "atmosphereNote" | "serviceNote" | "speedNote" | "catalogNote" | "priceNote" | "overallNote", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    Parent?: boolean | Rating$ParentArgs<ExtArgs>
    Children?: boolean | Rating$ChildrenArgs<ExtArgs>
    _count?: boolean | RatingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      Business: Prisma.$BusinessPayload<ExtArgs>
      Account: Prisma.$AccountPayload<ExtArgs>
      Parent: Prisma.$RatingPayload<ExtArgs> | null
      Children: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessId: number
      accountId: string
      parentRatingId: number
      createdAt: Date
      atmosphereRating: number | null
      serviceRating: number | null
      speedRating: number | null
      catalogRating: number | null
      priceRating: number | null
      atmosphereNote: string | null
      serviceNote: string | null
      speedNote: string | null
      catalogNote: string | null
      priceNote: string | null
      overallNote: string | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Parent<T extends Rating$ParentArgs<ExtArgs> = {}>(args?: Subset<T, Rating$ParentArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Children<T extends Rating$ChildrenArgs<ExtArgs> = {}>(args?: Subset<T, Rating$ChildrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly businessId: FieldRef<"Rating", 'Int'>
    readonly accountId: FieldRef<"Rating", 'String'>
    readonly parentRatingId: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly atmosphereRating: FieldRef<"Rating", 'Int'>
    readonly serviceRating: FieldRef<"Rating", 'Int'>
    readonly speedRating: FieldRef<"Rating", 'Int'>
    readonly catalogRating: FieldRef<"Rating", 'Int'>
    readonly priceRating: FieldRef<"Rating", 'Int'>
    readonly atmosphereNote: FieldRef<"Rating", 'String'>
    readonly serviceNote: FieldRef<"Rating", 'String'>
    readonly speedNote: FieldRef<"Rating", 'String'>
    readonly catalogNote: FieldRef<"Rating", 'String'>
    readonly priceNote: FieldRef<"Rating", 'String'>
    readonly overallNote: FieldRef<"Rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating.Parent
   */
  export type Rating$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
  }

  /**
   * Rating.Children
   */
  export type Rating$ChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
    lat: number | null
    lng: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    lat: number | null
    lng: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    contact: string | null
    organization: string | null
    lineOne: string | null
    lineTwo: string | null
    lineThree: string | null
    suite: string | null
    postal: string | null
    lat: number | null
    lng: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    contact: string | null
    organization: string | null
    lineOne: string | null
    lineTwo: string | null
    lineThree: string | null
    suite: string | null
    postal: string | null
    lat: number | null
    lng: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    cityId: number
    contact: number
    organization: number
    lineOne: number
    lineTwo: number
    lineThree: number
    suite: number
    postal: number
    lat: number
    lng: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    cityId?: true
    lat?: true
    lng?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    cityId?: true
    lat?: true
    lng?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    cityId?: true
    contact?: true
    organization?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    suite?: true
    postal?: true
    lat?: true
    lng?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    cityId?: true
    contact?: true
    organization?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    suite?: true
    postal?: true
    lat?: true
    lng?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    cityId?: true
    contact?: true
    organization?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    suite?: true
    postal?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    cityId: number
    contact: string | null
    organization: string | null
    lineOne: string | null
    lineTwo: string | null
    lineThree: string | null
    suite: string | null
    postal: string | null
    lat: number | null
    lng: number | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    contact?: boolean
    organization?: boolean
    lineOne?: boolean
    lineTwo?: boolean
    lineThree?: boolean
    suite?: boolean
    postal?: boolean
    lat?: boolean
    lng?: boolean
    City?: boolean | Address$CityArgs<ExtArgs>
    BusinessAddress?: boolean | Address$BusinessAddressArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    cityId?: boolean
    contact?: boolean
    organization?: boolean
    lineOne?: boolean
    lineTwo?: boolean
    lineThree?: boolean
    suite?: boolean
    postal?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cityId" | "contact" | "organization" | "lineOne" | "lineTwo" | "lineThree" | "suite" | "postal" | "lat" | "lng", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    City?: boolean | Address$CityArgs<ExtArgs>
    BusinessAddress?: boolean | Address$BusinessAddressArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      City: Prisma.$CityPayload<ExtArgs> | null
      BusinessAddress: Prisma.$BusinessAddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      contact: string | null
      organization: string | null
      lineOne: string | null
      lineTwo: string | null
      lineThree: string | null
      suite: string | null
      postal: string | null
      lat: number | null
      lng: number | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    City<T extends Address$CityArgs<ExtArgs> = {}>(args?: Subset<T, Address$CityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BusinessAddress<T extends Address$BusinessAddressArgs<ExtArgs> = {}>(args?: Subset<T, Address$BusinessAddressArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly cityId: FieldRef<"Address", 'Int'>
    readonly contact: FieldRef<"Address", 'String'>
    readonly organization: FieldRef<"Address", 'String'>
    readonly lineOne: FieldRef<"Address", 'String'>
    readonly lineTwo: FieldRef<"Address", 'String'>
    readonly lineThree: FieldRef<"Address", 'String'>
    readonly suite: FieldRef<"Address", 'String'>
    readonly postal: FieldRef<"Address", 'String'>
    readonly lat: FieldRef<"Address", 'Float'>
    readonly lng: FieldRef<"Address", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.City
   */
  export type Address$CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * Address.BusinessAddress
   */
  export type Address$BusinessAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    where?: BusinessAddressWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model BusinessAddress
   */

  export type AggregateBusinessAddress = {
    _count: BusinessAddressCountAggregateOutputType | null
    _avg: BusinessAddressAvgAggregateOutputType | null
    _sum: BusinessAddressSumAggregateOutputType | null
    _min: BusinessAddressMinAggregateOutputType | null
    _max: BusinessAddressMaxAggregateOutputType | null
  }

  export type BusinessAddressAvgAggregateOutputType = {
    businessId: number | null
    addressId: number | null
  }

  export type BusinessAddressSumAggregateOutputType = {
    businessId: number | null
    addressId: number | null
  }

  export type BusinessAddressMinAggregateOutputType = {
    businessId: number | null
    addressId: number | null
  }

  export type BusinessAddressMaxAggregateOutputType = {
    businessId: number | null
    addressId: number | null
  }

  export type BusinessAddressCountAggregateOutputType = {
    businessId: number
    addressId: number
    _all: number
  }


  export type BusinessAddressAvgAggregateInputType = {
    businessId?: true
    addressId?: true
  }

  export type BusinessAddressSumAggregateInputType = {
    businessId?: true
    addressId?: true
  }

  export type BusinessAddressMinAggregateInputType = {
    businessId?: true
    addressId?: true
  }

  export type BusinessAddressMaxAggregateInputType = {
    businessId?: true
    addressId?: true
  }

  export type BusinessAddressCountAggregateInputType = {
    businessId?: true
    addressId?: true
    _all?: true
  }

  export type BusinessAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAddress to aggregate.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessAddresses
    **/
    _count?: true | BusinessAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessAddressMaxAggregateInputType
  }

  export type GetBusinessAddressAggregateType<T extends BusinessAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessAddress[P]>
      : GetScalarType<T[P], AggregateBusinessAddress[P]>
  }




  export type BusinessAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAddressWhereInput
    orderBy?: BusinessAddressOrderByWithAggregationInput | BusinessAddressOrderByWithAggregationInput[]
    by: BusinessAddressScalarFieldEnum[] | BusinessAddressScalarFieldEnum
    having?: BusinessAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessAddressCountAggregateInputType | true
    _avg?: BusinessAddressAvgAggregateInputType
    _sum?: BusinessAddressSumAggregateInputType
    _min?: BusinessAddressMinAggregateInputType
    _max?: BusinessAddressMaxAggregateInputType
  }

  export type BusinessAddressGroupByOutputType = {
    businessId: number
    addressId: number
    _count: BusinessAddressCountAggregateOutputType | null
    _avg: BusinessAddressAvgAggregateOutputType | null
    _sum: BusinessAddressSumAggregateOutputType | null
    _min: BusinessAddressMinAggregateOutputType | null
    _max: BusinessAddressMaxAggregateOutputType | null
  }

  type GetBusinessAddressGroupByPayload<T extends BusinessAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessAddressGroupByOutputType[P]>
        }
      >
    >


  export type BusinessAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    businessId?: boolean
    addressId?: boolean
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessAddress"]>



  export type BusinessAddressSelectScalar = {
    businessId?: boolean
    addressId?: boolean
  }

  export type BusinessAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"businessId" | "addressId", ExtArgs["result"]["businessAddress"]>
  export type BusinessAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | BusinessDefaultArgs<ExtArgs>
    Address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $BusinessAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessAddress"
    objects: {
      Business: Prisma.$BusinessPayload<ExtArgs>
      Address: Prisma.$AddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      businessId: number
      addressId: number
    }, ExtArgs["result"]["businessAddress"]>
    composites: {}
  }

  type BusinessAddressGetPayload<S extends boolean | null | undefined | BusinessAddressDefaultArgs> = $Result.GetResult<Prisma.$BusinessAddressPayload, S>

  type BusinessAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessAddressCountAggregateInputType | true
    }

  export interface BusinessAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessAddress'], meta: { name: 'BusinessAddress' } }
    /**
     * Find zero or one BusinessAddress that matches the filter.
     * @param {BusinessAddressFindUniqueArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessAddressFindUniqueArgs>(args: SelectSubset<T, BusinessAddressFindUniqueArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessAddressFindUniqueOrThrowArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindFirstArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessAddressFindFirstArgs>(args?: SelectSubset<T, BusinessAddressFindFirstArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindFirstOrThrowArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessAddresses
     * const businessAddresses = await prisma.businessAddress.findMany()
     * 
     * // Get first 10 BusinessAddresses
     * const businessAddresses = await prisma.businessAddress.findMany({ take: 10 })
     * 
     * // Only select the `businessId`
     * const businessAddressWithBusinessIdOnly = await prisma.businessAddress.findMany({ select: { businessId: true } })
     * 
     */
    findMany<T extends BusinessAddressFindManyArgs>(args?: SelectSubset<T, BusinessAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessAddress.
     * @param {BusinessAddressCreateArgs} args - Arguments to create a BusinessAddress.
     * @example
     * // Create one BusinessAddress
     * const BusinessAddress = await prisma.businessAddress.create({
     *   data: {
     *     // ... data to create a BusinessAddress
     *   }
     * })
     * 
     */
    create<T extends BusinessAddressCreateArgs>(args: SelectSubset<T, BusinessAddressCreateArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessAddresses.
     * @param {BusinessAddressCreateManyArgs} args - Arguments to create many BusinessAddresses.
     * @example
     * // Create many BusinessAddresses
     * const businessAddress = await prisma.businessAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessAddressCreateManyArgs>(args?: SelectSubset<T, BusinessAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessAddress.
     * @param {BusinessAddressDeleteArgs} args - Arguments to delete one BusinessAddress.
     * @example
     * // Delete one BusinessAddress
     * const BusinessAddress = await prisma.businessAddress.delete({
     *   where: {
     *     // ... filter to delete one BusinessAddress
     *   }
     * })
     * 
     */
    delete<T extends BusinessAddressDeleteArgs>(args: SelectSubset<T, BusinessAddressDeleteArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessAddress.
     * @param {BusinessAddressUpdateArgs} args - Arguments to update one BusinessAddress.
     * @example
     * // Update one BusinessAddress
     * const businessAddress = await prisma.businessAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessAddressUpdateArgs>(args: SelectSubset<T, BusinessAddressUpdateArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessAddresses.
     * @param {BusinessAddressDeleteManyArgs} args - Arguments to filter BusinessAddresses to delete.
     * @example
     * // Delete a few BusinessAddresses
     * const { count } = await prisma.businessAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessAddressDeleteManyArgs>(args?: SelectSubset<T, BusinessAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessAddresses
     * const businessAddress = await prisma.businessAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessAddressUpdateManyArgs>(args: SelectSubset<T, BusinessAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessAddress.
     * @param {BusinessAddressUpsertArgs} args - Arguments to update or create a BusinessAddress.
     * @example
     * // Update or create a BusinessAddress
     * const businessAddress = await prisma.businessAddress.upsert({
     *   create: {
     *     // ... data to create a BusinessAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessAddress we want to update
     *   }
     * })
     */
    upsert<T extends BusinessAddressUpsertArgs>(args: SelectSubset<T, BusinessAddressUpsertArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressCountArgs} args - Arguments to filter BusinessAddresses to count.
     * @example
     * // Count the number of BusinessAddresses
     * const count = await prisma.businessAddress.count({
     *   where: {
     *     // ... the filter for the BusinessAddresses we want to count
     *   }
     * })
    **/
    count<T extends BusinessAddressCountArgs>(
      args?: Subset<T, BusinessAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAddressAggregateArgs>(args: Subset<T, BusinessAddressAggregateArgs>): Prisma.PrismaPromise<GetBusinessAddressAggregateType<T>>

    /**
     * Group by BusinessAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressGroupByArgs} args - Group by arguments.
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
      T extends BusinessAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessAddressGroupByArgs['orderBy'] }
        : { orderBy?: BusinessAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BusinessAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessAddress model
   */
  readonly fields: BusinessAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessAddress model
   */
  interface BusinessAddressFieldRefs {
    readonly businessId: FieldRef<"BusinessAddress", 'Int'>
    readonly addressId: FieldRef<"BusinessAddress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BusinessAddress findUnique
   */
  export type BusinessAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress findUniqueOrThrow
   */
  export type BusinessAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress findFirst
   */
  export type BusinessAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAddresses.
     */
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress findFirstOrThrow
   */
  export type BusinessAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAddresses.
     */
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress findMany
   */
  export type BusinessAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddresses to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress create
   */
  export type BusinessAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessAddress.
     */
    data: XOR<BusinessAddressCreateInput, BusinessAddressUncheckedCreateInput>
  }

  /**
   * BusinessAddress createMany
   */
  export type BusinessAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessAddresses.
     */
    data: BusinessAddressCreateManyInput | BusinessAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessAddress update
   */
  export type BusinessAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessAddress.
     */
    data: XOR<BusinessAddressUpdateInput, BusinessAddressUncheckedUpdateInput>
    /**
     * Choose, which BusinessAddress to update.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress updateMany
   */
  export type BusinessAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessAddresses.
     */
    data: XOR<BusinessAddressUpdateManyMutationInput, BusinessAddressUncheckedUpdateManyInput>
    /**
     * Filter which BusinessAddresses to update
     */
    where?: BusinessAddressWhereInput
    /**
     * Limit how many BusinessAddresses to update.
     */
    limit?: number
  }

  /**
   * BusinessAddress upsert
   */
  export type BusinessAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessAddress to update in case it exists.
     */
    where: BusinessAddressWhereUniqueInput
    /**
     * In case the BusinessAddress found by the `where` argument doesn't exist, create a new BusinessAddress with this data.
     */
    create: XOR<BusinessAddressCreateInput, BusinessAddressUncheckedCreateInput>
    /**
     * In case the BusinessAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessAddressUpdateInput, BusinessAddressUncheckedUpdateInput>
  }

  /**
   * BusinessAddress delete
   */
  export type BusinessAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter which BusinessAddress to delete.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress deleteMany
   */
  export type BusinessAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAddresses to delete
     */
    where?: BusinessAddressWhereInput
    /**
     * Limit how many BusinessAddresses to delete.
     */
    limit?: number
  }

  /**
   * BusinessAddress without action
   */
  export type BusinessAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ImageScalarFieldEnum: {
    id: 'id',
    uploadedById: 'uploadedById',
    aspect: 'aspect',
    path: 'path',
    filename: 'filename',
    extension: 'extension'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hash: 'hash',
    isVerified: 'isVerified',
    role: 'role',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessLevel: 'accessLevel',
    scope: 'scope'
  };

  export type UserPermissionScalarFieldEnum = (typeof UserPermissionScalarFieldEnum)[keyof typeof UserPermissionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    profileImageId: 'profileImageId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ExpiredRefreshTokenScalarFieldEnum: {
    id: 'id',
    savedAt: 'savedAt',
    token: 'token'
  };

  export type ExpiredRefreshTokenScalarFieldEnum = (typeof ExpiredRefreshTokenScalarFieldEnum)[keyof typeof ExpiredRefreshTokenScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    countryId: 'countryId'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    provinceId: 'provinceId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    profileImageId: 'profileImageId',
    websiteUrl: 'websiteUrl',
    cityId: 'cityId'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const BusinessDetailsScalarFieldEnum: {
    id: 'id'
  };

  export type BusinessDetailsScalarFieldEnum = (typeof BusinessDetailsScalarFieldEnum)[keyof typeof BusinessDetailsScalarFieldEnum]


  export const FavoritedBusinessScalarFieldEnum: {
    businessId: 'businessId',
    accountId: 'accountId'
  };

  export type FavoritedBusinessScalarFieldEnum = (typeof FavoritedBusinessScalarFieldEnum)[keyof typeof FavoritedBusinessScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    accountId: 'accountId',
    parentRatingId: 'parentRatingId',
    createdAt: 'createdAt',
    atmosphereRating: 'atmosphereRating',
    serviceRating: 'serviceRating',
    speedRating: 'speedRating',
    catalogRating: 'catalogRating',
    priceRating: 'priceRating',
    atmosphereNote: 'atmosphereNote',
    serviceNote: 'serviceNote',
    speedNote: 'speedNote',
    catalogNote: 'catalogNote',
    priceNote: 'priceNote',
    overallNote: 'overallNote'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    contact: 'contact',
    organization: 'organization',
    lineOne: 'lineOne',
    lineTwo: 'lineTwo',
    lineThree: 'lineThree',
    suite: 'suite',
    postal: 'postal',
    lat: 'lat',
    lng: 'lng'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BusinessAddressScalarFieldEnum: {
    businessId: 'businessId',
    addressId: 'addressId'
  };

  export type BusinessAddressScalarFieldEnum = (typeof BusinessAddressScalarFieldEnum)[keyof typeof BusinessAddressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ImageOrderByRelevanceFieldEnum: {
    uploadedById: 'uploadedById',
    path: 'path',
    filename: 'filename'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    hash: 'hash',
    refreshToken: 'refreshToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserPermissionOrderByRelevanceFieldEnum: {
    userId: 'userId',
    scope: 'scope'
  };

  export type UserPermissionOrderByRelevanceFieldEnum = (typeof UserPermissionOrderByRelevanceFieldEnum)[keyof typeof UserPermissionOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const ExpiredRefreshTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type ExpiredRefreshTokenOrderByRelevanceFieldEnum = (typeof ExpiredRefreshTokenOrderByRelevanceFieldEnum)[keyof typeof ExpiredRefreshTokenOrderByRelevanceFieldEnum]


  export const CountryOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type CountryOrderByRelevanceFieldEnum = (typeof CountryOrderByRelevanceFieldEnum)[keyof typeof CountryOrderByRelevanceFieldEnum]


  export const ProvinceOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type ProvinceOrderByRelevanceFieldEnum = (typeof ProvinceOrderByRelevanceFieldEnum)[keyof typeof ProvinceOrderByRelevanceFieldEnum]


  export const CityOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type CityOrderByRelevanceFieldEnum = (typeof CityOrderByRelevanceFieldEnum)[keyof typeof CityOrderByRelevanceFieldEnum]


  export const BusinessOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    websiteUrl: 'websiteUrl'
  };

  export type BusinessOrderByRelevanceFieldEnum = (typeof BusinessOrderByRelevanceFieldEnum)[keyof typeof BusinessOrderByRelevanceFieldEnum]


  export const FavoritedBusinessOrderByRelevanceFieldEnum: {
    accountId: 'accountId'
  };

  export type FavoritedBusinessOrderByRelevanceFieldEnum = (typeof FavoritedBusinessOrderByRelevanceFieldEnum)[keyof typeof FavoritedBusinessOrderByRelevanceFieldEnum]


  export const RatingOrderByRelevanceFieldEnum: {
    accountId: 'accountId',
    atmosphereNote: 'atmosphereNote',
    serviceNote: 'serviceNote',
    speedNote: 'speedNote',
    catalogNote: 'catalogNote',
    priceNote: 'priceNote',
    overallNote: 'overallNote'
  };

  export type RatingOrderByRelevanceFieldEnum = (typeof RatingOrderByRelevanceFieldEnum)[keyof typeof RatingOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    contact: 'contact',
    organization: 'organization',
    lineOne: 'lineOne',
    lineTwo: 'lineTwo',
    lineThree: 'lineThree',
    suite: 'suite',
    postal: 'postal'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ImageFileExtension'
   */
  export type EnumImageFileExtensionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageFileExtension'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    uploadedById?: StringFilter<"Image"> | string
    aspect?: FloatFilter<"Image"> | number
    path?: StringFilter<"Image"> | string
    filename?: StringFilter<"Image"> | string
    extension?: EnumImageFileExtensionFilter<"Image"> | $Enums.ImageFileExtension
    UploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProfileAccount?: AccountListRelationFilter
    ProfileBusiness?: BusinessListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    uploadedById?: SortOrder
    aspect?: SortOrder
    path?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    UploadedBy?: UserOrderByWithRelationInput
    ProfileAccount?: AccountOrderByRelationAggregateInput
    ProfileBusiness?: BusinessOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    uploadedById?: StringFilter<"Image"> | string
    aspect?: FloatFilter<"Image"> | number
    path?: StringFilter<"Image"> | string
    filename?: StringFilter<"Image"> | string
    extension?: EnumImageFileExtensionFilter<"Image"> | $Enums.ImageFileExtension
    UploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProfileAccount?: AccountListRelationFilter
    ProfileBusiness?: BusinessListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    uploadedById?: SortOrder
    aspect?: SortOrder
    path?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    uploadedById?: StringWithAggregatesFilter<"Image"> | string
    aspect?: FloatWithAggregatesFilter<"Image"> | number
    path?: StringWithAggregatesFilter<"Image"> | string
    filename?: StringWithAggregatesFilter<"Image"> | string
    extension?: EnumImageFileExtensionWithAggregatesFilter<"Image"> | $Enums.ImageFileExtension
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refreshToken?: StringFilter<"User"> | string
    Permissions?: UserPermissionListRelationFilter
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    ImageUploads?: ImageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    Permissions?: UserPermissionOrderByRelationAggregateInput
    Account?: AccountOrderByWithRelationInput
    ImageUploads?: ImageOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refreshToken?: StringFilter<"User"> | string
    Permissions?: UserPermissionListRelationFilter
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    ImageUploads?: ImageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    refreshToken?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserPermissionWhereInput = {
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    id?: IntFilter<"UserPermission"> | number
    userId?: StringFilter<"UserPermission"> | string
    accessLevel?: IntFilter<"UserPermission"> | number
    scope?: StringFilter<"UserPermission"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    scope?: SortOrder
    User?: UserOrderByWithRelationInput
    _relevance?: UserPermissionOrderByRelevanceInput
  }

  export type UserPermissionWhereUniqueInput = Prisma.AtLeast<{
    id_userId?: UserPermissionIdUserIdCompoundUniqueInput
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    id?: IntFilter<"UserPermission"> | number
    userId?: StringFilter<"UserPermission"> | string
    accessLevel?: IntFilter<"UserPermission"> | number
    scope?: StringFilter<"UserPermission"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_userId">

  export type UserPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    scope?: SortOrder
    _count?: UserPermissionCountOrderByAggregateInput
    _avg?: UserPermissionAvgOrderByAggregateInput
    _max?: UserPermissionMaxOrderByAggregateInput
    _min?: UserPermissionMinOrderByAggregateInput
    _sum?: UserPermissionSumOrderByAggregateInput
  }

  export type UserPermissionScalarWhereWithAggregatesInput = {
    AND?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    OR?: UserPermissionScalarWhereWithAggregatesInput[]
    NOT?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPermission"> | number
    userId?: StringWithAggregatesFilter<"UserPermission"> | string
    accessLevel?: IntWithAggregatesFilter<"UserPermission"> | number
    scope?: StringWithAggregatesFilter<"UserPermission"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    username?: StringNullableFilter<"Account"> | string | null
    profileImageId?: IntNullableFilter<"Account"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProfileImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    Favorites?: FavoritedBusinessListRelationFilter
    Ratings?: RatingListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImageId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    ProfileImage?: ImageOrderByWithRelationInput
    Favorites?: FavoritedBusinessOrderByRelationAggregateInput
    Ratings?: RatingOrderByRelationAggregateInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    profileImageId?: IntNullableFilter<"Account"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProfileImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    Favorites?: FavoritedBusinessListRelationFilter
    Ratings?: RatingListRelationFilter
  }, "id" | "email" | "username">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImageId?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    username?: StringNullableWithAggregatesFilter<"Account"> | string | null
    profileImageId?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type ExpiredRefreshTokenWhereInput = {
    AND?: ExpiredRefreshTokenWhereInput | ExpiredRefreshTokenWhereInput[]
    OR?: ExpiredRefreshTokenWhereInput[]
    NOT?: ExpiredRefreshTokenWhereInput | ExpiredRefreshTokenWhereInput[]
    id?: IntFilter<"ExpiredRefreshToken"> | number
    savedAt?: DateTimeFilter<"ExpiredRefreshToken"> | Date | string
    token?: StringFilter<"ExpiredRefreshToken"> | string
  }

  export type ExpiredRefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    savedAt?: SortOrder
    token?: SortOrder
    _relevance?: ExpiredRefreshTokenOrderByRelevanceInput
  }

  export type ExpiredRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpiredRefreshTokenWhereInput | ExpiredRefreshTokenWhereInput[]
    OR?: ExpiredRefreshTokenWhereInput[]
    NOT?: ExpiredRefreshTokenWhereInput | ExpiredRefreshTokenWhereInput[]
    savedAt?: DateTimeFilter<"ExpiredRefreshToken"> | Date | string
    token?: StringFilter<"ExpiredRefreshToken"> | string
  }, "id">

  export type ExpiredRefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    savedAt?: SortOrder
    token?: SortOrder
    _count?: ExpiredRefreshTokenCountOrderByAggregateInput
    _avg?: ExpiredRefreshTokenAvgOrderByAggregateInput
    _max?: ExpiredRefreshTokenMaxOrderByAggregateInput
    _min?: ExpiredRefreshTokenMinOrderByAggregateInput
    _sum?: ExpiredRefreshTokenSumOrderByAggregateInput
  }

  export type ExpiredRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: ExpiredRefreshTokenScalarWhereWithAggregatesInput | ExpiredRefreshTokenScalarWhereWithAggregatesInput[]
    OR?: ExpiredRefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: ExpiredRefreshTokenScalarWhereWithAggregatesInput | ExpiredRefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExpiredRefreshToken"> | number
    savedAt?: DateTimeWithAggregatesFilter<"ExpiredRefreshToken"> | Date | string
    token?: StringWithAggregatesFilter<"ExpiredRefreshToken"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    code?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    Provinces?: ProvinceListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    Provinces?: ProvinceOrderByRelationAggregateInput
    _relevance?: CountryOrderByRelevanceInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    Provinces?: ProvinceListRelationFilter
  }, "id" | "code" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    code?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: IntFilter<"Province"> | number
    code?: StringFilter<"Province"> | string
    name?: StringFilter<"Province"> | string
    countryId?: IntFilter<"Province"> | number
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Cities?: CityListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    Country?: CountryOrderByWithRelationInput
    Cities?: CityOrderByRelationAggregateInput
    _relevance?: ProvinceOrderByRelevanceInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    countryId?: IntFilter<"Province"> | number
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Cities?: CityListRelationFilter
  }, "id" | "code" | "name">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Province"> | number
    code?: StringWithAggregatesFilter<"Province"> | string
    name?: StringWithAggregatesFilter<"Province"> | string
    countryId?: IntWithAggregatesFilter<"Province"> | number
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    code?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    provinceId?: IntFilter<"City"> | number
    Province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    Businesses?: BusinessListRelationFilter
    Address?: AddressListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    Province?: ProvinceOrderByWithRelationInput
    Businesses?: BusinessOrderByRelationAggregateInput
    Address?: AddressOrderByRelationAggregateInput
    _relevance?: CityOrderByRelevanceInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    name?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    provinceId?: IntFilter<"City"> | number
    Province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    Businesses?: BusinessListRelationFilter
    Address?: AddressListRelationFilter
  }, "id" | "code" | "name">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    code?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    provinceId?: IntWithAggregatesFilter<"City"> | number
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    profileImageId?: IntNullableFilter<"Business"> | number | null
    websiteUrl?: StringNullableFilter<"Business"> | string | null
    cityId?: IntFilter<"Business"> | number
    City?: XOR<CityScalarRelationFilter, CityWhereInput>
    Favorites?: FavoritedBusinessListRelationFilter
    Ratings?: RatingListRelationFilter
    Address?: XOR<BusinessAddressNullableScalarRelationFilter, BusinessAddressWhereInput> | null
    BusinessDetails?: XOR<BusinessDetailsNullableScalarRelationFilter, BusinessDetailsWhereInput> | null
    ProfileImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    profileImageId?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    cityId?: SortOrder
    City?: CityOrderByWithRelationInput
    Favorites?: FavoritedBusinessOrderByRelationAggregateInput
    Ratings?: RatingOrderByRelationAggregateInput
    Address?: BusinessAddressOrderByWithRelationInput
    BusinessDetails?: BusinessDetailsOrderByWithRelationInput
    ProfileImage?: ImageOrderByWithRelationInput
    _relevance?: BusinessOrderByRelevanceInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    description?: StringNullableFilter<"Business"> | string | null
    profileImageId?: IntNullableFilter<"Business"> | number | null
    websiteUrl?: StringNullableFilter<"Business"> | string | null
    cityId?: IntFilter<"Business"> | number
    City?: XOR<CityScalarRelationFilter, CityWhereInput>
    Favorites?: FavoritedBusinessListRelationFilter
    Ratings?: RatingListRelationFilter
    Address?: XOR<BusinessAddressNullableScalarRelationFilter, BusinessAddressWhereInput> | null
    BusinessDetails?: XOR<BusinessDetailsNullableScalarRelationFilter, BusinessDetailsWhereInput> | null
    ProfileImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id" | "name">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    profileImageId?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    cityId?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    name?: StringWithAggregatesFilter<"Business"> | string
    description?: StringNullableWithAggregatesFilter<"Business"> | string | null
    profileImageId?: IntNullableWithAggregatesFilter<"Business"> | number | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    cityId?: IntWithAggregatesFilter<"Business"> | number
  }

  export type BusinessDetailsWhereInput = {
    AND?: BusinessDetailsWhereInput | BusinessDetailsWhereInput[]
    OR?: BusinessDetailsWhereInput[]
    NOT?: BusinessDetailsWhereInput | BusinessDetailsWhereInput[]
    id?: IntFilter<"BusinessDetails"> | number
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type BusinessDetailsOrderByWithRelationInput = {
    id?: SortOrder
    Business?: BusinessOrderByWithRelationInput
  }

  export type BusinessDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessDetailsWhereInput | BusinessDetailsWhereInput[]
    OR?: BusinessDetailsWhereInput[]
    NOT?: BusinessDetailsWhereInput | BusinessDetailsWhereInput[]
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type BusinessDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: BusinessDetailsCountOrderByAggregateInput
    _avg?: BusinessDetailsAvgOrderByAggregateInput
    _max?: BusinessDetailsMaxOrderByAggregateInput
    _min?: BusinessDetailsMinOrderByAggregateInput
    _sum?: BusinessDetailsSumOrderByAggregateInput
  }

  export type BusinessDetailsScalarWhereWithAggregatesInput = {
    AND?: BusinessDetailsScalarWhereWithAggregatesInput | BusinessDetailsScalarWhereWithAggregatesInput[]
    OR?: BusinessDetailsScalarWhereWithAggregatesInput[]
    NOT?: BusinessDetailsScalarWhereWithAggregatesInput | BusinessDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessDetails"> | number
  }

  export type FavoritedBusinessWhereInput = {
    AND?: FavoritedBusinessWhereInput | FavoritedBusinessWhereInput[]
    OR?: FavoritedBusinessWhereInput[]
    NOT?: FavoritedBusinessWhereInput | FavoritedBusinessWhereInput[]
    businessId?: IntFilter<"FavoritedBusiness"> | number
    accountId?: StringFilter<"FavoritedBusiness"> | string
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type FavoritedBusinessOrderByWithRelationInput = {
    businessId?: SortOrder
    accountId?: SortOrder
    Business?: BusinessOrderByWithRelationInput
    Account?: AccountOrderByWithRelationInput
    _relevance?: FavoritedBusinessOrderByRelevanceInput
  }

  export type FavoritedBusinessWhereUniqueInput = Prisma.AtLeast<{
    businessId_accountId?: FavoritedBusinessBusinessIdAccountIdCompoundUniqueInput
    AND?: FavoritedBusinessWhereInput | FavoritedBusinessWhereInput[]
    OR?: FavoritedBusinessWhereInput[]
    NOT?: FavoritedBusinessWhereInput | FavoritedBusinessWhereInput[]
    businessId?: IntFilter<"FavoritedBusiness"> | number
    accountId?: StringFilter<"FavoritedBusiness"> | string
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "businessId_accountId">

  export type FavoritedBusinessOrderByWithAggregationInput = {
    businessId?: SortOrder
    accountId?: SortOrder
    _count?: FavoritedBusinessCountOrderByAggregateInput
    _avg?: FavoritedBusinessAvgOrderByAggregateInput
    _max?: FavoritedBusinessMaxOrderByAggregateInput
    _min?: FavoritedBusinessMinOrderByAggregateInput
    _sum?: FavoritedBusinessSumOrderByAggregateInput
  }

  export type FavoritedBusinessScalarWhereWithAggregatesInput = {
    AND?: FavoritedBusinessScalarWhereWithAggregatesInput | FavoritedBusinessScalarWhereWithAggregatesInput[]
    OR?: FavoritedBusinessScalarWhereWithAggregatesInput[]
    NOT?: FavoritedBusinessScalarWhereWithAggregatesInput | FavoritedBusinessScalarWhereWithAggregatesInput[]
    businessId?: IntWithAggregatesFilter<"FavoritedBusiness"> | number
    accountId?: StringWithAggregatesFilter<"FavoritedBusiness"> | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    businessId?: IntFilter<"Rating"> | number
    accountId?: StringFilter<"Rating"> | string
    parentRatingId?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    atmosphereRating?: IntNullableFilter<"Rating"> | number | null
    serviceRating?: IntNullableFilter<"Rating"> | number | null
    speedRating?: IntNullableFilter<"Rating"> | number | null
    catalogRating?: IntNullableFilter<"Rating"> | number | null
    priceRating?: IntNullableFilter<"Rating"> | number | null
    atmosphereNote?: StringNullableFilter<"Rating"> | string | null
    serviceNote?: StringNullableFilter<"Rating"> | string | null
    speedNote?: StringNullableFilter<"Rating"> | string | null
    catalogNote?: StringNullableFilter<"Rating"> | string | null
    priceNote?: StringNullableFilter<"Rating"> | string | null
    overallNote?: StringNullableFilter<"Rating"> | string | null
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Parent?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Children?: RatingListRelationFilter
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    accountId?: SortOrder
    parentRatingId?: SortOrder
    createdAt?: SortOrder
    atmosphereRating?: SortOrderInput | SortOrder
    serviceRating?: SortOrderInput | SortOrder
    speedRating?: SortOrderInput | SortOrder
    catalogRating?: SortOrderInput | SortOrder
    priceRating?: SortOrderInput | SortOrder
    atmosphereNote?: SortOrderInput | SortOrder
    serviceNote?: SortOrderInput | SortOrder
    speedNote?: SortOrderInput | SortOrder
    catalogNote?: SortOrderInput | SortOrder
    priceNote?: SortOrderInput | SortOrder
    overallNote?: SortOrderInput | SortOrder
    Business?: BusinessOrderByWithRelationInput
    Account?: AccountOrderByWithRelationInput
    Parent?: RatingOrderByWithRelationInput
    Children?: RatingOrderByRelationAggregateInput
    _relevance?: RatingOrderByRelevanceInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    businessId?: IntFilter<"Rating"> | number
    accountId?: StringFilter<"Rating"> | string
    parentRatingId?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    atmosphereRating?: IntNullableFilter<"Rating"> | number | null
    serviceRating?: IntNullableFilter<"Rating"> | number | null
    speedRating?: IntNullableFilter<"Rating"> | number | null
    catalogRating?: IntNullableFilter<"Rating"> | number | null
    priceRating?: IntNullableFilter<"Rating"> | number | null
    atmosphereNote?: StringNullableFilter<"Rating"> | string | null
    serviceNote?: StringNullableFilter<"Rating"> | string | null
    speedNote?: StringNullableFilter<"Rating"> | string | null
    catalogNote?: StringNullableFilter<"Rating"> | string | null
    priceNote?: StringNullableFilter<"Rating"> | string | null
    overallNote?: StringNullableFilter<"Rating"> | string | null
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    Parent?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
    Children?: RatingListRelationFilter
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    accountId?: SortOrder
    parentRatingId?: SortOrder
    createdAt?: SortOrder
    atmosphereRating?: SortOrderInput | SortOrder
    serviceRating?: SortOrderInput | SortOrder
    speedRating?: SortOrderInput | SortOrder
    catalogRating?: SortOrderInput | SortOrder
    priceRating?: SortOrderInput | SortOrder
    atmosphereNote?: SortOrderInput | SortOrder
    serviceNote?: SortOrderInput | SortOrder
    speedNote?: SortOrderInput | SortOrder
    catalogNote?: SortOrderInput | SortOrder
    priceNote?: SortOrderInput | SortOrder
    overallNote?: SortOrderInput | SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    businessId?: IntWithAggregatesFilter<"Rating"> | number
    accountId?: StringWithAggregatesFilter<"Rating"> | string
    parentRatingId?: IntWithAggregatesFilter<"Rating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    atmosphereRating?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    serviceRating?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    speedRating?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    catalogRating?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    priceRating?: IntNullableWithAggregatesFilter<"Rating"> | number | null
    atmosphereNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    serviceNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    speedNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    catalogNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    priceNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    overallNote?: StringNullableWithAggregatesFilter<"Rating"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    cityId?: IntFilter<"Address"> | number
    contact?: StringNullableFilter<"Address"> | string | null
    organization?: StringNullableFilter<"Address"> | string | null
    lineOne?: StringNullableFilter<"Address"> | string | null
    lineTwo?: StringNullableFilter<"Address"> | string | null
    lineThree?: StringNullableFilter<"Address"> | string | null
    suite?: StringNullableFilter<"Address"> | string | null
    postal?: StringNullableFilter<"Address"> | string | null
    lat?: FloatNullableFilter<"Address"> | number | null
    lng?: FloatNullableFilter<"Address"> | number | null
    City?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    BusinessAddress?: XOR<BusinessAddressNullableScalarRelationFilter, BusinessAddressWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    contact?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    lineOne?: SortOrderInput | SortOrder
    lineTwo?: SortOrderInput | SortOrder
    lineThree?: SortOrderInput | SortOrder
    suite?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    City?: CityOrderByWithRelationInput
    BusinessAddress?: BusinessAddressOrderByWithRelationInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    cityId?: IntFilter<"Address"> | number
    contact?: StringNullableFilter<"Address"> | string | null
    organization?: StringNullableFilter<"Address"> | string | null
    lineOne?: StringNullableFilter<"Address"> | string | null
    lineTwo?: StringNullableFilter<"Address"> | string | null
    lineThree?: StringNullableFilter<"Address"> | string | null
    suite?: StringNullableFilter<"Address"> | string | null
    postal?: StringNullableFilter<"Address"> | string | null
    lat?: FloatNullableFilter<"Address"> | number | null
    lng?: FloatNullableFilter<"Address"> | number | null
    City?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    BusinessAddress?: XOR<BusinessAddressNullableScalarRelationFilter, BusinessAddressWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    contact?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    lineOne?: SortOrderInput | SortOrder
    lineTwo?: SortOrderInput | SortOrder
    lineThree?: SortOrderInput | SortOrder
    suite?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    cityId?: IntWithAggregatesFilter<"Address"> | number
    contact?: StringNullableWithAggregatesFilter<"Address"> | string | null
    organization?: StringNullableWithAggregatesFilter<"Address"> | string | null
    lineOne?: StringNullableWithAggregatesFilter<"Address"> | string | null
    lineTwo?: StringNullableWithAggregatesFilter<"Address"> | string | null
    lineThree?: StringNullableWithAggregatesFilter<"Address"> | string | null
    suite?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postal?: StringNullableWithAggregatesFilter<"Address"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Address"> | number | null
  }

  export type BusinessAddressWhereInput = {
    AND?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    OR?: BusinessAddressWhereInput[]
    NOT?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    businessId?: IntFilter<"BusinessAddress"> | number
    addressId?: IntFilter<"BusinessAddress"> | number
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }

  export type BusinessAddressOrderByWithRelationInput = {
    businessId?: SortOrder
    addressId?: SortOrder
    Business?: BusinessOrderByWithRelationInput
    Address?: AddressOrderByWithRelationInput
  }

  export type BusinessAddressWhereUniqueInput = Prisma.AtLeast<{
    businessId?: number
    addressId?: number
    businessId_addressId?: BusinessAddressBusinessIdAddressIdCompoundUniqueInput
    AND?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    OR?: BusinessAddressWhereInput[]
    NOT?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    Business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    Address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }, "businessId_addressId" | "businessId" | "addressId">

  export type BusinessAddressOrderByWithAggregationInput = {
    businessId?: SortOrder
    addressId?: SortOrder
    _count?: BusinessAddressCountOrderByAggregateInput
    _avg?: BusinessAddressAvgOrderByAggregateInput
    _max?: BusinessAddressMaxOrderByAggregateInput
    _min?: BusinessAddressMinOrderByAggregateInput
    _sum?: BusinessAddressSumOrderByAggregateInput
  }

  export type BusinessAddressScalarWhereWithAggregatesInput = {
    AND?: BusinessAddressScalarWhereWithAggregatesInput | BusinessAddressScalarWhereWithAggregatesInput[]
    OR?: BusinessAddressScalarWhereWithAggregatesInput[]
    NOT?: BusinessAddressScalarWhereWithAggregatesInput | BusinessAddressScalarWhereWithAggregatesInput[]
    businessId?: IntWithAggregatesFilter<"BusinessAddress"> | number
    addressId?: IntWithAggregatesFilter<"BusinessAddress"> | number
  }

  export type ImageCreateInput = {
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    UploadedBy: UserCreateNestedOneWithoutImageUploadsInput
    ProfileAccount?: AccountCreateNestedManyWithoutProfileImageInput
    ProfileBusiness?: BusinessCreateNestedManyWithoutProfileImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    uploadedById: string
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedCreateNestedManyWithoutProfileImageInput
    ProfileBusiness?: BusinessUncheckedCreateNestedManyWithoutProfileImageInput
  }

  export type ImageUpdateInput = {
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    UploadedBy?: UserUpdateOneRequiredWithoutImageUploadsNestedInput
    ProfileAccount?: AccountUpdateManyWithoutProfileImageNestedInput
    ProfileBusiness?: BusinessUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedUpdateManyWithoutProfileImageNestedInput
    ProfileBusiness?: BusinessUncheckedUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    uploadedById: string
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
  }

  export type ImageUpdateManyMutationInput = {
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedOneWithoutUserInput
    ImageUploads?: ImageCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedOneWithoutUserInput
    ImageUploads?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateOneWithoutUserNestedInput
    ImageUploads?: ImageUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    ImageUploads?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionCreateInput = {
    id?: number
    accessLevel?: number
    scope: string
    User: UserCreateNestedOneWithoutPermissionsInput
  }

  export type UserPermissionUncheckedCreateInput = {
    id?: number
    userId: string
    accessLevel?: number
    scope: string
  }

  export type UserPermissionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type UserPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionCreateManyInput = {
    id?: number
    userId: string
    accessLevel?: number
    scope: string
  }

  export type UserPermissionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    email: string
    username?: string | null
    User: UserCreateNestedOneWithoutAccountInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileAccountInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutAccountInput
    Ratings?: RatingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    email: string
    username?: string | null
    profileImageId?: number | null
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutAccountInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAccountNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileAccountNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id: string
    email: string
    username?: string | null
    profileImageId?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpiredRefreshTokenCreateInput = {
    savedAt?: Date | string
    token: string
  }

  export type ExpiredRefreshTokenUncheckedCreateInput = {
    id?: number
    savedAt?: Date | string
    token: string
  }

  export type ExpiredRefreshTokenUpdateInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExpiredRefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExpiredRefreshTokenCreateManyInput = {
    id?: number
    savedAt?: Date | string
    token: string
  }

  export type ExpiredRefreshTokenUpdateManyMutationInput = {
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExpiredRefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    code: string
    name: string
    Provinces?: ProvinceCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    Provinces?: ProvinceUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Provinces?: ProvinceUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Provinces?: ProvinceUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceCreateInput = {
    code: string
    name: string
    Country: CountryCreateNestedOneWithoutProvincesInput
    Cities?: CityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    countryId: number
    Cities?: CityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateOneRequiredWithoutProvincesNestedInput
    Cities?: CityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    Cities?: CityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: number
    code: string
    name: string
    countryId: number
  }

  export type ProvinceUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type CityCreateInput = {
    code: string
    name: string
    Province: ProvinceCreateNestedOneWithoutCitiesInput
    Businesses?: BusinessCreateNestedManyWithoutCityInput
    Address?: AddressCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    provinceId: number
    Businesses?: BusinessUncheckedCreateNestedManyWithoutCityInput
    Address?: AddressUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    Businesses?: BusinessUpdateManyWithoutCityNestedInput
    Address?: AddressUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    Businesses?: BusinessUncheckedUpdateManyWithoutCityNestedInput
    Address?: AddressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    code: string
    name: string
    provinceId: number
  }

  export type CityUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessCreateInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
  }

  export type BusinessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessDetailsCreateInput = {
    Business: BusinessCreateNestedOneWithoutBusinessDetailsInput
  }

  export type BusinessDetailsUncheckedCreateInput = {
    id: number
  }

  export type BusinessDetailsUpdateInput = {
    Business?: BusinessUpdateOneRequiredWithoutBusinessDetailsNestedInput
  }

  export type BusinessDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessDetailsCreateManyInput = {
    id: number
  }

  export type BusinessDetailsUpdateManyMutationInput = {

  }

  export type BusinessDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritedBusinessCreateInput = {
    Business: BusinessCreateNestedOneWithoutFavoritesInput
    Account: AccountCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritedBusinessUncheckedCreateInput = {
    businessId: number
    accountId: string
  }

  export type FavoritedBusinessUpdateInput = {
    Business?: BusinessUpdateOneRequiredWithoutFavoritesNestedInput
    Account?: AccountUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritedBusinessUncheckedUpdateInput = {
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritedBusinessCreateManyInput = {
    businessId: number
    accountId: string
  }

  export type FavoritedBusinessUpdateManyMutationInput = {

  }

  export type FavoritedBusinessUncheckedUpdateManyInput = {
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingCreateInput = {
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Business: BusinessCreateNestedOneWithoutRatingsInput
    Account: AccountCreateNestedOneWithoutRatingsInput
    Parent?: RatingCreateNestedOneWithoutChildrenInput
    Children?: RatingCreateNestedManyWithoutParentInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    businessId: number
    accountId: string
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Children?: RatingUncheckedCreateNestedManyWithoutParentInput
  }

  export type RatingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Business?: BusinessUpdateOneRequiredWithoutRatingsNestedInput
    Account?: AccountUpdateOneRequiredWithoutRatingsNestedInput
    Parent?: RatingUpdateOneWithoutChildrenNestedInput
    Children?: RatingUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Children?: RatingUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RatingCreateManyInput = {
    id?: number
    businessId: number
    accountId: string
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
  }

  export type RatingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
    City?: CityCreateNestedOneWithoutAddressInput
    BusinessAddress?: BusinessAddressCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    cityId: number
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
    BusinessAddress?: BusinessAddressUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: CityUpdateOneWithoutAddressNestedInput
    BusinessAddress?: BusinessAddressUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    BusinessAddress?: BusinessAddressUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    cityId: number
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
  }

  export type AddressUpdateManyMutationInput = {
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BusinessAddressCreateInput = {
    Business: BusinessCreateNestedOneWithoutAddressInput
    Address: AddressCreateNestedOneWithoutBusinessAddressInput
  }

  export type BusinessAddressUncheckedCreateInput = {
    businessId: number
    addressId: number
  }

  export type BusinessAddressUpdateInput = {
    Business?: BusinessUpdateOneRequiredWithoutAddressNestedInput
    Address?: AddressUpdateOneRequiredWithoutBusinessAddressNestedInput
  }

  export type BusinessAddressUncheckedUpdateInput = {
    businessId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessAddressCreateManyInput = {
    businessId: number
    addressId: number
  }

  export type BusinessAddressUpdateManyMutationInput = {

  }

  export type BusinessAddressUncheckedUpdateManyInput = {
    businessId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumImageFileExtensionFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageFileExtension | EnumImageFileExtensionFieldRefInput<$PrismaModel>
    in?: $Enums.ImageFileExtension[]
    notIn?: $Enums.ImageFileExtension[]
    not?: NestedEnumImageFileExtensionFilter<$PrismaModel> | $Enums.ImageFileExtension
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    uploadedById?: SortOrder
    aspect?: SortOrder
    path?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    aspect?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    uploadedById?: SortOrder
    aspect?: SortOrder
    path?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    uploadedById?: SortOrder
    aspect?: SortOrder
    path?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    aspect?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumImageFileExtensionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageFileExtension | EnumImageFileExtensionFieldRefInput<$PrismaModel>
    in?: $Enums.ImageFileExtension[]
    notIn?: $Enums.ImageFileExtension[]
    not?: NestedEnumImageFileExtensionWithAggregatesFilter<$PrismaModel> | $Enums.ImageFileExtension
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageFileExtensionFilter<$PrismaModel>
    _max?: NestedEnumImageFileExtensionFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserPermissionListRelationFilter = {
    every?: UserPermissionWhereInput
    some?: UserPermissionWhereInput
    none?: UserPermissionWhereInput
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type UserPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    refreshToken?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserPermissionOrderByRelevanceInput = {
    fields: UserPermissionOrderByRelevanceFieldEnum | UserPermissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserPermissionIdUserIdCompoundUniqueInput = {
    id: number
    userId: string
  }

  export type UserPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    scope?: SortOrder
  }

  export type UserPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    accessLevel?: SortOrder
  }

  export type UserPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    scope?: SortOrder
  }

  export type UserPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    scope?: SortOrder
  }

  export type UserPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    accessLevel?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type FavoritedBusinessListRelationFilter = {
    every?: FavoritedBusinessWhereInput
    some?: FavoritedBusinessWhereInput
    none?: FavoritedBusinessWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoritedBusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    profileImageId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    profileImageId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    profileImageId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    profileImageId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    profileImageId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExpiredRefreshTokenOrderByRelevanceInput = {
    fields: ExpiredRefreshTokenOrderByRelevanceFieldEnum | ExpiredRefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExpiredRefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    savedAt?: SortOrder
    token?: SortOrder
  }

  export type ExpiredRefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExpiredRefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    savedAt?: SortOrder
    token?: SortOrder
  }

  export type ExpiredRefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    savedAt?: SortOrder
    token?: SortOrder
  }

  export type ExpiredRefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProvinceListRelationFilter = {
    every?: ProvinceWhereInput
    some?: ProvinceWhereInput
    none?: ProvinceWhereInput
  }

  export type ProvinceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelevanceInput = {
    fields: CountryOrderByRelevanceFieldEnum | CountryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceOrderByRelevanceInput = {
    fields: ProvinceOrderByRelevanceFieldEnum | ProvinceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityOrderByRelevanceInput = {
    fields: CityOrderByRelevanceFieldEnum | CityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type BusinessAddressNullableScalarRelationFilter = {
    is?: BusinessAddressWhereInput | null
    isNot?: BusinessAddressWhereInput | null
  }

  export type BusinessDetailsNullableScalarRelationFilter = {
    is?: BusinessDetailsWhereInput | null
    isNot?: BusinessDetailsWhereInput | null
  }

  export type BusinessOrderByRelevanceInput = {
    fields: BusinessOrderByRelevanceFieldEnum | BusinessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    profileImageId?: SortOrder
    websiteUrl?: SortOrder
    cityId?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    profileImageId?: SortOrder
    cityId?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    profileImageId?: SortOrder
    websiteUrl?: SortOrder
    cityId?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    profileImageId?: SortOrder
    websiteUrl?: SortOrder
    cityId?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
    profileImageId?: SortOrder
    cityId?: SortOrder
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type BusinessDetailsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessDetailsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessDetailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type FavoritedBusinessOrderByRelevanceInput = {
    fields: FavoritedBusinessOrderByRelevanceFieldEnum | FavoritedBusinessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavoritedBusinessBusinessIdAccountIdCompoundUniqueInput = {
    businessId: number
    accountId: string
  }

  export type FavoritedBusinessCountOrderByAggregateInput = {
    businessId?: SortOrder
    accountId?: SortOrder
  }

  export type FavoritedBusinessAvgOrderByAggregateInput = {
    businessId?: SortOrder
  }

  export type FavoritedBusinessMaxOrderByAggregateInput = {
    businessId?: SortOrder
    accountId?: SortOrder
  }

  export type FavoritedBusinessMinOrderByAggregateInput = {
    businessId?: SortOrder
    accountId?: SortOrder
  }

  export type FavoritedBusinessSumOrderByAggregateInput = {
    businessId?: SortOrder
  }

  export type RatingNullableScalarRelationFilter = {
    is?: RatingWhereInput | null
    isNot?: RatingWhereInput | null
  }

  export type RatingOrderByRelevanceInput = {
    fields: RatingOrderByRelevanceFieldEnum | RatingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    accountId?: SortOrder
    parentRatingId?: SortOrder
    createdAt?: SortOrder
    atmosphereRating?: SortOrder
    serviceRating?: SortOrder
    speedRating?: SortOrder
    catalogRating?: SortOrder
    priceRating?: SortOrder
    atmosphereNote?: SortOrder
    serviceNote?: SortOrder
    speedNote?: SortOrder
    catalogNote?: SortOrder
    priceNote?: SortOrder
    overallNote?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    parentRatingId?: SortOrder
    atmosphereRating?: SortOrder
    serviceRating?: SortOrder
    speedRating?: SortOrder
    catalogRating?: SortOrder
    priceRating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    accountId?: SortOrder
    parentRatingId?: SortOrder
    createdAt?: SortOrder
    atmosphereRating?: SortOrder
    serviceRating?: SortOrder
    speedRating?: SortOrder
    catalogRating?: SortOrder
    priceRating?: SortOrder
    atmosphereNote?: SortOrder
    serviceNote?: SortOrder
    speedNote?: SortOrder
    catalogNote?: SortOrder
    priceNote?: SortOrder
    overallNote?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    accountId?: SortOrder
    parentRatingId?: SortOrder
    createdAt?: SortOrder
    atmosphereRating?: SortOrder
    serviceRating?: SortOrder
    speedRating?: SortOrder
    catalogRating?: SortOrder
    priceRating?: SortOrder
    atmosphereNote?: SortOrder
    serviceNote?: SortOrder
    speedNote?: SortOrder
    catalogNote?: SortOrder
    priceNote?: SortOrder
    overallNote?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    parentRatingId?: SortOrder
    atmosphereRating?: SortOrder
    serviceRating?: SortOrder
    speedRating?: SortOrder
    catalogRating?: SortOrder
    priceRating?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CityNullableScalarRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    contact?: SortOrder
    organization?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    suite?: SortOrder
    postal?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    contact?: SortOrder
    organization?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    suite?: SortOrder
    postal?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    contact?: SortOrder
    organization?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    suite?: SortOrder
    postal?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type BusinessAddressBusinessIdAddressIdCompoundUniqueInput = {
    businessId: number
    addressId: number
  }

  export type BusinessAddressCountOrderByAggregateInput = {
    businessId?: SortOrder
    addressId?: SortOrder
  }

  export type BusinessAddressAvgOrderByAggregateInput = {
    businessId?: SortOrder
    addressId?: SortOrder
  }

  export type BusinessAddressMaxOrderByAggregateInput = {
    businessId?: SortOrder
    addressId?: SortOrder
  }

  export type BusinessAddressMinOrderByAggregateInput = {
    businessId?: SortOrder
    addressId?: SortOrder
  }

  export type BusinessAddressSumOrderByAggregateInput = {
    businessId?: SortOrder
    addressId?: SortOrder
  }

  export type UserCreateNestedOneWithoutImageUploadsInput = {
    create?: XOR<UserCreateWithoutImageUploadsInput, UserUncheckedCreateWithoutImageUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageUploadsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutProfileImageInput = {
    create?: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput> | AccountCreateWithoutProfileImageInput[] | AccountUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutProfileImageInput | AccountCreateOrConnectWithoutProfileImageInput[]
    createMany?: AccountCreateManyProfileImageInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BusinessCreateNestedManyWithoutProfileImageInput = {
    create?: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput> | BusinessCreateWithoutProfileImageInput[] | BusinessUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutProfileImageInput | BusinessCreateOrConnectWithoutProfileImageInput[]
    createMany?: BusinessCreateManyProfileImageInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutProfileImageInput = {
    create?: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput> | AccountCreateWithoutProfileImageInput[] | AccountUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutProfileImageInput | AccountCreateOrConnectWithoutProfileImageInput[]
    createMany?: AccountCreateManyProfileImageInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutProfileImageInput = {
    create?: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput> | BusinessCreateWithoutProfileImageInput[] | BusinessUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutProfileImageInput | BusinessCreateOrConnectWithoutProfileImageInput[]
    createMany?: BusinessCreateManyProfileImageInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumImageFileExtensionFieldUpdateOperationsInput = {
    set?: $Enums.ImageFileExtension
  }

  export type UserUpdateOneRequiredWithoutImageUploadsNestedInput = {
    create?: XOR<UserCreateWithoutImageUploadsInput, UserUncheckedCreateWithoutImageUploadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageUploadsInput
    upsert?: UserUpsertWithoutImageUploadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImageUploadsInput, UserUpdateWithoutImageUploadsInput>, UserUncheckedUpdateWithoutImageUploadsInput>
  }

  export type AccountUpdateManyWithoutProfileImageNestedInput = {
    create?: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput> | AccountCreateWithoutProfileImageInput[] | AccountUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutProfileImageInput | AccountCreateOrConnectWithoutProfileImageInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutProfileImageInput | AccountUpsertWithWhereUniqueWithoutProfileImageInput[]
    createMany?: AccountCreateManyProfileImageInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutProfileImageInput | AccountUpdateWithWhereUniqueWithoutProfileImageInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutProfileImageInput | AccountUpdateManyWithWhereWithoutProfileImageInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BusinessUpdateManyWithoutProfileImageNestedInput = {
    create?: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput> | BusinessCreateWithoutProfileImageInput[] | BusinessUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutProfileImageInput | BusinessCreateOrConnectWithoutProfileImageInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutProfileImageInput | BusinessUpsertWithWhereUniqueWithoutProfileImageInput[]
    createMany?: BusinessCreateManyProfileImageInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutProfileImageInput | BusinessUpdateWithWhereUniqueWithoutProfileImageInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutProfileImageInput | BusinessUpdateManyWithWhereWithoutProfileImageInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutProfileImageNestedInput = {
    create?: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput> | AccountCreateWithoutProfileImageInput[] | AccountUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutProfileImageInput | AccountCreateOrConnectWithoutProfileImageInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutProfileImageInput | AccountUpsertWithWhereUniqueWithoutProfileImageInput[]
    createMany?: AccountCreateManyProfileImageInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutProfileImageInput | AccountUpdateWithWhereUniqueWithoutProfileImageInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutProfileImageInput | AccountUpdateManyWithWhereWithoutProfileImageInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutProfileImageNestedInput = {
    create?: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput> | BusinessCreateWithoutProfileImageInput[] | BusinessUncheckedCreateWithoutProfileImageInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutProfileImageInput | BusinessCreateOrConnectWithoutProfileImageInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutProfileImageInput | BusinessUpsertWithWhereUniqueWithoutProfileImageInput[]
    createMany?: BusinessCreateManyProfileImageInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutProfileImageInput | BusinessUpdateWithWhereUniqueWithoutProfileImageInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutProfileImageInput | BusinessUpdateManyWithWhereWithoutProfileImageInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type UserPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type AccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type ImageUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUploadedByInput | ImageUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUploadedByInput | ImageUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUploadedByInput | ImageUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type ImageUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput> | ImageCreateWithoutUploadedByInput[] | ImageUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUploadedByInput | ImageCreateOrConnectWithoutUploadedByInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUploadedByInput | ImageUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ImageCreateManyUploadedByInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUploadedByInput | ImageUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUploadedByInput | ImageUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    upsert?: UserUpsertWithoutPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermissionsInput, UserUpdateWithoutPermissionsInput>, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutProfileAccountInput = {
    create?: XOR<ImageCreateWithoutProfileAccountInput, ImageUncheckedCreateWithoutProfileAccountInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProfileAccountInput
    connect?: ImageWhereUniqueInput
  }

  export type FavoritedBusinessCreateNestedManyWithoutAccountInput = {
    create?: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput> | FavoritedBusinessCreateWithoutAccountInput[] | FavoritedBusinessUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutAccountInput | FavoritedBusinessCreateOrConnectWithoutAccountInput[]
    createMany?: FavoritedBusinessCreateManyAccountInputEnvelope
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutAccountInput = {
    create?: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput> | RatingCreateWithoutAccountInput[] | RatingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAccountInput | RatingCreateOrConnectWithoutAccountInput[]
    createMany?: RatingCreateManyAccountInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FavoritedBusinessUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput> | FavoritedBusinessCreateWithoutAccountInput[] | FavoritedBusinessUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutAccountInput | FavoritedBusinessCreateOrConnectWithoutAccountInput[]
    createMany?: FavoritedBusinessCreateManyAccountInputEnvelope
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput> | RatingCreateWithoutAccountInput[] | RatingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAccountInput | RatingCreateOrConnectWithoutAccountInput[]
    createMany?: RatingCreateManyAccountInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type ImageUpdateOneWithoutProfileAccountNestedInput = {
    create?: XOR<ImageCreateWithoutProfileAccountInput, ImageUncheckedCreateWithoutProfileAccountInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProfileAccountInput
    upsert?: ImageUpsertWithoutProfileAccountInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProfileAccountInput, ImageUpdateWithoutProfileAccountInput>, ImageUncheckedUpdateWithoutProfileAccountInput>
  }

  export type FavoritedBusinessUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput> | FavoritedBusinessCreateWithoutAccountInput[] | FavoritedBusinessUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutAccountInput | FavoritedBusinessCreateOrConnectWithoutAccountInput[]
    upsert?: FavoritedBusinessUpsertWithWhereUniqueWithoutAccountInput | FavoritedBusinessUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FavoritedBusinessCreateManyAccountInputEnvelope
    set?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    disconnect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    delete?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    update?: FavoritedBusinessUpdateWithWhereUniqueWithoutAccountInput | FavoritedBusinessUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FavoritedBusinessUpdateManyWithWhereWithoutAccountInput | FavoritedBusinessUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutAccountNestedInput = {
    create?: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput> | RatingCreateWithoutAccountInput[] | RatingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAccountInput | RatingCreateOrConnectWithoutAccountInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAccountInput | RatingUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: RatingCreateManyAccountInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAccountInput | RatingUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAccountInput | RatingUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoritedBusinessUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput> | FavoritedBusinessCreateWithoutAccountInput[] | FavoritedBusinessUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutAccountInput | FavoritedBusinessCreateOrConnectWithoutAccountInput[]
    upsert?: FavoritedBusinessUpsertWithWhereUniqueWithoutAccountInput | FavoritedBusinessUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FavoritedBusinessCreateManyAccountInputEnvelope
    set?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    disconnect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    delete?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    update?: FavoritedBusinessUpdateWithWhereUniqueWithoutAccountInput | FavoritedBusinessUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FavoritedBusinessUpdateManyWithWhereWithoutAccountInput | FavoritedBusinessUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput> | RatingCreateWithoutAccountInput[] | RatingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutAccountInput | RatingCreateOrConnectWithoutAccountInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutAccountInput | RatingUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: RatingCreateManyAccountInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutAccountInput | RatingUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutAccountInput | RatingUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProvinceCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput> | ProvinceCreateWithoutCountryInput[] | ProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutCountryInput | ProvinceCreateOrConnectWithoutCountryInput[]
    createMany?: ProvinceCreateManyCountryInputEnvelope
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
  }

  export type ProvinceUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput> | ProvinceCreateWithoutCountryInput[] | ProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutCountryInput | ProvinceCreateOrConnectWithoutCountryInput[]
    createMany?: ProvinceCreateManyCountryInputEnvelope
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
  }

  export type ProvinceUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput> | ProvinceCreateWithoutCountryInput[] | ProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutCountryInput | ProvinceCreateOrConnectWithoutCountryInput[]
    upsert?: ProvinceUpsertWithWhereUniqueWithoutCountryInput | ProvinceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProvinceCreateManyCountryInputEnvelope
    set?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    disconnect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    delete?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    update?: ProvinceUpdateWithWhereUniqueWithoutCountryInput | ProvinceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProvinceUpdateManyWithWhereWithoutCountryInput | ProvinceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
  }

  export type ProvinceUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput> | ProvinceCreateWithoutCountryInput[] | ProvinceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutCountryInput | ProvinceCreateOrConnectWithoutCountryInput[]
    upsert?: ProvinceUpsertWithWhereUniqueWithoutCountryInput | ProvinceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProvinceCreateManyCountryInputEnvelope
    set?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    disconnect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    delete?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    update?: ProvinceUpdateWithWhereUniqueWithoutCountryInput | ProvinceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProvinceUpdateManyWithWhereWithoutCountryInput | ProvinceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutProvincesInput = {
    create?: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProvincesInput
    connect?: CountryWhereUniqueInput
  }

  export type CityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutProvincesNestedInput = {
    create?: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProvincesInput
    upsert?: CountryUpsertWithoutProvincesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutProvincesInput, CountryUpdateWithoutProvincesInput>, CountryUncheckedUpdateWithoutProvincesInput>
  }

  export type CityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput> | CityCreateWithoutProvinceInput[] | CityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CityCreateOrConnectWithoutProvinceInput | CityCreateOrConnectWithoutProvinceInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput | CityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CityCreateManyProvinceInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutProvinceInput | CityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CityUpdateManyWithWhereWithoutProvinceInput | CityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutCitiesInput = {
    create?: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput
    connect?: ProvinceWhereUniqueInput
  }

  export type BusinessCreateNestedManyWithoutCityInput = {
    create?: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput> | BusinessCreateWithoutCityInput[] | BusinessUncheckedCreateWithoutCityInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCityInput | BusinessCreateOrConnectWithoutCityInput[]
    createMany?: BusinessCreateManyCityInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutCityInput = {
    create?: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput> | AddressCreateWithoutCityInput[] | AddressUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCityInput | AddressCreateOrConnectWithoutCityInput[]
    createMany?: AddressCreateManyCityInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput> | BusinessCreateWithoutCityInput[] | BusinessUncheckedCreateWithoutCityInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCityInput | BusinessCreateOrConnectWithoutCityInput[]
    createMany?: BusinessCreateManyCityInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput> | AddressCreateWithoutCityInput[] | AddressUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCityInput | AddressCreateOrConnectWithoutCityInput[]
    createMany?: AddressCreateManyCityInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput
    upsert?: ProvinceUpsertWithoutCitiesInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutCitiesInput, ProvinceUpdateWithoutCitiesInput>, ProvinceUncheckedUpdateWithoutCitiesInput>
  }

  export type BusinessUpdateManyWithoutCityNestedInput = {
    create?: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput> | BusinessCreateWithoutCityInput[] | BusinessUncheckedCreateWithoutCityInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCityInput | BusinessCreateOrConnectWithoutCityInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCityInput | BusinessUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: BusinessCreateManyCityInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCityInput | BusinessUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCityInput | BusinessUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutCityNestedInput = {
    create?: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput> | AddressCreateWithoutCityInput[] | AddressUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCityInput | AddressCreateOrConnectWithoutCityInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCityInput | AddressUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AddressCreateManyCityInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCityInput | AddressUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCityInput | AddressUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput> | BusinessCreateWithoutCityInput[] | BusinessUncheckedCreateWithoutCityInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCityInput | BusinessCreateOrConnectWithoutCityInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCityInput | BusinessUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: BusinessCreateManyCityInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCityInput | BusinessUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCityInput | BusinessUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput> | AddressCreateWithoutCityInput[] | AddressUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCityInput | AddressCreateOrConnectWithoutCityInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCityInput | AddressUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AddressCreateManyCityInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCityInput | AddressUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCityInput | AddressUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutBusinessesInput = {
    create?: XOR<CityCreateWithoutBusinessesInput, CityUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CityCreateOrConnectWithoutBusinessesInput
    connect?: CityWhereUniqueInput
  }

  export type FavoritedBusinessCreateNestedManyWithoutBusinessInput = {
    create?: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput> | FavoritedBusinessCreateWithoutBusinessInput[] | FavoritedBusinessUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutBusinessInput | FavoritedBusinessCreateOrConnectWithoutBusinessInput[]
    createMany?: FavoritedBusinessCreateManyBusinessInputEnvelope
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput> | RatingCreateWithoutBusinessInput[] | RatingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutBusinessInput | RatingCreateOrConnectWithoutBusinessInput[]
    createMany?: RatingCreateManyBusinessInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type BusinessAddressCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput
    connect?: BusinessAddressWhereUniqueInput
  }

  export type BusinessDetailsCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessDetailsCreateOrConnectWithoutBusinessInput
    connect?: BusinessDetailsWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutProfileBusinessInput = {
    create?: XOR<ImageCreateWithoutProfileBusinessInput, ImageUncheckedCreateWithoutProfileBusinessInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProfileBusinessInput
    connect?: ImageWhereUniqueInput
  }

  export type FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput> | FavoritedBusinessCreateWithoutBusinessInput[] | FavoritedBusinessUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutBusinessInput | FavoritedBusinessCreateOrConnectWithoutBusinessInput[]
    createMany?: FavoritedBusinessCreateManyBusinessInputEnvelope
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput> | RatingCreateWithoutBusinessInput[] | RatingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutBusinessInput | RatingCreateOrConnectWithoutBusinessInput[]
    createMany?: RatingCreateManyBusinessInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput
    connect?: BusinessAddressWhereUniqueInput
  }

  export type BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessDetailsCreateOrConnectWithoutBusinessInput
    connect?: BusinessDetailsWhereUniqueInput
  }

  export type CityUpdateOneRequiredWithoutBusinessesNestedInput = {
    create?: XOR<CityCreateWithoutBusinessesInput, CityUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: CityCreateOrConnectWithoutBusinessesInput
    upsert?: CityUpsertWithoutBusinessesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutBusinessesInput, CityUpdateWithoutBusinessesInput>, CityUncheckedUpdateWithoutBusinessesInput>
  }

  export type FavoritedBusinessUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput> | FavoritedBusinessCreateWithoutBusinessInput[] | FavoritedBusinessUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutBusinessInput | FavoritedBusinessCreateOrConnectWithoutBusinessInput[]
    upsert?: FavoritedBusinessUpsertWithWhereUniqueWithoutBusinessInput | FavoritedBusinessUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: FavoritedBusinessCreateManyBusinessInputEnvelope
    set?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    disconnect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    delete?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    update?: FavoritedBusinessUpdateWithWhereUniqueWithoutBusinessInput | FavoritedBusinessUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: FavoritedBusinessUpdateManyWithWhereWithoutBusinessInput | FavoritedBusinessUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput> | RatingCreateWithoutBusinessInput[] | RatingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutBusinessInput | RatingCreateOrConnectWithoutBusinessInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutBusinessInput | RatingUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RatingCreateManyBusinessInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutBusinessInput | RatingUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutBusinessInput | RatingUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type BusinessAddressUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput
    upsert?: BusinessAddressUpsertWithoutBusinessInput
    disconnect?: BusinessAddressWhereInput | boolean
    delete?: BusinessAddressWhereInput | boolean
    connect?: BusinessAddressWhereUniqueInput
    update?: XOR<XOR<BusinessAddressUpdateToOneWithWhereWithoutBusinessInput, BusinessAddressUpdateWithoutBusinessInput>, BusinessAddressUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessDetailsUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessDetailsCreateOrConnectWithoutBusinessInput
    upsert?: BusinessDetailsUpsertWithoutBusinessInput
    disconnect?: BusinessDetailsWhereInput | boolean
    delete?: BusinessDetailsWhereInput | boolean
    connect?: BusinessDetailsWhereUniqueInput
    update?: XOR<XOR<BusinessDetailsUpdateToOneWithWhereWithoutBusinessInput, BusinessDetailsUpdateWithoutBusinessInput>, BusinessDetailsUncheckedUpdateWithoutBusinessInput>
  }

  export type ImageUpdateOneWithoutProfileBusinessNestedInput = {
    create?: XOR<ImageCreateWithoutProfileBusinessInput, ImageUncheckedCreateWithoutProfileBusinessInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProfileBusinessInput
    upsert?: ImageUpsertWithoutProfileBusinessInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProfileBusinessInput, ImageUpdateWithoutProfileBusinessInput>, ImageUncheckedUpdateWithoutProfileBusinessInput>
  }

  export type FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput> | FavoritedBusinessCreateWithoutBusinessInput[] | FavoritedBusinessUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: FavoritedBusinessCreateOrConnectWithoutBusinessInput | FavoritedBusinessCreateOrConnectWithoutBusinessInput[]
    upsert?: FavoritedBusinessUpsertWithWhereUniqueWithoutBusinessInput | FavoritedBusinessUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: FavoritedBusinessCreateManyBusinessInputEnvelope
    set?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    disconnect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    delete?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    connect?: FavoritedBusinessWhereUniqueInput | FavoritedBusinessWhereUniqueInput[]
    update?: FavoritedBusinessUpdateWithWhereUniqueWithoutBusinessInput | FavoritedBusinessUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: FavoritedBusinessUpdateManyWithWhereWithoutBusinessInput | FavoritedBusinessUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput> | RatingCreateWithoutBusinessInput[] | RatingUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutBusinessInput | RatingCreateOrConnectWithoutBusinessInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutBusinessInput | RatingUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: RatingCreateManyBusinessInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutBusinessInput | RatingUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutBusinessInput | RatingUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput
    upsert?: BusinessAddressUpsertWithoutBusinessInput
    disconnect?: BusinessAddressWhereInput | boolean
    delete?: BusinessAddressWhereInput | boolean
    connect?: BusinessAddressWhereUniqueInput
    update?: XOR<XOR<BusinessAddressUpdateToOneWithWhereWithoutBusinessInput, BusinessAddressUpdateWithoutBusinessInput>, BusinessAddressUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessDetailsCreateOrConnectWithoutBusinessInput
    upsert?: BusinessDetailsUpsertWithoutBusinessInput
    disconnect?: BusinessDetailsWhereInput | boolean
    delete?: BusinessDetailsWhereInput | boolean
    connect?: BusinessDetailsWhereUniqueInput
    update?: XOR<XOR<BusinessDetailsUpdateToOneWithWhereWithoutBusinessInput, BusinessDetailsUpdateWithoutBusinessInput>, BusinessDetailsUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessCreateNestedOneWithoutBusinessDetailsInput = {
    create?: XOR<BusinessCreateWithoutBusinessDetailsInput, BusinessUncheckedCreateWithoutBusinessDetailsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBusinessDetailsInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutBusinessDetailsNestedInput = {
    create?: XOR<BusinessCreateWithoutBusinessDetailsInput, BusinessUncheckedCreateWithoutBusinessDetailsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutBusinessDetailsInput
    upsert?: BusinessUpsertWithoutBusinessDetailsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutBusinessDetailsInput, BusinessUpdateWithoutBusinessDetailsInput>, BusinessUncheckedUpdateWithoutBusinessDetailsInput>
  }

  export type BusinessCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<BusinessCreateWithoutFavoritesInput, BusinessUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutFavoritesInput
    connect?: BusinessWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<AccountCreateWithoutFavoritesInput, AccountUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutFavoritesInput
    connect?: AccountWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<BusinessCreateWithoutFavoritesInput, BusinessUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutFavoritesInput
    upsert?: BusinessUpsertWithoutFavoritesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutFavoritesInput, BusinessUpdateWithoutFavoritesInput>, BusinessUncheckedUpdateWithoutFavoritesInput>
  }

  export type AccountUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<AccountCreateWithoutFavoritesInput, AccountUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutFavoritesInput
    upsert?: AccountUpsertWithoutFavoritesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutFavoritesInput, AccountUpdateWithoutFavoritesInput>, AccountUncheckedUpdateWithoutFavoritesInput>
  }

  export type BusinessCreateNestedOneWithoutRatingsInput = {
    create?: XOR<BusinessCreateWithoutRatingsInput, BusinessUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRatingsInput
    connect?: BusinessWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutRatingsInput = {
    create?: XOR<AccountCreateWithoutRatingsInput, AccountUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRatingsInput
    connect?: AccountWhereUniqueInput
  }

  export type RatingCreateNestedOneWithoutChildrenInput = {
    create?: XOR<RatingCreateWithoutChildrenInput, RatingUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RatingCreateOrConnectWithoutChildrenInput
    connect?: RatingWhereUniqueInput
  }

  export type RatingCreateNestedManyWithoutParentInput = {
    create?: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput> | RatingCreateWithoutParentInput[] | RatingUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutParentInput | RatingCreateOrConnectWithoutParentInput[]
    createMany?: RatingCreateManyParentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput> | RatingCreateWithoutParentInput[] | RatingUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutParentInput | RatingCreateOrConnectWithoutParentInput[]
    createMany?: RatingCreateManyParentInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<BusinessCreateWithoutRatingsInput, BusinessUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutRatingsInput
    upsert?: BusinessUpsertWithoutRatingsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutRatingsInput, BusinessUpdateWithoutRatingsInput>, BusinessUncheckedUpdateWithoutRatingsInput>
  }

  export type AccountUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<AccountCreateWithoutRatingsInput, AccountUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRatingsInput
    upsert?: AccountUpsertWithoutRatingsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutRatingsInput, AccountUpdateWithoutRatingsInput>, AccountUncheckedUpdateWithoutRatingsInput>
  }

  export type RatingUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<RatingCreateWithoutChildrenInput, RatingUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RatingCreateOrConnectWithoutChildrenInput
    upsert?: RatingUpsertWithoutChildrenInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutChildrenInput, RatingUpdateWithoutChildrenInput>, RatingUncheckedUpdateWithoutChildrenInput>
  }

  export type RatingUpdateManyWithoutParentNestedInput = {
    create?: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput> | RatingCreateWithoutParentInput[] | RatingUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutParentInput | RatingCreateOrConnectWithoutParentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutParentInput | RatingUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RatingCreateManyParentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutParentInput | RatingUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutParentInput | RatingUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput> | RatingCreateWithoutParentInput[] | RatingUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutParentInput | RatingCreateOrConnectWithoutParentInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutParentInput | RatingUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RatingCreateManyParentInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutParentInput | RatingUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutParentInput | RatingUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutAddressInput = {
    create?: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput
    connect?: CityWhereUniqueInput
  }

  export type BusinessAddressCreateNestedOneWithoutAddressInput = {
    create?: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutAddressInput
    connect?: BusinessAddressWhereUniqueInput
  }

  export type BusinessAddressUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutAddressInput
    connect?: BusinessAddressWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityUpdateOneWithoutAddressNestedInput = {
    create?: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CityCreateOrConnectWithoutAddressInput
    upsert?: CityUpsertWithoutAddressInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAddressInput, CityUpdateWithoutAddressInput>, CityUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessAddressUpdateOneWithoutAddressNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutAddressInput
    upsert?: BusinessAddressUpsertWithoutAddressInput
    disconnect?: BusinessAddressWhereInput | boolean
    delete?: BusinessAddressWhereInput | boolean
    connect?: BusinessAddressWhereUniqueInput
    update?: XOR<XOR<BusinessAddressUpdateToOneWithWhereWithoutAddressInput, BusinessAddressUpdateWithoutAddressInput>, BusinessAddressUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessAddressUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutAddressInput
    upsert?: BusinessAddressUpsertWithoutAddressInput
    disconnect?: BusinessAddressWhereInput | boolean
    delete?: BusinessAddressWhereInput | boolean
    connect?: BusinessAddressWhereUniqueInput
    update?: XOR<XOR<BusinessAddressUpdateToOneWithWhereWithoutAddressInput, BusinessAddressUpdateWithoutAddressInput>, BusinessAddressUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessCreateNestedOneWithoutAddressInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    connect?: BusinessWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutBusinessAddressInput = {
    create?: XOR<AddressCreateWithoutBusinessAddressInput, AddressUncheckedCreateWithoutBusinessAddressInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBusinessAddressInput
    connect?: AddressWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressInput
    upsert?: BusinessUpsertWithoutAddressInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAddressInput, BusinessUpdateWithoutAddressInput>, BusinessUncheckedUpdateWithoutAddressInput>
  }

  export type AddressUpdateOneRequiredWithoutBusinessAddressNestedInput = {
    create?: XOR<AddressCreateWithoutBusinessAddressInput, AddressUncheckedCreateWithoutBusinessAddressInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBusinessAddressInput
    upsert?: AddressUpsertWithoutBusinessAddressInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutBusinessAddressInput, AddressUpdateWithoutBusinessAddressInput>, AddressUncheckedUpdateWithoutBusinessAddressInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumImageFileExtensionFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageFileExtension | EnumImageFileExtensionFieldRefInput<$PrismaModel>
    in?: $Enums.ImageFileExtension[]
    notIn?: $Enums.ImageFileExtension[]
    not?: NestedEnumImageFileExtensionFilter<$PrismaModel> | $Enums.ImageFileExtension
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumImageFileExtensionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageFileExtension | EnumImageFileExtensionFieldRefInput<$PrismaModel>
    in?: $Enums.ImageFileExtension[]
    notIn?: $Enums.ImageFileExtension[]
    not?: NestedEnumImageFileExtensionWithAggregatesFilter<$PrismaModel> | $Enums.ImageFileExtension
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageFileExtensionFilter<$PrismaModel>
    _max?: NestedEnumImageFileExtensionFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutImageUploadsInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImageUploadsInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImageUploadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageUploadsInput, UserUncheckedCreateWithoutImageUploadsInput>
  }

  export type AccountCreateWithoutProfileImageInput = {
    email: string
    username?: string | null
    User: UserCreateNestedOneWithoutAccountInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutAccountInput
    Ratings?: RatingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutProfileImageInput = {
    id: string
    email: string
    username?: string | null
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutAccountInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutProfileImageInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput>
  }

  export type AccountCreateManyProfileImageInputEnvelope = {
    data: AccountCreateManyProfileImageInput | AccountCreateManyProfileImageInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutProfileImageInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutProfileImageInput = {
    id?: number
    name: string
    description?: string | null
    websiteUrl?: string | null
    cityId: number
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutProfileImageInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput>
  }

  export type BusinessCreateManyProfileImageInputEnvelope = {
    data: BusinessCreateManyProfileImageInput | BusinessCreateManyProfileImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImageUploadsInput = {
    update: XOR<UserUpdateWithoutImageUploadsInput, UserUncheckedUpdateWithoutImageUploadsInput>
    create: XOR<UserCreateWithoutImageUploadsInput, UserUncheckedCreateWithoutImageUploadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImageUploadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImageUploadsInput, UserUncheckedUpdateWithoutImageUploadsInput>
  }

  export type UserUpdateWithoutImageUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImageUploadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutProfileImageInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutProfileImageInput, AccountUncheckedUpdateWithoutProfileImageInput>
    create: XOR<AccountCreateWithoutProfileImageInput, AccountUncheckedCreateWithoutProfileImageInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutProfileImageInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutProfileImageInput, AccountUncheckedUpdateWithoutProfileImageInput>
  }

  export type AccountUpdateManyWithWhereWithoutProfileImageInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutProfileImageInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    username?: StringNullableFilter<"Account"> | string | null
    profileImageId?: IntNullableFilter<"Account"> | number | null
  }

  export type BusinessUpsertWithWhereUniqueWithoutProfileImageInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutProfileImageInput, BusinessUncheckedUpdateWithoutProfileImageInput>
    create: XOR<BusinessCreateWithoutProfileImageInput, BusinessUncheckedCreateWithoutProfileImageInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutProfileImageInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutProfileImageInput, BusinessUncheckedUpdateWithoutProfileImageInput>
  }

  export type BusinessUpdateManyWithWhereWithoutProfileImageInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutProfileImageInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    OR?: BusinessScalarWhereInput[]
    NOT?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    profileImageId?: IntNullableFilter<"Business"> | number | null
    websiteUrl?: StringNullableFilter<"Business"> | string | null
    cityId?: IntFilter<"Business"> | number
  }

  export type UserPermissionCreateWithoutUserInput = {
    id?: number
    accessLevel?: number
    scope: string
  }

  export type UserPermissionUncheckedCreateWithoutUserInput = {
    id?: number
    accessLevel?: number
    scope: string
  }

  export type UserPermissionCreateOrConnectWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionCreateManyUserInputEnvelope = {
    data: UserPermissionCreateManyUserInput | UserPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    email: string
    username?: string | null
    ProfileImage?: ImageCreateNestedOneWithoutProfileAccountInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutAccountInput
    Ratings?: RatingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    email: string
    username?: string | null
    profileImageId?: number | null
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutAccountInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type ImageCreateWithoutUploadedByInput = {
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    ProfileAccount?: AccountCreateNestedManyWithoutProfileImageInput
    ProfileBusiness?: BusinessCreateNestedManyWithoutProfileImageInput
  }

  export type ImageUncheckedCreateWithoutUploadedByInput = {
    id?: number
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedCreateNestedManyWithoutProfileImageInput
    ProfileBusiness?: BusinessUncheckedCreateNestedManyWithoutProfileImageInput
  }

  export type ImageCreateOrConnectWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput>
  }

  export type ImageCreateManyUploadedByInputEnvelope = {
    data: ImageCreateManyUploadedByInput | ImageCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPermissionScalarWhereInput = {
    AND?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    OR?: UserPermissionScalarWhereInput[]
    NOT?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    id?: IntFilter<"UserPermission"> | number
    userId?: StringFilter<"UserPermission"> | string
    accessLevel?: IntFilter<"UserPermission"> | number
    scope?: StringFilter<"UserPermission"> | string
  }

  export type AccountUpsertWithoutUserInput = {
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    ProfileImage?: ImageUpdateOneWithoutProfileAccountNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutUploadedByInput, ImageUncheckedUpdateWithoutUploadedByInput>
    create: XOR<ImageCreateWithoutUploadedByInput, ImageUncheckedCreateWithoutUploadedByInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutUploadedByInput, ImageUncheckedUpdateWithoutUploadedByInput>
  }

  export type ImageUpdateManyWithWhereWithoutUploadedByInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    uploadedById?: StringFilter<"Image"> | string
    aspect?: FloatFilter<"Image"> | number
    path?: StringFilter<"Image"> | string
    filename?: StringFilter<"Image"> | string
    extension?: EnumImageFileExtensionFilter<"Image"> | $Enums.ImageFileExtension
  }

  export type UserCreateWithoutPermissionsInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Account?: AccountCreateNestedOneWithoutUserInput
    ImageUploads?: ImageCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Account?: AccountUncheckedCreateNestedOneWithoutUserInput
    ImageUploads?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithoutPermissionsInput = {
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Account?: AccountUpdateOneWithoutUserNestedInput
    ImageUploads?: ImageUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    ImageUploads?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionCreateNestedManyWithoutUserInput
    ImageUploads?: ImageCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    email: string
    hash: string
    isVerified?: boolean
    role?: $Enums.Role
    refreshToken?: string
    Permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    ImageUploads?: ImageUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type ImageCreateWithoutProfileAccountInput = {
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    UploadedBy: UserCreateNestedOneWithoutImageUploadsInput
    ProfileBusiness?: BusinessCreateNestedManyWithoutProfileImageInput
  }

  export type ImageUncheckedCreateWithoutProfileAccountInput = {
    id?: number
    uploadedById: string
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    ProfileBusiness?: BusinessUncheckedCreateNestedManyWithoutProfileImageInput
  }

  export type ImageCreateOrConnectWithoutProfileAccountInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProfileAccountInput, ImageUncheckedCreateWithoutProfileAccountInput>
  }

  export type FavoritedBusinessCreateWithoutAccountInput = {
    Business: BusinessCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritedBusinessUncheckedCreateWithoutAccountInput = {
    businessId: number
  }

  export type FavoritedBusinessCreateOrConnectWithoutAccountInput = {
    where: FavoritedBusinessWhereUniqueInput
    create: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput>
  }

  export type FavoritedBusinessCreateManyAccountInputEnvelope = {
    data: FavoritedBusinessCreateManyAccountInput | FavoritedBusinessCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutAccountInput = {
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Business: BusinessCreateNestedOneWithoutRatingsInput
    Parent?: RatingCreateNestedOneWithoutChildrenInput
    Children?: RatingCreateNestedManyWithoutParentInput
  }

  export type RatingUncheckedCreateWithoutAccountInput = {
    id?: number
    businessId: number
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Children?: RatingUncheckedCreateNestedManyWithoutParentInput
  }

  export type RatingCreateOrConnectWithoutAccountInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput>
  }

  export type RatingCreateManyAccountInputEnvelope = {
    data: RatingCreateManyAccountInput | RatingCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    ImageUploads?: ImageUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refreshToken?: StringFieldUpdateOperationsInput | string
    Permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    ImageUploads?: ImageUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type ImageUpsertWithoutProfileAccountInput = {
    update: XOR<ImageUpdateWithoutProfileAccountInput, ImageUncheckedUpdateWithoutProfileAccountInput>
    create: XOR<ImageCreateWithoutProfileAccountInput, ImageUncheckedCreateWithoutProfileAccountInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutProfileAccountInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutProfileAccountInput, ImageUncheckedUpdateWithoutProfileAccountInput>
  }

  export type ImageUpdateWithoutProfileAccountInput = {
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    UploadedBy?: UserUpdateOneRequiredWithoutImageUploadsNestedInput
    ProfileBusiness?: BusinessUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProfileAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    ProfileBusiness?: BusinessUncheckedUpdateManyWithoutProfileImageNestedInput
  }

  export type FavoritedBusinessUpsertWithWhereUniqueWithoutAccountInput = {
    where: FavoritedBusinessWhereUniqueInput
    update: XOR<FavoritedBusinessUpdateWithoutAccountInput, FavoritedBusinessUncheckedUpdateWithoutAccountInput>
    create: XOR<FavoritedBusinessCreateWithoutAccountInput, FavoritedBusinessUncheckedCreateWithoutAccountInput>
  }

  export type FavoritedBusinessUpdateWithWhereUniqueWithoutAccountInput = {
    where: FavoritedBusinessWhereUniqueInput
    data: XOR<FavoritedBusinessUpdateWithoutAccountInput, FavoritedBusinessUncheckedUpdateWithoutAccountInput>
  }

  export type FavoritedBusinessUpdateManyWithWhereWithoutAccountInput = {
    where: FavoritedBusinessScalarWhereInput
    data: XOR<FavoritedBusinessUpdateManyMutationInput, FavoritedBusinessUncheckedUpdateManyWithoutAccountInput>
  }

  export type FavoritedBusinessScalarWhereInput = {
    AND?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
    OR?: FavoritedBusinessScalarWhereInput[]
    NOT?: FavoritedBusinessScalarWhereInput | FavoritedBusinessScalarWhereInput[]
    businessId?: IntFilter<"FavoritedBusiness"> | number
    accountId?: StringFilter<"FavoritedBusiness"> | string
  }

  export type RatingUpsertWithWhereUniqueWithoutAccountInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutAccountInput, RatingUncheckedUpdateWithoutAccountInput>
    create: XOR<RatingCreateWithoutAccountInput, RatingUncheckedCreateWithoutAccountInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutAccountInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutAccountInput, RatingUncheckedUpdateWithoutAccountInput>
  }

  export type RatingUpdateManyWithWhereWithoutAccountInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutAccountInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    businessId?: IntFilter<"Rating"> | number
    accountId?: StringFilter<"Rating"> | string
    parentRatingId?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    atmosphereRating?: IntNullableFilter<"Rating"> | number | null
    serviceRating?: IntNullableFilter<"Rating"> | number | null
    speedRating?: IntNullableFilter<"Rating"> | number | null
    catalogRating?: IntNullableFilter<"Rating"> | number | null
    priceRating?: IntNullableFilter<"Rating"> | number | null
    atmosphereNote?: StringNullableFilter<"Rating"> | string | null
    serviceNote?: StringNullableFilter<"Rating"> | string | null
    speedNote?: StringNullableFilter<"Rating"> | string | null
    catalogNote?: StringNullableFilter<"Rating"> | string | null
    priceNote?: StringNullableFilter<"Rating"> | string | null
    overallNote?: StringNullableFilter<"Rating"> | string | null
  }

  export type ProvinceCreateWithoutCountryInput = {
    code: string
    name: string
    Cities?: CityCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutCountryInput = {
    id?: number
    code: string
    name: string
    Cities?: CityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput>
  }

  export type ProvinceCreateManyCountryInputEnvelope = {
    data: ProvinceCreateManyCountryInput | ProvinceCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithWhereUniqueWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    update: XOR<ProvinceUpdateWithoutCountryInput, ProvinceUncheckedUpdateWithoutCountryInput>
    create: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput>
  }

  export type ProvinceUpdateWithWhereUniqueWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    data: XOR<ProvinceUpdateWithoutCountryInput, ProvinceUncheckedUpdateWithoutCountryInput>
  }

  export type ProvinceUpdateManyWithWhereWithoutCountryInput = {
    where: ProvinceScalarWhereInput
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyWithoutCountryInput>
  }

  export type ProvinceScalarWhereInput = {
    AND?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
    OR?: ProvinceScalarWhereInput[]
    NOT?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
    id?: IntFilter<"Province"> | number
    code?: StringFilter<"Province"> | string
    name?: StringFilter<"Province"> | string
    countryId?: IntFilter<"Province"> | number
  }

  export type CountryCreateWithoutProvincesInput = {
    code: string
    name: string
  }

  export type CountryUncheckedCreateWithoutProvincesInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryCreateOrConnectWithoutProvincesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
  }

  export type CityCreateWithoutProvinceInput = {
    code: string
    name: string
    Businesses?: BusinessCreateNestedManyWithoutCityInput
    Address?: AddressCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutProvinceInput = {
    id?: number
    code: string
    name: string
    Businesses?: BusinessUncheckedCreateNestedManyWithoutCityInput
    Address?: AddressUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutProvinceInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityCreateManyProvinceInputEnvelope = {
    data: CityCreateManyProvinceInput | CityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutProvincesInput = {
    update: XOR<CountryUpdateWithoutProvincesInput, CountryUncheckedUpdateWithoutProvincesInput>
    create: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutProvincesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutProvincesInput, CountryUncheckedUpdateWithoutProvincesInput>
  }

  export type CountryUpdateWithoutProvincesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutProvincesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
    create: XOR<CityCreateWithoutProvinceInput, CityUncheckedCreateWithoutProvinceInput>
  }

  export type CityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutProvinceInput, CityUncheckedUpdateWithoutProvinceInput>
  }

  export type CityUpdateManyWithWhereWithoutProvinceInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: IntFilter<"City"> | number
    code?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    provinceId?: IntFilter<"City"> | number
  }

  export type ProvinceCreateWithoutCitiesInput = {
    code: string
    name: string
    Country: CountryCreateNestedOneWithoutProvincesInput
  }

  export type ProvinceUncheckedCreateWithoutCitiesInput = {
    id?: number
    code: string
    name: string
    countryId: number
  }

  export type ProvinceCreateOrConnectWithoutCitiesInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
  }

  export type BusinessCreateWithoutCityInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCityInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput>
  }

  export type BusinessCreateManyCityInputEnvelope = {
    data: BusinessCreateManyCityInput | BusinessCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutCityInput = {
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
    BusinessAddress?: BusinessAddressCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutCityInput = {
    id?: number
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
    BusinessAddress?: BusinessAddressUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutCityInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput>
  }

  export type AddressCreateManyCityInputEnvelope = {
    data: AddressCreateManyCityInput | AddressCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutCitiesInput = {
    update: XOR<ProvinceUpdateWithoutCitiesInput, ProvinceUncheckedUpdateWithoutCitiesInput>
    create: XOR<ProvinceCreateWithoutCitiesInput, ProvinceUncheckedCreateWithoutCitiesInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutCitiesInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutCitiesInput, ProvinceUncheckedUpdateWithoutCitiesInput>
  }

  export type ProvinceUpdateWithoutCitiesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateOneRequiredWithoutProvincesNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessUpsertWithWhereUniqueWithoutCityInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutCityInput, BusinessUncheckedUpdateWithoutCityInput>
    create: XOR<BusinessCreateWithoutCityInput, BusinessUncheckedCreateWithoutCityInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutCityInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutCityInput, BusinessUncheckedUpdateWithoutCityInput>
  }

  export type BusinessUpdateManyWithWhereWithoutCityInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutCityInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutCityInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCityInput, AddressUncheckedUpdateWithoutCityInput>
    create: XOR<AddressCreateWithoutCityInput, AddressUncheckedCreateWithoutCityInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCityInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCityInput, AddressUncheckedUpdateWithoutCityInput>
  }

  export type AddressUpdateManyWithWhereWithoutCityInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCityInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    cityId?: IntFilter<"Address"> | number
    contact?: StringNullableFilter<"Address"> | string | null
    organization?: StringNullableFilter<"Address"> | string | null
    lineOne?: StringNullableFilter<"Address"> | string | null
    lineTwo?: StringNullableFilter<"Address"> | string | null
    lineThree?: StringNullableFilter<"Address"> | string | null
    suite?: StringNullableFilter<"Address"> | string | null
    postal?: StringNullableFilter<"Address"> | string | null
    lat?: FloatNullableFilter<"Address"> | number | null
    lng?: FloatNullableFilter<"Address"> | number | null
  }

  export type CityCreateWithoutBusinessesInput = {
    code: string
    name: string
    Province: ProvinceCreateNestedOneWithoutCitiesInput
    Address?: AddressCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutBusinessesInput = {
    id?: number
    code: string
    name: string
    provinceId: number
    Address?: AddressUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutBusinessesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutBusinessesInput, CityUncheckedCreateWithoutBusinessesInput>
  }

  export type FavoritedBusinessCreateWithoutBusinessInput = {
    Account: AccountCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritedBusinessUncheckedCreateWithoutBusinessInput = {
    accountId: string
  }

  export type FavoritedBusinessCreateOrConnectWithoutBusinessInput = {
    where: FavoritedBusinessWhereUniqueInput
    create: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput>
  }

  export type FavoritedBusinessCreateManyBusinessInputEnvelope = {
    data: FavoritedBusinessCreateManyBusinessInput | FavoritedBusinessCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutBusinessInput = {
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Account: AccountCreateNestedOneWithoutRatingsInput
    Parent?: RatingCreateNestedOneWithoutChildrenInput
    Children?: RatingCreateNestedManyWithoutParentInput
  }

  export type RatingUncheckedCreateWithoutBusinessInput = {
    id?: number
    accountId: string
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Children?: RatingUncheckedCreateNestedManyWithoutParentInput
  }

  export type RatingCreateOrConnectWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput>
  }

  export type RatingCreateManyBusinessInputEnvelope = {
    data: RatingCreateManyBusinessInput | RatingCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessAddressCreateWithoutBusinessInput = {
    Address: AddressCreateNestedOneWithoutBusinessAddressInput
  }

  export type BusinessAddressUncheckedCreateWithoutBusinessInput = {
    addressId: number
  }

  export type BusinessAddressCreateOrConnectWithoutBusinessInput = {
    where: BusinessAddressWhereUniqueInput
    create: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessDetailsCreateWithoutBusinessInput = {

  }

  export type BusinessDetailsUncheckedCreateWithoutBusinessInput = {

  }

  export type BusinessDetailsCreateOrConnectWithoutBusinessInput = {
    where: BusinessDetailsWhereUniqueInput
    create: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
  }

  export type ImageCreateWithoutProfileBusinessInput = {
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    UploadedBy: UserCreateNestedOneWithoutImageUploadsInput
    ProfileAccount?: AccountCreateNestedManyWithoutProfileImageInput
  }

  export type ImageUncheckedCreateWithoutProfileBusinessInput = {
    id?: number
    uploadedById: string
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedCreateNestedManyWithoutProfileImageInput
  }

  export type ImageCreateOrConnectWithoutProfileBusinessInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProfileBusinessInput, ImageUncheckedCreateWithoutProfileBusinessInput>
  }

  export type CityUpsertWithoutBusinessesInput = {
    update: XOR<CityUpdateWithoutBusinessesInput, CityUncheckedUpdateWithoutBusinessesInput>
    create: XOR<CityCreateWithoutBusinessesInput, CityUncheckedCreateWithoutBusinessesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutBusinessesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutBusinessesInput, CityUncheckedUpdateWithoutBusinessesInput>
  }

  export type CityUpdateWithoutBusinessesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    Address?: AddressUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutBusinessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    Address?: AddressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type FavoritedBusinessUpsertWithWhereUniqueWithoutBusinessInput = {
    where: FavoritedBusinessWhereUniqueInput
    update: XOR<FavoritedBusinessUpdateWithoutBusinessInput, FavoritedBusinessUncheckedUpdateWithoutBusinessInput>
    create: XOR<FavoritedBusinessCreateWithoutBusinessInput, FavoritedBusinessUncheckedCreateWithoutBusinessInput>
  }

  export type FavoritedBusinessUpdateWithWhereUniqueWithoutBusinessInput = {
    where: FavoritedBusinessWhereUniqueInput
    data: XOR<FavoritedBusinessUpdateWithoutBusinessInput, FavoritedBusinessUncheckedUpdateWithoutBusinessInput>
  }

  export type FavoritedBusinessUpdateManyWithWhereWithoutBusinessInput = {
    where: FavoritedBusinessScalarWhereInput
    data: XOR<FavoritedBusinessUpdateManyMutationInput, FavoritedBusinessUncheckedUpdateManyWithoutBusinessInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutBusinessInput, RatingUncheckedUpdateWithoutBusinessInput>
    create: XOR<RatingCreateWithoutBusinessInput, RatingUncheckedCreateWithoutBusinessInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutBusinessInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutBusinessInput, RatingUncheckedUpdateWithoutBusinessInput>
  }

  export type RatingUpdateManyWithWhereWithoutBusinessInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessAddressUpsertWithoutBusinessInput = {
    update: XOR<BusinessAddressUpdateWithoutBusinessInput, BusinessAddressUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
    where?: BusinessAddressWhereInput
  }

  export type BusinessAddressUpdateToOneWithWhereWithoutBusinessInput = {
    where?: BusinessAddressWhereInput
    data: XOR<BusinessAddressUpdateWithoutBusinessInput, BusinessAddressUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessAddressUpdateWithoutBusinessInput = {
    Address?: AddressUpdateOneRequiredWithoutBusinessAddressNestedInput
  }

  export type BusinessAddressUncheckedUpdateWithoutBusinessInput = {
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessDetailsUpsertWithoutBusinessInput = {
    update: XOR<BusinessDetailsUpdateWithoutBusinessInput, BusinessDetailsUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessDetailsCreateWithoutBusinessInput, BusinessDetailsUncheckedCreateWithoutBusinessInput>
    where?: BusinessDetailsWhereInput
  }

  export type BusinessDetailsUpdateToOneWithWhereWithoutBusinessInput = {
    where?: BusinessDetailsWhereInput
    data: XOR<BusinessDetailsUpdateWithoutBusinessInput, BusinessDetailsUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessDetailsUpdateWithoutBusinessInput = {

  }

  export type BusinessDetailsUncheckedUpdateWithoutBusinessInput = {

  }

  export type ImageUpsertWithoutProfileBusinessInput = {
    update: XOR<ImageUpdateWithoutProfileBusinessInput, ImageUncheckedUpdateWithoutProfileBusinessInput>
    create: XOR<ImageCreateWithoutProfileBusinessInput, ImageUncheckedCreateWithoutProfileBusinessInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutProfileBusinessInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutProfileBusinessInput, ImageUncheckedUpdateWithoutProfileBusinessInput>
  }

  export type ImageUpdateWithoutProfileBusinessInput = {
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    UploadedBy?: UserUpdateOneRequiredWithoutImageUploadsNestedInput
    ProfileAccount?: AccountUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutProfileBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedUpdateManyWithoutProfileImageNestedInput
  }

  export type BusinessCreateWithoutBusinessDetailsInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateWithoutBusinessDetailsInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutBusinessDetailsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutBusinessDetailsInput, BusinessUncheckedCreateWithoutBusinessDetailsInput>
  }

  export type BusinessUpsertWithoutBusinessDetailsInput = {
    update: XOR<BusinessUpdateWithoutBusinessDetailsInput, BusinessUncheckedUpdateWithoutBusinessDetailsInput>
    create: XOR<BusinessCreateWithoutBusinessDetailsInput, BusinessUncheckedCreateWithoutBusinessDetailsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutBusinessDetailsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutBusinessDetailsInput, BusinessUncheckedUpdateWithoutBusinessDetailsInput>
  }

  export type BusinessUpdateWithoutBusinessDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutBusinessDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutFavoritesInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateWithoutFavoritesInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutFavoritesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutFavoritesInput, BusinessUncheckedCreateWithoutFavoritesInput>
  }

  export type AccountCreateWithoutFavoritesInput = {
    email: string
    username?: string | null
    User: UserCreateNestedOneWithoutAccountInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileAccountInput
    Ratings?: RatingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutFavoritesInput = {
    id: string
    email: string
    username?: string | null
    profileImageId?: number | null
    Ratings?: RatingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutFavoritesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutFavoritesInput, AccountUncheckedCreateWithoutFavoritesInput>
  }

  export type BusinessUpsertWithoutFavoritesInput = {
    update: XOR<BusinessUpdateWithoutFavoritesInput, BusinessUncheckedUpdateWithoutFavoritesInput>
    create: XOR<BusinessCreateWithoutFavoritesInput, BusinessUncheckedCreateWithoutFavoritesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutFavoritesInput, BusinessUncheckedUpdateWithoutFavoritesInput>
  }

  export type BusinessUpdateWithoutFavoritesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type AccountUpsertWithoutFavoritesInput = {
    update: XOR<AccountUpdateWithoutFavoritesInput, AccountUncheckedUpdateWithoutFavoritesInput>
    create: XOR<AccountCreateWithoutFavoritesInput, AccountUncheckedCreateWithoutFavoritesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutFavoritesInput, AccountUncheckedUpdateWithoutFavoritesInput>
  }

  export type AccountUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAccountNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileAccountNestedInput
    Ratings?: RatingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    Ratings?: RatingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type BusinessCreateWithoutRatingsInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Address?: BusinessAddressUncheckedCreateNestedOneWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutRatingsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutRatingsInput, BusinessUncheckedCreateWithoutRatingsInput>
  }

  export type AccountCreateWithoutRatingsInput = {
    email: string
    username?: string | null
    User: UserCreateNestedOneWithoutAccountInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileAccountInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRatingsInput = {
    id: string
    email: string
    username?: string | null
    profileImageId?: number | null
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRatingsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRatingsInput, AccountUncheckedCreateWithoutRatingsInput>
  }

  export type RatingCreateWithoutChildrenInput = {
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Business: BusinessCreateNestedOneWithoutRatingsInput
    Account: AccountCreateNestedOneWithoutRatingsInput
    Parent?: RatingCreateNestedOneWithoutChildrenInput
  }

  export type RatingUncheckedCreateWithoutChildrenInput = {
    id?: number
    businessId: number
    accountId: string
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
  }

  export type RatingCreateOrConnectWithoutChildrenInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutChildrenInput, RatingUncheckedCreateWithoutChildrenInput>
  }

  export type RatingCreateWithoutParentInput = {
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Business: BusinessCreateNestedOneWithoutRatingsInput
    Account: AccountCreateNestedOneWithoutRatingsInput
    Children?: RatingCreateNestedManyWithoutParentInput
  }

  export type RatingUncheckedCreateWithoutParentInput = {
    id?: number
    businessId: number
    accountId: string
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
    Children?: RatingUncheckedCreateNestedManyWithoutParentInput
  }

  export type RatingCreateOrConnectWithoutParentInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput>
  }

  export type RatingCreateManyParentInputEnvelope = {
    data: RatingCreateManyParentInput | RatingCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutRatingsInput = {
    update: XOR<BusinessUpdateWithoutRatingsInput, BusinessUncheckedUpdateWithoutRatingsInput>
    create: XOR<BusinessCreateWithoutRatingsInput, BusinessUncheckedCreateWithoutRatingsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutRatingsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutRatingsInput, BusinessUncheckedUpdateWithoutRatingsInput>
  }

  export type BusinessUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type AccountUpsertWithoutRatingsInput = {
    update: XOR<AccountUpdateWithoutRatingsInput, AccountUncheckedUpdateWithoutRatingsInput>
    create: XOR<AccountCreateWithoutRatingsInput, AccountUncheckedCreateWithoutRatingsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutRatingsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutRatingsInput, AccountUncheckedUpdateWithoutRatingsInput>
  }

  export type AccountUpdateWithoutRatingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAccountNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileAccountNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RatingUpsertWithoutChildrenInput = {
    update: XOR<RatingUpdateWithoutChildrenInput, RatingUncheckedUpdateWithoutChildrenInput>
    create: XOR<RatingCreateWithoutChildrenInput, RatingUncheckedCreateWithoutChildrenInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutChildrenInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutChildrenInput, RatingUncheckedUpdateWithoutChildrenInput>
  }

  export type RatingUpdateWithoutChildrenInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Business?: BusinessUpdateOneRequiredWithoutRatingsNestedInput
    Account?: AccountUpdateOneRequiredWithoutRatingsNestedInput
    Parent?: RatingUpdateOneWithoutChildrenNestedInput
  }

  export type RatingUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpsertWithWhereUniqueWithoutParentInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutParentInput, RatingUncheckedUpdateWithoutParentInput>
    create: XOR<RatingCreateWithoutParentInput, RatingUncheckedCreateWithoutParentInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutParentInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutParentInput, RatingUncheckedUpdateWithoutParentInput>
  }

  export type RatingUpdateManyWithWhereWithoutParentInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutParentInput>
  }

  export type CityCreateWithoutAddressInput = {
    code: string
    name: string
    Province: ProvinceCreateNestedOneWithoutCitiesInput
    Businesses?: BusinessCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAddressInput = {
    id?: number
    code: string
    name: string
    provinceId: number
    Businesses?: BusinessUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutAddressInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
  }

  export type BusinessAddressCreateWithoutAddressInput = {
    Business: BusinessCreateNestedOneWithoutAddressInput
  }

  export type BusinessAddressUncheckedCreateWithoutAddressInput = {
    businessId: number
  }

  export type BusinessAddressCreateOrConnectWithoutAddressInput = {
    where: BusinessAddressWhereUniqueInput
    create: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
  }

  export type CityUpsertWithoutAddressInput = {
    update: XOR<CityUpdateWithoutAddressInput, CityUncheckedUpdateWithoutAddressInput>
    create: XOR<CityCreateWithoutAddressInput, CityUncheckedCreateWithoutAddressInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAddressInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAddressInput, CityUncheckedUpdateWithoutAddressInput>
  }

  export type CityUpdateWithoutAddressInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Province?: ProvinceUpdateOneRequiredWithoutCitiesNestedInput
    Businesses?: BusinessUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    Businesses?: BusinessUncheckedUpdateManyWithoutCityNestedInput
  }

  export type BusinessAddressUpsertWithoutAddressInput = {
    update: XOR<BusinessAddressUpdateWithoutAddressInput, BusinessAddressUncheckedUpdateWithoutAddressInput>
    create: XOR<BusinessAddressCreateWithoutAddressInput, BusinessAddressUncheckedCreateWithoutAddressInput>
    where?: BusinessAddressWhereInput
  }

  export type BusinessAddressUpdateToOneWithWhereWithoutAddressInput = {
    where?: BusinessAddressWhereInput
    data: XOR<BusinessAddressUpdateWithoutAddressInput, BusinessAddressUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessAddressUpdateWithoutAddressInput = {
    Business?: BusinessUpdateOneRequiredWithoutAddressNestedInput
  }

  export type BusinessAddressUncheckedUpdateWithoutAddressInput = {
    businessId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessCreateWithoutAddressInput = {
    name: string
    description?: string | null
    websiteUrl?: string | null
    City: CityCreateNestedOneWithoutBusinessesInput
    Favorites?: FavoritedBusinessCreateNestedManyWithoutBusinessInput
    Ratings?: RatingCreateNestedManyWithoutBusinessInput
    BusinessDetails?: BusinessDetailsCreateNestedOneWithoutBusinessInput
    ProfileImage?: ImageCreateNestedOneWithoutProfileBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
    cityId: number
    Favorites?: FavoritedBusinessUncheckedCreateNestedManyWithoutBusinessInput
    Ratings?: RatingUncheckedCreateNestedManyWithoutBusinessInput
    BusinessDetails?: BusinessDetailsUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAddressInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
  }

  export type AddressCreateWithoutBusinessAddressInput = {
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
    City?: CityCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutBusinessAddressInput = {
    id?: number
    cityId: number
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
  }

  export type AddressCreateOrConnectWithoutBusinessAddressInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutBusinessAddressInput, AddressUncheckedCreateWithoutBusinessAddressInput>
  }

  export type BusinessUpsertWithoutAddressInput = {
    update: XOR<BusinessUpdateWithoutAddressInput, BusinessUncheckedUpdateWithoutAddressInput>
    create: XOR<BusinessCreateWithoutAddressInput, BusinessUncheckedCreateWithoutAddressInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAddressInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAddressInput, BusinessUncheckedUpdateWithoutAddressInput>
  }

  export type BusinessUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type AddressUpsertWithoutBusinessAddressInput = {
    update: XOR<AddressUpdateWithoutBusinessAddressInput, AddressUncheckedUpdateWithoutBusinessAddressInput>
    create: XOR<AddressCreateWithoutBusinessAddressInput, AddressUncheckedCreateWithoutBusinessAddressInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutBusinessAddressInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutBusinessAddressInput, AddressUncheckedUpdateWithoutBusinessAddressInput>
  }

  export type AddressUpdateWithoutBusinessAddressInput = {
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    City?: CityUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutBusinessAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyProfileImageInput = {
    id: string
    email: string
    username?: string | null
  }

  export type BusinessCreateManyProfileImageInput = {
    id?: number
    name: string
    description?: string | null
    websiteUrl?: string | null
    cityId: number
  }

  export type AccountUpdateWithoutProfileImageInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAccountNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutProfileImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutAccountNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutProfileImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUpdateWithoutProfileImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    City?: CityUpdateOneRequiredWithoutBusinessesNestedInput
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutProfileImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutProfileImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPermissionCreateManyUserInput = {
    id?: number
    accessLevel?: number
    scope: string
  }

  export type ImageCreateManyUploadedByInput = {
    id?: number
    aspect: number
    path: string
    filename: string
    extension: $Enums.ImageFileExtension
  }

  export type UserPermissionUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevel?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpdateWithoutUploadedByInput = {
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    ProfileAccount?: AccountUpdateManyWithoutProfileImageNestedInput
    ProfileBusiness?: BusinessUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
    ProfileAccount?: AccountUncheckedUpdateManyWithoutProfileImageNestedInput
    ProfileBusiness?: BusinessUncheckedUpdateManyWithoutProfileImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutUploadedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    aspect?: FloatFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    extension?: EnumImageFileExtensionFieldUpdateOperationsInput | $Enums.ImageFileExtension
  }

  export type FavoritedBusinessCreateManyAccountInput = {
    businessId: number
  }

  export type RatingCreateManyAccountInput = {
    id?: number
    businessId: number
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
  }

  export type FavoritedBusinessUpdateWithoutAccountInput = {
    Business?: BusinessUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritedBusinessUncheckedUpdateWithoutAccountInput = {
    businessId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritedBusinessUncheckedUpdateManyWithoutAccountInput = {
    businessId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUpdateWithoutAccountInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Business?: BusinessUpdateOneRequiredWithoutRatingsNestedInput
    Parent?: RatingUpdateOneWithoutChildrenNestedInput
    Children?: RatingUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Children?: RatingUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvinceCreateManyCountryInput = {
    id?: number
    code: string
    name: string
  }

  export type ProvinceUpdateWithoutCountryInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Cities?: CityUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Cities?: CityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateManyProvinceInput = {
    id?: number
    code: string
    name: string
  }

  export type CityUpdateWithoutProvinceInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Businesses?: BusinessUpdateManyWithoutCityNestedInput
    Address?: AddressUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Businesses?: BusinessUncheckedUpdateManyWithoutCityNestedInput
    Address?: AddressUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCreateManyCityInput = {
    id?: number
    name: string
    description?: string | null
    profileImageId?: number | null
    websiteUrl?: string | null
  }

  export type AddressCreateManyCityInput = {
    id?: number
    contact?: string | null
    organization?: string | null
    lineOne?: string | null
    lineTwo?: string | null
    lineThree?: string | null
    suite?: string | null
    postal?: string | null
    lat?: number | null
    lng?: number | null
  }

  export type BusinessUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Favorites?: FavoritedBusinessUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUpdateOneWithoutBusinessNestedInput
    ProfileImage?: ImageUpdateOneWithoutProfileBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Favorites?: FavoritedBusinessUncheckedUpdateManyWithoutBusinessNestedInput
    Ratings?: RatingUncheckedUpdateManyWithoutBusinessNestedInput
    Address?: BusinessAddressUncheckedUpdateOneWithoutBusinessNestedInput
    BusinessDetails?: BusinessDetailsUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageId?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUpdateWithoutCityInput = {
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    BusinessAddress?: BusinessAddressUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    BusinessAddress?: BusinessAddressUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    lineOne?: NullableStringFieldUpdateOperationsInput | string | null
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    lineThree?: NullableStringFieldUpdateOperationsInput | string | null
    suite?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FavoritedBusinessCreateManyBusinessInput = {
    accountId: string
  }

  export type RatingCreateManyBusinessInput = {
    id?: number
    accountId: string
    parentRatingId: number
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
  }

  export type FavoritedBusinessUpdateWithoutBusinessInput = {
    Account?: AccountUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritedBusinessUncheckedUpdateWithoutBusinessInput = {
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritedBusinessUncheckedUpdateManyWithoutBusinessInput = {
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUpdateWithoutBusinessInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUpdateOneRequiredWithoutRatingsNestedInput
    Parent?: RatingUpdateOneWithoutChildrenNestedInput
    Children?: RatingUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Children?: RatingUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    parentRatingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateManyParentInput = {
    id?: number
    businessId: number
    accountId: string
    createdAt?: Date | string
    atmosphereRating?: number | null
    serviceRating?: number | null
    speedRating?: number | null
    catalogRating?: number | null
    priceRating?: number | null
    atmosphereNote?: string | null
    serviceNote?: string | null
    speedNote?: string | null
    catalogNote?: string | null
    priceNote?: string | null
    overallNote?: string | null
  }

  export type RatingUpdateWithoutParentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Business?: BusinessUpdateOneRequiredWithoutRatingsNestedInput
    Account?: AccountUpdateOneRequiredWithoutRatingsNestedInput
    Children?: RatingUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
    Children?: RatingUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RatingUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atmosphereRating?: NullableIntFieldUpdateOperationsInput | number | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    speedRating?: NullableIntFieldUpdateOperationsInput | number | null
    catalogRating?: NullableIntFieldUpdateOperationsInput | number | null
    priceRating?: NullableIntFieldUpdateOperationsInput | number | null
    atmosphereNote?: NullableStringFieldUpdateOperationsInput | string | null
    serviceNote?: NullableStringFieldUpdateOperationsInput | string | null
    speedNote?: NullableStringFieldUpdateOperationsInput | string | null
    catalogNote?: NullableStringFieldUpdateOperationsInput | string | null
    priceNote?: NullableStringFieldUpdateOperationsInput | string | null
    overallNote?: NullableStringFieldUpdateOperationsInput | string | null
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