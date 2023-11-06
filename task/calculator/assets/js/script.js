let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        if (e.target.textContent === "C") {
            display.textContent = ' ';
        }
        if (e.target.textContent === "=") {
            display.textContent = eval(display.textContent);
        }
        else {
            display.textContent += e.target.textContent;
        }
    })
}  