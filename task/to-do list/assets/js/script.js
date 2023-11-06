const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".list");

input.focus()
document.body.addEventListener("keydown",function (e) {
  if (e.code==="Enter") {
    input.focus()
    btn.click()
  }
})
btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value === '') {
    alert("Write something")
  }
  else {
    let li = document.createElement("li")
    let close=document.createElement("span")
    let checkbox=document.createElement("span")

    li.innerHTML = input.value;
    close.innerHTML='<i class="fa-regular fa-circle-xmark"></i>'
    checkbox.innerHTML='<input type="checkbox" name="" id="">'
    
   
    input.value=""

    ul.appendChild(li);
    li.appendChild(close);
    li.appendChild(checkbox);

    input.focus()

    close.addEventListener("click",function () {
      li.remove()
    })

    li.addEventListener("click",function toggle () {
      li.classList.toggle("toggle")
    })

    checkbox.addEventListener("click",toggle())
  }

});

const arr=[]
arr.push(li)
localStorage.setItem("todo",JSON.stringify(arr))