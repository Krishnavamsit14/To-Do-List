function addtolist(){
    var taskname = document.getElementById('taskname').value
    var todotasks = document.getElementById('alltasks')
    var newtodoitem = document.createElement('div')
     var todoname = document.createElement('li')
     todoname.innerHTML = taskname
     var deletebtn = document.createElement('i')
     deletebtn.classList.add('fa')
     deletebtn.classList.add('fa-trash')
     newtodoitem.appendChild(todoname)
     newtodoitem.appendChild(deletebtn)
    todotasks.appendChild(newtodoitem)
}
 var todotasks = document.getElementById('alltasks')
 todotasks.addEventListener('click', deleteitem)
function deleteitem(e){
    const element = e.target
    if(element.classList[0]=='fa'){
        element.parentElement.remove()
    }
}