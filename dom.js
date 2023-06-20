//console.dir(document);
//console.log(document.doctype);
//console.log(document.title);
//document.title=123;
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);
//console.log(document.all);
//document.all[10].textContent='Hello';
//console.log(document.forms[10]);
//console.dir(document)
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.style.borderBottom="solid 3px #000";
//header.style.borderBottom="solid 3px #000";

//GET ELEMENTBYCLASSNAME
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";
// for(var i=0;i<items.length;i++){

//     items[i].backgroundColor="grey";
// }
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++){
    
//     items[i].style.fontWeight="bold";
// }

//GET ELEMENTBYTAGNAME
// var li=document.getElementsByTagName('li');
// console.log(li[1]);
// li[1].textContent="hello 2";
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="yellow";
// for(var i=0;i<li.length;i++){

//     li[i].style.backgroundColor="grey";
// }

//QUERY SELECTOR
console.dir(document);
// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 4px #"

// var input=document.querySelector("input");
// input.value="Hello world!"

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector(".list-group-item");
// item.style.color="red";

// var lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="blue";

// var secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor="green";

// var thirdItem=document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display="none";

//QUERYSELECTOR ALL//
// var titles=document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent="Hello";

// var odd=document.querySelectorAll("li:nth-child(odd)");
// var even=document.querySelectorAll("li:nth-child(even)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="grey";
//     even[i].style.backgroundColor="blue";
// }

// var items=document.querySelectorAll(".list-group-item");
// console.log(items);
// if(items.length>=2){
// items[1].style.color="green";
// }

// var odd=document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }

var itemList=document.querySelector("#items");
//parent node
// console.log(itemList.parentNode);
// //parentElement
// console.log(itemList.parentElement);

//child nodes
// console.log(itemList.childNodes);
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";
// //first child
// console.log(itemList.firstChild);
// //first element child
// console.log(itemList.firstElementChild);
// //last element child
// console.log(itemList.lastElementChild);
//next sibling
// console.log(itemList.nextSibling);
// //previous element siling
// console.log(itemList.previousElementSibling);

//create element
var newDiv=document.createElement("div");

//add class name
newDiv.className="Hello";

//add id
newDiv.id="hello 1";

//add attribute
newDiv.setAttribute("title","hello div");

//create text node
var newDivText=document.createTextNode("HEllo world!");

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
container.insertBefore(newDiv,h1);
newDiv.style.fontSize="30px";

var firstItem = document.querySelector('#items li:first-child');

// Create a new text node with the "Hello World" text
var helloText = document.createTextNode('HEllo World');

// Insert the new text node before the first item
firstItem.parentNode.insertBefore(helloText, firstItem);


console.log(newDiv);

