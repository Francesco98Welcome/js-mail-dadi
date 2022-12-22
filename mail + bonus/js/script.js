/* 
- Chiedi all'utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull'esito del controllo.
*/


let inputEmail = document.querySelector('#email');
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');

const mails = ['frank@gmail.it', 'jonny@gmail.it', 'gino@gmail.it'];

btn.addEventListener('click', valuta);

// SOLUZIONE CON FUNZIONE - BONUS - STYLE 

function valuta () {

    let inputValue = inputEmail.value;

    /*  - SOLUZIONE includes();

    if (mails.includes(inputValue)) {
        h2.innerHTML = 'OK';
        inputEmail.value = '';
        h2.style.color = 'green';
    }
    else {
        h2.innerHTML = '!error';
        inputEmail.value = '';
        h2.style.color = 'red';
    }

    */  // SOLUZIONE verifica con || 

    if (inputValue == mails[0] || inputValue == mails[1] || inputValue == mails[2]){
        h2.innerHTML = 'OK';
        inputEmail.value = '';
        h2.style.color = 'green';
    }
    else {
        h2.innerHTML = '!error';
        inputEmail.value = '';
        h2.style.color = 'red';
    }

}

// ----------------------------------------------------------------------------------

    // SOLUZIONE SOLO JS NO STYLE

    let chiedoEmail = prompt('inserisci la tua email');

    if (chiedoEmail == mails[0] || chiedoEmail == mails[1] || chiedoEmail == mails[2]) {
        console.log('ok, email corretta!')
    } 
    else {
        console.log('email sbagliata');
    }


