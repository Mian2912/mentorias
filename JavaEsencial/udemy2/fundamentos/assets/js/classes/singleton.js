class Singleton{

    static instancia;
    nombre = '';

    constructor(nombre = ''){
    
        if(!!Singleton.instancia){    
            return Singleton.instancia
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}

const instancia1 = new Singleton('Batman');
const instancia2 = new Singleton('Ironman');
const instancia3 = new Singleton('Superman');

console.log(`nombre en la instancia es ${instancia1.nombre}`);
console.log(`nombre en la instancia es ${instancia2.nombre}`);
console.log(`nombre en la instancia es ${instancia3.nombre}`);