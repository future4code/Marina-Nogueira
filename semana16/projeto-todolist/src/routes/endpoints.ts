// Libraries
import express, { Router, Response, Request } from 'express';
import cors from 'cors';

// Query Functions
import { createUser } from '../queries/data'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/user', async (req: Request, res: Response ) => {
    try {
        const result = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await createUser(result)

        res
            .status(200)
            .send("Usuárie criade com sucesso!")
    } catch (error) {
        
    }
}