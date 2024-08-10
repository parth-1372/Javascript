// console.log(navigator.geolocation.getCurrentPosition((d)=>{
// console.log(d.coords.altitude);
// }))
console.log(history);
const back=()=>{
    // history.back();
    location.assign("https://www.youtube.com/")
}
const btn=document.querySelector("button");
btn.style.backgroundColor="red";
btn.style.width="100px";
btn.style.height="100px";

//this location is of website
console.log(location.host);
console.log(location.port);
console.log(location.pathname);
console.log(location.hostname);

console.log(location.search);