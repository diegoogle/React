console.log("Hola mundo");

//Objeto Persona:
const persona = {
  nombre: "tony",
  apellido: "stark",
  edad: 45,
  direccion:{
    ciudad: "New York",
    zip: 123124142,
    lat: 1232412,
    lng: 1312424,//Una buena practica es terminar con una ',' pero no es obligatorio.
  }
};

//console.log(persona);
//console.table(persona);

//const persona2 = persona; //Esto no se debe de hacer para objetos.
const persona2 = {...persona}//'Operador Spread': Para copiar el objeto correctamente
persona2.nombre = "peter"
console.log(persona);
console.log(persona2);
//Commit
