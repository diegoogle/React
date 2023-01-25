//Arreglos en js

//Practicas no recomendadas:
const arreglo1 = new Array();//No se recomienda hacer de esta forma por el tamaño fijo.
arreglo1.push(1);//Añade una posicion, no se recomienda porque sustituye.


const arreglo = [1,2,3,4];
//arreglo.push(1);
//Insertar a un arreglo:
let arreglo2 = [...arreglo, 5];//Se utiliza el operador spread para copiar y el ', 5' para añadir un valor.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
const arreglo3 = arreglo2.map(function(numero){
  return numero*2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
//Commit
