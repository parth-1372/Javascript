const heading=document.getElementById("heading");
const box1=document.getElementById("box1");
const mybtn=document.getElementById("mybtn");

mybtn.addEventListener("mousehover",()=>{
box1.style.backgroundColor="red";
});
mybtn.addEventListener("pointerleave",()=>{
    box1.style.backgroundColor="green";
});
mybtn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});
addEventListener("click",(e)=>{
  mybtn.style.fontSize="50px";
  console.log(e.clientX);
  console.log(e.clientY);
});
box1.removeEventListener
// 
