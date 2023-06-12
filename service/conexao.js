const conexao = ()=>{
    return fetch(`http://localhost:3000/email`)
    .then(resposta =>{
        return resposta.json()
    })
}


const criarEmail = (nome,email)=>{
    return fetch(`http://localhost:3000/email`, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nome:  nome,
            email: email
        })
    })
    .then(resposta =>{
        return resposta.body
    })
}

const detalhaCliente = (id)=>{
    return fetch(`http://localhost:3000/email/${id}`)
    .then(resposta =>{
        return resposta.json()
    })
}


const removerEmail = (id)=>{
    return fetch(`http://localhost:3000/email/${id}`,{
        method: "DELETE"
    })
}
const atualizaEmail = (id, nome, email)=>{
    return fetch(`http://localhost:3000/email/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email
            }
        )
    })
    .then(resposta =>{
        return resposta.json()
    })
}




export const cliente={
    conexao,
    criarEmail,
    removerEmail,
    detalhaCliente,
    atualizaEmail
}