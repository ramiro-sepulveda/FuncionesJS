// Ejercicio 2

function pintar(color = 'green') { ele.style.backgroundColor = color };
const ele = document.getElementById("ele1")
ele?.addEventListener("click", () => pintar('yellow'));


// Ejercicio 3

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

div1?.addEventListener('click', function () {
    div1.style.backgroundColor = 'black'
})

div2?.addEventListener('click', function () {
    div2.style.backgroundColor = 'black'
})

div3?.addEventListener('click', function () {
    div3.style.backgroundColor = 'black'
})

div4?.addEventListener('click', function () {
    div4.style.backgroundColor = 'black'
})

// Evento de teclado

var color1 = null
var color2 = null

const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");

document.addEventListener('keydown', function (event) {

    if (event.key === 'a') {
        color1 = 'pink'
    } else if (event.key === 's') {
        color1 = 'orange'
    } else if (event.key === 'd') {
        color1 = 'cyan'
    } else if (event.key === 'q') {
        color2 = 'purple'
    } else if (event.key === 'w') {
        color2 = 'gray'
    } else if (event.key === 'e') {
        color2 = 'brown'
    }

    key1.style.backgroundColor = color1;
    key2.style.backgroundColor = color2;

    console.log(color1);
    console.log(color2);
})

