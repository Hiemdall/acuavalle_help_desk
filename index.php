<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Solicitudes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="card">
    <h2>Registro de solicitudes de Help Desk</h2>
    <form action="procesar.php" method="POST">
        
        <label for="id_tickers">ID Tickers:</label>
        <input type="text" name="id_tickers" required><br><br>
        <?php
        $fechaActual = date('d-m-Y');
        ?>
        <label for="fecha">Fecha:</label>
        <input type="text" id="fecha" name="fecha" value="<?php echo $fechaActual; ?>" class="no-border" readonly style="border: none;  background-color: transparent; outline: none; ">

        <label for="correo_users">Correo de Usuario:</label>
        <input type="email" name="correo_users" required><br><br>

        <label for="nom_users">Nombre de Usuario:</label>
        <input type="text" name="nom_users" required><br><br>

        <label for="tipo_solicitud">Tipo de Solicitud:</label>
        <select name="tipo_solicitud" required>
            <option value="computador no enciende">Computador no enciende</option>
            <option value="red dañada">Red dañada</option>
            <option value="impresora atascada">Impresora atascada</option>
            <!-- Agrega más opciones según sea necesario -->
        </select><br><br>

        <label for="solicitud">Solicitud:</label>
        <textarea name="solicitud" rows="4" required></textarea><br><br>

        <label for="nom_tec">Nombre de Técnico:</label>
        <select name="nom_tec" required>
            <option value="Heimdall Rojas">Heimdall Rojas</option>
            <option value="Denyer Bastidas">Denyer Bastidas</option>
            <option value="Andres">Andres</option>
            <!-- Agrega más opciones según sea necesario -->
        </select><br><br>

        <label for="solucion">Solución:</label>
        <textarea name="solucion" rows="4" required></textarea><br><br>

        <label for="tiempo">Tiempo (min):</label>
        <input type="text" name="tiempo" required><br><br>

        <label for="medio_solicitud">Medio de Solicitud:</label>
        <select name="medio_solicitud" required>
            <option value="Correo Electrónico">Correo Electrónico</option>
            <option value="Teléfono">Teléfono</option>
            <option value="Formulario Web">Formulario Web</option>
            <!-- Agrega más opciones según sea necesario -->
        </select><br><br>

        <label for="departamento">Departamento:</label>
        <select name="departamento" required>
            <option value="Ventas">Ventas</option>
            <option value="Soporte Técnico">Soporte Técnico</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <!-- Agrega más opciones según sea necesario -->
        </select><br><br>

        <label for="estado_solicitud">Estado de Solicitud:</label>
        <select name="estado_solicitud" required>
            <option value="Pendiente">Pendiente</option>
            <option value="En Proceso">En Proceso</option>
            <option value="Cerrada">Cerrada</option>
            <!-- Agrega más opciones según sea necesario -->
        </select><br><br>

        <input type="submit" value="Guardar">
        <input type="submit" value="Editar">
    </form>
  </div>
</body>
</html>