import PromptSync from "prompt-sync";
import chalk from "chalk";

class Estudante {
  constructor(nome, ra, email, curso, disciplinas) {
    this.nome = nome;
    this.ra = ra;
    this.email = email;
    this.curso = curso;
    this.disciplinas = disciplinas;
  }

  destroy() {
    delete this.nome;
    delete this.ra;
    delete this.email;
    delete this.curso;
    delete this.disciplinas;
  }
}

const estudante1 = new Estudante(
  "Wenxi",
  "123",
  "wenxi@university.edu",
  "Análise e Desenvolvimento de Sistemas",
  ["Programação Web", "Cálculo"]
);

const estudante2 = new Estudante(
  "Jackie",
  "456",
  "jackie@university.edu",
  "Ciência da Computação",
  ["Banco de dados", "Inteligência Artificial"]
);

console.log(estudante1);
console.log(estudante2);
