// 1. Type Alias
type User = {
  name: string;
  age: number;
  email: string;
};

// 2. Tipagem de objeto com propriedade opcional
type Employee = {
  id: number;
  name: string;
  department?: string; // Propriedade opcional
};

// 3. Função que usa objetos tipados e parâmetros opcionais
function createUserProfile(user: User, employee?: Employee): string {
  let profile = `Usuário: ${user.name} (${user.email}) - Idade: ${user.age}`;
  
  if (employee) {
    profile += ` | Funcionário ID: ${employee.id}`;
    if (employee.department) {
      profile += ` | Departamento: ${employee.department}`;
    }
  }

  return profile;
}

// Criando objetos baseados nos tipos
const user1: User = {
  name: "Guilherme",
  age: 20,
  email: "guilherme@example.com"
};

const employee1: Employee = {
  id: 101,
  name: "Guilherme",
  department: "Desenvolvimento"
};

// Chamando a função com e sem o parâmetro opcional
console.log(createUserProfile(user1));
console.log(createUserProfile(user1, employee1));

/*
Explicação Geral

1.O tipo User define a estrutura básica de um usuário.

2.O tipo Employee adiciona o conceito de funcionário, com uma propriedade opcional department.

3.A função createUserProfile combina os dois tipos e mostra como os parâmetros opcionais tornam o código mais flexível.

4.As chamadas da função demonstram os dois casos possíveis: com e sem o segundo argumento.
*/