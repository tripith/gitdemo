var listItem = document.querySelector("#items");
//parent node 
//console.log(listItem.parentNode);
//listItem.parentElement.style.backgroundColor = "red";
//console.log(listItem.parentNode.parentNode);

//parentElement 
//behave same as parent node
console.log(listItem.parentElement);
listItem.parentElement.style.backgroundColor = "grey";
console.log(listItem.parentElement.parentElement);

//lastElementChild
listItem.lastElementChild.textContent = "lastchild";

//lastChild
console.log(listItem.lastChild);// showing text 

//create child


//child node 
//console.log(listItem.childNodes);
console.log(listItem.children);
//acess a specfic child
console.log(listItem.children[1].textContent = "hello->text 1");
listItem.children[2].style.backgroundColor = "coral";

//firstChild-->fristElementChild
console.log(listItem.firstElementChild);
listItem.firstElementChild.textContent = "hellochild";

// nextsibling 
//console.log(listItem.nextElementSibling);

//pervious sibling
console.log(listItem.previousElementSibling);
listItem.parentElement.style.background = "red";

//creat Element
  // create a div 
  var newDiv = document.createElement('div');
  //add class
  newDiv.className = 'hellod';
  //add id
  newDiv.id = 'helloD';
  //set attributr
  newDiv.setAttribute('title','hello Div');

  //create text node 
  var newDivText = document.createTextNode('hello world');
// add text to div
  newDiv.appendChild(newDivText);
  var putdiv = document.querySelector("header .container");
  var h1 = document.querySelector('header h1');
  console.log(newDiv);
  newDiv.style.fontSize = "20px";
  putdiv.insertBefore(newDiv, h1);
