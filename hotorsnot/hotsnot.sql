-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2020 at 02:55 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotsnot`
--

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `pic` varchar(25) NOT NULL,
  `hot` int(10) NOT NULL DEFAULT 0,
  `snot` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `pic`, `hot`, `snot`) VALUES
(65, '001.jpg', 0, 0),
(66, '002.jpg', 0, 0),
(67, '003.jpg', 1, 0),
(68, '004.jpg', 1, 0),
(69, '005.jpg', 0, 0),
(70, '006.jpg', 3, 1),
(71, '007.jpg', 0, 2),
(72, '008.jpg', 0, 2),
(73, '009.jpg', 0, 2),
(74, '010.jpg', 1, 0),
(75, '011.jpg', 0, 1),
(76, '012.jpg', 0, 0),
(77, '013.jpg', 1, 0),
(78, '014.jpg', 1, 1),
(79, '015.jpg', 0, 0),
(80, '016.jpg', 0, 1),
(81, '020.jpg', 0, 0),
(82, '021.jpg', 0, 1),
(83, '022.jpg', 1, 0),
(84, '023.jpg', 0, 0),
(85, '024.jpg', 0, 2),
(86, '025.jpg', 2, 1),
(87, '026.jpg', 2, 3),
(88, '027.jpg', 2, 1),
(89, '028.jpg', 0, 3),
(90, '029.jpg', 1, 0),
(91, '030.jpg', 0, 0),
(92, '031.jpg', 0, 1),
(93, '032.jpg', 1, 1),
(94, '033.jpg', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
