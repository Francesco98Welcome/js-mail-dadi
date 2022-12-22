/* 
- Chiedi all'utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull'esito del controllo.
*/

let inputEmail = document.querySelector('#email');
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');

btn.addEventListener('click', valuta);

const mails = ['frank@gmail.it', 'jonny@gmail.it', 'gino@gmail.it']

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



