import { cliente } from "./conexao.js"

const criaNovaLinha = (nome, email)=>{
    const linhaNova = document.createElement('tr')
    const conteudo = `
            <td>${nome}</td>
            <td>${email}</td>
    `
    linhaNova.innerHTML = conteudo

    return linhaNova
}


const tabela = document.querySelector('[data-tabela]')

cliente.conexao()
.then( data => {
        data.forEach( elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
        })
    }
)
