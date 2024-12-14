
function display(){
    event.preventDefault();
 let I1=document.getElementById("input1").value;
 let I2=document.getElementById("input2").value;


let I3=I1*I2;

document.getElementById("input3").innerHTML=I3.toString();

}