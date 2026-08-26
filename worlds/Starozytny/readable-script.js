let oscuro = document.getElementById("obscure");
let paragraphs = document.getElementsByTagName("p");
let actual = false


function toggleOscuro(){
    if(actual){
        oscuro.style.visibility = 'hidden';
        oscuro.style.display = 'none';
    } else{
        oscuro.style.visibility = 'visible';
        oscuro.style.display = 'flex';
    }
    actual = !actual;
}
