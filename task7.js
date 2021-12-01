// IIFE
// iife code will not leak out side, 
//(third person)we can another a5,b5,c5 out side of thr iife and use it
//it will not affect the a5,b5,c5 inside the iife
( function(){
    var a5 = 51;
    var b5 = 90;
    const c5 = 100;
    console.log("hi");
})();
var a5 = 1;
var b5 = 9;
const c5 = 10;
console.log(a5);
console.log(b5);
console.log(c5);

//Arrow function
//declaration of arrow function

const sum = (a, b) =>{
    return a+b;
};
console.log(sum(4,5)); //9

const getName = (student) => {
    const msg = "Welcome, " + student.name;
    return msg;
};
console.log(getName({name: "Rayed"}));  //Welcome, Rayed

//Destructuring - Array & Object

const [b10, b11] = [20, 30];
console.log(b10,b11); //20 30

const [b1, b2, b3] = [20, 30];
console.log(b1,b2,b3); //20 30 undefined

const [b4, b50, b6 = 10] = [20, 30];
//b6 = 10 - this is called default value
console.log(b4,b50,b6); //20 30 10

const [b7, b8, b9 = 10] = [20, 30, 25];
console.log(b7,b8,b9); //20 30 25

const [b101, b111 = 10, b12] = [20, null, 25];
console.log(b101,b111,b12); //20 null 25
// null is not undefined, only for undefined value default value can replaced 
let c1;
console.log(c1);//undefined - if value is not declared it will undefined


// object destructuring

const {name, className} = {className:"zen", name:"Ajith"}; // matches by key value
console.log(name, className); //Ajith zen

//Array destructuring
const [name1, className1] = ["zen", "Ajith"];// matches by Index
console.log(name1, className1);// zen Ajith

const [ , name3, className3] = ["Ajith", ,"zen"];// matches by Index
console.log(name3,className3); //undefined 'zen'

const [h1, h2, h3] = [10, 20, 30, 40];// 40 is ignored
console.log(h1, h2, h3); //10 20 30

//Rest operator

const [h4, h5, ...h6] = [10, 20, 30, 40, 50, 60];
// you can use rest operator at the last variable
console.log(h4, h5, h6); //10 20 (4) [30, 40, 50, 60]

const marks = [4, 5, 200, 7];
console.log(Math.max(marks)); //NaN
console.log(Math.max(...marks)); //200 (spread the values inside max)