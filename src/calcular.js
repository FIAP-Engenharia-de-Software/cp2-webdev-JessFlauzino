// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). 
// A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(a, b, operador) {
  if (isNaN(a) || isNaN(b)) {
    return "Erro: parâmetros inválidos";
  }

  a = Number(a);
  b = Number(b);

  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Erro: divisão por zero";
      }
      return a / b;
    default:
      return "Erro: operação inválida";
  }
}

const numero1 = prompt("Digite o primeiro número:");
const numero2 = prompt("Digite o segundo número:");
const operador = prompt("Digite a operação (+, -, *, /):");

const resultado = calcular(numero1, numero2, operador);
alert("O resultado é:" + resultado);


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };