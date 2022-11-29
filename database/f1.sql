-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2022 at 05:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `f1`
--
CREATE DATABASE IF NOT EXISTS `f1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `f1`;

-- --------------------------------------------------------

--
-- Table structure for table `carreras`
--

CREATE TABLE `carreras` (
  `prix` varchar(25) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `ganador` varchar(60) NOT NULL,
  `equipo` varchar(100) NOT NULL,
  `vueltas` int(11) NOT NULL,
  `tiempo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carreras`
--

INSERT INTO `carreras` (`prix`, `fecha`, `ganador`, `equipo`, `vueltas`, `tiempo`) VALUES
('Bahrain', '20 Mar 2022', 'Charles Leclerc', 'Ferrari', 57, '1:37:33.584'),
('Saudi Arabia', '27 Mar 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 50, '1:24:19.293'),
('Australia', '10 Apr 2022', 'Charles Leclerc', 'Ferrari', 58, '1:27:46.548'),
('Emilia Romagna', '24 Apr 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 63, '1:32:07.986'),
('Miami', '08 May 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 57, '1:34:24.258'),
('Spain', '22 May 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 66, '1:37:20.475'),
('Monaco', '29 May 2022', 'Sergio Perez', 'Red Bull Racing RBPT', 64, '1:56:30.265'),
('Azerbaijan', '12 Jun 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 51, '1:34:05.941'),
('Canada', '19 Jun 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 70, '1:36:21.757'),
('Great Britain', '03 Jul 2022', 'Carlos Sainz', 'Ferrari', 52, '2:17:50.311'),
('Austria', '10 Jul 2022', 'Charles Leclerc', 'Ferrari', 71, '1:24:24.312'),
('France', '24 Jul 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 53, '1:30:02.112'),
('Hungary', '31 Jul 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 70, '1:39:35.912'),
('Belgium', '28 Aug 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 44, '1:25:52.894'),
('Netherlands', '04 Sep 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 72, '1:36:42.773'),
('Italy', '11 Sep 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 53, '1:20:27.511'),
('Singapore', '02 Oct 2022', 'Sergio Perez', 'Red Bull Racing RBPT', 59, '2:02:20.238'),
('Japan', '09 Oct 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 28, '3:01:44.004'),
('United States', '23 Oct 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 56, '1:42:11.687'),
('Mexico', '30 Oct 2022', 'Max Verstappen', 'Red Bull Racing RBPT', 71, '1:38:36.729'),
('Brazil', '13 Nov 2022', 'George Russell', 'Mercedes', 71, '1:38:34.044');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
