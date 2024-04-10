(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function cambiarContenido(opcion) {
    var contenido = document.getElementById('contenido');
    if (opcion === 'opcion1') {
      contenido.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <h2 class="mb-4">Bienvenido al Sistema de Búsqueda Documental</h2>
        <p>Este sistema te permite realizar búsquedas en nuestro registro de documentos recibidos de manera rápida y eficiente. diseñado para simplificar y agilizar tus procesos de búsqueda de documentos. Ya sea que estés buscando información sobre un préstamo específico, una solicitud pendiente, o cualquier otra documentación relevante, nuestro sistema está aquí para ayudarte.</p>
        <p>Búsqueda Eficiente: Nuestra plataforma te permite realizar búsquedas precisas y rápidas en nuestra base de datos de documentos. Con solo ingresar la información relevante en los campos de búsqueda y hacer clic en el botón "Buscar", obtendrás los resultados en cuestión de segundos.</p>
        <p>Flexibilidad en los Criterios de Búsqueda: Puedes buscar documentos utilizando una variedad de criterios, como el número de préstamo, el número de solicitud, la identificación del cliente o la fecha de registro. Esto te permite encontrar la información que necesitas de manera rápida y precisa.</p>
        <div class="text-center w-50 h-50 mx-auto">
        <img src="Imagenes/buscarinf.jpg" class="img-fluid">
        </div>

        `;
    } else if (opcion === 'opcion2') {
      contenido.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <div id="busqueda" class="container-fluid text-center mb-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto cf-container">
      <form action="http://localhost:3000/buscar" method="POST" enctype="multipart/form-data">
          <div class="cf-cover">
            <div class="session-title row">
              <h2>BUSQUEDA DOCUMENTAL</h2>
              <p>Realiza busqueda en el registro de documentos recibidos</p>
            </div>
            <div class="form-row row">
              <div class="col-md-6 mt-4">
                <label for=""># Prestamo</label>
                <input id="prest" type="text" required="" placeholder="Ingrese el # de prestamo" class="form-control">
              </div>
              <div class="col-md-6 mt-4">
                <label for="">Solicitud</label>
                <input id="sol" type="text" placeholder="Ingrese el # de solicitud" class="form-control">
              </div>
            </div>
            <div class="form-row row">
              <div class="col-md-12 mt-4">
                <label for="">Identificacion</label>
                <input id="iden" type="text" placeholder="Ingrese la identificacion" class="form-control">
              </div>
            </div>
            <div class="form-row row justify-content-center align-items-center">
              <div class="col-md-6 mt-4 text-center">
                <label for="">Fecha registrado</label>
                <input id="fere" type="date" placeholder="Ingrese la fecha en que se registro" class="form-control">
              </div>
            </div>
            <div class="form-row row justify-content-center align-items-center">
              <div class="col-md-6">
                <button id="buscar" class="btn btn-primary w-100 mt-4">Buscar</button>
              </div>
            </div>
            <div class="mt-4">
          <label>Resultados de búsqueda</label>
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody id="resultadoBusqueda">
            </tbody>
          </table>
        </div>
            <div class="form-row row justify-content-center align-items-center">
              <div class="col-md-4">
                <button id="imp" class="btn btn-primary w-100 mt-4">Imprimir</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      `;
    } else if (opcion === 'opcion3') {
      contenido.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <div id="imagenes" class="container-fluid text-center mb-4">
      <div class="container">
      <form action="http://localhost:3000/buscar" method="POST" enctype="multipart/form-data">
        <div class="row justify-content-center">
          <div class="col-md-6 cf-container">
            <form action="" method="POST" enctype="multipart/form-data">
              <div class="cf-cover">
                <div class="session-title row">
                  <h2>IMAGENES DOCUMENTALES</h2>
                  <p>Ingrese los detalles del préstamo y adjunte una imagen</p>
                </div>
                <div class="form-row row justify-content-center">
                  <div class="col-md-6 text-center">
                    <label for="prestamo">Número de Préstamo</label>
                    <input id="prestamo" type="text" name="prestamo" placeholder="Ingrese el número de préstamo" class="form-control">
                  </div>
                </div>
                <div class="form-row row justify-content-center">
                  <div class="col-md-6 text-center mt-2">
                    <label for="solicitud">Solicitud</label>
                    <input id="solicitud" type="text" name="solicitud" placeholder="Ingrese la solicitud" class="form-control">
                  </div>
                </div>
                <div class="form-row row justify-content-center">
                  <div class="col-md-6 text-center mt-2">
                    <label for="solicitud">Identificacion</label>
                    <input id="Identificacion" type="text" name="solicitud" placeholder="Ingrese la solicitud" class="form-control">
                  </div>
                </div>

                <div class="form-row row justify-content-center align-items-center">
                <div class="col-md-6">
                  <button id="buscarfot" class="btn btn-primary w-100 mt-4">Buscar</button>
                </div>
                </div>
                <table class="table mt-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Resultado</th>
                    </tr>
                  </thead>
                  <tbody id="resultadoBusqueda">
                  </tbody>
              </table>
              
                <div class="form-row row justify-content-center mt-4">
                  <div class="col-md-6 text-center">
                    <label for="foto">Adjuntar Foto</label>
                    <input id="foto" type="file" name="foto" class="form-control-file">
                  </div>
                </div>

                <div class="form-row row justify-content-center mt-4">
                  <div class="col-md-6">
                    <button type="submit" class="btn btn-danger w-100 mt-4">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
      </div>
    </div>
    
      `;
    } else if (opcion === 'opcion4') {
      contenido.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <div id="despacho" class="container-fluid text-center mb-4">
      <div class="container">
      <form action="http://localhost:3000/buscar" method="POST" enctype="multipart/form-data">
        <div class="row justify-content-center">
          <div class="col-md-6 cf-container">
            <form action="" method="POST" enctype="multipart/form-data">
              <div class="cf-cover">
                <div class="session-title row">
                  <h2>REGISTRO DE DESPACHO</h2>
                  <p>Ingrese los detalles del préstamo y para registrar la salida del documento</p>
                </div>
                <!-- Campo para ingresar el número de préstamo -->
                <div class="form-row row justify-content-center">
                  <div class="col-md-6 text-center">
                    <label for="prestamo">Número de Préstamo</label>
                    <input id="prestamo" type="text" name="prestamo" placeholder="Ingrese el número de préstamo" class="form-control">
                  </div>
                </div>
                <!-- Campo para ingresar la solicitud -->
                <div class="form-row row justify-content-center">
                  <div class="col-md-6 text-center">
                    <label for="solicitud">Solicitud</label>
                    <input id="solicitud" type="text" name="solicitud" placeholder="Ingrese la solicitud" class="form-control">
                  </div>
                </div>

                <div class="form-row row justify-content-center align-items-center">
                <div class="col-md-6">
                  <button id="buscarfot" class="btn btn-primary w-100 mt-4">Buscar</button>
                </div>
                </div>
                <table class="table mt-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Resultado</th>
                    </tr>
                  </thead>
                  <tbody id="resultadoBusqueda">
                  </tbody>
              </table>
                <div class="form-row row justify-content-center mt-4">
                  <div class="col-md-6">
                    <button type="submit" class="btn btn-danger w-100 mt-4">Despachado</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
      </div>
    </div>
      `
  }
}
