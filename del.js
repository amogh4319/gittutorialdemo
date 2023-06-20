console.dir(document)
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//edit event
itemList.addEventListener('click',addItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Get input value for description
var newDescription = document.getElementById('description').value;

// Create new span element for the description
var descriptionSpan = document.createElement('span');
descriptionSpan.className = 'item-description';
descriptionSpan.appendChild(document.createTextNode(newDescription));

// Append the description span to the li element
li.appendChild(descriptionSpan);


  // Create del button element
  var deleteBtn = document.createElement('button');
  
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  var editBtn=document.createElement("button");
  editBtn.className = 'btn btn-danger btn-sm float-right edit';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('EDIT'));
  // Append button to li
  li.appendChild(deleteBtn);
  
  
   li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
   
  

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemName = item.firstChild.textContent.toLowerCase();
      var itemDescription = getDescriptionText(item).toLowerCase();
  
      if (itemName.indexOf(text) !== -1 || itemDescription.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  }
  
  function getDescriptionText(item) {
    var descriptionSpan = item.getElementsByClassName('item-description')[0];
    return descriptionSpan ? descriptionSpan.textContent : '';
  }
  