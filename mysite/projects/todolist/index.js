window.addEventListener('load', () => { 
const form = document.querySelector("#testing");
const input = document.querySelector("#text");
const content = document.querySelector("#container")
 
form.addEventListener('submit', (e) => {
  e.preventDefault();

const taxt = input.value;
if (!taxt){
  alert("pleaese type something")
  return;
}
const secd =document.createElement('div')
secd.classList.add("container");

const inputt = document.createElement("input");
inputt.classList.add("texts")
inputt.value = taxt;


secd.appendChild(inputt)

content.appendChild(secd)


})


})