// Función que encripta el texto.
function encriptarTexto(texto) {
    let nuevoString = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                nuevoString = nuevoString + "ai";
                break;
            case "e":
                nuevoString = nuevoString + "enter";
                break;
            case "i":
                nuevoString = nuevoString + "imes";
                break;
            case "o":
                nuevoString = nuevoString + "ober";
                break;
            case "u":
                nuevoString = nuevoString + "ufat";
                break;
            default:
                nuevoString = nuevoString + texto[i];
                break;
        }
    }

    return nuevoString;
}
// Función que desencripta el texto.
function desencriptarTexto(texto) {
    let nuevoString = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                if (texto[i + 1] == "i") {
                    nuevoString = nuevoString + "a";
                    i++;
                } else {
                    nuevoString = nuevoString + texto[i];
                }
                break;
            case "e":
                if (texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
                    nuevoString = nuevoString + "e";
                    i = i + 4;
                } else {
                    nuevoString = nuevoString + texto[i];
                }
                break;
            case "i":
                if (texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
                    nuevoString = nuevoString + "i";
                    i = i + 3;
                } else {
                    nuevoString = nuevoString + texto[i];
                }
                break;
            case "o":
                if (texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
                    nuevoString = nuevoString + "o";
                    i = i + 3;
                } else {
                    nuevoString = nuevoString + texto[i];
                }
                break;
            case "u":
                if (texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
                    nuevoString = nuevoString + "u";
                    i = i + 3;
                } else {
                    nuevoString = nuevoString + texto[i];
                }
                break;
            default:
                nuevoString = nuevoString + texto[i];
                break;
        }
    }

    return nuevoString;
}
function comprobarTexto(texto) {
    let estadoTexto = true;
    let tempChar = "";

    for (let i = 0; i < texto.length; i++) {
        tempChar = texto[i];
        if (tempChar != texto[i].toLowerCase()) {
            estadoTexto = false;
            break;
        }
    }
    return estadoTexto;
}
// Función llamada al precionar el botón de "Encriptar".
function textoEntrada() {
    let entrada = document.getElementById("entrada");
    let salida = document.getElementById("salida");
    let texto = entrada.value;
    ocultarImagen();

    if (texto.trim() == "") {
        alert("No ingresó ningún texto para encriptar.");
    }

    let comprobado = comprobarTexto(texto);
    if (comprobado) {
        let resultadoTexto = encriptarTexto(texto);
        salida.value = resultadoTexto;
    } else {
        alert("No debe ingresar mayúsculas.");
    }
}
// Función llamada al precionar el botón de "Desencriptar".
function textoSalida() {
    let salida = document.getElementById("salida");
    let texto = entrada.value;
    ocultarImagen();

    if (texto.trim() == "") {
        alert("No ingresó ningún texto para desencriptar.");
    }

    /* Copiar del portapapeles (No es totalmente necesario).
    navigator.clipboard
        .readText()
        .then((text) => {
            document.getElementById("entrada").value = text;
        })
        .catch((error) => {
            alert("Error al leer del portapapeles:", error);
        });
    */

    let comprobado = comprobarTexto(texto);
    if (comprobado) {
        let resultadoTexto = desencriptarTexto(texto);
        salida.value = resultadoTexto;
    } else {
        alert("No debe ingresar mayúsculas.");
    }
}
// Función llamada al precionar el botón de "Copiar".
function copiarTexto() {
    let salida = document.getElementById("salida");
    let texto = salida.value;

    // Copiar texto al portapapeles.
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            if (texto.trim() == "") {
                alert("No se encontró algún texto para copiar.");
            }
        })
        .catch((error) => {
            alert("Error al copiar el texto:", error);
        });
}
// Funcion para ocultar la imagen de espera.
function ocultarImagen() {
    let salidaActiva = document.getElementById("salida");
    let imagenPasiva = document.getElementById("img-1");
    let listaImagen = document.getElementById("unactivated");

    salidaActiva.style.display = "inline-block";
    imagenPasiva.style.display = "none";
    listaImagen.style.display = "none";
}
