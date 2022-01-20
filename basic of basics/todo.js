// alert('connected')
// var h = document.createElement("h1")
// var myValue = document.createTextNode("hello people")
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeItem = document.getElementById('remove')
removeItem.addEventListener('click',removeCheckList)



function addItem(){
    console.log("hey im in!")
    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)

    if (item ==='') {
        return false;
    } else {
        li = document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        var label = document.createElement('label');
        label.setAttribute('for','item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visuals';
        }, 100);
        input.value = '';

    }
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