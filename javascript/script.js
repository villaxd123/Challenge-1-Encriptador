// Función que encripta el texto.
function encriptarTexto(texto) {
    // Se cambió el método de encriptado mediante RegExp.
    let regTextEncript = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return regTextEncript;
}
// Función que desencripta el texto.
function desencriptarTexto(texto) {
    // Se cambió el método de desencriptado mediante RegExp
    let regTextDecript = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return regTextDecript;
}
// Función para comprobar que el texto no tenga mayúsculas, números o caracteres especiales.
function comprobarTexto(texto) {
    /*
    RegExp -> comprueba el texto con el patrón ingresado entre los paréntesis.
    [a-z] -> rango de letras permitidas (sólo minúsuclas).
    \s -> comprueba espacios como válidos.
    ^ y $ -> son aserciones que comprueban valores devolviendo un boolean. ^ comprueba al inicio y $ al final.
    + -> cuantificador que comprueba todas las incidencias (1 o más veces el elemento anterior -> x+).
    */
    const pattern = new RegExp(/^[a-z\s]+$/g);
    // test() -> comprueba la coincidencia y devuelve de valor true o false.
    return pattern.test(texto);
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
// Función llamada al precionar el botón de "Encriptar".
function textoEntrada() {
    let entrada = document.getElementById("entrada");
    let salida = document.getElementById("salida");
    let texto = entrada.value;
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para encriptar.");
    }

    let comprobado = comprobarTexto(texto);
    if (comprobado) {
        let resultadoTexto = encriptarTexto(texto);
        salida.value = resultadoTexto;
    } else {
        alert("No debe ingresar mayúsculas, números o caracteres especiales.");
    }
}
// Función llamada al precionar el botón de "Desencriptar".
function textoSalida() {
    let salida = document.getElementById("salida");
    let texto = entrada.value;
    ocultarImagen();

    if (texto.trim() === "") {
        alert("No ingresó ningún texto para desencriptar.");
    }

    let comprobado = comprobarTexto(texto);
    if (comprobado) {
        let resultadoTexto = desencriptarTexto(texto);
        salida.value = resultadoTexto;
    } else {
        alert("No debe ingresar mayúsculas, números o caracteres especiales.");
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
            if (texto.trim() === "") {
                alert("No se encontró algún texto para copiar.");
            }
        })
        .catch((error) => {
            alert("Error al copiar el texto:", error);
        });
}
