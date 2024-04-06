const form = document.getElementById("form") 
const inp = document.getElementById("inp") 
const murad = document.querySelector(".murad")


console.log(form);
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const li = document.createElement("li")
    li.classList.add("square")
    li.textContent = inp.value
    murad.appendChild(li)
    inp.value = ""
})





