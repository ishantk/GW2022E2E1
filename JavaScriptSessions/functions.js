// f(x) = y | y + x*x + 1
// Creating a Function
// A block of statements, which will be executed in a sequence
function f(x){
    let y = x*x + 1;
    console.log("y is: "+y);
}

// Execute/Call/Run a function
f(1)
f(2)
f(5)

function register(name, email, password){
    console.log("Registering..."+email);
    console.log("Thank You "+name+" for Registering with us :)");
}

register("John", "john@example.com", "john123")
register("Fionna", "fionna@example.com", "fionna123")

function bookCab(pickUpLocation, dropLocation, typeOfCab, distance){

    let baseFare = 50;

    if(typeOfCab == 1){ // OLA MINI
        baseFare += 8*distance;
        console.log("OLA MINI Cab Booked from "+pickUpLocation+" to "+dropLocation)
    }else if(typeOfCab == 2){   // OLA SEDAN
        baseFare += 50
        baseFare += 10*distance
        console.log("OLA SEDAN Cab Booked from "+pickUpLocation+" to "+dropLocation)
    }else if(typeOfCab == 3){ // OLA BIKE
        baseFare -= 30;
        baseFare += 3*distance;
        console.log("OLA BIKE Booked from "+pickUpLocation+" to "+dropLocation)
    }else{
        console.log("Please Select the Cab First")
    }

    
    console.log("Please Pay: \u20b9"+baseFare);

}

bookCab("Home", "Work", 1, 5);
bookCab("Work", "Mall", 2, 7);
bookCab("Mall", "Home", 3, 11);