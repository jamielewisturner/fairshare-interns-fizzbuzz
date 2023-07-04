const fizzbuzz = require("./fizzbuzz");

const options = {3 : true, 5 : true, 7 : true, 11 : true, 13 : true, 17 : true}

test('If a number is a multiple of 3, print "Fizz" instead of the number', () =>{
    expect(fizzbuzz(3, options)).toBe("Fizz")
});

test('If a number is a multiple of 5, print "Buzz" instead of the number', () =>{
    expect(fizzbuzz(5, options)).toBe("Buzz")
});

test('If a number is a multiple of 7, print "Bang" instead of the number', () =>{
    expect(fizzbuzz(21, options)).toBe("FizzBang")
});

test('If a number is a multiple of 11, print "Bong" instead of the number', () =>{
    expect(fizzbuzz(33, options)).toBe("Bong")
});

test('If a number is a multiple of 13, print "Fezz" instead of the number', () =>{
    expect(fizzbuzz(65, options)).toBe("FezzBuzz")
    expect(fizzbuzz(195, options)).toBe("FizzFezzBuzz")
    expect(fizzbuzz(143, options)).toBe("FezzBong")
});

test('If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed', () =>{
    expect(fizzbuzz(255, options)).toBe("BuzzFizz")
});
