-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2022 at 09:29 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `mycontact`
--

CREATE TABLE `mycontact` (
  `sno` int(11) NOT NULL,
  `fname` varchar(10) NOT NULL,
  `lname` varchar(10) NOT NULL,
  `email` text NOT NULL,
  `phone` int(10) NOT NULL,
  `address` text NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mycontact`
--

INSERT INTO `mycontact` (`sno`, `fname`, `lname`, `email`, `phone`, `address`, `Date`) VALUES
(1, '', '', '', 0, '', '0000-00-00 00:00:00'),
(2, 'rohit', 'borse', 'rohitborse2004@gmail.com', 12345, 'warud', '0000-00-00 00:00:00'),
(12, 'gaurav', 'behere', 'gauravbehere@gmail.com', 2147483647, 'warud', '0000-00-00 00:00:00'),
(13, 'jayesh', 'bhadane', 'jayeshbhadabe@gmail.com', 2147483647, 'jalgoan', '0000-00-00 00:00:00'),
(14, 'gaurav', 'behere', 'gauravbehere@gmail.com', 2147483647, 'warud', '2022-04-30 12:58:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mycontact`
--
ALTER TABLE `mycontact`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mycontact`
--
ALTER TABLE `mycontact`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
