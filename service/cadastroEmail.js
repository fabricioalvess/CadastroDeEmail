import { cliente } from "./conexao.js"
const form = document.querySelector('[data-form]')


    form.addEventListener('submit', evento =>{
        evento.preventDefault()
    
        const nome = evento.target.querySelector('[data-nome]').value
        const email = evento.target.querySelector('[data-email]').value
        cliente.criarEmail(nome,email)
        .then(()=>{
            window.location.href = "../paginas/mostrarEmail.html"
        })
    
    }
    )
