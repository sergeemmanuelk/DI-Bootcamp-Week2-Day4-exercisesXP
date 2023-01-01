console.log("*****Exercise 1 : Information*****")

//Part I : function with no parameters

//Create a function called infoAboutMe() that takes no parameter and console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
   //The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    console.log("My name is Serge KONAN, I am 27 years old, my hobbies are tennis")
}

//Call the function
infoAboutMe()

console.log("---------------")

//Part II : function with three parameters

//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    //The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log(`My name is ${personName}, I am ${personAge} years old, my favorite color is ${personFavoriteColor}`)

}

//Call the function twice with the following arguments
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

console.log("*****Exercise 2 : Tips*****")

// Create a function named calculateTip() that takes no parameter

function calculateTip() {
    
    // Inside the function, use prompt to ask John for the amount of the bill
    let amount = prompt("Enter the amount of the bill : ")
    let bill = Number(amount)
    //console.log(typeof(bill))

    let tip = 0
    // If the bill is less than $50, tip 20%
    if (bill < 50) {
        tip = bill * 20/100
    } else if(bill >=50 && bill <= 200) {
        // If the bill is between $50 and $200, tip 15%
        tip = bill * 15/100
    } else {
        // If the bill is more than $200, tip 10%
        tip = bill * 10/100
    }

    const newBill = bill + tip

    // Console.log the tip amount and the final bill (bill + tip)
    console.log(`Tip: $${tip.toFixed(2)}`);
    console.log(`Final bill: $${newBill.toFixed(2)}`);
}

// Call the calculateTip() function.
calculateTip()

console.log("*****Exercise 3 : Find The Numbers Divisible By 23*****")

// Create a function call isDivisible() that takes no parameter
function isDivisible(divisor) {
    let sum = 0
    // In the function, loop through numbers 0 to 500
    for (let i = 0; i <= 500; i++) {
        // Console.log all the numbers divisible by 23
        if (i % divisor === 0) {
            sum += i
            console.log(i)
        }
    }
    //console.log the sum of all numbers that are divisible by 23
    //console.log(`Sum of all numbers that are divisible by 23 : ${sum}`)
    console.log(`All numbers divisible by ${divisor} and their sum is : ${sum}`)
}

isDivisible(3)

console.log("*****Exercise 4 : Shopping List*****")

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"]

// Create a function called myBill() that takes no parameters.
//function myBill() {
    // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
    //for (const iterator of object) {
        
    //}
    // The item must be in stock. (Hint : check out if .. in)

    // If the item is in stock find out the price in the prices object.
//}

// Call the myBill() function.
//myBill()

// Bonus: If the item is in stock, decrease the item’s stock by 1

console.log("*****Exercise 5 : What’s In My Wallet ?*****")

//Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments
function changeEnough(itemPrice, amountOfChange) {

    let sumTotalChange = 0;

    // sum the total amount of change
    sumTotalChange += amountOfChange[0] * 0.25;
    sumTotalChange += amountOfChange[1] * 0.1;
    sumTotalChange += amountOfChange[2] * 0.05;
    sumTotalChange += amountOfChange[3] * 0.01;

    //If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    if (sumTotalChange >= itemPrice) {
        return true
    } else {
        //If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
        return false
    }

}

console.log(changeEnough(4.25, [25, 20, 5, 0]))

console.log("*****Exercise 6 : Vacations Costs*****")

//Define a function called hotelCost()
function hotelCost() {
    //let pattern = /^[0-9]*$/

    // It should ask the user for the number of nights they would like to stay in the hotel
    let numberOfNights = prompt("Please enter the number of nights : ")

    //If the user doesn’t answer or if the answer is not a number, ask again
    while (isNaN(numberOfNights) || numberOfNights == null ) {
        numberOfNights = prompt("Please enter the number of nights : ")
    }

    //The hotel costs $140 per night. The function should return the total price of the hotel
    let cost = 140
    let totalPrice = 0
    
    totalPrice = cost * numberOfNights

    return totalPrice
}

// Define a function called planeRideCost()
function planeRideCost() {
    //let regex = /^[a-zA-Z]+$/
    //It should ask the user for their destination
    let userDestination = prompt("Please enter your destination : ")

    // If the user doesn’t answer or if the answer is not a string, ask again.
    while (typeof userDestination !== "string" || userDestination == null) {
        userDestination = prompt("Please enter your destination : ")
    }

    console.log(`Destination : ${userDestination}`)

    switch (userDestination) {
        case "London":
            return "183$"
        case "Paris":
            return "220$"
        default:
            return "300$"
    }
    
}

//Define a function called rentalCarCost()
function rentalCarCost() {
    // It should ask the user for the number of days they would like to rent the car
    let numberOfDays = prompt("Enter the number of days you want to rent the car : ")

    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (isNaN(numberOfDays) || numberOfDays == null ) {
        numberOfDays = prompt("Enter the number of days you want to rent the car : ")
    }

    // Calculate the cost to rent the car. The car costs $40 everyday
    let dailyCost = 40
    cost = numberOfDays * dailyCost

    // If the user rents a car for more than 10 days, they get a 5% discount
    let discount = 0
    if (numberOfDays > 10) {
        discount = 5/100
    }

    // The function should return the total price of the car rental
    let totalPriceOfCarRent = cost * (1 - discount)

    return totalPriceOfCarRent
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above
function totalVacationCost() {
    const hotelPrice = hotelCost()
    const planePrice = planeRideCost()
    const rentalCarPrice = rentalCarCost()

    console.log("Hotel Price : ", hotelPrice)
    console.log("Plane Price : ", planePrice)
    console.log("Rental Car Price : ", rentalCarPrice)
}

totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

