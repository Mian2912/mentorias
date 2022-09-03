class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

// const spiderman = new Persona('Peter B. Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const ironman = new Persona('Tony Stark', 'Iron Man', 'Yo soy Iron Man');
const batman = new Persona('Brunce Wayne', 'Batman', 'Yo Soy Batman');


console.log(spiderman);
// console.log(ironman);
// console.log(batman);

spiderman.quienSoy();
// ironman.quienSoy();
// batman.quienSoy();
batman.setComidaFavorita = 'el pie de cereza de la tia may';
console.log(spiderman.getComidaFavorita)

// spiderman.miFrase();
// ironman.miFrase();
// batman.miFrase();
// Persona._conteo = 2;
console.log('Conteo Statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);