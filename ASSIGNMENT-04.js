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
  
  
// P-02

function matchFinder(string1, string2) {

    if (typeof string1 === 'string' && typeof string2 === 'string') {
        const match = string1.includes(string2);
        if (match == true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please enter valid input';
    }
}
const findAnyMatch = matchFinder('john DO', 'ohn')
console.log(findAnyMatch)
const findAnyMatch1 = matchFinder(true, 2)
console.log(findAnyMatch1)

// P-03

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';

    }
    else if(arr[0] == arr[1]){
        return 'equal';
    }
    else{
        if(arr[0] < arr[1]){
            const temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            const output = arr
            return output;
        }
        else{
            return arr;
        }
    }
}

const array = [95, 885]
const result = sortMaker(array)
console.log(result)

// P-04

function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'please provide valid input';
    }
    else{
        const roodNo = obj.street || '__';
        const houseNo = obj.house || '__';
        const society = obj.society || '__';
        
        return roodNo + ',' + houseNo + ',' + society;
    }
}
 const objt = {
    street:10,
    house:'15A',
    society:'Earth Perfect'
} 

const address = findAddress(objt);
console.log(address)

 const objt1 = {
    street:10,
   
} 

const address1 = findAddress(objt1);
console.log(address1)

// P-05

function canPay(changeArray, totalDue) {

    if(changeArray.length == 0){
        return 'Please Enter Elements into array'

    }

    let sum = 0;
    for (i = 0; i < changeArray.length; i++) {
        
        sum = sum + changeArray[i];

    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }


}
const taka = []
const chipsPrice = 10
const youCanGetChips = canPay(taka, chipsPrice)
console.log(youCanGetChips)
const taka1 = [1, 5, 5]
const chipsPrice1 = 10
const youCanGetChips1 = canPay(taka1, chipsPrice1)
console.log(youCanGetChips1)
