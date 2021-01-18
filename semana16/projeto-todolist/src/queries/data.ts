// Dependencies
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Types and ENUMs
import { User } from '../types/type';

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

// Functions

export async function createUser(user: User): Promise<void> {
    try {
        await connection.raw(`
            INSERT
            INTO User
            VALUES (
                "${user.name}",
                "${user.nickname}",
                "${user.email}"
            );
        `)

        console.log(`${user.name} criade com sucesso!`)
    } catch (error) {
        console.log(error)
    }
}

export async function getUserByID(id: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT *
            FROM User
            WHERE id = "${user.id}"
        `)

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// não sei se está certo colocar o id: string como parâmetro da função, já que a tipagem de User não inclui id.


export async function createTask(task: Task): Promise<void> {
    try {
        await connection.raw(`
            INSERT
            INTO Task
            VALUES (
                "${task.title}",
                "${task.description}",
                "${task.limit_date}",
                "${task.creatorUserId}"
            )
        `)

        console.log(`Tarefa ${task.name} criada com sucesso!`)
    } catch (error) {
        console.log(error)
    }
}

// não sei como gerar dados como ID e também não sei como fazer para o status ser default "to-do"

