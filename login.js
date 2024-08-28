const usuarios = [
    {
        email: 'arthur',
        senha: 'arthur'
    }
]


let botao = document.getElementById('btn')




botao.addEventListener('click', function logar() {
    let pegaEmail = document.getElementById('email').value
    let pegaSenha = document.getElementById('senha').value
    for (let i in usuarios) {
        if (pegaemail == usuarios[i].login) {
            alert('ok')
        }
    }
}