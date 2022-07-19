var prompt = require('prompt-sync')();

let conversation1 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 22222',
    messages: [
        {
            text: 'hello',
            sender: '+91 99999 11111',
            timeStamp: '19th July 2022, 16:00',
            status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
        },
        {
            text: 'Hi, How are you',
            sender: '+91 99999 22222',
            timeStamp: '19th July 2022, 16:10',
            status: 3 // 1 -> sent, 2 -> delivered, 3 -> seen
        },

    ]
}

let conversation2 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 33333',
    messages: [
        {
            text: 'Aur Bhai. Kya hall ?',
            sender: '+91 99999 11111',
            timeStamp: '19th July 2022, 16:00',
            status: 2 // 1 -> sent, 2 -> delivered, 3 -> seen
        },
        {
            text: 'Badhiya. Tum Sunao ?',
            sender: '+91 99999 33333',
            timeStamp: '20th July 2022, 12:15',
            status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
        },

    ]
}

let conversation3 = {
    contact1: '+91 99999 11111',
    contact2: '+91 88888 44444',
    messages: [
        {
            text: 'JavaScript Shuru Ho Gayi ?',
            sender: '+91 99999 11111',
            timeStamp: '20th July 2022, 13:00',
            status: 2 // 1 -> sent, 2 -> delivered, 3 -> seen
        },
        {
            text: 'Haan Bhai, Recursion thoda takleef de raha hai',
            sender: '+91 88888 44444',
            timeStamp: '21th July 2022, 19:35',
            status: 3 // 1 -> sent, 2 -> delivered, 3 -> seen
        },

    ]
}

// Array of Objects
//                  0             1             2
myWhatsApp = [conversation1, conversation3, conversation2]

console.table(myWhatsApp)

for(let idx=0;idx<myWhatsApp.length;idx++){
    console.log(myWhatsApp[idx]);
}

function filterMessages(filter){
    console.log("Filtering Messages by "+filter);
    for(let i=0;i<myWhatsApp.length;i++){
        for(let data of myWhatsApp[i]['messages']){
            console.log(data[filter]);
        }
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
       
    }
}

function searchBySender(senderNumber){
    console.log("Searching Messages by "+senderNumber);
    // For Each Loop
    for(let conversation of myWhatsApp){
        for(let data of conversation['messages']){
            //if(data['sender'] == senderNumber){
            if(data['sender'].includes(senderNumber)){
                console.log(data['text']);
                console.log(data['sender']);
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~")
            }
            
        }
    }
}


function sortMessagebasedOnLength(){
    console.log("Sorting Messages By Length ");
    // https://visualgo.net/en/sorting
    // Bubble Sort
    
    // Create an array of messages first and push the data into it
    let messages = [];
    for(let conversation of myWhatsApp){
        for(let data of conversation['messages']){
            messages.push(data['text']);
        }
    }
    console.table(messages);

    // Implement Buble Sort
}


// Create a menu driven program
let choice = "yes";

while(choice == "yes"){
    
    options = ["Filter Messages", "Search By Sender Number", "Sort By Message Length"];
    console.table(options);
    let option = Number(prompt("Select an Option (0, 1 or 2): "));

    if(option == 0){
        let filter = prompt("Give a Filter (text | sender | timeStamp | status )");
        filterMessages(filter);
    }else if(option == 1){
        let senderNumber = prompt("Enter Sender Number: ")
        searchBySender(senderNumber);
    }else if(option == 2){
        sortMessagebasedOnLength();
    }else{
        console.log("Invalid Option")
    }

    choice = prompt("type yes to continue or quit to stop: ")

}