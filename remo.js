//selector 
//const header = document.getElementById("main-header");
//header.style.borderBottom = "solid 12px  #000"; 


//get element by class name 
const li = document.getElementsByClassName("list-group-item");
console.log("li");


for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "red";
    li[i].style.fontWeight = "bold";
}

li[2].style.backgroundColor ="green";