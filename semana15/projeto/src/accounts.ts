export type account = {
    name: string,
    cpf: number,
    birthDate: string,
    age: number,
    balance: number,
    statement: transaction[]
}

export type transaction = {
    value: number,
    date: number,
    description: string
}

export let accounts: account[] = [
    {
        "name": "Marina Azzi Nogueira",
        "cpf": 38127167800,
        "birthDate": "24/04/1990",
        "age": 30,
        "balance": 6000,
        "statement": [
            {
                value: 100,
                date: 1610281201,
                description: "Internet Janeiro 2021"
            }
        ]
    },
    {
        "name": "Fernanda",
        "cpf": 10000000000,
        "birthDate": "24/04/1990",
        "age": 30,
        "balance": 5000,
        "statement": [
            {
                value: 100,
                date: 1610281201,
                description: "Internet Janeiro 2021"
            }
        ]
    },
    {
        "name": "Diana",
        "cpf": 20000000000,
        "birthDate": "24/04/1990",
        "age": 30,
        "balance": 4000,
        "statement": [
            {
                value: 100,
                date: 1610281201,
                description: "Internet Janeiro 2021"
            }
        ]
    },
    {
        "name": "Augusto",
        "cpf": 30000000000,
        "birthDate": "24/04/1990",
        "age": 30,
        "balance": 3000,
        "statement": [
            {
                value: 100,
                date: 1610281201,
                description: "Internet Janeiro 2021"
            }
        ]
    },
    {
        "name": "Wesley",
        "cpf": 40000000000,
        "birthDate": "24/04/1990",
        "age": 30,
        "balance": 2000,
        "statement": [
            {
                value: 100,
                date: 1610281201,
                description: "Internet Janeiro 2021"
            }
        ]
    }
]