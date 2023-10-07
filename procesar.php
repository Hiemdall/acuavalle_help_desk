<?php
// Conexión local
include("conexion.php");

// Recoger datos del formulario

$id_tickers = $_POST['id_tickers'];
$fecha = $_POST['fecha'];
$correo_users = $_POST['correo_users'];
$nom_users = $_POST['nom_users'];
$tipo_solicitud = $_POST['tipo_solicitud'];
$solicitud = $_POST['solicitud'];
$nom_tec = $_POST['nom_tec'];
$solucion = $_POST['solucion'];
$tiempo = $_POST['tiempo'];
$medio_solicitud = $_POST['medio_solicitud'];
$departamento = $_POST['departamento'];
$estado_solicitud = $_POST['estado_solicitud'];

// $fechaConvertida ahora contendrá la fecha en el formato "Y-m-d" (por ejemplo, "2023-10-15")
$fechaConvertida = date('Y-m-d', strtotime($fecha));


// Insertar datos en la base de datos
$sql = "INSERT INTO tb_usuario (id_tickers, fecha, correo_users, nom_users, tipo_solicitud, solicitud, nom_tec, solucion, tiempo, medio_solicitud, departamento, estado_solicitud)
VALUES ('$id_tickers', '$fechaConvertida', '$correo_users', '$nom_users', '$tipo_solicitud','$solicitud', '$nom_tec', '$solucion', '$tiempo', '$medio_solicitud', '$departamento', '$estado_solicitud')";

if ($conn->query($sql) === TRUE) {
    echo "Solicitud enviada con éxito.";
} else {
    echo "Error al enviar la solicitud: " . $conn->error;
}

$conn->close();
?>
