// =======================================================
// PARTE 1: TUPLAS
// =======================================================

// Exemplo básico de tupla
let pessoa: [string, number] = ["Guilherme", 20];
// primeira posição é string, segunda é number
console.log("Tupla pessoa:", pessoa);

// Se tentarmos inverter, o TS reclama
// let pessoaErrada: [string, number] = [20, "Guilherme"]; // erro

// -------------------------------------------------------
// Tupla com elementos opcionais
// Aqui dizemos que teremos no mínimo 1 string
// e podemos ter um number e um boolean
let produto: [string, number?, boolean?];

produto = ["Mouse"]; 
produto = ["Teclado", 120];
produto = ["Monitor", 800, true];

console.log("Tupla produto última atribuída:", produto);

// -------------------------------------------------------
// Tupla somente leitura
// readonly impede que a gente altere o valor depois
let coordenadas: readonly [number, number] = [10, 20];
console.log("Coordenadas:", coordenadas);
// coordenadas[0] = 30; // erro, pois é somente leitura

// -------------------------------------------------------
// Tupla em função (padrão parecido com React)
function useState(): [number, (n: number) => void] {
  let valor = 0;

  function setValor(novo: number) {
    // altera o valor dentro da função
    valor = novo;
    console.log("Valor atualizado dentro do useState:", valor);
  }

  return [valor, setValor];
}

const [valorInicial, setValor] = useState();
console.log("Valor inicial da tupla do useState:", valorInicial);
setValor(5); // atualiza valor interno


// =======================================================
// PARTE 2: ENUMS
// =======================================================

// Enum numérico
// Por padrão o TS começa em 0
enum StatusPedido {
  Pendente,  // 0
  Enviado,   // 1
  Entregue   // 2
}

let statusAtual: StatusPedido = StatusPedido.Enviado;
console.log("Status atual (numérico):", statusAtual); // deve mostrar 1

// Podemos comparar usando o nome do enum
if (statusAtual === StatusPedido.Enviado) {
  console.log("O pedido está em rota de entrega");
}

// -------------------------------------------------------
// Enum de string
// Usamos quando queremos algo mais legível
enum TipoUsuario {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Visitante = "VISITANTE"
}

let usuario: TipoUsuario = TipoUsuario.Editor;
console.log("Tipo de usuário:", usuario); // vai mostrar EDITOR

// Função que usa enum como parâmetro
function verificarAcesso(tipo: TipoUsuario) {
  if (tipo === TipoUsuario.Admin) {
    console.log("Acesso total permitido");
  } else {
    console.log("Acesso restrito");
  }
}

verificarAcesso(TipoUsuario.Visitante);

// -------------------------------------------------------
// Enum heterogêneo (apenas para conhecer)
// Mistura number e string. Evite no dia a dia.
enum ExemploHeterogeneo {
  A = 1,
  B = "Texto"
}

console.log("Enum heterogêneo A:", ExemploHeterogeneo.A);
console.log("Enum heterogêneo B:", ExemploHeterogeneo.B);


// =======================================================
// PARTE 3: any e Tipagem Fraca
// =======================================================

// O tipo any desliga o verificador de tipos
let valorFlexivel: any = "Olá";
console.log("Valor flexível como string:", valorFlexivel);

valorFlexivel = 10;
console.log("Valor flexível como number:", valorFlexivel);

valorFlexivel = { nome: "Guilherme" };
console.log("Valor flexível como objeto:", valorFlexivel);

// Perigo: o TS não avisa
// Aqui o compilador aceita, mas pode quebrar em runtime
function imprimirQualquerCoisa(dado: any) {
  // Se dado for string, funciona
  // Se dado for number, funciona
  // Se for objeto sem toUpperCase, quebra
  console.log("Dado recebido:", dado);
}

imprimirQualquerCoisa("Texto");
imprimirQualquerCoisa(123);
imprimirQualquerCoisa({ x: 1 });

// -------------------------------------------------------
// Exemplo ruim usando any
function somarRuim(a: any, b: any) {
  return a + b;
}

console.log("Somar ruim 5 + 10:", somarRuim(5, 10)); // 15
console.log("Somar ruim '5' + 10:", somarRuim("5", 10)); // 510 (concatenação)
// Aqui está o problema: sem tipos o TS não avisa

// -------------------------------------------------------
// Exemplo bom com tipos
function somarBom(a: number, b: number): number {
  return a + b;
}
console.log("Somar bom 5 + 10:", somarBom(5, 10));

// -------------------------------------------------------
// Quando ainda não sei o tipo e quero segurança
// unknown força verificação
let dadoExterno: unknown = "Olá mundo";

if (typeof dadoExterno === "string") {
  console.log("Dado externo em maiúsculo:", dadoExterno.toUpperCase());
}

// Se eu tentar usar direto, o TS não deixa
// console.log(dadoExterno.toUpperCase()); // erro

// -------------------------------------------------------
// Exemplo de uso controlado de any
// Caso de migração de JS para TS ou dado de API desconhecida
function tratarRespostaApi(resposta: any) {
  // podemos validar manualmente
  if (resposta && resposta.nome) {
    console.log("Nome da resposta:", resposta.nome);
  } else {
    console.log("Resposta sem nome, precisa validar melhor");
  }
}

tratarRespostaApi({ nome: "Empresa X" });
tratarRespostaApi("qualquer coisa");

// =======================================================
// PARTE 4: pequenos exercícios e reforço
// =======================================================

// 1. Criar uma tupla para representar um resultado de operação
// [sucesso, mensagem]
let resultadoOperacao: [boolean, string];
resultadoOperacao = [true, "Operação concluída"];
console.log("Resultado da operação:", resultadoOperacao);

// 2. Usar enum para status de usuário
enum StatusUsuario {
  Ativo = "ATIVO",
  Inativo = "INATIVO",
  Aguardando = "AGUARDANDO"
}

function mostrarStatusUsuario(status: StatusUsuario) {
  console.log("Status do usuário:", status);
}

mostrarStatusUsuario(StatusUsuario.Ativo);

// 3. Mostrar diferença de any e unknown rapidamente
let variavelAny: any = 10;
variavelAny.metodoInexistente(); // o TS deixa compilar, mas isso quebra em runtime

let variavelUnknown: unknown = 10;
// variavelUnknown.metodoInexistente(); // o TS não deixa, mais seguro


