// alert("hello fiayaz");
// console.log("this code is running...");
// var a;
// a=prompt("enter the number");
// console.log("your number is "+ a)
// var x;
// x=confirm("are u sure u wan't to do this")
//     if(x){
//         console.log("u are doing this")
//     }
//     else{
//         console.log("u r not d0ing this")
//     }
// document.title="hey im faiyaz";
// var f=4;
// var z="faiyaz";
// console.log(typeof f, typeof z);
// let f=1;
// console.log(z.toUpperCase);
// console.log(z.toLowerCase);
// console.log(z.length);
// a=parseFloat(prompt("Enter the First Number"));
// b=parseFloat(prompt("Enter the Second Number"));
// operator=(prompt("Enter the operator"));
// function faultyCalculator(a,b,operator){
//     let faulty=Math.random();
//    // console.log(faulty);
    
//     if(faulty<0.1){
//         switch(operator){
//             case '+':
//             //add
//                 let x =a>b? (a-b):(b-a);
//                 return x;
            
//             case '*':
//             //multiplication
//                 let y=a+b;
//                 return y;
                
//             case '-':
//             //subtraction
//                 let z=a/b;
//                 return z;
            
//             case '/':
//             //division
//                 let w=a**b;
//                 return w;
                
//             default:
//                 return NaN;
//         }
//     }
//     else{
//         switch(operator){
//             case '-':
//                 let x =a>b? (a-b):(b-a);
            
//             return x;
//             case '+':
//                 let y=a+b;
                
//                 return y;
//             case '/':
//                 let z=a/b;
                
//                 return z;
//             case '*':
//                 let w=a*b;
                
//                 return w;
//             default:
//                 return NaN;
//         }

//     }
// }
// alert(faultyCalculator(a,b,operator));
// let arr=[1,2,3,4,4,9];
// console.log(arr[4]);
// console.log(arr[5]);
// arr[4]=11;
// console.log(arr,typeof arr)
// console.log(arr.join(" and   "))
// arr.delere(3);
// console.log(arr)
// let a=parseFloat(prompt("Enter the number you want the factorial"))
// function factorial(a){
//     for(let i=a-1;i>0;i--){
//         a *=i;
//     }
//     return a;
// }
// alert(factorial(a));
//  console.log("hello devloper!!!!!!")
//  let b=document.getElementsByClassName("box");
//  console.log(b);
//  b[3].style.backgroundcolor="red";
// document.getElementById("colo").style.backgroundColor="green";
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="red";
// })
let button = document.getElementById("btn");
button.addEventListener('dblclick',()=>{
    // alert("hamza ronaldo ")
    document.querySelector(".box").innerHTML="<b>yee u just cllickd me</b> enjoy your click"
})
button.addEventListener('contextmenu',()=>{
    // alert("hamza ronaldo ")
    alert("don't hack us by clicking right of mouse!!!!!!!!")
})
// setInterval(()=>{
//     console.log("boom baan")
//     console.log("rum pum")

// },1000);
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("we are in time out")
//         resolve(758)
//     }, 3000);
// })
async function getdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(786)
            console.log("tantana")
            
        }, 2000);
    })
}
// let data=getdata()
// console.log(data)
// data.then((v)=>{

//     console.log("aaa ja")
// })
// async function abc(){
//     console.log("a");
//     console.log("b");
//     let data= await getdata()
//     console.log("aasadasfsafsa")
// }
async function abc(){
    console.log("b");
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("a");
    let d=await x.json()
    let data= await getdata()
    console.log("aasadasfsafsa")
}
abc()