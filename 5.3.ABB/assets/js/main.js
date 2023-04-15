let look = document.querySelector(".look")
let all = document.querySelector(".all")
let exit = document.querySelector(".exit")
let lang = document.querySelector(".lang")
let arrow = document.querySelector(".arrow")
look.onclick = function () {
    all.classList.toggle("active")
}
exit.onclick = function () {
    all.classList.add("active")
}
lang.onclick = function () {
    let language = document.querySelector(".language")
    arrow.classList.toggle("active2")
    language.classList.toggle("d-none")
}

