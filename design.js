//Subscribe Button

function subButton(){
    const a = document.querySelector('.js-subscribe');
    if(a.innerText === 'Subscribe'){
    a.innerHTML = 'Subscribed';
    a.classList.add('is-subscribed');
    }
    else
    {
        a.innerHTML = 'Subscribe';
        a.classList.remove('is-subscribed');
    }
}

//Calculate cost of order

function calcCost(){
    const b = document.querySelector('.js-input');
    let cost = Number(b.value);
    let total = document.querySelector('.js-total')
    if(cost<40){
        total.innerHTML = cost + 10;
    }
    else{
        total.innerHTML = cost;
    }
}

function calcEnter(event){
    if(event.key === 'Enter'){
        calcCost();
    }
}

//RPS

function randomMove(){
    var a = Math.random();
    if(a < 0.33){
        return 'rock';
    }
    else if(a >= 0.33 && a < 0.66){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

var score = JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

function calcResult(myMove){

    var computerMove = randomMove();
    var result = '';
    if(myMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){           result = 'Lose';
        }
        else
        {
            result = 'Win';
        }
    }
    else if(myMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else
        {
            result = 'Lose';
        }
    }
    else if(myMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'Lose';
        }
        else if(computerMove === 'paper'){
            result = 'Win';
        }
        else
        {
            result = 'Tie';
        }
    }

    if(result === 'Win'){
        score.win += 1;
    }
    else if(result === 'Lose'){
        score.lose += 1;
    }
    else if(result === 'Tie'){
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = 
    `${result}. `;

    document.querySelector('.js-choice').innerHTML = `You chose <img src="${myMove}-emoji.png" class="move-icon"> and computer chose <img src="${computerMove}-emoji.png" class="move-icon">.`;

    updateScore();
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}

updateScore();
