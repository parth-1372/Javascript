const url="https://randomuser.me/api/";
const h1=document.querySelector("h1");
const fetchdata=()=>{
    fetch(url).then((response)=>response.json())
    .then((data)=>h1.innerText=data.info.seed)
    .catch((error)=>console.log(error))
    .finally(()=>console.log("All Done"))
};
fetchdata();