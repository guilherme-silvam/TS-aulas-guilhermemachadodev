/**
 * Aula 1 - Introdução ao TypeScript
 * Exemplos práticos usados na aula.
 */

// Tipagem de parâmetros e retorno
export function somar(a: number, b: number): number {
  return a + b;
}

// Template string e tipagem explícita
export function saudacao(nome: string): string {
  return `Olá, ${nome}! Seja bem-vindo ao TypeScript`;
}

// Tipagem de variáveis
let idade: number = 20;
// idade = "vinte"; // Este código gera erro de tipo. Descomente para testar no editor.

// Exemplo de erro detectado em tempo de compilação
// console.log(somar(2, "3")); // Erro: argumento do tipo string não é atribuível ao parâmetro do tipo number.

// Execução de exemplo
console.log(somar(2, 3));
console.log(saudacao("Guilherme"));
console.log(`Idade atual: ${idade}`);


