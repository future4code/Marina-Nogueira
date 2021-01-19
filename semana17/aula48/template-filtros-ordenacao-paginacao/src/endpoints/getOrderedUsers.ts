import { Request, Response } from 'express';
import selectOrderedUsers from '../data/selectOrderedUsers';
import { user } from '../types/user';

export const getOrderedUsers = async(req: Request, res: Response): Promise <void> => {
    try {
        const { orderBy } = req.query as user
        const users = await selectOrderedUsers(`${orderBy}`)

       if(orderBy !== "name" && orderBy !== "type"){
           res.statusCode = 422
           throw new Error("Order using 'name' or 'type'.")
       }

       if(!users.length){
        res.statusCode = 404
        throw new Error("No users found. Try again!")
     }
 
        res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }