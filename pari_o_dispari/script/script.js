
let pari_dispari = prompt("Scrivi pari o dispari");
let user_num = parseInt(prompt("Scrivi un numero da 1 a 5"));
let pc_num = getRandomNumb(1,5);
let numero = console.log(pc_num);
let somma_numeri = user_num + pc_num;

function getRandomNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (somma_numeri % 2 === 0){
    console.log(somma_numeri + " è pari");
}
else {
    console.log(somma_numeri + " è dispari");
}