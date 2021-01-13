export type transaction = {
    value: number,
    date: Date,
    description: string
}

export type account = {
    name: string,
    cpf: number,
    birthDate: Date,
    balance: number,
    statement: transaction[]
}

export let accounts: account[] = []