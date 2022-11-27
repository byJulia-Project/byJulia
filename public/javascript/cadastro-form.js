// const usuario = document.getElementById('user');
// const email = document.getElementById('email-cadastro');
// const errorUserMessage = document.querySelector('form.cadastro-form div.errors');
// const errorPasswordMessage = document.getElementById('password-status');

/* Variaveis Globais */
const formularioCadastro = document.querySelector('form.cadastro-form');
const inputList = document.querySelectorAll('form.cadastro-form input');
let erros = false;
let errosFormulario = false;

/* Funções */
const criaErro = function(input, mensagem, errorType){
  if (errorType == 'form'){
    errosFormulario = true;
  } else {
    erros = true;
  }
  const errorSpan = document.createElement('span');
    errorSpan.classList.add('error');
    errorSpan.innerText = mensagem;
    input.insertAdjacentElement('afterend', errorSpan);
}

const removerErro = function(errorType){
  if (errorType == 'form'){
    errosFormulario = false;
  } else {
    erros = false;
  }
  const errorSpans = document.querySelectorAll('form.cadastro-form span.error');
  errorSpans.forEach(span => span.remove('error'));
}

const validaCaracteres = function(input, min, max){
  const { value } = input;
  if(value.length >= min && value.length <= max){
    return;
  } else {
    criaErro(input, `O campo deve ter no mínimo ${min} e maximo ${max}`, 'input');
  }
};

const validaUsuario = function(input){
  const { value } = input;
  const userRegex = /^[a-zA-Z\-]+$/;
  // retorna um boleano true caso o valor de usuario seja compativel com o RegExp exigido.
  if(userRegex.test(value)){
    return;
  } else {
    criaErro(input, 'Somente letras de a-z ou A-Z', 'input');
  }
};

const confirmaSenha = function(input){
  if(inputList[2].value == input.value){
    return;
  } else {
    criaErro(input, 'As senhas não são as mesmas', 'input');
  }
};

const verificaSenha = function(input){
  const { value } = input;
  let numeros = /([0-9])/,
      alfabeto = /([A-Za-z])/,
      chEspecial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  // Valida de o valor da senha possui as caracteristicas exigidas pelo RegEx.
    if(value.match(numeros) && value.match(alfabeto) && value.match(chEspecial)){
      return;
    } else {
      criaErro(input, 'É necessário caracteres especiais e números', 'input');
    };
};

const senha = document.getElementById('senha-cadastro');
senha.onfocus = () => {
  document.querySelector('form.cadastro-form div.senha-info').style.display = 'block';
};
senha.onblur = () => {
  document.querySelector('form.cadastro-form div.senha-info').style.display = 'none';
}

formularioCadastro.addEventListener('submit', function(event){
  // Array para armazenar erros do Usuario
  // let errosUsuario = [];
  // Array para armazenar erros de senha
  // let errosSenha = [];
  event.preventDefault();
  removerErro('form');
  
  
  // Valida campos obrigatorios;
  inputList.forEach(input => {
    if(!input.value){
      errosFormulario = true;
      criaErro(input, 'Campo Obrigatorio', 'form');
    }
  });
  
  if(!erros && !errosFormulario){
    this.submit();
  };
});

inputList.forEach(input => {
  input.addEventListener('change', function() {
    removerErro('input');
    switch(input.name){
      case 'usuario':
        validaCaracteres(input, 6, 14);
        validaUsuario(input);
      break;

      case 'senha':
        validaCaracteres(input, 6, 20);
        verificaSenha(input);      
      break;

      case 'confirma-senha':
        confirmaSenha(input);
      break;

      default: 
      break;
    };
  });
});