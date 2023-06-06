const conexao = ()=>{
    return fetch(`http://localhost:3000/email`)
    .then(resposta =>{
        return resposta.json()
    })
}



export const cliente={
    conexao
}