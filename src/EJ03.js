import {Alumno} from './models/alumno.js';

let alumno1 = new Alumno("Florencia" , "22888444", 20);
let alumno2 = new Alumno("Camila" , "54344324", 10);
let alumno3 = new Alumno();

alumno3.username = "Victoria"
alumno3.dni = "49838833"
alumno3.edad = 17

console.log(alumno1)
console.log(alumno2)
console.log(alumno3.toString())
