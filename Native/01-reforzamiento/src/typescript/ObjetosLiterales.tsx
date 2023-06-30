
//Un objeto literal es un objeto con propiedades creado por medio de una interface
// Las interfaces NO sirven para crear instancias

import { Interface } from "readline"

//Objeto Literal:
const personaObj = {
    nombre: 'Fernando',
    edad: 35,
    direccion: {
        pais: 'Mexico',
        num: 546
    }
}

//Interfaces:
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais: string;
    num: number;
}

const personaInt: Persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: {
        pais: 'Mexico',
        num: 546
    }
}

export const ObjetosLiterales = () => {
  return (
    <>
    <h3>Objetos Literales</h3>
    </>
  )
}
