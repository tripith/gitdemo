//selector 
//const header = document.getElementById("main-header");
//header.style.borderBottom = "solid 12px  #000"; 


//get element by class name 
const item = document.getElementsByClassName("list-group-item");

console.log(item[2]);// 
item[2].style.backgroundColor = "green";
item[2].style.fontWeight = "bold";

for (var i = 0; i < item.length; i++){
    item[i].style.backgroundColor = "grey";
}