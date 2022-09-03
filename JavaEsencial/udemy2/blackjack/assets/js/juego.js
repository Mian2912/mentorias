const miModulo = (() => {
    'use strict';

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];

    // referencias html
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const small = document.querySelectorAll('small');
    const divCartasJugador = document.querySelectorAll('.cartas');

    // esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) =>{
        deck = crearDeck();

        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }

        small.forEach(Element => Element.innerText = 0);
        divCartasJugador.forEach(Element => Element.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    const crearDeck = () =>{
        for(let i = 2; i <= 10; i++ ){
            for (const tipo of tipos) {
                deck.push(`${i}${tipo}`);
            }
        }
        for (const tipo of tipos) {
            for (const espe of especiales) {
                deck.push(`${espe}${tipo}`);
            }
        }
        return _.shuffle(deck);
    };

    // esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if(deck.length === 0){
            throw 'no hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        return (isNaN(valor)) ? 
        (valor === 'A') ? 11 : 10 
        : parseInt(valor);
    }
    
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src =  `assets/img/${carta}.png`; 
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);
    }
    
    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if(puntosComputadora === puntosMinimos){
                alert('Nadie Gana');
            }else if((puntosMinimos > 21)){
                alert('Computadora Gana');
            }else if((puntosComputadora > 21) ){
                alert('Jugador Gana')
            }else{
                alert('Computadora Gana');
            }
        }, 500 );
    }

    const acumularPuntos = (carta, turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        small[turno].innerText = puntosJugadores[turno]; 
        
        return puntosJugadores[turno]; 
    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) =>{
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            crearCarta(carta, 1);
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        determinarGanador();
    }

    // const valor = valorCarta(pedirCarta());;

    // eventos
    btnNuevo.addEventListener('click', () => {
        inicializarJuego(); 
    })

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);
        if(puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        }else if(puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })

    btnDetener.addEventListener('click', () =>{
        btnPedir.disabled=true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    })

    return {
      nuevoJuego: inicializarJuego
    }
})();