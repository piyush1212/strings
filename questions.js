// let str = "Ram is dancing"   // sentence

// // str = str + " "    
// let word =""
// for(t of str){
//     // console.log(t)
//     if(t != " "){        // dancing 
//         word = word + t    // dancing
//     }
//     else if(t == " "){
//         console.log(word)   // dancing
//         word = ""
//     }
// }

// console.log(word) 



let str = "       Ram      is          dancing      "   // sentence

// str = str + " "    
let word =""
for(t of str){
    // console.log(t)
    if(t != " "){        // dancing 
        word = word + t    // dancing
    }
    else if(t == " " && word != ""){
        console.log(word)   // dancing
        word = ""
    }
}