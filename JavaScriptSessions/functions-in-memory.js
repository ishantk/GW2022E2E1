
// Global Variable: which is accessible in all functions
let quote = "Search the candle rather than cursing the darkness";

function one(){
    let message = "Welcome to Ola";
    let punchLine = "Book Cabs in No Time";
    let baseFare = 50;
    console.log("one finished");
}

function two(name){
    one();
    console.log("Welcome; "+name);
}

// Execute the function one
//one();

two("John");