// stats tags
const cashTag = document.getElementById("cash")
const wonRounds = document.getElementById("rounds-won")
const lostRounds = document.getElementById("rounds-lost")
// table tags
const cardsListTag = document.getElementById('cards')
const scoreTag = document.getElementById('score')

// global vars
let cards = [];
let score = 0;
let isAlive = false;
let blackJack = false;


// util functions
const randomCard = () => {
    return Math.floor(Math.random() * 13);
}
