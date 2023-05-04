/*function saludar(nombre){
  return `Hola, ${nombre}`;//Template String
}*/

const saludar = function(nombre){
  return `Hola, ${nombre}`;//Template String
}
const saludar2 = (nombre) => {//Funcion de flecha
  return `Hola, ${nombre}`;//Template String
}
const saludar3 = (nombre)=> `Hola, ${nombre}`;
console.log(saludar2("Goku"));
console.log(saludar3("Peter"));
//console.log(saludar("Diego"));

/*const getUser = () =>{
  return{
  uid: "abdcdcd",
  username: "123nsujyu"
  }
}*/
const getUser = () => ({
  uid: "abdcdcd",
  username: "123nsujyu"
});
console.log(getUser);

//Tarea:
//1.- Transformar a funcion de flecha
//2.- Retornar un objeto implicito
//3.- Pruebas

/*function getUsuarioActivo(nombre){
  return{
    uid="ABC567",
    username: nombre
  }
};*/
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre
});
const usuarioActivo = getUsuarioActivo("Diego");
console.log(getUsuarioActivo);
//commit

