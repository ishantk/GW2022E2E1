var prompt = require('prompt-sync')();

let amount = Number(prompt("Enter Amount: "));
let promoCode = prompt("Enter Promo Code: ");
let pro = false;

console.log("Amount is: "+amount+" type is: "+typeof amount);
console.log("promoCode is: "+promoCode+" type is: "+typeof promoCode);

/*
if(amount >= 149){
    console.log("You can apply Promo Code");
}else{
    console.log("You cannot apply Promo Code");
}*/

/*if(amount >= 149 && promoCode == "TRYNEW"){
    console.log("TRYNEW Promo Code Applied");
    let discount = 0.30 * amount;
    amount -= discount;
    //amount = amount - discount;
    console.log("You got a discount of "+discount);
    console.log("Please Pay "+amount);
}else{
    console.log("Either Amount or Promo Code is Invalid");
}*/

// Nested if/else
/*if(promoCode == "TRYNEW"){
    
    console.log("TRYNEW Promo Code Applied");
   
    if(amount >= 149){
        let discount = 0.30 * amount;
        if(discount > 75){
            discount = 75;
        }
        amount -= discount;
        //amount = amount - discount;
        console.log("You got a discount of "+discount);
        console.log("Please Pay "+amount);
    }else{
        console.log("Amount is Lesser. Please add items worth "+(149-amount)+" more");
    }

}else{
    console.log("Promo Code "+promoCode+" is Invalid");
}
*/

// -> ZOMATO
// -> FLAT 50% OFF on amount > 300
// -> Also extra 10% Off if a user is a Zomato Pro User

if(promoCode == "TRYNEW"){
    
    console.log("TRYNEW Promo Code Applied");
   
    if(amount >= 149){
        let discount = 0.30 * amount;
        if(discount > 75){
            discount = 75;
        }
        amount -= discount;
        //amount = amount - discount;
        console.log("You got a discount of "+discount);
        console.log("Please Pay "+amount);
    }else{
        console.log("Amount is Lesser. Please add items worth "+(149-amount)+" more");
    }

}else if(promoCode == "ZOMATO"){
    console.log("ZOMATO Promo Code Applied");
   
    if(amount > 300){
        let discount = 0.50 * amount;
        if(pro){
            discount += 0.10 * amount;
        }
        amount -= discount;
        //amount = amount - discount;
        console.log("You got a discount of "+discount);
        console.log("Please Pay "+amount);
    }else{
        console.log("Amount is Lesser. Please add items worth "+(149-amount)+" more");
    }
}else{
    console.log("Promo Code "+promoCode+" is Invalid");
}

