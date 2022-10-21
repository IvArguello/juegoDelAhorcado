var seccion1 = document.querySelector(".sec1");
var seccion2 = document.querySelector(".sec2");
var seccion3 = document.querySelector(".sec3");
var botonCancelar = document.querySelector(".cancelar");
var botonNuevoJuego = document.querySelector(".nuevoJuego");
var botonDesistir = document.querySelector(".desistir");
var main = document.querySelector("main");
var letraInconrrecta = document.querySelector(".palabraIncorrecta");

const palabras = ["CASA","PERRO","GATO","HELADERA","ESPEJO", "CUADERNO", "SILLON", "SILLAS", "RADIO", "TELE", "CELULAR"];
var palabraSecreta = "";
var palabraCorrecta = "";
var tecla = [];
var intentos = 9;
var correctas = 0;
var letrasIncorrectas = [];
var letrasCorrectas = [];

seccion2.style.visibility = "hidden";
seccion3.style.visibility = "hidden";
botonCancelar.addEventListener("click", function(){
    recargar();
});
botonNuevoJuego.addEventListener("click", function(){
    recargar();
});
botonDesistir.addEventListener("click", function(){
    recargar();
});

//sorteo de palabra
function escojerPalabra(){

    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
}

//errores
function letrasEquivocadas(x){

    if(palabraSecreta.indexOf(x) <= 0){
        intentos -= 1;
    }
}

//inicio y control de teclas
function letrasAcertadas(o){
       
    palabraCorrecta += palabraSecreta[o].toUpperCase();
}

function iniciarJuego(){

    seccion3.style.visibility = "unset";
    seccion1.style.visibility = "hidden";
    seccion1.style.height = "0px";
    seccion2.style.height = "0px";

    escojerPalabra();
    dibujarGuiones();
    
    document.onkeydown = (e) =>{
        let letras = e.key.toUpperCase();
        if(tecla.includes(letras)){
            return;
        }
        if(letras.charCodeAt() < 65 || letras.charCodeAt() > 90) {
            return;
        }

        tecla.push(letras);

        if(palabraSecreta.includes(letras)) {
            letrasAcertadas(palabraSecreta.indexOf(letras));
            for (let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letras){
                    dibujarLetra(i);
                    ganador(letras);
                }
            }
        } else {
            dibujarLetraIncorrecta(letras, intentos);
            dibujarHorca();
            perdedor(letras);
        }
} }

//fin del juego. verificar
function ganador(usuario){

    letrasCorrectas.push(usuario.toUpperCase());

    if (letrasCorrectas.length === palabraSecreta.length){
        finalGanaste();
    }
}

function perdedor(usuario){

    letrasIncorrectas.push(usuario.toUpperCase());
    letrasEquivocadas();

    if (letrasIncorrectas.length != palabraSecreta.length){
        if(letraInconrrecta >= intentos){

            finalPerdiste();
        }}
}

function nuevaPalabra(){

    seccion2.style.visibility = "unset";
    seccion3.style.visibility = "hidden";
    seccion1.style.visibility = "hidden";
    seccion1.style.height = "0px";
    seccion3.style.height = "0px";

var palabraNueva = document.querySelector(".palabraUsuario").value;

    if (palabraNueva !== ""){
       palabras.push(palabraNueva.toUpperCase());
       iniciarJuego();
}
}

function recargar(){
    location.reload();
}
