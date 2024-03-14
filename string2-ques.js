

let str = "abhi"   // ihba

// let rev = ""
// for(let i=str.length-1; i>=0; i--){
//     rev = rev + str[i]
// }
// console.log(rev)


let s =""
for(let i=0; i<=str.length-1;i++){
    s = str[i] + s  //a,b,h,i
    // a
    // ba
    // hba
    // ihba
}
console.log(s)
