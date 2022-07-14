let menu = [
    {
        name: "Mac Aloo Tikki Burger",
        ratings: 4.5,
        price: 127.5
    },
    {
        name: "Mac Paneer Maharaja Burger",
        ratings: 4.1,
        price: 225.5
    },
    {
        name: "Mac Spicey Paneer Burger",
        ratings: 3.5,
        price: 312.5
    }

];

console.log(menu);
console.log(menu[0]);
console.log(menu[1]['name']);

console.log("MC DONALDS MENU");

for(let idx=0;idx<menu.length;idx++){
    console.log("-----------------------------");
    console.log(menu[idx]['name']);
    console.log(menu[idx].price);
    console.log(menu[idx].ratings);
    console.log("-----------------------------");
    console.log();
}