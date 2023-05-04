//Operador ternario
const activo = true;
//let mensaje ='';

//Opcion de IF ELSE normal para una condicion
//  if (!activo){
//         mensaje = 'Activo';
//  } else {
//     mensaje = 'Inactivo';
//  }

 //Operador condicional ternario:
 //Activo es true ? 'Retorna Activo' : 'Retorna Inactivo'
 const mensaje = (activo)? 'Activo': 'Inactivo';

 //Cuando no quiero retornar un valor sin else:
 const mensaje2 = activo && 'Activo';

 console.log(mensaje2);