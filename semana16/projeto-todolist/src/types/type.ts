enum status {
    TODO = 'to-do',
    DOING = 'doing',
    DONE = 'done'
}

export type User = {
    name: string,
    nickname: string,
    email: string
}

// essa tipagem não deveria incluir id?


export type Task = {
    title: string,
    description: string,
    status: status.TODO,
    limit_date: string,
    creatorUserId: string
}