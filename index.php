<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">

    <!-- Favicon -->
    <link href="logo.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
    <title>Registro de Solicitudes</title>
</head>
<body>
<div class="container p-0 w-50">
        <div class="row m-5" style="align-items:center;">
            <div class="col-md-6 text-center">
                <img src="LogoAcuaValle-150x150.png" alt="" class="img-fluid">
            </div>
        </div>
        <h2 class="mb-5 text-center">Registro de solicitudes de Help Desk</h2>
        <form action="procesar.php" method="post" class="row g-3">
            <div class="col-sm-3">
                <div class="form-floating">
                    <input type="text" class="form-control" name="id_tickers" required>
                    <label for="id_tickers">ID Tickers:</label>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-floating">
                    <?php
                    // Configura la zona horaria de Colombia
                    date_default_timezone_set('America/Bogota');
                    // Obtiene la fecha actual en formato 'd-m-Y'
                    $fechaActual = date('d-m-Y');
                    ?>
                    <input type="text" class="form-control" id="fecha" name="fecha" value="<?php echo $fechaActual; ?>" readonly style="background-color: transparent;">
                    <label for="fecha">Fecha:</label>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-floating">
                    <input type="text" name="hora" class="form-control">
                    <label for="hora">Tiempo Inicio:</label>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-floating">
                    <input type="text" class="form-control" name="tiempo_final">
                    <label for="tiempo_final">Tiempo Final:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <input class="form-control" type="email" name="correo_users" required>
                    <label for="correo_users">Correo de Usuario:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <input type="text" class="form-control" name="nom_users" required>
                    <label for="nom_users">Nombre de Usuario:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <select class="form-select" name="estado_solicitud" required>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En Proceso">En Proceso</option>
                        <option value="Cerrada">Cerrada</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                    <label for="estado_solicitud">Estado de Solicitud:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <select class="form-select" name="nom_tec" required>
                        <option value="Heimdall Rojas">Heimdall Rojas</option>
                        <option value="Denyer Bastidas">Denyer Bastidas</option>
                        <option value="Andres agudelo">Andres agudelo</option>
                        <option value="Michael Asprilla">Michael Asprilla</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                    <label for="nom_tec">Nombre de Técnico:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <input type="text" class="form-control" name="serial" required>
                    <label for="serial">Serial:</label>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-floating">
                    <select class="form-select" name="medio_solicitud" required>
                        <option value="Correo Electrónico">Correo Electrónico</option>
                        <option value="Teléfono">Teléfono</option>
                        <option value="Formulario Web">Formulario Web</option>
                        <option value="Personal">Personal</option>
                        <!-- Agrega más opciones según sea necesario -->
                    </select>
                    <label for="medio_solicitud">Medio de Solicitud:</label>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input class="form-control" name="departamento" required>
                    <label for="departamento">Departamento:</label>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-floating">
                    <input class="form-control" name="tipo_solicitud" required>
                    <label for="tipo_solicitud">Tipo de Solicitud:</label>
                </div>
            </div>
            <div class="col-sm-16">
                <div class="form-floating">
                    <textarea class="form-control" style="height: 100px;" name="solicitud" rows="4" required></textarea>
                    <label for="solicitud">Solicitud:</label>
                </div>
            </div>
            <div class="col-sm-16">
                <div class="form-floating">
                    <textarea class="form-control" style="height: 100px;" name="solucion" rows="4" required></textarea>
                    <label for="solucion">Solución:</label>
                </div>
            </div>
            <div class="col-12 text-center">
                <input class="btn btn-primary py-2" style="width: 100px;" type="submit" value="Guardar">
                <input class="btn btn-primary py-2" style="width: 100px;" type="submit" value="Editar">
            </div>
        </form>
    </div>
  <script src="hora.js"></script>
      <!-- Agrega tus enlaces a scripts JS aquí, si es necesario -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

</body>
</html>