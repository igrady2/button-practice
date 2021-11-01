const getRGB = () => {
  const rRandom = Math.floor(Math.random * 255);
  const gRandom = Math.floor(Math.random * 255);
  const bRandom = Math.floor(Math.random * 255);
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