import { cliente } from "./conexao.js"

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

cliente.detalhaCliente(id)
.then(dados =>{
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const form = document.querySelector('[data-formulario]')

form.addEventListener('submit', evento =>{
    evento.preventDefault()
    cliente.atualizaEmail(id, inputNome.value, inputEmail.value)
    .then(()=>{
        window.location.href="../paginas/edicaoConcluida.html"
    })
})