/*Una Promesa (Promise) es un proxy de un valor que no necesariamente 
se conoce cuando se crea la promesa. 
Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. 
Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: 
en lugar de devolver inmediatamente el valor final, el método asíncrono
devuelve la promesa de proporcionar el valor en algún momento en el futuro.*/

import { getHeroById } from './08-imp-exp';


const getHeroByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const heroe = getHeroById(id);
      if (heroe) {
        resolve(heroe);
      }else {
        reject('No se pudo encontrar el heroe');       
      }            
    }, 2000)
  });
  //return promesa;
}

// promesa.then( (h) => {
//   console.log('Heroe: ', h);
// })
// .catch(err => console.warn(err));
getHeroByIdAsync(9)
.then( heroe => console.log('Heroe', heroe))
//O puede ser .then (console.log)
.catch(err => console.warn(err));
//puede ser .catch(console.warn);
