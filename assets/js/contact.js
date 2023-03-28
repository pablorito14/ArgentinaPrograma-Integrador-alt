$(document).ready(() => {
  
  $.validator.addMethod("emailValid", function (value, element) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return this.optional(element) || pattern.test(value);
  }, "Formato del email incorrecto");

  $("#contact-form").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        emailValid: true
      },
      confEmail: {
        equalTo: '#email'
      },
      motivo: {
        required: true,
      },
      mensaje: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      nombre: 'El nombre debe tener al menos 3 caracteres',
      email: 'El correo no tiene un formato válido',
      confEmail: 'Los correos no son iguales',
      motivo: 'Debe seleccionar un motivo',
      mensaje: 'La consulta debe tener al menos 10 caracteres'
    }
  });


  // $('#nombre').val('pablo');
  // $('#email').val('pablo@pablo.com')
  // $('#confEmail').val('pablo@pablo.com')
  // // $('#asunto').val('asunto de prueba')
  // $('#mensaje').val('esto es un mensaje para probar') 

  $('#contact-form').on('submit',(event) => {

    $('.spinner-border').show();
    
    event.preventDefault();

    if(!$('#contact-form').valid()){
      $('.spinner-border').hide();
      return
    }

    $('#btn-enviar').attr('disabled',true)
    const consulta = {
      nombre: $('#nombre').val(),
      email: $('#email').val(),
      motivo: $('#motivo').val(),
      mensaje: $('#mensaje').val()
    }

    console.log(consulta)

    setTimeout(() => {
      alert(`Se va a enviar mail a ${consulta.nombre} (${consulta.email}).\nEn consola se puede ver el objeto completo`)
      $('.spinner-border').hide();
      $('#btn-enviar').attr('disabled',false)
    }, 1000);
    
  })
})