// alert('connected')
// var h = document.createElement("h1")
// var myValue = document.createTextNode("hello people")
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('add',addItem)

var removeItem = document.getElementById('remove')
removeItem.addEventListener('click',removeCheckList)



function addItem(){
var input = document.getElementById('input')
var item = input.value;
ul = document.getElementById('list')
var textNode = document.createTextNode(item)
}




function removeCheckList(event){
    li = ul.children;
    console.log(li)
for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
    
}
}