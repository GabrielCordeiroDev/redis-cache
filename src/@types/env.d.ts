declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: number

    POSTGRES_DB: string
    POSTGRES_HOST: string
    POSTGRES_USER: string
    POSTGRES_PASS: string
    POSTGRES_PORT: number

    REDIS_PASS: string
    REDIS_PORT: number

    SECRET_HASH_KEY: string
    JWT_SECRET: string
  }
}
