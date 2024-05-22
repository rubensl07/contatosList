import {getContatos, getContato, deleteContato, updateContato} from "./funcoes.js"
const listaContatos = await getContatos()

console.log(listaContatos);
console.log(await getContato(2));
