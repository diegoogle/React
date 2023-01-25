//Desestructuracion de Objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}
console.log(persona);

//Desestructuracion:
const {edad, nombre, clave} = persona;
//console.log(edad);
//console.log(nombre);
//console.log(clave);

const retornaPersona = (usuario) =>{
    console.log(usuario);
}
retornaPersona(persona);

const retornaPersona2 = (usuario) => {

    const {edad, nombre, clave} = usuario;

    console.log(edad, clave, nombre);
}
retornaPersona2(persona);

//Desestructuracion en el argumento
const retornaPersona3 = ({nombre}) => {   
    console.log(nombre);
}
retornaPersona3(persona);

//Agregar valores nuevos
const persona2 ={...persona, rango:3}
const retornaPersona4 = ({nombre, rango =0}) => {   
    console.log(nombre, rango);
}
retornaPersona4(persona2);

const useContext = ({clave, nombre, edad, rango ='capitan'}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 234434,
            lng:-234342
        }
    }
}
const avenger = useContext(persona);
const{nombreClave, anios, latlng:{lat, lng} } = avenger;
console.log(anios);
console.log(lat, lng);