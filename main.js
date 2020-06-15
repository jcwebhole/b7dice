var p1score = 0;
var p2score = 0;
var tie = 0;



function roll(p,d){
  var pd = Math.floor(Math.random() * 6);
  var pdEL = document.getElementById('player'+p+'die'+d);
  var pdArr = [0,-64,-128,-192,-256,-320];
  // pdEL.innerHTML = pdArr[pd];
  pdEL.style.backgroundPositionX = pdArr[pd] + 'px'
  return pd;
}

function rollPlayer(p){
  var pd1 = roll(p,1);
  var pd2 = roll(p,2);
  return pd1+pd2;
}

function rollBoth(){
  var p1 = rollPlayer(1);
  var p2 = rollPlayer(2);
  if(p1>p2){
    p1score++;
    document.getElementById('player1score').innerHTML = 'Player 1 Score: ' + p1score
    document.getElementById('message').innerHTML = 'Player 1 wins this round!';
    }
  if(p2>p1){
    p2score++;
    document.getElementById('player2score').innerHTML = 'Player 2 Score: ' + p2score
    document.getElementById('message').innerHTML = 'Player 2 wins this round!';
    }
  if(p1==p2){
    tie++;
    document.getElementById('tiescore').innerHTML = 'TIE: ' + p1score
    document.getElementById('message').innerHTML = 'It\'s a TIE!';
    }
    checkWinner();
}

function checkWinner(){
  var winner = 0;
  if(p1score>=5){
    document.getElementById('message').innerHTML = 'Game Over<br>Player 1 Wins!';
    winner = 1;
  }
  if(p2score>=5){
    document.getElementById('message').innerHTML = 'Game Over<br>Player 2 Wins!';
    winner = 2;
  }
  if(winner>0){
    document.getElementById('roll').disabled = true;
    document.getElementById('pWhat').innerHTML = winner;
    //launch modal
    document.getElementById('hideThis').click();
  }
}