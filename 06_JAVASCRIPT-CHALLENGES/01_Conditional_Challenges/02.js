function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a>b && a>c){
      return a
    }else if(b>=c && b>=a){
      return b
    }else {
      return c
    }
  }

let num= findLargest(43,200,150,)
console.log(num)