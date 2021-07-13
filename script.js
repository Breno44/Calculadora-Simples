"use strict";

const screen = document.querySelector("#input")

function insert (num) {
    screen.value = screen.value + num;
}

function backspace () {
    let display = screen.value;
    screen.value = display.substring(0, display.length - 1);
}

function result () {
    let exp = screen.value;
    if (exp) {
      screen.value = eval(exp);
    }
}