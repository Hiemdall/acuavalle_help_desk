<?php
// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "blockbl5_user_asecoemg";
$password = "OMogq=wm^1u_";
$dbname = "blockbl5_asecoemg";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
mysqli_set_charset($conn, "utf8mb4");
?>