// 1. Tipagem de parâmetros
function saudar(nome: string, idade: number) {
  return `Olá, ${nome}. Você tem ${idade} anos.`;
}

// 2. Tipagem do retorno
function areaDoCirculo(raio: number): number {
  const pi = 3.14159;
  const area = pi * raio * raio;
  return area;
}

// 2.1 Exemplo assíncrono com retorno tipado
async function buscarUsuario(id: number): Promise<string> {
  // Em um projeto real, aqui poderia haver uma chamada HTTP
  return `Usuário ${id}`;
}

// 3. Função com retorno void
function registrarEvento(mensagem: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${mensagem}`);
}

// 4. Union types em parâmetros, com estreitamento
function formatarId(id: number | string): string {
  if (typeof id === "number") {
    const idComoTexto = id.toString().padStart(6, "0");
    return `ID${idComoTexto}`;
  } else {
    const idSanitizado = id.trim().toUpperCase();
    return `ID${idSanitizado}`;
  }
}

// 5. Exemplo integrado
// A função descreve um usuário a partir de um identificador que pode ser number ou string.
// Ela registra um evento, usa union no parâmetro, chama funções tipadas e retorna string.
async function descreverUsuario(id: number | string): Promise<string> {
  registrarEvento("Iniciando descrição do usuário");

  const idPadronizado = formatarId(id);

  // Aqui apenas simulamos a busca. Se id for string, extraímos algum número para o exemplo.
  const idNumerico =
    typeof id === "number" ? id : Number.parseInt(id.replace(/\D/g, "")) || 0;

  const nome = await buscarUsuario(idNumerico);

  const resumo = `${idPadronizado} — ${nome} — área de referência: ${areaDoCirculo(
    2
  ).toFixed(2)}`;

  registrarEvento("Descrição concluída");

  return resumo;
}

// 6. Demonstração
console.log(saudar("Guilherme", 20));
console.log("Área do círculo de raio 3:", areaDoCirculo(3).toFixed(2));
registrarEvento("Aplicação iniciada");
console.log(formatarId(42));
console.log(formatarId("abc 123"));

descreverUsuario("abc 123").then((texto) => {
  console.log("Descrição integrada:", texto);
});
