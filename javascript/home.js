//Document Object Model
//An object has methods and properties
//getting html elements 
//html elements can be gotten by its id
let myPar= document.getElementById('mypar');
console.log(myPar);
//get by the tag name ,for example,by paragraphs, by the headings
//paragraphs are arrays as they store a list of values
let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs[1]);
