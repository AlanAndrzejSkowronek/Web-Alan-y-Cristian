let contSubM = document.getElementsByClassName("contSubM");
let contMenu=document.querySelector("nav");
let contMenuMobilcss=document.getElementById("contMenuMobilcss");
let subMActivado = true;
let mActivado=true;
let logoMenuMoblilVisible=false;
//subMenu
function alternarSubMenuNoticia() {
    if (subMActivado) {
        activarSubMenu()
    } else {
        desactivarSubMenu()
    }
}
function activarSubMenu() {
    contSubM[0].style.display = "block";
    subMActivado = false;
}
function desactivarSubMenu() {
    contSubM[0].style.display = "none";
    subMActivado=true;
}

//menu
function alternarMenu(){
    if (mActivado) {
        insertarMenuMobilcss()
        activarMenu()
    } else {
        desactivarMenu()
    }

}
function activarMenu(){
    contMenu.style.display = "block";
    mActivado = false;
}
function desactivarMenu(){
    contMenu.style.display = "none";
    mActivado = true;
}
//menuMobil.css
function insertarMenuMobilcss(){
    contMenuMobilcss.innerHTML='<link rel="stylesheet" href="./css/menuMobil.css">';
}
function eliminarMenuMobilcss(){
    contMenuMobilcss.innerHTML='';
}
function logoMenuMobilVisible(){
if ($("#menuMobil").is(":visible")) {
    desactivarMenu()
    insertarMenuMobilcss()
    return true;
  }else{ 
      activarMenu();
    eliminarMenuMobilcss()
     return false;
  }
}
