# typescript-aula-3

Este repositório contém um script TypeScript (`script.ts`) que serve como um tutorial para alguns conceitos fundamentais do TypeScript.

## Tópicos Abordados

O script é dividido nas seguintes seções:

### 1. Tuplas

- **Tuplas básicas:** Demonstração de como criar e usar tuplas com tipos definidos.
- **Tuplas com elementos opcionais:** Como declarar tuplas onde alguns elementos não são obrigatórios.
- **Tuplas somente leitura (`readonly`):** Como criar tuplas imutáveis.
- **Tuplas em funções:** Exemplo de como usar tuplas como retorno de uma função, semelhante ao hook `useState` do React.

### 2. Enums

- **Enums numéricos:** O comportamento padrão dos enums no TypeScript.
- **Enums de string:** Como usar strings para valores de enum, tornando o código mais legível.
- **Enums heterogêneos:** Um exemplo de mistura de `number` e `string` em um enum (geralmente não recomendado).

### 3. `any` e Tipagem Fraca

- **O tipo `any`:** Como o `any` desliga a verificação de tipos do TypeScript e os perigos associados.
- **O tipo `unknown`:** Uma alternativa mais segura ao `any` que força a verificação de tipo antes do uso.

### 4. Exercícios

Pequenos exercícios para reforçar os conceitos de tuplas e enums.

## Como Executar

Para executar este script, você precisará ter o TypeScript e o Node.js instalados.

1.  **Compile o arquivo `.ts` para `.js`:**
    ```bash
    tsc script.ts
    ```

2.  **Execute o arquivo JavaScript gerado com o Node.js:**
    ```bash
    node script.js
    ```