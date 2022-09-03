class Persona {

    static proObjeto({nombre, apellidos,pais}){
        return new Persona(nombre, apellidos, pais);
    }
    constructor(nombre, apellidos, pais){
        this.nombre     = nombre;
        this.apellidos  = apellidos;
        this.pais       = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellidos}, ${this.pais}`);
    }
}

const nombre1   = 'Melisa',
      apellidos1 = 'Flores',
      pais      = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellidos: 'Herrera',
    pais : 'Costa Rica'
}

const Persona1 = new Persona(nombre1, apellidos1, pais);
const Persona2 = Persona.proObjeto(fher);

Persona1.getInfo();
Persona2.getInfo();