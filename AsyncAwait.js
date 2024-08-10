const url="https://catfact.ninja/fact";
const h1=document.querySelector("h1");


const fetchdata= async ()=>{
    try {
        // throw new Error("Meri marzi wala error")
        const response=await fetch(url);
        const data=await response.json();
        h1.innerText=data.fact;
    } catch (error) {
        console.log(error.message);
    }
    finally{
        console.log("Finally process Done")
    }
}
fetchdata();
// console.log("a");

// setTimeout(() => {
//     console.log("timeout")
// }, 0);
// Promise.resolve().then(()=>console.log("Promise"));



// console.log("z");

// custom error
// const e=new Error("Error checking");
// e.name="hehe";
// console.log(e);