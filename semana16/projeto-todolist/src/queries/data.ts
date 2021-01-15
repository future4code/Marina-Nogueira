// Dependencies
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Types and ENUMs


// Database settings
dotenv.config()

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})