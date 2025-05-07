// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. 
// Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  const numero = Number(valor);
  if (isNaN(numero)) {
    return "Valor inválido";
  }
  return numero;
}

console.log(corrigirValor("123"));     
console.log(corrigirValor("12.34"));   
console.log(corrigirValor("abc"));     
console.log(corrigirValor(""));        
console.log(corrigirValor(null));      

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };