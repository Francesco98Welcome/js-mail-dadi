/*
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let player = Math.floor(Math.random() * 6) + 1;
console.log(player);

let pc = Math.floor(Math.random() * 6) + 1;
console.log(pc);


if (player > pc) {
    console.log('vince player');
}
else if (pc > player){
    console.log('vince pc');
}
else {
    console.log('pareggio');
}

