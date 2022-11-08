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
  //Função explicada abaixo.
  verificaSenha(senha, errosSenha);

  if(errosUsuario.length > 0){
    event.preventDefault();
    errorUserMessage.style.display = 'block';
    errosUsuario.forEach(erro => {
      errorUserMessage.innerHTML = '<li>'+erro+'</li>';
  })
  if(errosSenha.length > 0){
    event.preventDefault();
    errosSenha.forEach(erro => {
      errorPasswordMessage.innerText = erro;
    })
  }
  }
});

// funcao que valida um usuario
var validaUsuario = (user) => {
  // Aceita usuarios de a-z e A-Z
  const userRegex = /^[a-zA-Z\-]+$/
  // retorna um boleano true caso o valor de usuario seja compativel com o RegExp exigido.
  // caso contrario retorna false.
  return userRegex.test(user);
}

var verificaSenha = function verificaForcaSenha(senha, array){
  // Numeros de 0 a 9
  let numeros = /([0-9])/;
  // Letras de A-Z e a-z
  let alfabeto = /([A-Za-z])/;
  // Caracteres especiais
  let chEspecial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

  // Se a senha tiver menos de 6 caracteres, informa o erro.
  if(senha.value.length < 6){
    array.push("Fraco, insira no mínimo 6 caracteres");
  } else{
  // Se a senha tiver, numeros, as letras do alfabeto e caracteres especiais e considerada 'Forte'
    if(senha.value.match(numeros) && senha.value.match(alfabeto) && senha.value.match(chEspecial)){
      array.push("Forte");
    } else {
  // Senão informa ao usuario que e necessario colocar numeros, letras e caracteres especiais.
      array.push("É necessário números, letras e caracteres especiais");
    }
  }
}