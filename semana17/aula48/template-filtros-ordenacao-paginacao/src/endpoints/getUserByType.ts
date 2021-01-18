import { Request, Response } from 'express';
import selectUserByType from '../data/selectUserByType';
import { user } from '../types/user';

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const { type } = req.params as user
        const users = await selectUserByType(`${type}`)

        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found. Try again.")
        }

        res
            .status(200)
            .send(users)

    } catch (error) {
        console.log(error)
        res
            .send(error.message || error.sqlMessage)
    }
}