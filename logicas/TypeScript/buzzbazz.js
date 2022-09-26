/* Desarrolla un algoritmo que imprima los números del 0 al 100. 
Adicionalmente, debe imprimirse en la misma línea,
la palabra buzz en caso de que el número sea par. 
Sí el número es múltiplo de 5 debe imprimirse en la misma línea la palabra bazz */

for (i = 0; i < 101; i++) {
  if (i % 5 === 0 && i%2 ===0 && i!==0) console.log(i + " Buzz Bazz");
  else if (i % 5 === 0 && i!==0) console.log(i + " Bazz");
  else if (i % 2 === 0 && i!=0) console.log(i +" Buzz");

  else console.log(i);
}
