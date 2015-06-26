var ciudades = null
function CargarCiudades()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCiudades.php"
	})
	.done(function( msg ) {
		ciudades = $.parseJSON(msg);
		ciudades.forEach(function(ciu)
		{
			var option = document.createElement('option');
			$(option).attr('id', ciu.codigo);
			$(option).attr('value', ciu.codigo);
			$(option).html(ciu.nombre);
			if(ciu.codigo == 0)
				$(option).css('display','none');
			$('#selectCiudades').append(option);
		});

		if(ciudades.length > 1)
			$('#selectCiudades').show();
		else
			$('#selectCiudades').hide();


		$('#selectCiudades').change(function(e) {
            CambiarCiudad();
        });
  	})
	.fail(function( msg ) {
  	});
}

function CambiarCiudad()
{
	if(document.getElementById('selectCiudades').value > 0)
		$('.selectCiudadesContainer').fadeIn('100ms');
	CargaInicial(false);
}