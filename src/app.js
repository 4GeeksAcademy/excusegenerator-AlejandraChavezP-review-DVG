/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let randomwho = who[Math.floor(Math.random() * who.lenght)];
  let randomaction = action[Math.floor(Math.random() * action.lenght)];
  let randomwhat = what[Math.floor(Math.random() * what.lenght)];
  let randomwhen = when[Math.floor(Math.random() * when.lenght)];

  return randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen;
}

window.onload = function() {
  let excuse = generateExcuse();
  document.querySelector("#excuse").innerHTML = excuse;
};
