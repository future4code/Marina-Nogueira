//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercício 1

app.get("/user", (req: Request, res: Response) => {
    const usersList = users
    res
        .status(200)
        .send(usersList)
})

//a) O método usado é o GET.
//b) A entidade manipulada é user.

// Exercício 2

app.get("/user/typesearch", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const type: string = (req.query.type as string).toUpperCase();

        if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
            errorCode = 422;
            throw new Error("Tipo inválido. Por favor preencha corretamente");
        }

        const myUser = users.filter(
            (u: user) => u.type === type.toUpperCase()
        );

        if (!myUser) {
            errorCode = 404;
            throw new Error("Tipo não encontrado");
        }

        const result = myUser;
        res
            .status(200)
            .send(result);

    } catch (error) {
        res
            .status(errorCode)
            .send(error.message);
    }
})

// Exercício 3

app.get("/user/namesearch", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const name: string = req.query.name as string;

        if (!name) {
            errorCode = 422;
            throw new Error("Nome inválido. Por favor preencha corretamente");
        }

        const myUser = users.find(((u: user) => u.name.toLowerCase() === name.toLowerCase()));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUser;
        res
            .status(200)
            .send(result);

    } catch (error) {
        res
            .status(errorCode)
            .send(error.message);
    }

});

// Exercício 4

app.put("/user/create", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age){
            errorCode = 422
            throw new Error("Algum campo foi preenchido incorretamente. Por favor, tente novamente.")
        }

        users.push(reqBody)

        res
            .status(200)
            .send({message: "Usuárie inseride com sucesso!"})
    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.message})
    }
})

// a) Nada mudou.
// b) Não, considero o método POST mais apropriado por permitir outras interações.

// Exercício 5

app.put("/user/change", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const lastUserIndex: number = Number(users.length - 1)
        const name: string = req.body.name

        users[lastUserIndex].name = `${name} - ALTERADO`
        res
            .status(200)
            .send({message: "Usuárie atualizade com sucesso!"})
    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.message})
    }
})

// Exercício 6

app.patch("/user/change", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const lastUserIndex: number = Number(users.length - 1)
        const name: string = req.body.name

        users[lastUserIndex].name = `${name} - REALTERADO`
        res
            .status(200)
            .send({message: "Usuárie atualizade com sucesso!"})
    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.message})
    }
})

// Exercício 7

app.delete("/user/delete/:id", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const reqBody: {id: number} = {
            id: Number(req.params.id)
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422
            throw new Error("Id inválido. Tente novamente.")
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)))

        if(myUserIndex === -1) {
            errorCode = 404
            throw new Error("Usuárie não encontrade. Tente novamente.")
        }

        users.splice((myUserIndex), 1)

        res
            .status(200)
            .send({message: "Usuárie apagado com sucesso!"})

    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.message})
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });

