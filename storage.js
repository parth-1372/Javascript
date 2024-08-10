const input=document.getElementById("myinput");
const btn=document.getElementById("mybtn");
const deletebtn=document.getElementById("delete");

// btn.addEventListener("click",()=>{
// btn.style.backgroundColor="red";
// alert(input.value);
// sessionStorage.setItem("key1",input.value);
// });
// if(sessionStorage.getItem("key1")){
//   alert(sessionStorage.getItem("key1"));
// }
// deletebtn.addEventListener("click",()=>{
// sessionStorage.removeItem("key1");
// //sessionStortage.clear delete all keys
// });
//session storage ek tab ki hoti hai and
//localstorage mese manuallly na hataye tab tak nhi hatati
//storage mai agar hm object banke store krte hai to voh shai se nahi dikhata isliye hm use
//JSON.stringfy(our object) ye object ko string me convert kar deta hai 
//JSON.parse()ye string ko ovject ma convert kar edeta hai
 
btn.addEventListener("click",()=>{
  btn.style.backgroundColor="red";
  alert(input.value);
    localStorage.setItem("key1",input.value);
  });
  if(localStorage.getItem("key1")){
    alert(localStorage.getItem("key1"));
  }
  deletebtn.addEventListener("click",()=>{
    localStorage.removeItem("key1");
  //sessionStortage.clear delete all keys
  });
   