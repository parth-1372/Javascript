// const a= new Promise((resolve, reject) => {
//    let b=false
//    if(b){ resolve("Promise Fulfiled");}
//    else{ reject("promises not Fullfilled");}
// });
// // a.then((parameter)=>{
// //     console.log(parameter);
// // },(parameter2)=>{
// //     console.log(parameter2)
// // })
// a.then((parameter) => {
//     console.log(parameter);
// }).catch((error)=>{
//     console.log(error);
// })
const arr = [];
const fetchData = (arr = []) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //arr.push({name:"Parth"});
            if (arr.length > 0) resolve("Data Fetched")
            else reject("Data Rejected");
        }, 2000);
    })
}
fetchData(arr)
    .then((msg) => console.log(msg))//yaha then ki kitni bhi lambi chain bana skte hai
    .catch((msg) => console.log(msg))
    .finally(() => console.log("Finally work here"));