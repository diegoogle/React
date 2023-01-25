
# **JavaScript Notas**
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
Existen varias formas de crear funciones:

**Clasico:**
```
function saludar(nombre){
  return `Hola, ${nombre}`;//Template String
}
```

**Constantes:**
```
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
```

**Lambda (De Flecha)**
Estas funciones 
```
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}
//o bien...
const saludar = (nombre) => `Hola ${nombre}`;

const getUser = () => ({
    uid: '1234',
    user: 'Juan'
});
```

## **Desestructuracion**
La desestructuracion permite extraer propiedades de objetos complejos o abstractos.

Si tenemos el objeto persona:
```
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}
```
Una desestructurizacion simple sería así:
```
const {edad, nombre, clave} = persona;
```
Por lo cual podriamos acceder a los valores en los atributos edad, nombre y clave.
Una funcion para desestructurar un objeto que recibe como parametro sería así:
```
const retornaPersona2 = (usuario) => {

    const {edad, nombre, clave} = usuario;

    console.log(edad, clave, nombre);
}
retornaPersona2(persona);
```
### **Desestructurar arreglos**



## **Operadores**

### **Spread**:
Es un operador para copiar el objeto, ya que un '=' solo hace referencia al objeto en memoria.
```
const arreglo2 = [...arreglo1];
```

## **Funciones**
Cada funcion en javascript cuando no tiene un return explícito, regresa '*undefined*';

### **CallBack**: 
Es una funcion que se ejecuta dentro de un metodo. La siguiente funcion retorna un nuevo arreglo con los valores del arreglo2 multiplicados por 2
```
const arreglo3 = arreglo2.map(function(numero){
  return numero*2;
});
```

## **Importacion**

## **Funciones Async**
Una funcion asincrona ejecuta en segundo plano.
dentro de una funcion async se puede utilizar await