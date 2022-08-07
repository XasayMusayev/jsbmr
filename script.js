const myName = prompt("Enter your Name");
console.log(myName);
const myWeight = prompt("Enter your weight");
console.log(myWeight);
let myHeight = prompt("Enter your Height");
myHeight=parseFloat(myHeight);
console.log(myHeight);
let sum=0;
if(myHeight>3){
    
    myHeight=myHeight/100;
    sum=myWeight/myHeight/myHeight;

}else{
    
    sum=myWeight/myHeight/myHeight;
}
if( sum<18.5){
    alert("UNDERWEIGHT")
    console.log("UNDERWEIGHT")
}else if(sum>18.5 && sum<24.9 ){
    alert("NORMAL")
    console.log("NORMAL")
}else if(sum>25 && sum<29.9){
    alert("OVERWEIGHT")
    console.log("OVERWEIGHT")
}else if (sum>30 && sum<34.9){
    alert("OBESE")
    console.log("OBESE")
}else{
    alert("EXTREMELY OBESE")
    console.log("EXTREMELY OBESE")
}

