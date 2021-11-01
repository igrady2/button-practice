const getRGB = () => {
  let rRandom = Math.floor(Math.random * 255);
  let gRandom = Math.floor(Math.random * 255);
  let bRandom = Math.floor(Math.random * 255);
  return `rgb(${rRandom},${gRandom},${bRandom})`
}

const addListenerToChangeColor = (button,target,att,color1) => {
  return button.addEventListener('click', event => {
    target.style.att = color1
  });
}

export { 
  getRGB,
  addListenerToChangeColor
}