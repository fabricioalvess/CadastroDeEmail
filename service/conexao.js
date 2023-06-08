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

export const cliente={
    conexao,
    criarEmail
}