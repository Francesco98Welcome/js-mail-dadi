/*
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let player = Math.floor(Math.random() * 6) + 1;
console.log(player + ' - PLAYER');

let pc = Math.floor(Math.random() * 6) + 1;
console.log(pc + ' - PC');


if (player > pc) {
    console.log ('-----------------------')
    console.log('vince PLAYER');
}
else if (pc > player) {
    console.log ('-----------------------')
    console.log('vince PC');
}
else {
    console.log ('-----------------------')
    console.log('pareggio');
}

