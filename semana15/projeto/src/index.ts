import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {account, accounts} from './accounts'

const app: Express = express()

app.use(express.json());
app.use(cors())

app.get("/accounts", (req: Request, res: Response) => {

    try {
        if(!accounts.length){
            res
                .statusCode = 404
                throw new Error("Nenhuma conta encontrada.")
        }

        res
            .status(200)
            .send(accounts)
    } catch (error) {
        res
            .send({message: error.message})
    }
    
})

app.post("/accounts/create", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const { name, cpf, birthDateAsString} = req.body

        const [day, month, year] = birthDateAsString.split("/")

        const birthDate: Date = new Date(`${year}-${month}-${day}`)

        const ageInMilisseconds: number = Date.now() - birthDate.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18){
            res.statusCode = 406
            throw new Error("Usuárie deve ser maior de 18 anos.")
        }

        accounts.push({
            name,
            cpf,
            birthDate,
            balance: 0,
            statement: []
        })

        res
            .status(201)
            .send({message: "Conta criada com sucesso!"})
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