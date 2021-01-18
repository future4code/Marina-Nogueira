import { Request, Response } from 'express';
import selectUserByName from '../data/selectUserByName';
import { user } from '../types/user';

export const getUserByName = async(req: Request, res: Response): Promise<void> =>{
    try {
        const { name } = req.query as user
        const users = await selectUserByName(`${name}`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found. Try again.")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }