const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click",()=>{
    if(texto.style.visibility == "hidden"){
        texto.style.visibility = "visible";
    }else{
        texto.style.visibility = "hidden";
    }
});