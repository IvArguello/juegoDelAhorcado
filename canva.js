var pantalla = document.querySelector(".ahorcado");
var pincel = pantalla.getContext("2d");

pincel.lineWidth = 6;
pincel.lineCap = "round";
pincel.lineJoin = "round";
pincel.fillStyle = "black";

//base horca
pincel.beginPath();
pincel.lineCap = "round";
pincel.moveTo(540,350);
pincel.lineTo(740,350);
pincel.stroke();
pincel.closePath();

function dibujarGuiones(){

    let guiones = 600/palabraSecreta.length;
    
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "black";

    for (let i = 0; i < palabraSecreta.length; i++){

        pincel.moveTo(360 + (guiones*i), 470);
        pincel.lineTo(410 + (guiones*i), 470);
    } 
    pincel.stroke();
    pincel.closePath();
}

function dibujarLetra(index){

    pincel.font = 'bold 40px inter';
    pincel.linewidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = 'black';

    let anchura = 600/palabraSecreta.length;
    pincel.fillText(palabraSecreta[index], 370 + (anchura*index), 450);
    pincel.stroke();
}

function dibujarLetraIncorrecta(letras, intentos){

    pincel.font = '20px inter';
    pincel.linewidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = 'black';
    pincel.fillText(letras, 400 + (40*(10 - intentos)), 520, 40);
}

function dibujarHorca(){
    pincel.linewidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillstyle = 'black';
    pincel.beginPath();

    if (intentos == 9){
        pincel.moveTo (580, 350);
        pincel.lineTo (580, 100);//horca1
    } if(intentos == 8){
        pincel.moveTo (580, 100);
        pincel.lineTo (670, 100); //horca2
    } if (intentos == 7){
        pincel.moveTo (670, 100);
        pincel.lineTo (670, 133); //horca3
    } if (intentos == 6){
        pincel.arc(670,160,25,0,2*Math.PI);//cabeza
    } if (intentos == 5){   
        pincel.moveTo (670, 185);
        pincel.lineTo (670, 280); //tronco
    } if (intentos == 4){
        pincel.moveTo (670, 280);
        pincel.lineTo (710, 330); //pierna derecha
    } if (intentos == 3){
        pincel.moveTo (670, 280);
        pincel.lineTo (630, 330); //pierna izquierda
    } if (intentos == 2){
        pincel.moveTo (670, 185);
        pincel.lineTo (640, 240); //brazo derecho
    } if(intentos == 1){
        pincel.moveTo (670, 185);
        pincel.lineTo (700, 240 ); //brazo izquierdo
    } 
    pincel.stroke();
    pincel.closePath();
}

function finalGanaste(){

    pincel.font = 'bold 25px inter';
    pincel.linewidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "purple";
    pincel.fillText ("GANASTE ¡FELICITACIONES!", 800, 200);
    setTimeout(recargar, 2500);
}

function finalPerdiste(){
    
    pincel.font = 'bold 25px inter';
    pincel.linewidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "purple";
    pincel.fillText ("¡PERDISTE!", 800, 200);
    setTimeout(recargar, 2500);
}