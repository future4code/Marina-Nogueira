const createObject = () => {
    const title = document.getElementById("titulo-post")
    const author = document.getElementById("autor-post")
    const content = document.getElementById("conteudo-post")
    const post = {
        title: title.value,
        author: author.value,
        content: content.value
    }
    return post
}

let objects = []

const keepObject = () => {
    objects.push(createObject())
}

const printPost = (post) => {
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `${post.title} ${post.author} ${post.content} `
}
