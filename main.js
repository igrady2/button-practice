import { 
  getRGB,
  addListenerToChangeColor
} from './modules/helperfunctions.js';

//variables
const button1 = document.getElementById('button-1'); // button - area 1
const button2 = document.getElementById('button-2'); // button - area 2
const button3 = document.getElementById('button-3'); // Mystery color 1 - area 3
const button4 = document.getElementById('button-4'); // Mystery color 2 - area 3
const button5 = document.getElementById('button-5'); // Mystery color 3 - area 3
const button6 = document.getElementById('button-6'); // reset - area 3
const button7 = document.getElementById('button-7'); //change color - area4
const button8 = document.getElementById('button-8'); //stop -area 5
const button9 = document.getElementById('button-9'); //start - area 6

const buttonArea2 = document.getElementById('buttonarea-2'); //2nd button area
const buttonArea3 = document.getElementById('buttonarea-3'); //3rd button area
const buttonArea4 = document.getElementById('buttonarea-4'); //4th button area
const buttonArea5 = document.getElementById('buttonarea-5'); //5th button area

let randColor1 = getRGB(); // for arr
let randColor2 = getRGB(); // for arr
let randColor3 = getRGB(); // for arr
let arr = [0, randColor1, randColor2, randColor3] //for area 3 randomization assignment 


button1.addEventListener('click', event => {
  button1.style.color = getRGB();
  buttonArea2.style.backgroundColor = `#05A8AA`;
});//makes button1 change button one color

  
button2.addEventListener('click', event => {
  button1.style.color = `black`;
  buttonArea2.style.backgroundColor = getRGB();
}); //makes button2 change buttonArea-2's background color


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

const getInput = () => { //gets HSL form inputs and returns a string 'hsl(input,...,input3)'
	let hueInput = document.getElementById('HSL-form').elements[0].value;
	let satInput = document.getElementById('HSL-form').elements[1].value;
	let lightInput = document.getElementById('HSL-form').elements[2].value;
	return `hsl(${hueInput}, ${satInput}%, ${lightInput}%)`;
}
button7.addEventListener('click', event => {
  button1.style.color = `black`;
  buttonArea4.style.backgroundColor = `${getInput()}`;
});

let mS = 25
let hueX = 0
let nIntervId = setInterval(rainbow,mS);


const colorChange = () => {
  if (!nIntervId) {
    nIntervId = setInterval(rainbow,mS);
    button8.innerHTML = 'Stop'
    console.log(nIntervId)
  }
}
const rainbow = () => {
    if (hueX === 359) {
    hueX = 0
    console.log(hueX)
  } else {
    hueX += 1;
    console.log(hueX)
  }
  buttonArea5.style.backgroundColor = `hsl(${hueX}, 50%, 50%)`;
  console.log(buttonArea5.style.backgroundColor)
}

const stopChange = () => {
  clearInterval(nIntervId);
  nIntervId = null;
  button8.innerHTML = buttonArea5.style.backgroundColor
  console.log(nIntervId)
}
button8.addEventListener("click", stopChange);
button9.addEventListener('click', colorChange);
