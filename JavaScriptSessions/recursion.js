for(let idx=1;idx<=10;idx++){
    console.log("idx is: "+idx);
}

function printNumber(number){
    console.log("number is: "+number);
    number++;
    if(number <=10){
        printNumber(number);
    }
}

printNumber(1);
// printNumber(2);
// printNumber(3);
// printNumber(4);
// printNumber(5);
// printNumber(6);
// printNumber(7);
// printNumber(8);
// printNumber(9);
// printNumber(10);