class FiguraGeometrica {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }

}

class Triangulo extends FiguraGeometrica {

    calculaArea() {
        return (this.base * this.altura) / 2;
    }
    area() {
        console.log(`El area del triangulo es ${this.calculaArea()}`)
    }
}

class Cuadrado extends FiguraGeometrica {

    constructor(lado) {
        super();
        this.lado = lado;
    }
    calculaArea() {
        return this.lado * this.lado;
    }
    area() {
        console.log(`El area del cuadrado es ${this.calculaArea()}`)
    }

}

class Rectangulo extends FiguraGeometrica {
    calculaArea() {
        return this.base * this.altura;
    }
    area() {
        console.log(`El area del rectangulo es ${this.calculaArea()}`)
    }
}

var cuadrado1 = new Cuadrado(3);
// console.log(cuadrado1.calculaArea());
cuadrado1.area();
var rectangulo1 = new Rectangulo(2, 3);
rectangulo1.area();
// console.log(rectangulo1.calculaArea());
var triangulo1 = new Triangulo(10, 3);
triangulo1.area();
// console.log(triangulo1.calculaArea());

