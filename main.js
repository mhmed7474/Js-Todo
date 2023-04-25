var myForm = document.querySelector('.myForm');

var myText = document.querySelector('.myText');

var myBtn = document.querySelector('.btn')

var myResult = document.querySelector('.myResult');

var mainDiv = document.querySelector('.main');

document.addEventListener("DOMContentLoaded" , () => {
    myBtn.disabled = true ; 
    myText.addEventListener('keyup', () => {
        if(myText.value.length > 5){
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    })
})

myForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    var myToDo = `
    <li class="myLi">
    ${myText.value}
    <button class="del">X</button>
    </li>`;
    myResult.innerHTML += myToDo ;
    var myLi = document.querySelectorAll('.myLi');
    var delBtn = document.querySelectorAll('.del');
mainDiv.addEventListener("click" , (s) => {
    if (s.target.className == "del") {
        s.target.parentElement.remove();
    }
    })
    myText.value = '';
        })


