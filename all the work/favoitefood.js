var favoritefood = "hotdogs";

if(favoritefood === "fried pickles" || favoritefood === "pepperoni"){
    console.log("Congratulations! You have excellent taste!");
} else {
       console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
}
 
 if (1+1 >5){
     console.log("true");
 } else {
     console.log("lies");
 }
 if (4*5 <=20){
    console.log("true");
} else {
    console.log("lies");
}
if (6-2 >=0){
   console.log("true");
} else {
   console.log("lies");
}
var likedogs = false;

if (likedogs===true){
console.log("you're a dog person");
} 
else{
    console.log("you're cat person");
}
var brithyear = 1999;

if (brithyear >= 1995 && brithyear <= 2012){
    console.log("your part of gen z");
} 
else if (brithyear >= 1977 && brithyear <= 1994){ 
    
console.log("your part of gen y")
}
 userdata = {
     firstname: "dylan",
     lastname: "burgy",
     language: "en" //es,
}

if(userdata.language === "en"){
    console.log(`hello, ${userdata.firstname} ${userdata.lastname}!`)
}
    else if (userdata,language=== "es")
 {
     console.log(`hola, ${userdata.firstname} ${userdata.lastname}!`)
 }
    
 var i = 1;
 while(i < 4){
   console.log(`One of my interests is: hiking ${i}`);
   i++;
   }

var moviesArray = ["Casablanca", "Star Wars", "ships", "The Wizard of Oz", "Die Hard"];

//var i = 0; 
    // i < 5
//while(i < moviesArray.length){
  //console.log(moviesArray[i]);
  //i++;}
  
for(var i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i]);
  }
  
 //for(var i = 0; i <100; i++){
    //console.log(TWEETTWEETTWEET);([100]);
  //}
  
  var favoritefoodsArray = ["Tacos","Pizza","chicken","squid"];

  for(var i = 0; i < favoritefoodsArray.length; i++){
    console.log(favoritefoodsArray[i]);
  
    var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
  }
  
    for(var i = 0; i < cohortOneStudents.length; i++){
        console.log(cohortOneStudents[i]);
    }
        var interestArray = ["painting", "reading", "gaming", "sporting","skywatching"]
  
        for(var i = 0; i < interestArray.length; i++){  
  
      console.log(`one of my interstts is: ${interestArray[i]}`);
  
}

function sayHelloWorld(){
    console.log("I love JavaScript!");
  }
  sayHelloWorld(); 
  sayHelloWorld();
  sayHelloWorld(); 
// Expected output: "Hello, world!"
function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`) }
    greetAFriend("Dwayne");
    
    function greetAFriend(friendName, timeOfDay){
        var greeting;
        if(timeOfDay === "morning"){
          greeting = "Good morning";
        } else if (timeOfDay === "afternoon"){
          greeting = "Good afternoon";
        } else if (timeOfDay === "evening"){
          greeting = "Good evening";
        } else {
          greeting = "Hello";
        }
      var personalGgreeting = `${greeting}, ${friendName}!`;
        console.log(personalGreeting);
      }
      
      greetAFriend("Todd", "evening"); // Good evening, Todd!
      greetAFriend("Jamie", "morning"); // Good morning, Jamie!
      greetAFriend("Hannah", "afternoon"); // Good afternoon, Hannah!
      greetAFriend("Norman", "midnight"); // Hello, Norman!
      
      function makeAPizza(crustType, size, toppingsArray){
        
  var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
     } makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
    console.log() // THIS LIL BOOGER WILL BE UNDEFINED! Right now, the finishedPizza variable ONLY exists inside the function.

   
    var friendName = window.prompt("Friends Name");
    
    
    var YourName = window.prompt("Your Name?");
    var destination = window.prompt("Dream Vacation Destination?");
    
   
   
   
   
   
    //functions
function sayHelloWorld() {
    console.log("Hello, world!");
}


function ilovejavascript() {
    console.log("I love JavaScript")
}

function greetAFriend(friendName) {
    console.log(`Hello, ${friendName}!`)
}


function greetAFriend(friendName, timeOfDay) {
    var greeting;
    if (timeOfDay === "morning") {
        greeting = "Good morning";
    } else if (timeOfDay === "afternoon") {
        greeting = "Good afternoon";
    } else if (timeOfDay === "evening") {
        greeting = "Good evening";
    } else {
        greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
}

function Vacation(YourName, destination) {
    
    var vacationlocation = YourName + " would love to visit " + destination; console.log(vacationlocation)
 }

//
sayHelloWorld();
ilovejavascript();
greetAFriend(friendName);
Vacation(YourName, destination);


//chickentruck
var shelltype = ("soft");
var topping = ("sesonsalt");
function makeataco(shelltype, topping){ 
var finishedtaco = ("Your " + shelltype + "chicken taco with " + topping + " is ready!");
console.log(finishedtaco)
}

