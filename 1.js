/*let x="parth";
alert(x);
console.log(x);
console.log(typeof x);
console.log(`my name is $(x).`)*/
//Lecture 1 
//variabls are 
// 1.let it can be modified anywhere
// 2.var 
// 3.const same as const of c++ it can not be modified
// use of backlit jo string ko concante krta hai and iske andar ka space conunt hota hai 
//yeh backlit ke andar variable use krna hai toh dolla ka sign use krna padta hai.
//cnsole log k andar "typeof" hota hai vph variable ka type batata hai
// 4. bool use of bool is true or false whwere we want condition.




/*lecture 2 typeconversion and string
datatype(variable name)
variable name=variable name.tostring(variable name) second method of typeconersion
string ki properties same hai charatcter array.
method of string
1.indexof(string) give first index of givern string
2.endswith(string) return bool
3.include(string) check complete string
4.substring( num1 num2) from num1 to num2 num2 excluded
5.slice(num1 num2) same as substring
6. spiltt(string) break in many parts from that string gicven
7.replace(string1 str2)
8.length()
9.to lower and upper case
10.substr(num1 num2) num1 is index froim which we start of length stringh of lenght num2
*/
/*this is called dom manipulation
let s="My name is parth"
let heading=document.getElementById("myHeading");
heading.innerText=s;
heading.style.color="red"*/


/* Lecture 3 if else switch and loops
jo alg hai vhi likha hai
=== ye datatype of variable bhi check krta hai 
!== same as above
prompt se ha, input le skte hai 
*/
// let a=prompt("type a number");
// if(a==12){
//     console.log("My name is q")
// }
// else {
//     console.log("My name is w")
// }


/*
lecture 4 arrays and object
iske arrays ke sab element different datatype k bhi ho skte hai withput saying 
size definded krne ki jarurat nhi hai size change bhi kar skte hai badme
methods of array
1.push= add nuber at last
2.pop=last elemented deleted
3.shift=first element uda dega
4.unshift= one element add at 0th position
5.splice(num1, num2)=take input of two number delter the num2 element from array starting from num1
6.slice=return a new array , we should make a new array to store it
7.inculde=return true or false
const array me ham change kar sktehai voh uske data ko change krna hota hai
const objename{} array is same as object in js
*/
// const myobj={
//     name:"parth",
//     surname:"mungra",
//     income:298492
// };
// myobj.abc="def"
// console.log(myobj);


/* lecture 5 function and scoping global and local
function can be store in let const any type of variables and is we return it then to print we need to strore at anything
let means local variable and var means global variable*/


/* DOM manipulatio*/
// console.log(document.getElementsByClassName("useofclass"))
// let useofclassjs=document.getElementsByClassName("useofclass")
// let useofidjs=document.getElementById("useofid")
// useofclassjs[0].textContent=("newone")
// useofidjs.innerHTML=`<div>sdfghn</div>`
// useofidjs.style.backgroundColor="red"
// const mybtn=document.getElementById("mybtn")
// mybtn.style.color="green"
// mybtn.style.border="2px solid red"
// mybtn.style.fontSize="20px"
// mybtn.style.cursor="pointer"
// mybtn.style.padding="3px 50px"
// const h2 = document.createElement("h2");

// function bringh2() {
//     const h2 = document.createElement("h2");
//     h2.innerText = "dhcvnsdj";
//     document.body.append(h2); // Pass the variable h2, not the string "h2"
// }

// mybtn.onclick = bringh2;

// const mybtns = document.querySelectorAll("button");

// function deleteh2() {
//     const existingH2 = document.querySelector("h2");
//     if (existingH2) {
//         existingH2.remove();
//     }
// }

// mybtns[1].onclick = deleteh2;


/* Arrow function
array inbuilt have us of arrow function
syntx const myfunction(a,b,c)=>{}*/
// const arr=[2,4,6,8,10];
// const result=arr.find((value,index)=>{
//     if(value>4){
//        return value;
//     }
// }); return one element filter return array or say more then one elemnt
// const result=arr.filter((value,index)=>{
//     if(value>4){
//        return value;
//     }
// });
// const result=arr.every((value,index)=>{
//    return value>1;
// });
// const result=arr.some((value,index)=>{
//     return value>10;
//  });
// console.log(result)
// for(let value of arr){
//     console.log(value-2)
// }
// arr.forEach((value,index)=>{
// console.log(value)
// console.log(index)
// });
// const result=arr.map((value,index)=>{
//     return value + 3;
//  }); this is use to return complete new array whih changed element as per the condition givern by you
// const result=arr.reduce((perivousvalue,currentvalue,arr)=>{
//         return perivousvalue+currentvalue
//      }); 
//  console.log(result)