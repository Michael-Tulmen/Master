let addToDo = document.getElementById("addToDo");
let subtractToDo = document.getElementById("subtractToDo");
let inputField = document.getElementById('inputField');

addToDo.addEventListener('click', function (){
    var paragraph=document.createElement('ol')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = ''
    paragraph.addEventListener('click', function (){
     paragraph.style.textDecoration = "line-through";   
    })
})
