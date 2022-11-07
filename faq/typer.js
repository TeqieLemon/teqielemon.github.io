var p = document.querySelector("#typer");
var speed = 60;

var string = " CURRENTLY THERE ARE NO / FREQUENTLY ASKED QUESTIONS ";
var i = 0;

function typewriter() {
    if (i < string.length) {
    p.innerHTML += string.charAt(i).replace("/", " <br>");
    i++;
    setTimeout(typewriter, speed);
    }
}
typewriter();