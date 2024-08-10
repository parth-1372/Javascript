const second=1000, minute=60*second,hour=60*minute,day=24*hour;
const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("h1")
const countertimer=document.querySelector(".countertimer");

 const timerFunction=()=>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0");
    let mm = String(now.getMonth()+1).padStart(2,"0");
    let yyyy = now.getFullYear();
    
     
    let enterDay = prompt("Enter Day").padStart(2,"0");
    let enterMonth = prompt("Enter Month").padStart(2,"0");
   
    now= `${mm}/${dd}/${yyyy}`;
    let targetday=`${enterMonth}/${enterDay}/${yyyy}`;

    if(now>targetday){
        targetday=`${enterMonth}/${enterDay}/${yyyy+1}`;
        console.log(targetday);
    }

 const intervalId= setInterval(() => {
    const timer = new Date(targetday).getTime(); 

    const today = new Date().getTime();
 
    const difference=timer-today;
    
    const leftday=Math.floor(difference/day);
    const lefthour=Math.floor(difference%day/hour);
    const leftminute=Math.floor(difference%hour/minute);
    const leftsecond=Math.floor(difference%minute/second);
     
    daysElement.innerText=leftday;
    hoursElement.innerText=lefthour;
    minutesElement.innerText=leftminute;
    secondsElement.innerText=leftsecond;
    
    if(difference < 0){
        heading.innerText="Times UP "
        countertimer.style.display="none";
        clearInterval(intervalId);
    }
   }, 1000);
 };

 timerFunction();

