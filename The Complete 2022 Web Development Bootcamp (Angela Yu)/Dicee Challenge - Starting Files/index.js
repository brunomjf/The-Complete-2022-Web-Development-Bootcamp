
function rollDice1(){

    var num = Math.floor((Math.random(num) * 6) + 1);

    if(num === 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if(num === 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
}else if(num === 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
}else if(num === 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
}else if(num === 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
  }
  else (document.querySelector("img.img1").setAttribute("src", "images/dice6.png"));

  return num;

}



function rollDice2(){

    var num = Math.floor((Math.random(num) * 6) + 1);


    if(num === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if(num === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
}else if(num === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
}else if(num === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}else if(num === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
  }
  else (document.querySelector("img.img2").setAttribute("src", "images/dice6.png"));

return num;

}

rollDice1();
rollDice2();

var result1 = rollDice1();
var result2 = rollDice2();


function winner(){
  if (result1 > result2){
    document.querySelector("h1").innerHTML ="Player One Wins!";
  } else if(result1 < result2){
    document.querySelector("h1").innerHTML = "Player Two Wins!";
  }
  else (document.querySelector("h1").innerHTML = "It's a Draw...");

}

winner();
