// ======================================

// --------------------------------------
// 1. Diferença entre JavaScript e TypeScript
// --------------------------------------

// Em JavaScript:
let idadeJS = 25;
idadeJS = "vinte e cinco"; // permitido, mas pode gerar erro em runtime

// Em TypeScript (erro em tempo de compilação):
let idadeTS: number = 25;
// idadeTS = "vinte e cinco"; // Erro: string não é atribuível a number


// --------------------------------------
// 2. Tipos primitivos
// --------------------------------------

let nome: string = "Guilherme";
let idade: number = 20;
let ativo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

// Inferência de tipo
let cidade = "Vitória"; // string
let pontuacao = 42;     // number

// idade = "vinte"; // Erro
// nome = 10;       // Erro


// --------------------------------------
// 3. Arrays Tipados
// --------------------------------------

let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Ana", "Bruno", "Carlos"];

// numeros.push("seis"); // Erro: string não é number

let pontuacoes: Array<number> = [10, 20, 30];

// Percorrendo o array com segurança de tipo
for (let numero of numeros) {
  console.log(numero * 2);
}


// --------------------------------------
// 4. Objetos Tipados
// --------------------------------------

let usuario: { nome: string; idade: number; ativo: boolean } = {
  nome: "Guilherme",
  idade: 20,
  ativo: true
};

// usuario = { nome: "Guilherme" }; // Erro: propriedades faltando
// usuario.email = "gui@email.com"; // Erro: 'email' não existe em 'usuario'

// Tipo personalizado (type alias)
type Produto = {
  nome: string;
  preco: number;
  disponivel: boolean;
};

let item: Produto = {
  nome: "Teclado Mecânico",
  preco: 250,
  disponivel: true
};


// --------------------------------------
// 5. Tipagem Explícita e Inferência
// --------------------------------------

// Tipagem explícita
let linguagem: string = "TypeScript";

// Inferência de tipo
let versao = 5.0; // number
// versao = "5.0"; // Erro: string não é atribuível a number


// --------------------------------------
// 6. Vantagens da Tipagem Estática
// --------------------------------------

// JavaScript
function somaJS(a, b) {
  return a + b;
}
console.log(somaJS(10, "5")); // Resultado: "105" (erro lógico)

// TypeScript
function somaTS(a: number, b: number): number {
  return a + b;
}
// console.log(somaTS(10, "5")); // Erro: string não é number
console.log(somaTS(10, 5)); // Saída correta: 15


// --------------------------------------
// 7. Conclusão
// --------------------------------------
// O TypeScript ajuda a escrever código mais previsível e seguro.
// A tipagem estática identifica erros antes da execução,
// melhora a produtividade e mantém o código mais limpo.
