//selector 
//const header = document.getElementById("main-header");
//header.style.borderBottom = "solid 12px  #000"; 


//get element by class name  item = document.querySelector(`.list-group-item`);


var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "blue";

}
for (var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = "green";

}
