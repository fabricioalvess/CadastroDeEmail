import { cliente } from "./conexao.js"

const criaNovaLinha = (nome, email, id)=>{
    const linhaNova = document.createElement('tr')
    const conteudo = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul>
                   <button ><a href="../paginas/editarEmail.html?id=${id}">editar</a></button>
                   <button class="botaoexcluir">excluir</button>
                </ul>
            </td>
    `
    linhaNova.innerHTML = conteudo
    linhaNova.dataset.id = id
    console.log(linhaNova)
    return linhaNova
}

const tabela = document.querySelector('[data-tabela]')
tabela.addEventListener('click',(evento) =>{
    let botaoDeletarEmail = evento.target.className === "botaoexcluir"
    if(botaoDeletarEmail){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        cliente.removerEmail(id)
        .then(()=>{
            linhaCliente.remove()
        })
    }
})

cliente.conexao()
.then( data => {
        data.forEach( elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    }
)
