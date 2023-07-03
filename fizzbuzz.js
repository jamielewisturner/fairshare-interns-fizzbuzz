// This is our main function
function fizzbuzz() {


   

    for (var i = 1; i <= 100; i++){

        var output = "";
        if (i%3 == 0){
            output+="Fizz";
        }
        if (i%5 == 0){
            output+="Buzz";
        }
        if (i%7 == 0){
            output+="Bang";
        }
        if (i%11 == 0){
            output="Bong";
        }
        if (i%13 == 0){

            index = output.indexOf('B');
            if (index == -1){
                index = 0;
            }
            output = output.slice(0, index) + "Fezz" + output.slice(index)
        }
        

        if (output == ""){
            output = i;
        }
        console.log(output);
    }


}

// Now, we run the main function:
fizzbuzz();

