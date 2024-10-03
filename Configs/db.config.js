import dotenv from "dotenv";
dotenv.config();

 const dbConfig = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST || "localhost",  // Default to 'localhost' if not set
    DIALECT: "mysql",  // You can also store this in an environment variable if needed
};

export default dbConfig;
