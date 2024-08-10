//   const a={
//      name:"Parth",
//      surname:"Mungra",
//  };
//  console.log(a);
//  a.added="Added";
//  console.log(a);
//  b="what is this";
//  console.log(b)
//  b.added="Added";
//  console.log(b);
 //premitive datatypes Number,String,Boolean,null,undefinded

 //Factory Function
//   function wweSuperStar(a,b,quote){
//     return{
//         weight:a,
//         height:b,
//         quotes:()=>{
//             console.log(quote);
//         },
//     };
//  }
//  const temp1=wweSuperStar(20,100,"SAmple 1");
//  const temp2=wweSuperStar(40,180,"SAmpe2");
//  console.log(temp1);

// //Constructor Function
//   function Star(height,weight){
//     this.height=height;
//     this.weight=weight;
//   };
//   const Roman= new Star(265,185);
//   const sethrollins=new Star(250,200);
//   console.log(Roman.constructor);
//   Roman.height=10;
//   sethrollins.weight=10;
//   console.log(Roman,sethrollins);

const arr=[1,2,3,4];
const arr2=new Array(5,6,7,8);
console.log(arr,arr2);
// console.log(arr.constructor,arr2.constructor);
arr.push(45);
arr2.push(80);
console.log(...arr,45,67);//ham ese bhi add kar skte hai element ... esi spread operator kehte hai
/*ye spread operator tab kam ata hai jab hm naya object banate hai and ese purane ka referernce dete hai
esa krne se agr hm naye object mai change karte hai then vo change purane me bhi update ho jata hai esa 
esa na ho islie hm nya object banate samat usko purane ke sah spread operator laga deta hai*/