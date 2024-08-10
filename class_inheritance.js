// class MyClass{
//     #d //ab ye private ho gya hai has lagake
//     constructor(v1,v2){
//       this.a=v1;
//       this.b=v2;
//       this.c="Default"
//     }
//     print(){
//         console.log("i am printing");
//     }
//     //Getter property ban gya get keyword lagane se ab ye function nhi hai propertty hai 
//         get getdata(){
//         return this.#d;
//     }
//     set setD(d){
//         this.#d=d;
//     }
// }
// const obj1=new MyClass(1,2);
// obj1.setD=40;
// console.log(obj1.getdata);
// console.log(obj1);
class Electronics{
    #input;
    #output;
    #name;
    constructor(input,output,name){
        this.#input=input;
        this.#output=output;
        this.#name=name;
    }
    print(){
        console.log(`input ${this.#input} output ${this.#output } name ${this.#name}`);
    }
}
class Charger extends Electronics{
    //privte variable parent class k hai usse ham acces nhi kar skte hai
    #plugtype
    constructor(input,output,name,plugtype){
        super(input,output,name);
        this.#plugtype=plugtype;
    }
    print(){
        console.log(`${super.print()} ${this.#plugtype}`)
    }
}
class HardDisk extends Electronics{
    #rpm
    constructor(input,output,name,rpm){
        super(input,output,name);
        this.#rpm=rpm;
    }
}
const hpcharger=new Charger(20,30,"HP charger","C");
console.log(hpcharger.print());