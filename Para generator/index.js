const input=document.getElementById("numOfWords");
const container=document.querySelector(".container");
let numOfWords;
const generateword = (n) => {
 let text=""
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
 for(let i=0;i<n;++i){
    const random=(Math.random()*26).toFixed(0);
    text+=letters[random];
 }
 console.log(text);
 return text;
};
let getdata=()=>{
numOfWords=Number(input.value); 

const para=document.createElement("p");


let data="";
for(let i=0; i<numOfWords ;++i){
let num=(Math.random()*15).toFixed(0);
data+=generateword(num);
data+=" ";
}

para.innerText=data;
 para.setAttribute("class","paras");
container.append(para);
};
