/*
    Object Oriented Programming Structure
    -------------------------------------
    1. Object
        Storage Container -> Multi Value Container (Homo/Hetro)

            attributes
            methods

            anything which has lot of data associated to it

    2. Class
        programatically layout
        class Name{
            // define how object will look in memory
        }



    Principle of OOPS
    1. Think about an Object
        Name: attributes
    2. Create its class
        class keyword {} -> program
    3. From the class create real object in memory
        using new operator

    Requirements:
    Mr. John: Create a Food Delivery App
    User must be able to create an account using phone number
    User can place an order
    User can add dishes from a restaurant into cart
    PickUp Person which will pick and drop the order

    User: name, phone, email, gender, city, state, pincode
    Restaurant: name, phone, address, pricePerPerson, reviews, operatingHours
    Order: id, price, dishes, user

    Objects can be Related to each Other
    1. One to One
        1 user has 1 Address
    2. One to Many
        1 user has many addresses
    3. Many to Many
        manu users has many addresses

*/

// 1. Think of an Object
//    MMT: OnewayFlight: 

// 2. Create its class
class OneWayFlight{
  
    // 1. Attriubtes: Property of Object
    fromLocation: string;
    toLocation: string;
    departureDate: string;
    numOfTravellers: number;
    travelClass: string;
  
    // 2. Constructor: Default Initialization
    constructor(){
      this.fromLocation = "New Delhi";
      this.toLocation = "Goa";
      this.departureDate = "15th August, 2022";
      this.numOfTravellers = 2;
      this.travelClass = "Economy";
    }
  
    // 2. Constructor: Parameterized Initialization
    // constructor(fromLocation: string, toLocation: any, departureDate: any, numOfTravellers: number, travelClass: any){
    //   this.fromLocation = fromLocation;
    //   this.toLocation = toLocation;
    //   this.departureDate = departureDate;
    //   this.numOfTravellers = numOfTravellers
    //   this.travelClass = travelClass;
    // }
  
    // Function/Methods -> Property of Object
    setData(fromLocation: string, toLocation: any, departureDate: any, numOfTravellers: number, travelClass: any){
      this.fromLocation = fromLocation;
      this.toLocation = toLocation;
      this.departureDate = departureDate;
      this.numOfTravellers = numOfTravellers
      this.travelClass = travelClass;
    }
  }
  
  class TwoWayFlight extends OneWayFlight{
    returnDate: string;
    constructor(){
        super();
        this.returnDate = "22nd August, 2022";
    }
  }

  //3. Create an Object
  let flight1 = new OneWayFlight();
  flight1.setData("New Delhi", "Chennai", "20th Aug, 2022", 2, "Economy");
  flight1.departureDate = "25th August, 2022";
  
  let flight2 = new OneWayFlight();
  
  let flight3 = flight1;
  
  // flight1, flight2 and flight3 are reference variables and not objects

  let flight4 = new TwoWayFlight();

