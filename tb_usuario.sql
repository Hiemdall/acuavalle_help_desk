-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2023 a las 01:39:54
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_acuavalle`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id` int(11) NOT NULL,
  `id_tickers` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `correo_users` varchar(50) NOT NULL,
  `nom_users` varchar(50) NOT NULL,
  `tipo_solicitud` varchar(50) NOT NULL,
  `solicitud` text NOT NULL,
  `nom_tec` varchar(50) NOT NULL,
  `solucion` text NOT NULL,
  `serial` varchar(50) NOT NULL,
  `tiempo_inicio` varchar(10) NOT NULL,
  `tiempo_final` varchar(10) NOT NULL,
  `medio_solicitud` varchar(50) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `estado_solicitud` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tb_usuario`
--

INSERT INTO `tb_usuario` (`id`, `id_tickers`, `fecha`, `correo_users`, `nom_users`, `tipo_solicitud`, `solicitud`, `nom_tec`, `solucion`, `serial`, `tiempo_inicio`, `tiempo_final`, `medio_solicitud`, `departamento`, `estado_solicitud`) VALUES
(6, 45, '2023-10-09', 'Heimdallr20@gmail.com', 'Heimdall', 'computador no enciende', 'Tengo hambre', 'Heimdall Rojas', 'Comer sopa', '5CG0139N55', '6:38:20 PM', '7:34:40 PM', 'Formulario Web', 'Soporte Técnico', 'Cerrada');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
