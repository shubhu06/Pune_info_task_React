-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2023 at 06:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pune_info_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `foood_name` varchar(100) NOT NULL,
  `food_img` varchar(150) NOT NULL,
  `creator` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `foood_name`, `food_img`, `creator`) VALUES
(1, 'VadaPav', 'https://lh3.googleusercontent.com/p/AF1QipOfxnftoaqoIypumGvxuZ0iGdGzNk6MSU8QOvut=s1360-w1360-h1020', 'Joshi Vadapav'),
(3, 'misal', 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/06/15162526/best-misal-pav-in-pune.jpg?tr=w-1200,h-900', 'Swami Misal'),
(5, 'Rusgulla', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1-500x500.jpg', 'Amit Lakeri'),
(6, 'Bhakarwadi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h3GEKjrZihBxhVImttE9tBu8yR3mh4ixPZYbox_KMavHRyKccoaxpv9cakiOF5EE5ok&usqp=CAU', 'Narendra');

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

CREATE TABLE `places` (
  `id` int(11) NOT NULL,
  `place_name` text NOT NULL,
  `place_img` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `places`
--

INSERT INTO `places` (`id`, `place_name`, `place_img`) VALUES
(1, 'Shaniwarwada', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Shaniwaarwada_Pune.jpg'),
(3, 'Sinhgad Fort', 'https://dynamic.tourtravelworld.com/blog_images/top-22-paces-to-visit-in-pune-20161024052350.jpg'),
(4, 'Dagdushet Halwai ', 'https://as2.ftcdn.net/v2/jpg/05/91/96/63/1000_F_591966363_lNIwQ7uoeqvV3AcbnxrWhScyBSAQDYKt.jpg'),
(5, 'Imagicka', 'https://media1.thrillophilia.com/filestore/q45793oge0zywt1x74z0oimga0is_product-jpeg-1000x1000.webp?w=auto&h=600');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'demo', 'demo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
