let contSubM = document.getElementsByClassName("contSubM");
let prueba=document.querySelector("h1");
let activar = true;
function alternarMenuNoticia() {
    if (activar) {
        activarMenu();
        activar = false;
    } else {
        desactivarMenu();
        activar = true;
    }
}
function activarMenu() {
    contSubM[0].style.display = "block";
}
function desactivarMenu() {
    contSubM[0].style.display = "none";
}
function b(){
   prueba.style.color="red"
}