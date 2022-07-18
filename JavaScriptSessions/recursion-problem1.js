/*data = [10, 20, 30];

let max = data[0];
for(let idx=1; idx<data.length;idx++){
    if(data[idx] > max){
        max = data[idx];
    }
}*/



function getMax(numbers, length){
    // write some code here to return max using recursion

    if(length == 1){
        return numbers[0];
    }else{
        let num = getMax(numbers, length-1); // Recursion

        if(num > numbers[length-1]){
            return num;
        }else{
            return numbers[length-1];
        }
    }

}

data = [10, 20, 30];
let max = getMax(data, data.length);

console.log("Max is: "+max);