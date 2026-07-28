// 07. Write a program to print the Triangle pattern using nested for loops:

/* Method :1  */
for(let i=1 ; i<=5; i++){
    let row= ""; 
    for(let j=1; j<=i; j++){
        row += "*"
    }
    console.log(row)
}

/* Method 2: Using process.stdout.write("*")  */
for(let i=1; i<=5;i++){ //i=2 ; i=3; 
   
    for(j=1;j<=i;j++){  //j=2 // j<=i => 4<=3 
        // console.log("2")
        process.stdout.write('*')
    }
    console.log('')
}
//  outer loop - start - condition (if true/false)
// if true Run inner Loop -start j=1; j<=i -condition if (true)
//  print process.stdout.write("*") if false( out of loop)























// for(let i=1; i<=5; i++){
//     // console.log("*")
//     let row="1"
//     for(let j=1;j<=i; j++){
//         console.log(row)
//         row =row + "*"
//     }
//     console.log(row)
// }




/* Triangle Using process.stdout.write("") */

// for(let i=1; i<=3; i++){
//     // console.log('*')
//     for(let j=1; j<=i; j++){
//         // process.stdout.write("*")
//     }
//     // console.log("")
// }