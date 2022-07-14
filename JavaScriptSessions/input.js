var prompt = require('prompt-sync')();

let amount = Number(prompt("Enter Amount: "));
let promoCode = prompt("Enter Promo Code: ");

console.log("Amount is: "+amount+" type is: "+typeof amount);
console.log("promoCode is: "+promoCode+" type is: "+typeof promoCode);
