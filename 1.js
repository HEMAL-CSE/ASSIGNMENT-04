function cubeNumber(number) {

  if(typeof number !== 'number'){
    return 'Invalid';
  }
  else{
    const result = number * number * number;
    // const result = Math.pow(number, 3)
    return result;
  }
}
const cubeOfNumber = cubeNumber(4)
console.log(cubeOfNumber)
const cubeOfNumber1 = cubeNumber('fool')
console.log(cubeOfNumber1)


