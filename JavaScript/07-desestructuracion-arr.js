//Desestructuracion arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0]);

//
const [,,pe1] = personajes;
console.log(pe1);

const returnaArreglo = () =>{
    return ['ABC', 123];
} 
const [letras, num] = returnaArreglo();
console.log(letras);

//Tarea
//1. El primer valor del arr se llamara nombre.
//2. se llamara setNombre
const useState = (valor) =>{
    return [valor, () =>{console.log('Hola mundo')}];
}
const [nombre, setNombre] = useState('diego');
console.log(nombre);
setNombre();