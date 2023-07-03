// This is our main function
function fizzbuzz() {

    for (var i = 1; i <= 100; i++){

        var output = [];
        if (i%3 == 0){
            output.push("Fizz");
        }
        if (i%5 == 0){
            output.push("Buzz");
        }
        if (i%7 == 0){
            output.push("Bang");
        }
        if (i%11 == 0){
            output = ["Bong"];
        }
        if (i%13 == 0){
            var j = 0;
            for ( ; j < output.length; j++){
                if (output[j][0] == "B"){
                    break;
                }
            }
            output.splice(j, 0, "Fezz")
        }
        if (i%17 == 0){
            output = output.reverse()
        }
        

        if (output.length == 0){
            output = [i];
        }
        console.log(output.join(""));
    }


}

// Now, we run the main function:
fizzbuzz();

