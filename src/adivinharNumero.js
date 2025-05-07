// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. 
// A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  if (isNaN(max) || isNaN(palpite)) {
    return "Erro: parâmetros inválidos";
  }

  max = Number(max);
  palpite = Number(palpite);

  const numeroSorteado = Math.floor(Math.random() * (max + 1));

  if (palpite === numeroSorteado) {
    return "Acertou!";
  } else {
    return "Errou! Tente novamente!";
  }
}

const max = prompt("Digite o número máximo:");
const palpite = prompt("Digite seu palpite:");

const resultado = adivinharNumero(max, palpite);
alert(resultado);

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };