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
var li=document.getElementsByTagName('li');
console.log(li[1]);
li[1].textContent="hello 2";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor="yellow";
for(var i=0;i<li.length;i++){

    li[i].style.backgroundColor="grey";
}
