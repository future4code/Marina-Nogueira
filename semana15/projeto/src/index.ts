import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {account, transaction, accounts} from './accounts'

const app: Express = express()

app.use(express.json());
app.use(cors())

app.get("/accounts", (req: Request, res: Response) => {
    const accountsList = accounts
    res
        .status(200)
        .send(accountsList)
})

app.post("/accounts/create", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        const reqBody: account = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            age: req.body.age,
            balance: 0,
            statement: [{
                value: 0,
                date: 0,
                description: "teste"
            }]
        }

        // if(!reqBody.name || !reqBody.cpf || !reqBody.birthDate) {
        //     errorCode= 422
        //     throw new Error("Por favor, preencha todos os campos.")
        // }

        accounts.push(reqBody)
    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.message})
    }
})






import { AddressInfo } from 'net'

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})