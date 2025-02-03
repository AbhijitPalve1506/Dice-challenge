var randomNo1=Math.floor(Math.random()*6)+1;
var randomNo2=Math.floor(Math.random()*6)+1;
const arr1=document.querySelector(".img1");
const arr2=document.querySelector(".img2");
const player1=`images/dice${randomNo1}.png`;
const player2=`images/dice${randomNo2}.png`;
arr1.src=player1;
arr2.src=player2;
if(randomNo1>randomNo2){
   document.querySelector("h1").textContent="Player1 wins!";
}else if(randomNo2===randomNo1){
    document.querySelector("h1").textContent="Draw!";
}else if(randomNo1<randomNo2){
    document.querySelector("h1").textContent="Player2 wins!";
}