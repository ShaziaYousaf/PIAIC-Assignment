/*var message:string = "hey I am Abu HurairA";
console.log(message)*/
/*
var userName:string = "shazia Yousaf";
console.log(message,userName)
var num1:number = 20;
var num2:number = 1;
var num3:number = 10;
var num4:number = 30;
var num5:number = 5;
var num6:number = 10;
var num7:number = 25;
var num8:number = 44;
var num9:number = 97;
var num10:number = 30;

var result:number=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10; 
console.log(result)*/

/*var num1:number = 20;
var num2:number = 1;
var num3:number = 10;
var num4:number = 30;
var num5:number = 5;
var num6:number = 10;
var num7:number = 25;
var num8:number = 44;
var num9:number = 97;
var num10:number = 30;
var result:number=num1-num2-num3-num4-num5-num6-num7-num8-num9-num10;
console.log(result)


var num1:number = 20;
var num2:number = 1;
var num3:number = 10;
var num4:number = 30;
var num5:number = 5;
var num6:number = 10;
var num7:number = 25;
var num8:number = 44;
var num9:number = 97;
var num10:number = 30;
var result:number=num1*num2*num3*num4*num5*num6*num7*num8*num9*num10;
console.log(result)


var num1:number = 20;
var num2:number = 1;
var num3:number = 10;
var num4:number = 30;
var num5:number = 5;
var num6:number = 10;
var num7:number = 25;
var num8:number = 44;
var num9:number = 97;
var num10:number = 30;
var result:number=num1/num2/num3/num4/num5/num6/num7/num8/num9/num10;
console.log(result)

var num9:number = 97;
var num10:number = 30;
var result:number=num9%num10;
console.log(result)*/


/*var num4:number = 30;
var num6:number = 10;
var num7:number = 25;
var num8:number = 44;
var num9:number = 97;
var num10:number = 30;
var result:number=num4+num6-num7*num8/num9%num10;
console.log(result)

//to find are of rectangle
var length:number = 15;
var width:number = 20;
var output=length*width;
console.log(length*width)

//to find the volume of a cube
var a:number=3;
var area=a*a*a;
console.log(area)*/

//program that shows that a given number is positive ,negative or zero

/*var number:number=-2;

if(number > 0){
    console.log("the number is positive")
}

else if(number<0){
    console.log("the is negative")
}

else{
    console.log("the number is zeo")
}

//write a programe that shows given number is even or odd
var number1:number=5;
if(number==2){console.log("the number is even")

}

else{
    console.log("the number is odd")
}
//write a programe that determines if a person is eligible to vote based on their age
var validAge:number=15;
if(validAge==18){
    console.log("person is eligible")
}
else{
    console.log("the person is not eligible")

}

 var a1:number=10;
 var a2:number=5;
 var a3:number=3;
 var a4:number=2;
 var a5:number=4;
 var a6:number=7;

var response=(((a1+a2)*a3-a4)/(a5%a3)-a6)
console.log(response)*/






//write a program that covert a temprature from celcius to fahrenhit{
  /*  function CtOf(){
        var temp1:number=24;
        var temprature:number=temp1*1.8+32;
        console.log(temprature)
    }
    CtOf()

    function FtoC(){
        var temp10:number=79;
        var temprature1:number=temp10-32*1.8;
        console.log(temprature1)
    }
    FtoC()   

    //write a programe that calculate percentage
    function percentage(){
        let totalMarks:number = 1100;
        let obtainMarks:number =817;
        let result:number =(obtainMarks/totalMarks)*100;
        console.log(result)
    }
percentage()*/

//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
/*function weeks(days:number){
    var converts:number=days%365/7;
    console.log(converts,"week" )
}
weeks(14)
weeks(21)*/



//write a program that calculate the discount for a product basesd on its price. if the price is above 100$ apply 10% discount otherwisw apply 5%.
/*function discount(price:number){
    if(price > 100){
       console.log(price /100 *10, "% discount")   }
else{
       console.log(price /100 *5 ,"% discount")
}
}
discount(100)
//- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
function assignAge(age:number){
    if(age < 12){
        console.log("child")
    }

    else if(age >=13 && age<=19) {
        console.log("Tennager")
    }

    else{
        console.log("Adult")
    } 
}

assignAge(15)

//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function weather(degree:number):void{
    if(degree < 20){
        console.log("it's cold wear cold clothes")
    }
    else if(degree <=20 && degree==28){
        console.log("the weather is normal wear mild clothes")
    }
    else{
        console.log("it's hot outside wear linen or cotton clothes")
    }
}
weather(35)


// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly

function checkDivisibility(number: number){
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number,"is divisible by 3 and 5")
    }
    else if(number % 3 === 0){
        console.log(number,"is divisible bs 3")
    }

    else if(number % 5 === 0){
        console.log(number,"is divisible by 5")
    }

    else{
        console.log("the", number , "not divisible by both")
    }
}
checkDivisibility(55)

// Write a program that checks if the given year is leap year or not.

function leapYear(year :number){
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("it's a leap year")
}
else{
    console.log("it's not a leap year")
}
}
leapYear(2024)

//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

function getDayOfWeek(num: number){
    if (num === 1) {
      console.log("Sunday")
    } else if (num === 2) {
      console.log("monday")
    } else if (num === 3) {
      console.log("tuesday")
    } else if (num === 4) {
      console.log("wednesday")
    } else if (num === 5) {
      console.log("thursday")
    } else if (num === 6) {
      console.log("friday")
    } else if (num === 7) {
      console.log("saturday")
    } else {
      console.log("invalid output")
    }
  }
  
  getDayOfWeek(6)
  
  
  /*Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.*/

