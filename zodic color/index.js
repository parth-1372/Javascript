const body=document.body;
const zodiac=document.getElementById("zodiac");
const changebackgroundcolour=()=>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "taurus":
            body.style.backgroundColor = "green";
            break;
        case "gemini":
            body.style.backgroundColor = "yellow";
            break;
        case "cancer":
            body.style.backgroundColor = "silver";
            break;
        case "leo":
            body.style.backgroundColor = "orange";
            break;
        case "virgo":
            body.style.backgroundColor = "brown";
            break;
        case "libra":
            body.style.backgroundColor = "pink";
            break;
        case "scorpio":
            body.style.backgroundColor = "purple";
            break;
        case "sagittarius":
            body.style.backgroundColor = "blue";
            break;
        case "capricorn":
            body.style.backgroundColor = "black";
            break;
        case "aquarius":
            body.style.backgroundColor = "chocolate";
            break;
        case "pisces":
            body.style.backgroundColor = "magenta";
            break;
        default:
            body.style.backgroundColor = "white";
            break;
    }
    
};