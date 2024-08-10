const btn=document.querySelector("button");
const printname=()=>{
    let name=(Math.random()*100).toFixed(1);
console.log(`welcome ${name}`);
};
const id=setInterval(printname,2000);
btn.addEventListener("click",()=>{
   clearInterval(id)
});