function verify(){
    if (window.localStorage.getItem('uname') != null) {
        window.location.href = "pagina2.html"

    }
}

function prox() {
    var nome = document.getElementById("uname").value
    if (nome == "") {
        window.alert("Digite um nome válido")
    }
    else {
        window.localStorage.setItem("uname",nome)
        location.href = "pagina2.html"
    }
}

function redefname() {
    window.localStorage.setItem("uname",null)
    location.href = "index.html"
}