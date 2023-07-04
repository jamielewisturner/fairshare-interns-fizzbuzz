//import {argv} from "node:process"
const prompt = require("prompt-sync")({sigint : true})
// This is our main function

function fizzbuzz(i, options){
    var output = [];
    if (i%3 == 0 && options[3]){
        output.push("Fizz");
    }
    if (i%5 == 0 && options[5]){
        output.push("Buzz");
    }
    if (i%7 == 0 && options[7]){
        output.push("Bang");
    }
    if (i%11 == 0 && options[11]){
        output = ["Bong"];
    }
    if (i%13 == 0 && options[13]){
        var j = 0;
        for ( ; j < output.length; j++){
            if (output[j][0] == "B"){
                break;
            }
        }
        output.splice(j, 0, "Fezz")
    }
    if (i%17 == 0 && options[17]){
        output = output.reverse()
    }
    

    if (output.length == 0){
        output = [i];
    }
    return output.join("");
}

function fizzbuzzAll(N, options) {
    for (var i = 1; i <= N; i++){
        console.log(fizzbuzzHelper(i, options));
    }
}

const options = {}

process.argv.forEach((val, index) => {
    if (index >= 2){
        options[val] = true;
    }
});


// Now, we run the main function:
//const N = prompt("Enter number> ");
//fizzbuzz(N, options);


module.exports = fizzbuzz