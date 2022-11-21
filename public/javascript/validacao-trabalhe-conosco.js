const formulario = document.querySelector(".trabalhe-conosco form")

const inputs = document.querySelectorAll(".trabalhe-conosco form>div>input")

formulario.addEventListener("submit", function(e){
    inputs.forEach(input=>{
        if( input.value == ""){
            e.preventDefault()
            document.querySelector(".err-"+ input.name).classList.remove("invisible")

        }else{
            document.querySelector(".err-"+ input.name).classList.add("invisible")

        }
    })
    const validaTamanho=function(input,minimo,maximo){
        const {
            value
        } =input
        if(value.length >= minimo && value.length <= maximo){
            return
        }else{
            createError(input, `O campo deve ter entre ${minimo} e ${maximo} caracteres`, 'input');
        }
    }
    inputs.forEach(input =>{
        input.addEventListener('alteracao',function(){
            switch(input.name){
                case 'nome':
                    validaTamanho(input,3,30)
                    break
            }
        })
    })
})



