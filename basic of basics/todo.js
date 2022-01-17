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
removeItem.addEventListener('click',removeItem)



function addItem(){
    console.log('add button clicked')
}




function removeItem(){
for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
    
}
}