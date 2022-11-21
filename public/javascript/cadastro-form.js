const usuario = document.getElementById('user');
const email = document.getElementById('email-cadastro');
const senha = document.getElementById('senha-cadastro');
const formularioCadastro = document.querySelector('form.cadastro-form');
const errorUserMessage = document.querySelector('form.cadastro-form div.errors');
const errorPasswordMessage = document.getElementById('password-status');

formularioCadastro.addEventListener('submit', (event) => {
  // Array para armazenar erros do Usuario
  let errosUsuario = [];
  // Array para armazenar erros de senha
  let errosSenha = [];

  // Se validaUsuario retornar false o operador logico ! converte em true e executa o erro.
  if(!validaUsuario(usuario.value)){
    errosUsuario.push("Somente letras de a-z ou A-Z");
  }
  
  verificaSenha(senha, errosSenha);
  
  if(errosUsuario.length > 0){
    event.preventDefault();
    errorUserMessage.style.display = 'block';
    errosUsuario.forEach(erro => {
    errorUserMessage.innerHTML = '<li>'+erro+'</li>';
  });
  if(errosSenha.length > 0){
    event.preventDefault();
    errorPasswordMessage.style.display = 'block';
    errosSenha.forEach(erro => {
      errorPasswordMessage.innerText = erro;
    })
  }
}
});

/* Funções */
const validaUsuario = (user) => {
  const userRegex = /^[a-zA-Z\-]+$/;
  // retorna um boleano true caso o valor de usuario seja compativel com o RegExp exigido.
  return userRegex.test(user);
};

const verificaSenha = function verificaForcaSenha(senha, array){
  let numeros = /([0-9])/,
      alfabeto = /([A-Za-z])/,
      chEspecial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  if(senha.value.length < 6){
    array.push("Fraco, insira no mínimo 6 caracteres");
  } else{
  // Valida de o valor da senha possui as caracteristicas exigidas pelo RegEx.
    if(senha.value.match(numeros) && senha.value.match(alfabeto) && senha.value.match(chEspecial)){
      array.push("Forte");
    } else {
      array.push("É necessário números, letras e caracteres especiais");
    };
  };
};