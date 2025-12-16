/*
Exercici 1: Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui
 el quadrat de cada número.
*/

const arrayQuadrat = [1, 2, 3, 4].map((numero) => numero * numero);

console.log(arrayQuadrat);

/*
Exercici 2: Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només
 contingui els números parells.
 */

const parells = [1, 2, 3, 4].filter((numero) => numero % 2 === 0);
console.log(parells);

/*
Exercici3: Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per
 a trobar el primer número que és major a 10.
 */

const major = [1, 10, 8, 11].find((numero) => numero > 10);

console.log(major);

/*
Exercici 4: Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce 
per a calcular la suma total dels números.
 */

const suma = [13, 7, 8, 21].reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(suma);

/*
Exercici 5: Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.

- Multiplica cada nombre filtrat per 2.

- Calcula la suma dels nombres filtrats i multiplicats per 2.

- La funció ha de retornar el resultat de la suma.
*/

const result = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
  .filter((element) => element >= 10)
  .map((element) => element * 2)
  .reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  }, 0);

console.log(result);

/*
Exercici 6: Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors
 que 10, respectivament
*/

const arrayComparacio = [11, 12, 13, 14];

console.log(
  arrayComparacio.every((element) => element > 10)
    ? "tots els elements son majors que 10"
    : "No tots els elements son majors que 10"
);

console.log(
  arrayComparacio.some((element) => element > 10)
    ? "Algun element es major que 10"
    : "Cap elemenet es major que 10"
);
