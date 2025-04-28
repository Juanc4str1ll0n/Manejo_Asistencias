//JUAN DAVID CASTRILLON Y DIEGO MIGUEL SANCHEZ

function guardarEst(){
    let nombres = document.getElementById("nombres").value;
    let tipoId = document.getElementById("tipoId").value;
    let numId = document.getElementById("numeroId").value;
    let raw = JSON.stringify({
        "nombres": nombres,
        "tipoId": tipoId,
        "numId": numId
    });
}

function modificarEst(){
    let numId = document.getElementById("numeroId").value;
    let nuevoNombre = document.getElementById("nuevoNombre").value;
    let nuevoTipoId = document.getElementById("nuevoTipo").value;
}


