import { config as dotenv } from "dotenv";
dotenv();
export const config = {
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_NAME,
    secret: process.env.SECRET_TOKEN,
    port: process.env.PORT_DB
}
