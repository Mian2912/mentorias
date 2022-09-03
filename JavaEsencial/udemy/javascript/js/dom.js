// var caja = document.getElementById('micaja');
// var caja = document.querySelector('#micaja');

// function cambiarColor(color){
//     caja.style.background=color;
// }
// // caja.innerHTML='¡texto en la caja desde js!'

// caja.style.padding="20px"
// caja.style.color="white"
// cambiarColor('green')
// console.log(caja)

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)

for (let i = 0; i < todosLosDivs.length; i++) {
    todosLosDivs[i].style.background='red'
    todosLosDivs[i].style.padding='14px'
    todosLosDivs[i].style.color='white'
    todosLosDivs[i].style.margin='10px'
    todosLosDivs[i].style.textAlign='center'
    
}