import {getContatos, getContato, deleteContato, updateContato} from "./funcoes.js"
const listaContatos = await getContatos()

console.log(listaContatos);
console.log(await getContato(2));

function criarCardContato(info){
    const container = document.getElementById('container')
    const contato = document.createElement('div')
    const nome = document.createElement('p')
    nome.textContent = info.nome
    const celular = document.createElement('p')
    celular.textContent = info.celular
    const email = document.createElement('p')
    email.textContent = info.email
    const endereco = document.createElement('p')
    endereco.textContent = info.endereco
    const cidade = document.createElement('p')
    cidade.textContent = info.cidade
    const botaoExcluir = document.createElement('img')
    botaoExcluir.src = 'https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png'

    contato.replaceChildren(nome, celular, email, endereco, cidade, botaoExcluir)
    container.appendChild(contato)

    // ESSA FUNÇÃO COMENTADA LOGO ABAIXO É RESPONSÁVEL PELA AÇÃO DE UM CARD PODER SER EXCLUÍDO AO SER CLICADO NO ÍCONE DE LIXO PERTENCENTE A ELE 


    // botaoExcluir.addEventListener('click',()=>{
    //     deleteContato(info.id)
    // })
}


listaContatos.forEach(contato => {
    criarCardContato(contato)
});