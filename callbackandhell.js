//here in this case highorder function is sum function 
//and displaysum and alert is passes as an argument it is called callbaack function
// function sum(a,b,c){
//   const result=a+b;
//   c(result);
// }
// function displaysum(result){
//     const h1=document.querySelector("h1");
//     h1.innerText=result;
// }
// sum(4,5,alert);
// sum(4,5,displaysum);
//foreach is high order functin because it need a function as an argument

const productslist=[];
const product={};

const fetchdata=(callback)=>{
  setTimeout((callback)=>{
      productslist.push(
        {
        name:"Product1",
        id:"1",
        },
        {
          name:"Product2",
          id:"2",
        },
        {
          name:"Product3",
          id:"3",
        }
      );
      console.log("After fetching")
      callback()
      console.log(productslist);
  },4000,callback);
}
console.log(productslist);

const displayproduct=()=>{
  setTimeout(()=>{
   for (let i = 0; i < productslist.length; i++) {
    const element =productslist[i];
    
    const p=document.createElement("p");
    p.innerText=productslist[i].name;
    document.body.append(p);
   }
   console.log("After Displaying")
  },1000)
}
fetchdata(displayproduct);