/*function calculateBill(units: number){
    var billAmount: number = 0;

if(units > 500) {
    billAmount = units * 8.5 * 1.25;
    console.log(billAmount)
}
else if(units > 200) {
    billAmount = units * 8.5 * 1.15;
    console.log(billAmount)
}
else if(units > 100){
    billAmount = units * 8.5 * 1.1;
    console.log(billAmount)
}
else{
    billAmount = units * 8.5;
    console.log(billAmount)
}
}
calculateBill(540)*/


//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

/*function replaceIndex<T>(array:T[] , index:number , value:T){
array.splice(index,0,value)
return array;

}

let orignalarray = [1,2,3,4,5,6,56];
let modifiedarray= replaceIndex(orignalarray ,9 , 8);
console.log(modifiedarray)*/


// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation





//Write a program that uses a while loop to print the first 25 integers.

var count=1;
while(count <= 25){
    console.log(count)
    count++
}

//Write a program that uses a while loop to print the first 10 even numbers.

var count = 0;
var number = 2;

while (count < 10) {
    console.log(number);
    count++;
    number += 2;
}

//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function calculateFactorial(n: number): number {
    if (n < 0) {
        console.log("Input must be a positive integer")
    }

    let factorial = 1;
    let currentNumber = 1;

    while (currentNumber <= n) {
        factorial *= currentNumber;
        currentNumber++;
    }

    return factorial;
}

var inputNumber = 5;
var result = calculateFactorial(inputNumber);
console.log("The factorial of", inputNumber ,"is" , result)


//Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

function removeNegativeNumbers(numbers: number[]): number[] {
    var positiveNumbers: number[] = [];

    for (var number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }

    return positiveNumbers;
}

var numberArray = [2, -5, 10, -8, 3, 0, -1, 7];
var resultArray = removeNegativeNumbers(numberArray);
console.log("Original Array:", numberArray);
console.log("Array with Negative Numbers Removed:", resultArray);

//Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function parameter(numbers:number[]):number{
    let sum=0;
    let index=0;
    
    while(index<numbers.length){
        sum += numbers[index];
        index++;
    }

    return sum;
}

var arraynumber=[1,2,3,4,5,6];
var sumnumber=parameter(arraynumber);
console.log("the sum is",sumnumber)


//NEW ASSIGNMENT
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function firstNEvennumbers(n:number):void{
let sum=0;
for (let i = 1; i <= n; i++){
    let evenNumber=2*i;
    sum += evenNumber;
}
console.log("The sum of the first" ,n ,"even numbers is:" ,sum)
}
firstNEvennumbers(7)

//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var numbers:number[]=[2,3,4,5,6,7,8,9];

console.log("Even numbers in the array:");
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      console.log(num);
    }
  }

  //Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
  const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddNumbers: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 !== 0) {
    oddNumbers.push(num);
  }
}

console.log("Array with even numbers removed:", oddNumbers);

//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function claculateAreaOfCircle(radius:number):void{
var pi=Math.PI;
var area=pi*radius*radius;
console.log("The area of a circle with radius",radius, "is:",area);
}

claculateAreaOfCircle(4)

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var grades: number[] = [65, 80, 30, 45, 55, 75, 40, 90];

console.log("Original grades:", grades);

for (let i = grades.length - 1; i >= 0; i--) {
  if (grades[i] < 50) {
    grades.splice(i, 1);
  }
}

console.log("Grades after removing failing grades:", grades);

//Write a program that uses a function to find the largest element in an array of numbers.


function findLargestElement(arr: number[]): void {
  if (arr.length === 0) {
    console.log("The array is empty.");
    return;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  console.log("The largest element in the array is:", largest);
}

// Write a program that uses filter to remove all negative numbers from an array of numbers

function removeNegativeNumbers1(numbers: number[]): number[] {
    const positiveNumbers = numbers.filter((num) => num >= 0);
    return positiveNumbers;
}

const numbersArray = [1, -2, 3, -4, 5, -6];
const resultofneg = removeNegativeNumbers(numbersArray);

console.log("Original array:", numbersArray);
console.log("Array with negative numbers removed:", resultofneg);


//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

var originalArray: number[] = [1, 2, 3, 4, 5];
const multipliedArray: number[] = originalArray.map((number) => number * 2);

console.log("Original array:", originalArray);
console.log("New array with numbers multiplied by 2:", multipliedArray);

//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
var filteredFruits: string[] = fruits.filter((fruit) => fruit.length > 5);
console.log("Original array of fruits:", fruits);
console.log("New array with fruits having more than 5 characters:", filteredFruits);


//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

const numburs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaresOfEvenNumbers: number[] = numburs


.filter((number) => number % 2 === 0)
.map((evenNumber) => evenNumber ** 2)


console.log("Original array of numbers:", numbers);
console.log("Squares of even numbers:", squaresOfEvenNumbers);

//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

const temperaturesInCelsius: number[] = [0, 10, 20, 30, 40];
const temperaturesInFahrenheit: number[] = temperaturesInCelsius.map((celsius) => (celsius * 9/5) + 32);

console.log("Temperatures in Celsius:", temperaturesInCelsius);
console.log("Temperatures in Fahrenheit:", temperaturesInFahrenheit);

//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

const numbers4: number[] = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers: number[] = numbers

.filter((number) => number % 2 !== 0) 
.map((oddNumber) => oddNumber * 2); 

console.log("Original array of numbers:", numbers);
console.log("Doubled values of odd numbers:", doubledOddNumbers);

//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

const names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(name + "!");
  });























