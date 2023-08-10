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

