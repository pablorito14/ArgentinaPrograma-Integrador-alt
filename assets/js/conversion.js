moment.locale('es', {
  months: ['enero','febrero','marzo','abril','mayo','junio','julio',
            'agosto','septiembre','octubre','noviembre','diciembre'],
  weekdays: ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
});
$(document).ready(() => {

  const impPais = 30; // impuesto pais = 30%
  const impGan = 45; // percepcion adelanto de ganancias 45%
  const impCatar = 25; // impuesto catar para gastos mayores a 300 dolares

  // const fechaActual = moment()
  const fechaInicio = moment().subtract(4,'days').format('YYYY-MM-DD');
  const fechaFinal = moment().add(1,'days').format('YYYY-MM-DD');

  let cotizacionDolar = 0;
  // let diaCotizacion = '';

  $.ajax({
    url: `https://mercados.ambito.com//dolar/oficial
          /historico-general/${fechaInicio}/${fechaFinal}`,
    type: 'GET',
    dataType: 'json',
  })
  .done((respuesta) => {
    $('#cargando').slideUp();
    
    cotizacionDolar = respuesta.at(1).at(2)
    cotizacionDolar = parseFloat(cotizacionDolar.replace(',','.'))
    $('#cotizacion-dolar').text(cotizacionDolar)

    const fecha = respuesta.at(1).at(0).split('/').reverse().join('-');

    if(moment().isSame(fecha,'day')){
      $('#dia-cotizacion').text('actual')
    } else {
      $('#dia-cotizacion').text(`del ${moment(fecha).format('dddd DD [de] MMMM ')}`)
    }

    
  })
  .fail(() => {
    console.log(error);
  })

  $('#dolares').on('keyup',(event) => {
    const dolares = $('#dolares').val();
    $('#dolares').val(dolares.replace(',','.'))
  })

  $('#conversion-form').on('submit',(event) => {
    event.preventDefault();
    $('#dolares').removeClass('is-invalid');
    $('#process').show();
    
    const dolares = parseFloat($('#dolares').val())
    if(isNaN(dolares)){
      $('#dolares').addClass('is-invalid')
      $('#process').hide(); 
      return;
    }

    const valorOficial = dolares * cotizacionDolar;
    const impPaisVal = valorOficial * (impPais/100);
    const adGananciasVal = valorOficial * (impGan/100);
    const impCatarVal = (dolares >= 300) ? valorOficial * (impCatar/100) : 0;

    const total = valorOficial + impPaisVal + adGananciasVal + impCatarVal;
    $('#valor-oficial').text(valorOficial.toFixed(2))
    $('#imp-pais').text(impPaisVal.toFixed(2));
    $('#ad-ganancias').text(adGananciasVal.toFixed(2));
    $('#imp-catar').text(impCatarVal.toFixed(2))


    $('#resultado-dolares').text(dolares)
    $('#resultado-pesos').text(total.toFixed(2))
    setTimeout(() => {
      $('#process').hide();  
      $('#resultado').slideDown();
    }, 1000);
  })
})

