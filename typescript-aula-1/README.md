# Typescript Intro Aula 1

Este repositório contém o código base usado na Aula 1 de TypeScript. O objetivo é mostrar a instalação, configuração e compilação de um projeto simples escrito em TypeScript.

## Requisitos

1. Node.js e npm instalados.
2. Um terminal. Pode ser PowerShell no Windows, Terminal no macOS ou qualquer shell no Linux.
3. VS Code recomendado.

## Verificar instalação do Node e npm

1. Abra o terminal.
2. Execute:
```bash
node -v
npm -v
```
3. Se aparecerem versões, siga adiante. Caso contrário, instale pelo site oficial do Node.

## Instalação do projeto

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:
```bash
npm install
```
3. Opcional: verifique a versão do compilador TypeScript disponível no projeto:
```bash
npx tsc -v
```

## Estrutura do projeto

1. package.json: descreve scripts e dependências do projeto.
2. node_modules: diretório com todas as dependências instaladas pelo npm.

## Comandos principais no terminal

1. Compilar o projeto uma vez:
```bash
npm run build
```
2. Rodar o watcher para compilar a cada alteração em tempo real:
```bash
npm run dev
```
3. Executar o JavaScript gerado após a compilação:
```bash
npm start
```
4. Limpar a pasta dist:
```bash
npm run clean
```

## Como funciona a compilação

1. O comando `npm run build` executa `tsc`, que lê o `tsconfig.json`.
2. O compilador verifica tipos e converte arquivos `.ts` em `.js` dentro da pasta `dist`.
3. O navegador e o Node executam apenas JavaScript. Por isso executamos `node dist/index.js` via `npm start`.

## Passo a passo completo

1. Instalar dependências
```bash
npm install
```
2. Gerar os arquivos .js
```bash
npm run build
```
3. Executar o resultado
```bash
npm start
```

## Dicas de uso do terminal

1. Para listar arquivos e pastas
```bash
# Windows PowerShell
Get-ChildItem

# macOS e Linux
ls
```
2. Para mudar de pasta
```bash
# Todos os sistemas
cd nome-da-pasta
```
3. Para voltar uma pasta
```bash
cd ..
```

## Erros comuns e soluções

1. Comando tsc não encontrado ao tentar usar globalmente
   Solução: use `npx tsc` dentro do projeto ou instale globalmente com `npm install -g typescript`.
2. Arquivos .js não aparecem em dist após `npm run build`
   Solução: confirme se o arquivo `src/index.ts` existe e se `rootDir` e `outDir` do `tsconfig.json` estão corretos.
3. Node não inicia com `npm start`
   Solução: assegure-se de ter executado `npm run build` antes, já que o start roda `node dist/index.js`.


