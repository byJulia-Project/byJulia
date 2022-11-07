window.addEventListener('load', function(){
  // Seleciona o formulario
  let formulario = document.querySelector('form.trabalhe-conosco');
  // Seleciona o elemento nome
  let nome = document.getElementById('name');
  // Seleciona o elemento email
  let email = document.getElementById('email');

  // Seleciona elemento da div para exibir mensagem
  let ulErrors = document.querySelector('div.errors ul');

  // Seleciona a div
  let errors = document.querySelector('div.errors');

  // Escuta o formulario em busca do evento submit
  formulario.addEventListener('submit', (evento) => {
    // Armazena as mensagem de erro;
    let errorsMessages = [];
    
    if(nome.value.length < 5){
      errorsMessages.push('O campo nome precisa ter no minimo 5 caracteres');     
    };

    if(email.value.length < 10){
      errorsMessages.push('O campo email precisa ter mais de 10 caracteres');
    };

    if(errorsMessages.length > 0){
    // Previne o comportamento padrão do evento, significa que não será enviado.
      evento.preventDefault();
      errors.style.display = 'block';
    }

    for(let i = 0; i < errorsMessages.length;i++){
      ulErrors.innerHTML += '<li>'+errorsMessages[i]+'</li>'
    }
  });
});