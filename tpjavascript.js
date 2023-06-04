const categoria = document.querySelector("#categoria")
const cantidad = document.querySelector("#cantidad")
const total = document.querySelector("#total")

function resumen(){
    let resultado

    switch (categoria.value) {
        case "Estudiante":
            resultado = (200 - 160) * cantidad.value
            break;
        case "Trainee":
            resultado = (200 - 100) * cantidad.value
            break;5
        case "Junior":
            resultado = (200 - 30) * cantidad.value
            break
        default:
            break;
    }
    total.value = `Total a pagar: $${resultado}`}