# TypeScript - Aula 4: Funções e Tipagem

Este repositório contém o código de exemplo da "Aula 4", que demonstra conceitos fundamentais de tipagem em funções com TypeScript. O objetivo é ilustrar como adicionar tipos a parâmetros, retornos de função, e como lidar com cenários síncronos e assíncronos.

O arquivo principal com os exemplos é o `aula.ts`.

## Conceitos Demonstrados

Abaixo estão os principais conceitos abordados no código de exemplo.

### 1. Tipagem de Parâmetros

É possível definir o tipo esperado para cada parâmetro de uma função. Isso garante que a função seja chamada com os tipos de dados corretos, evitando erros em tempo de execução.


### 2. Tipagem do Retorno

Podemos declarar explicitamente o tipo de valor que uma função deve retornar. Se a função retornar um valor de tipo diferente, o compilador do TypeScript apontará um erro.;


#### 2.1 Retorno de Funções Assíncronas

Para funções assíncronas (`async`), o tipo de retorno é sempre uma `Promise`. A tipagem deve ser `Promise<T>`, onde `T` é o tipo do valor que a `Promise` resolverá.


### 3. Funções com Retorno `void`

Quando uma função não retorna nenhum valor (por exemplo, apenas executa uma ação como imprimir no console), seu tipo de retorno é `void`.


### 4. Union Types em Parâmetros

Um parâmetro pode aceitar mais de um tipo. Isso é chamado de *Union Type* e é definido usando o operador `|`. Dentro da função, é comum usar o "estreitamento de tipo" (*type narrowing*) para tratar cada tipo de forma diferente.


### 5. Exemplo Integrado

A função `descreverUsuario` combina vários dos conceitos acima para criar um fluxo mais complexo e realista. Ela aceita um `id` que pode ser `number` ou `string`, chama outras funções tipadas (síncronas e assíncronas) e retorna uma `Promise<string>`.


## Como Executar os Exemplos

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Compile o arquivo TypeScript:**
   O compilador TypeScript (`tsc`) irá transpilar o arquivo `aula.ts` para um arquivo JavaScript (`aula.js`).
   ```bash
   npx tsc aula.ts
   ```

3. **Execute o código JavaScript gerado:**
   Use o Node.js para executar o arquivo de saída.
   ```bash
   node aula.js
   ```

Você verá no terminal a saída de todas as chamadas `console.log` presentes na seção de demonstração do arquivo.