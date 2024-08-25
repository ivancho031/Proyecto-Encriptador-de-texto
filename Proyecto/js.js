let boton_copiar = document.getElementById("boton_copiar");
function encriptar() {
        const textCrypt = document.getElementById('textCrypt').value.toLowerCase();
        let result = "";
        for (let i = 0; i < textCrypt.length; i++) {
            const element = textCrypt[i];
            if (element == "e") {
                result += "enter";
            } else if (element == "i") {
                result += "imes";
            } else if (element == "a") {
                result += "ai";
            } else if (element == "o") {
                result += "ober";
            } else if (element == "u") {
                result += "ufat";
            } else {
                result += element;
            }
        }
        let copy = document.getElementById("copy");
        copy.innerHTML = result;

        document.getElementById('textCrypt').value ="";
        document.getElementById("boton_copiar").classList.remove('hiden');
    }

    function desencriptar() {
        const textEncrypted = document.getElementById('textCrypt').value.toLowerCase();
        let result = "";
        let i = 0;

        while (i < textEncrypted.length) {
            if (textEncrypted.startsWith("enter", i)) {
                result += "e";
                i += 5; 
            } else if (textEncrypted.startsWith("imes", i)) {
                result += "i";
                i += 4; 
            } else if (textEncrypted.startsWith("ai", i)) {
                result += "a";
                i += 2; 
            } else if (textEncrypted.startsWith("ober", i)) {
                result += "o";
                i += 4; 
            } else if (textEncrypted.startsWith("ufat", i)) {
                result += "u";
                i += 4; 
            } else {
                result += textEncrypted[i];
                i += 1;
            }
        }

        let copy = document.getElementById("copy");
        copy.innerHTML = result;
        document.getElementById('textCrypt').value = "";
    }
    function copiar (){
        let copy = document.getElementById("copy").innerText;
        let tempTextarea = document.createElement("textarea");
        tempTextarea.value = copy;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        alert("Texto copiado al portapapeles");
}

    
