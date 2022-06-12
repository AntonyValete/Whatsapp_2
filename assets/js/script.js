var obj_mensagens = {
    mensagens: []
}

function enviarTexto(id) {
    let campo_msg = document.getElementById(id)

    if (campo_msg.value != "") {
        if (id == "texto-careca") {
            obj_mensagens.mensagens.push({ usuario: "Caio Careca", texto: campo_msg.value })
        } else {
            obj_mensagens.mensagens.push({ usuario: "Caio Cabelo", texto: campo_msg.value })
        }

        campo_msg.value = ""
        localStorage.setItem("obj_mensagens", JSON.stringify(obj_mensagens))
        mostrarMensagens()
    }
}

function enviarEmoji(elementImage, id) {
    if (id == "texto-careca") {
        obj_mensagens.mensagens.push({ usuario: "Caio Careca", img: elementImage.src })
    } else {
        obj_mensagens.mensagens.push({ usuario: "Caio Cabelo", img: elementImage.src })
    }

    localStorage.setItem("obj_mensagens", JSON.stringify(obj_mensagens))
    mostrarMensagens()
}

function mostrarMensagens() {
    let msg_template = document.getElementById("nova-mensagem").content.querySelector("div")
    let log_msg = document.querySelector("main")
    let array_msg = JSON.parse(localStorage.getItem("obj_mensagens")).mensagens

    log_msg.innerHTML = ""

    for (let i = 0; i < array_msg.length; i++) {
        let new_msg = msg_template.cloneNode(true)

        if (array_msg[i].texto != undefined) {
            new_msg.append(document.createElement("p").innerHTML = array_msg[i].texto)
        } else if (array_msg[i].img != undefined) {
            let img = document.createElement("img")
            img.src = array_msg[i].img
            img.className = "img-emotes"
            new_msg.style.width = "10%"
            new_msg.append(img)
        }

        // new_msg.querySelector("p").innerHTML = array_msg[i].texto
        // new_msg.querySelector("img").src = array_msg[i].img

        if (array_msg[i].usuario == "Caio Careca") {
            new_msg.className += " align-direita"
        } else {
            new_msg.className += " align-esquerda"
        }

        log_msg.append(new_msg)

        document.querySelector("main").scrollTop = document.querySelector("main").scrollHeight
    }
}

if (JSON.parse(localStorage.getItem("obj_mensagens")) != null) {
    obj_mensagens = JSON.parse(localStorage.getItem("obj_mensagens"))
}

mostrarMensagens()