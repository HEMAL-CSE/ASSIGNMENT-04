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
