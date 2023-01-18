var form = document.getElementById("addForm");

var itemList = document.getElementById('items');
//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener('click',removeItem);

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
       
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are u sure')){
         var li = e.target.parentElement;
         itemList.removeChild(li);
        }
    }
}