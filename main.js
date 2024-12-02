document.getElementById("btn1").addEventListener("click", randomNickname);
document.getElementById("btn2").addEventListener("click", allNicknames);

let nicknames = [
  "Crusher",
  "The Scientist",
  "The Hawk",
  "The Chief",
  "The Sloth",
  "The Jester",
];
let output = document.getElementById("output");

function randomNickname() {
  let first = document.getElementById("input1").value;
  let last = document.getElementById("input2").value;
  let rand = Math.floor(Math.random() * nicknames.length);
  output.innerHTML = `<p>${first} ${nicknames[rand]} ${last}</p>`;
}
function allNicknames() {
  output.innerHTML = "";
  let first = document.getElementById("input1").value;
  let last = document.getElementById("input2").value;
  for (let i = 0; i < nicknames.length; i++) {
    output.innerHTML += `<p>${first} ${nicknames[i]} ${last} <br></p>`;
  }
}
