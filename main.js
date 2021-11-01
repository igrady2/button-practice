const getRBGA = () => {
  const rRandom = Math.floor(Math.random * 255);
  const bRandom = Math.floor(Math.random * 255);
  const gRandom = Math.floor(Math.random * 255);
  return `rgba(${rRandom},${bRandom},${gRandom})`
}

const getHSL = (h,s,l) => {
  return `hsl(${h},${s},${l})`;
//10
}

const $hInput = document.('#hue');
const $sInput = $('#sat');
const $lInput = $('#light');
const $button1 = $('#button1');
const $buttonArea4 = $('#buttonarea-4');

let color1 = getRBGA();
//20
const executeButton1 = () => {
	$button1.append(`color: ${color1}`);
}


$button1.click(executeButton1);



let colorButton4 = getHSL($hInput.val(),$sInput.val(),$hInput.val());