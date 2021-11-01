import { 
  getRGB,
  addListenerToChangeColor
} from './modules/helperfunctions.js';

const button1 = document.getElementById('button-1');

button1.addEventListener('click', event => {
  button1.style.color = getRGB();
  buttonArea2.style.backgroundColor = `#05A8AA`;
});//makes button1 change button one color

  const buttonArea2 = document.getElementById('buttonarea-2');
  const button2 = document.getElementById('button-2');
  button2.addEventListener('click', event => {
    button1.style.color = `black`;
    buttonArea2.style.backgroundColor = getRGB();
  }); //makes button2 change buttonArea-2's background color

let randColor1 = getRGB();
let randColor2 = getRGB();
let randColor3 = getRGB();
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const buttonArea3 = document.getElementById('buttonarea-3');
let arr = [0, randColor1, randColor2, randColor3]
// sets variables for buttonarea-3

button6.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = '#05A8AA';
  randColor1 = getRGB();
  randColor2 = getRGB();
  randColor3 = getRGB();
  arr = [0, randColor1, randColor2, randColor3]
  for (let i = 3; i < 6; i++) {
  document.getElementById(`button-${i}`).innerHTML = `Mystery Color ${i-2}`;
  } 
}); 
// sets Adds Event listener to reset button, randomizes mystery numbers, and resets background default.   

button3.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[1];
  button3.innerHTML = arr[1]
}); 
button4.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[2];
  button4.innerHTML = arr[2]
});
button5.addEventListener('click', event => {
  buttonArea3.style.backgroundColor = arr[3];
  button5.innerHTML = arr[3]
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