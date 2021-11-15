var r1 = Math.ceil(Math.random()*6);
var r2 = Math.ceil(Math.random()*6);

var rdic1 = "images/dice" + r1 + ".png";
var rdic2 = "images/dice" + r2 + ".png";


var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",rdic1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",rdic2);

var text = document.querySelector("h1");
if(r1 > r2){
    text.innerHTML = "⭐Player 1 Wins!";
}
else if(r1 < r2){
    text.innerHTML = "Player 2 Wins!⭐";
}
else{
    text.innerHTML = "Draw!";
}