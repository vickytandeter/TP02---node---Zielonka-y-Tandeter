let username;
let dni;
let edad;

class Alumno {
    constructor(username = "", dni = "", edad = "") {
        this.username = username
        this.dni = dni
        this.edad = edad
    }
}

function toString(){ return `Alumno: ${this.username} - DNI: ${this.dni} - Edad: ${this.edad}`}

