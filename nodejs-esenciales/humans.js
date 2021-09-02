class Humans {
    constructor(name, age, genre){
        this.name = name;
        this.age = age;
        this.genre = genre;
    }
    info(){
        return console.log(this);
    }
}

let Gaurav = new Humans('Gaurav', 24, 'Male');
let Nishi = new Humans('Nishi', 23, 'Female');

Gaurav.info();
Nishi.info();