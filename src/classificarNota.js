// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  nota = Number(nota);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    return "Nota inválida";
  }
  
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

const notaUsuario = prompt("Digite a nota:");
const resultado = classificarNota(notaUsuario);
alert("O Resultado é: " + resultado);

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };