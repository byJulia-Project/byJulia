const formulario = document.querySelector(".trabalhe-conosco form")

const inputs = document.querySelectorAll(".trabalhe-conosco form>div>input")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    inputs.forEach(input => {
        if (input.value == "") {

            document.querySelector(".err-" + input.name).classList.remove("invisible")

        } else {
            document.querySelector(".err-" + input.name).classList.add("invisible")

        }
    })
})
const validaTamanho = function (input, minimo, maximo) {
    const {
        value
    } = input
    if (value.length >= minimo && value.length <= maximo) {


        document.querySelector(".err-" + input.name).classList.add("invisible")


    } else {
        document.querySelector(".err-" + input.name).classList.remove("invisible")

    }


}
inputs.forEach(input => {
    input.addEventListener('input', function () {
        switch (input.name) {
            case 'nome':
                validaTamanho(input, 3, 30)
                break
        }
    })
})



