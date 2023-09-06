console.log("Hello World External JS");

{
    let newVariable= 16; //blockscope
}
//console.log(newVariable);gives an error as newVariable should be within the blockscope
// Single line comment.It is a dynamically type language

/* Multiple line
comment*/
let firstName;//undefined
var lastName="Lara";// string

const age = 13;
let registration = true;//boolean
let school = null, classDetails = undefined;

console.log(typeof registration);
//Arrays
let studentNames = ["Alice","John","Amina"];//array
console.log(typeof studentNames);
studentNames[1]="Joel";
console.log("The student is called " + studentNames[1]);


//object
//can have properties and methods
let unitDetails={
    unitName: "Web Dev",
    unitTime:"Saturday",
    venue: "Masinga",

    //methods
    getUnitDetails: function(){
        console.log("This is the" + this.unitName + " class. It happens on "+this.unitTime+ " at "+this.venue)

    }

}
//objectname and method to call it.Calling the method of the object
unitDetails.getUnitDetails();
//access object properties
console.log (unitDetails.unitName)

//object 2
let homeDetails={
    //properties
    home:"Madaraka",
    streetAddress:152,
    wifi: true,

    //method
    getWifi: function(){
        console.log("Do you have wifi? "+ this.wifi);
    }

}

// objectName.Property
console.log(homeDetails.home);
//objectName.method()
console.log(homeDetails.getWifi());

//functions
function myFunction(){
    console.log("This is myFunction");
}

myFunction();

function getSum(){
    let num1= 2, num2= 8;
    return num1 + num2;  
}

let mySum= getSum;
console.log("My sum is", mySum);

//function 3 with parameters
function getProduct(num1, num2){
    return num1*num2;
}
console.log("My product is", getProduct(10,52));

//comparison operators: >< == === != >= <=

//conditional statements

let studentMark = 45;
if(studentMark < 50){
    console.log("fail");
}
else if (studentMark== 50){
    console.log("Average");
}
else{
    console.log("Pass");
}

//looping
// for loop
 for (let j = 1; j < 6; j++){
    myFunction();
    //escape characters
    console.log("\n\t");
 }

 //DOM
 let myParagraph = document.getElementById("myParagraph");
console.log(myParagraph)

//getElementsByTagName
//getElementsByClassName
