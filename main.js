const button1 = document.getElementById('button-1');

button1.addEventListener('click', event => {
  button1.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  buttonArea2.style.backgroundColor = `#05A8AA`;
});//makes button1 change button one color

  const buttonArea2 = document.getElementById('buttonarea-2');
  const button2 = document.getElementById('button-2');
  button2.addEventListener('click', event => {
    button1.style.color = `black`;
    buttonArea2.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  }); //makes button2 change buttonArea-2's background color

let randColor1 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
let randColor2 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
let randColor3 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const buttonArea3 = document.getElementById('buttonarea-3');
let arr = [0, randColor1, randColor2, randColor3]
// sets variables for buttonarea-3

button6.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = '#05A8AA';
  randColor1 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  randColor2 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  randColor3 = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  arr = [0, randColor1, randColor2, randColor3]
  for (let i = 3; i < 6; i++) {
  document.getElementById(`button-${i}`).innerHTML = `Mystery Color ${i-2}`;
  } 
}); 
// sets Adds Event listener to reset button, randomizes mystery numbers, and resets background default.   

function changeText(id,num) {
 id.innerHTML = arr[num];
} //Called in HTML lines 40-42

button3.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[1];
}); 
button4.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[2];
});
button5.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[3];
});
// adds listeners to buttons 3-5.  


const buttonArea4 = document.getElementById('buttonarea-4');
const button7 = document.getElementById('button-7');
const getInput = () => {
	let hueInput = document.getElementById('HSL-form').elements[0].value;
	let satInput = document.getElementById('HSL-form').elements[1].value;
	let lightInput = document.getElementById('HSL-form').elements[2].value;
	return `hsl(${hueInput}, ${satInput}%, ${lightInput}%)`;
}
button7.addEventListener('click', event => {
  button1.style.color = `black`;
  buttonArea4.style.backgroundColor = `${getInput()}`;
});