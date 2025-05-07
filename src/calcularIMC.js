// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    return "Erro";
  }

  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30) {
    return "Obesidade";
  } else {
    return "Erro"; 
  }
}

const peso = prompt("Digite seu peso em kg:");
const altura = prompt("Digite sua altura em metros:");
const resultado = calcularIMC(Number(peso), Number(altura));
alert("Resultado: " + resultado);


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };