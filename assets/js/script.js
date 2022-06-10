var usuario_careca = {
    nome_usuario: "Caio Careca"
}

var usuario_cabelo = {
    nome_usuario: "Caio Cabelo"
}

function enviarTexto(id) {
    let new_msg = document.getElementById("nova-mensagem").content.querySelector("div").cloneNode(true)
    let campo_msg = document.getElementById(id).value
    let log_msg = document.querySelector("main")

    if (campo_msg.value != "") {
        new_msg.querySelector("p").innerHTML = campo_msg.value
        campo_msg.value = ""

        if (id == "texto-careca") {
            new_msg.className += " align-direita"
        } else {
            new_msg.className += " align-esquerda"
        }

        log_msg.append(new_msg)
    }
}

