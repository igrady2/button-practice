const getRBGA = () => {
  const rRandom = Math.floor(Math.random * 255);
  const bRandom = Math.floor(Math.random * 255);
  const gRandom = Math.floor(Math.random * 255);
  return `"rgba(${rRandom},${bRandom},${gRandom}")`
}

const getHSL = (h,s,l) =? {
  return `hsl(${h},${s},${l})`
}