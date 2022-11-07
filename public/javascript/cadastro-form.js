const usuario = document.getElementById('user');
const email = document.getElementById('email-cadastro');
const senha = document.getElementById('senha-cadastro');
const formularioCadastro = document.querySelector('form.cadastro-form');
const errorMessage = document.querySelector('form.cadastro-form div.errors');

formularioCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
  let erros = [];
  if(!validaUsuario(usuario.value)){
    erros.push("Somente letras de a-z ou A-Z");
  }
  console.log(erros);
});

var validaUsuario = (user) => {
  const userRegex = /^[a-zA-Z\-]+$/
  return userRegex.test(user);
}