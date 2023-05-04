//
//import {heroes} from './data/heroes'

//const { heroes } = require("./data/heroes");

//const { heroes } = require("./data/heroes");

import {heroes, owners} from './data/heroes';

//console.log(heroes);
// const getHeroById = (id) =>{
//     return heroes.find ( (heroe) => {
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
// const getHeroById = (id) => {
//     return heroes.find(h=> h.id === id);
// }
export const getHeroById = (id) => heroes.find(h=>h.id ===id);
//console.log( getHeroById(1));

//Retorna una lista o un arreglo
export const getHeroesByOwner = (owner) => heroes.filter(h=>h.owner === owner);
//console.log(getHeroesByOwner("DC"));