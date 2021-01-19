import { connection } from '../index';

export default async function selectOrderedUsers(orderBy: any): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderBy};
    `)

    return result[0]
}