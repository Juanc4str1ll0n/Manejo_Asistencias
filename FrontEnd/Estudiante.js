//JUAN DAVID CASTRILLON Y DIEGO MIGUEL SANCHEZ
//funcion 1
function guardarEst(){
    
    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    event.preventDefault();
    
    let raw = JSON.stringify({
        "nombres": document.getElementById("nombres").value,
        "tipoId": document.getElementById("tipoId").value,
        "numId": document.getElementById("numeroId").value
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeader,
        body: raw,
        redirect: 'follow'
    };

    fetch("URL", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


//funcion 2
function modificarEst(){

    let raw2 = JSON.stringify({
        "nuevoNombre": document.getElementById("nuevoNombre").value,
        "nuevoTipoId": document.getElementById("nuevoTipo").value,
        "numId": document.getElementById("numeroId").value
    });

   
}


// ller los datos del html, transformarlos y enviarlos al backend