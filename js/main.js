var name = prompt('what is your name?')
var old = prompt('how old are you?')
var elTitle = document.querySelector(".title")

if(old > 18) {
    elTitle.textContent = name + " " + "oq yol"
}else if(old < 18) {
    elTitle.textContent = name + " " + "kechirasiz hali yoshsiz"
}else if(old == 18) {
    elTitle.textContent = name + " " + "yaxshi extiyot bolin"
}else{
    elTitle.textContent = "Nimadur xato ketdi"
}