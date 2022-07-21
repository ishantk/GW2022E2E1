
function sortNumbers(numbers){
    
    let n = numbers.length; // 5
    // 0, 1, 2, 3, 4
    for(let i=0;i<n;i++){
        // when i:0, j -> 0, 1, 2, 3
        // when i:1, j -> 0, 1, 2
        // when i:2, j -> 0, 1
        // when i:3, j -> 0
        // whne i:4, j X
        for(let j=0; j<n-i-1; j++){
            //if(numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            //}
        }
    }

}

data = [7, 4, 1, 9, 2];
console.log("DATA BEFORE: "+data);
sortNumbers(data);
console.log("DATA AFTER: "+data);


function sortProducts(data, type){
    
    let n = data.length;
    for(let i=0;i<n;i++){
        for(let j=0; j<n-i-1; j++){

            if(type == 1){
                if(data[j]['price'] > data[j+1]['price']){
                    let temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }else if(type == 2){
                if(data[j]['price'] < data[j+1]['price']){
                    let temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }else{
                console.log("Invalid Sort Option");
            }

            
        }
    }

}

// Array of Objects
let products = [
    {
        name: "iPhone",
        price: 70000
    },
    {
        name: "Fridge",
        price: 30000
    },
    {
        name: "Water Bottle",
        price: 275
    },
    {
        name: "Perfume",
        price: 2750
    },
    {
        name: "Chocolate",
        price: 100
    }
]

console.log("PRODUCTS BEFORE");
console.table(products);

sortProducts(products, 2);

console.log("PRODUCTS AFTER");
console.table(products);