
const arr= [1,2,3,4,5] // i=1; i=2; i=3


const filterArr= arr.filter((num)=> num!==3)

// const filterArr = arr.filter(function(num){ 
//     console.log(num)
//     return num>3
// })
console.log(`filterArray: ${filterArr}`)
//callbackFuntion defination: function(num){ return num>3} ac callbackFuntion is 

/* Custom filter */

const numbers = [1, 2, 3, 4, 5];

function customFilter(arr,callback) {
    let result=[]
    for(let i=0; i< arr.length; i++){
        if(callback(arr[i],i, arr)){    // element, index, array
            result.push(arr[i])        // i=0 , i=1..i=4
        } 
    }
    return result;
}


const filteredNumbers= customFilter(numbers, (num)=>{
    if(num%2===0){
        return true;
    }else {
        return false;
    }
})
console.log(filteredNumbers)

// const originalFilter= numbers.filter((num)=>num%2===0)
// console.log(`originalFilter: ${originalFilter}`)