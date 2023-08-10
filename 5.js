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
