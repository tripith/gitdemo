var form = document.getElementById("addForm");

var itemList = document.getElementById('items');
//form submit event
form.addEventListener("submit", addItem);
//form.addEventListener("submit", saveToLocalStorage);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
        e.preventDefault();
        

        //get input value 
        var newItem = document.getElementById("item").value; // value == hello
        
        //create new li element
        var li = document.createElement('li'); // create another li for hello
        //Add class
        li.className = 'list-group-item'; // given ssame class name as li

        //add text node with input value
        li.appendChild(document.createTextNode(newItem)); // add hello into li
        
        var deltBtn =document.createElement('button'); // create a new dlt bunton
        // newly created li consist hello on it

        //add class to del button
//having same class as given to dlt button
        deltBtn.className = 'btn btn-danger btn-sm float-right delete';

        // append text node
       // add dlt text into li
        deltBtn.appendChild(document.createTextNode('X'));

        //append button to li

        li.appendChild(deltBtn);

        //append li to itemlist

        itemList.appendChild(li);

        localStorage.setItem('itemList',newItem);       
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are u sure')){
         var li = e.target.parentElement;
         
         itemList.removeChild(li); 
        
                 
        }
    }

    
}

//function filter 
function filterItems(e){
 //convert text
 var text = e.target.value.toLowerCase();
 //get list
var items = itemList.getElementsByTagName('li');
//convert to array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}

