//OOP OBJECT ORIENTED PROGRAMMING

class Animal {
    constructor(c){
        this.categoria = c;
    }

}

class CuentaBancaria{
    
    constructor(s=0, t='M'){// las variables que reciben los constructores se pueden llamar como se desee
        this.saldo = s;
        this.tipo = t;
    }
    deposito (cantidad){
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}


class TarjetaDeCredito extends CuentaBancaria{

    constructor(s =0, t ='TC', fc="xx/xx/xx", pm=0){
        super(s, t);
        this.fechaDeCorte = fc;
        this.pagoMinimo = pm;
    }
    imprimeFechaDeCorte(){
        // console.log('La fecha de corte es: ');
        console.log(`La fecha de corte es: ${this.fechaDeCorte}`)
    }

    imprimePagoMinimo(){
        // console.log('El pago minimo es: ');
        console.log(`El pago minimo es: ${this.pagoMinimo}`)

    }
}

// var main = function(){
        let perro = new Animal('perro');
        let gato = new Animal('gato');
        console.log(perro.categoria);
        console.log(gato.categoria);

        let cuenta1 = new CuentaBancaria(5000, 'M');
        cuenta1.deposito(2000);
        cuenta1.retiro(2500);
        cuenta1.deposito(4000);

        let cuenta2 = new CuentaBancaria(10000, 'E');
        console.log(cuenta1.saldo);
        console.log(cuenta1.tipo);
        console.log(cuenta2.saldo);
        console.log(cuenta2.tipo);
        // cuenta4.imprimeFechaDeCorte();// daria error porque no existe ese comportamiento para cuentaBancaria

        let cuenta3 = new CuentaBancaria();
        console.log(cuenta3);
        console.log(cuenta3.saldo);
        console.log(typeof cuenta3);
        let cuenta4 = new TarjetaDeCredito(5000, 'TC', '08/06/2021');
        console.log(cuenta4.saldo);
        console.log(cuenta4.tipo);
        cuenta4.imprimeFechaDeCorte();
        cuenta4.imprimePagoMinimo();
// }

// main();

