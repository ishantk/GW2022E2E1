// let idx = 1;
// while(idx <= 5){
//     console.log(idx);
//     idx++;
// }

// Explore do while yourself :)

for(let idx=1;idx<=5;idx++){
    console.log(idx);
}

const whiteSquare = "\u2B1C";
const blackSquare = "\u2B1B";

/*for(let idx=1;idx<=8;idx++){
    console.log(whiteSquare);
}

console.log("~~~~~~~~");

for(let idx=1;idx<=8;idx++){
    console.log(whiteSquare);
}*/

// Nested For loops

for(let row=1;row<=8;row++){
    for(let column=1;column<=8;column++){
        if(column%2 == 0){
            console.log(whiteSquare);
        }else{
            console.log(blackSquare);
        }
        
    }
    console.log();
}
