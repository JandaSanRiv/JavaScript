class Persona{
    constructor(nombre, apPaterno, apMaterno, email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}


let persona1 = new Persona("Alma Alejandra", "Sanchez", "Rivera", "allma@gmail.com");
persona1.imprimePersona();
let persona2 = new Persona("Luis Daniel", "Sanchez", "Rivera", "luis@gmail.com");
persona2.imprimePersona();
let persona3 = new Persona("Marcela", "Rivera", "Villalvazo", "marce@gmail.com");
persona3.imprimePersona();


let personas =[];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

console.log(JSON.stringify(personas));//converts a JavaScript object or value to a JSON string

var persona4 = {
    
    "nombre": "Juana",
    "apPaterno": "Rivera",
    "apMaterno": "Munguia",
    "email": "marce@gmail.com"
}

console.log(JSON.stringify(persona4));
 console.log(JSON.parse('{"nombre":"Alma Alejandra","apPaterno":"Sanchez","apMaterno":"Rivera","email":"allma@gmail.com"}'));//Converts a JavaScript Object Notation (JSON) string into an object.