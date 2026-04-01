const API_KEY = import.meta.env.VITE_API_KEY;

/* EXPLICACAO PARA O ALUNO:
O comando 'import.meta.env' e a forma como o Vite acessa
as variaveis do arquivo .env.
*/
const MINHA_CHAVE = import.meta.env.VITE_API_KEY;
// Exemplo de uma funcao que busca dados de uma API externa
async function buscarDados() {
// 1. Verificamos se a chave foi configurada
if (!MINHA_CHAVE) {
console.error("ERRO: A Chave de API nao foi encontrada no ambiente!");
return;
}
try {
// 2. Usamos a chave de forma dinamica na URL
const resposta = await fetch(`https://api.servico.com/dados?key=${MINHA_CHAVE
}`);
const dados = await resposta.json();
console.log("Dados recebidos com seguranca:", dados);
} catch (erro) {
console.error("Erro na comunicacao com a API:", erro);
}
}
// Chamada da funcao (pode ser vinculada a um botao no seu HTML)
buscarDados();