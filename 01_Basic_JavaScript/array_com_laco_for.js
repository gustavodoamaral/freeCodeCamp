// Declare e inicialize uma variável total como 0. Use um laço for para adicionar o valor de cada elemento do array para total.
// Configuração
const myArr = [2, 3, 4, 5, 6];

let total = 0; 

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

console.log(total)