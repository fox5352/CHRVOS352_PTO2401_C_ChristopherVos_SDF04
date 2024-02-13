// heading
const title = document.getElementById("title")
// stats tags
const cashTag = document.getElementById("cash")
const wonRounds = document.getElementById("rounds-won")
const lostRounds = document.getElementById("rounds-lost")
// table tags
const cardsListTag = document.getElementById('cards')
const scoreTag = document.getElementById('score')

// global vars
let player = {
    cash: 125,
    won: 0,
    lost: 0,
    isAlive: true
}
let cards = [];
let score = 0;
let blackJack = false;

// util functions
const randomCard = () => {
    // random number from 1 to 12
    return Math.floor(Math.random() * 13) + 1;
}
const sum = (list) => {
    // loop list and sum numbers
    let buffer = 0
    for (let index = 0; index < list.length; index++) {
        buffer += list[index]        
    }
    return buffer
}

const updateGame = () => {
    // update stats
    cashTag.textContent = `$${player.cash}`
    wonRounds.textContent = player.won
    lostRounds.textContent = player.lost
    cardsListTag.textContent = ""
    
    // update table
    for (let index = 0; index < cards.length; index++) {
        cardsListTag.textContent += ` ${cards[index]} -`
    }
    score = sum(cards);

    // if player won or game over
    if (score === 21) {
        player.won += 1
        player.cash += 50

        blackJack = true

        title.textContent = "BlockJack !!!"
    }else if (score > 21) {
        player.lost += 1
        player.cash -= 25
        player.isAlive = false

        title.textContent = "GameOver"
    }

    scoreTag.textContent = score
}

// New game button
document.getElementById("new-game").addEventListener("click", ()=>{
    title.textContent = "Game started"
    cards = []
    score = 0
    player.isAlive = true

    // if player won previous round
    if (blackJack) {
        blackJack = false
    }else{
        player.cash = 125
    }
    // place first two cards
    
    cards.push(randomCard())
    cards.push(randomCard())

    updateGame()
})

document.getElementById("new-card").addEventListener("click", ()=>{
    if (!blackJack && player.isAlive) {
        cards.push(randomCard())
    }
    updateGame()
})