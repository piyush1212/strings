// immutable (diff methods)
// type conversion


// let str = "Piyush"   // Immutable
// console.log(str[0])

// str[0] = "K"

// str = "Abhishek"
// console.log(str)

// console.log(str.replace("P", "K"))
// str2 = str.replace("P", "K")
// console.log(str2)
// console.log(str)

// let str = "tapap"
// let str1 = "papa"
// console.log(str.replace("p", "k"))        // takap

// console.log(str.replaceAll("p", "k"))     // takak



// let str = "rapapah"

// let newStr = ""

// for(let t of str){
//     if(t == "p"){
//         newStr = newStr + "k"
//     }
//     else if( t != "p"){
//         newStr = newStr + t
//     }
// }

// console.log(newStr)




// Find the sum of all digits of n using string concept

let n = 57834747
n = String(n)  // n.toString()

let sum = 0
for(t of n){
    // console.log(t)
    // sum  = sum + Number(t)
    sum = sum + +(t)
}
console.log(sum)