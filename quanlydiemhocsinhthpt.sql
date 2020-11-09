-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 05, 2020 lúc 02:37 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlydiemhocsinhthpt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `MaAdmin` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`MaAdmin`, `Username`, `Password`) VALUES
('AD01', 'AD_admin', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diemthi`
--

CREATE TABLE `diemthi` (
  `MaHS` varchar(20) NOT NULL,
  `MaGV` varchar(20) NOT NULL,
  `DiemGK` float NOT NULL,
  `DiemCK` float NOT NULL,
  `MaHK` varchar(20) NOT NULL,
  `Khoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `diemthi`
--

INSERT INTO `diemthi` (`MaHS`, `MaGV`, `DiemGK`, `DiemCK`, `MaHK`, `Khoa`) VALUES
('HS20180001', 'GV0001', 8.5, 9, 'HK201801', 0),
('HS20180002', 'GV0002', 5, 9, 'HK201802', 0),
('HS20180003', 'GV0003', 10, 9, 'HK201801', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giaovien`
--

CREATE TABLE `giaovien` (
  `MaGV` varchar(20) NOT NULL,
  `Hoten` varchar(50) NOT NULL,
  `MaMH` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giaovien`
--

INSERT INTO `giaovien` (`MaGV`, `Hoten`, `MaMH`, `Username`, `Password`) VALUES
('GV0001', 'Phạm Phú Duy', 'MH01', 'GV_phamphuduy', '111'),
('GV0002', 'Đoàn Văn Hoàng', 'MH02', 'GV_doanvanhoang', '222'),
('GV0003', 'La Văn Chiến', 'MH03', 'GV_levanchien', '333');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocky`
--

CREATE TABLE `hocky` (
  `MaHK` varchar(20) NOT NULL,
  `TenHK` varchar(20) NOT NULL,
  `NgayBD` date NOT NULL,
  `NgayKT` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hocky`
--

INSERT INTO `hocky` (`MaHK`, `TenHK`, `NgayBD`, `NgayKT`) VALUES
('HK201801', 'Học kỳ 1', '2018-08-09', '2018-12-12'),
('HK201802', 'Học kỳ 2', '2018-01-01', '2019-05-05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hocsinh`
--

CREATE TABLE `hocsinh` (
  `MaHS` varchar(20) NOT NULL,
  `Hoten` varchar(50) NOT NULL,
  `GioiTinh` tinyint(1) NOT NULL,
  `NgaySinh` date NOT NULL,
  `DiaChi` varchar(50) NOT NULL,
  `SoDT` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hocsinh`
--

INSERT INTO `hocsinh` (`MaHS`, `Hoten`, `GioiTinh`, `NgaySinh`, `DiaChi`, `SoDT`, `Username`, `Password`) VALUES
('HS20180001', 'Lê Văn Cường', 1, '2019-05-06', 'Phú Yên', '0123456789', 'HS_levancuong', '111'),
('HS20180002', 'Donald Biden', 1, '1999-05-06', 'Chicago', '0123456700', 'HS_donaldbiden', '222'),
('HS20180003', 'Phạm Quí Dương', 1, '1999-05-06', 'Quảng Ngãi', '09123478569', 'HS_phamquiduong', '333');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `MaLH` varchar(20) NOT NULL,
  `TenLop` varchar(20) NOT NULL,
  `MaGV` varchar(20) NOT NULL,
  `MaNH` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`MaLH`, `TenLop`, `MaGV`, `MaNH`) VALUES
('LH1001', '10A1', 'GV0001', 'NH20172018'),
('LH1002', '10A3', 'GV0002', 'NH20172018'),
('LH1003', '10A2', 'GV0003', 'NH20172018');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `MaMH` varchar(20) NOT NULL,
  `TenMH` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`MaMH`, `TenMH`) VALUES
('MH01', 'Toán'),
('MH02', 'Lý'),
('MH03', 'Hóa');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `namhoc`
--

CREATE TABLE `namhoc` (
  `MaNH` varchar(20) NOT NULL,
  `TenNH` varchar(20) NOT NULL,
  `NamBD` int(11) NOT NULL,
  `NamKT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `namhoc`
--

INSERT INTO `namhoc` (`MaNH`, `TenNH`, `NamBD`, `NamKT`) VALUES
('NH20172018', '2017-2018', 2017, 2018),
('NH20182019', '2018-2019', 2018, 2019),
('NH20192020', '2019-2020', 2019, 2020);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongbao`
--

CREATE TABLE `thongbao` (
  `id` int(11) NOT NULL,
  `tieude` varchar(50) COLLATE utf8_bin NOT NULL,
  `noidung` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Đang đổ dữ liệu cho bảng `thongbao`
--

INSERT INTO `thongbao` (`id`, `tieude`, `noidung`) VALUES
(1, 'Lễ khai giảng', 'Học sinh tất cả các lớp có mặt lúc 7:00 sáng ngày 5/9 để dự lễ khai giảng. Khi đi mang đồng phục trường. Các lớp cử ra từ 2 bạn trở lên có mặt lúc 6:30 để nhận ghế và xếp ghế. Đội văn nghệ cần có mặt lúc 6:00 để chuẩn bị');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`MaAdmin`);

--
-- Chỉ mục cho bảng `diemthi`
--
ALTER TABLE `diemthi`
  ADD KEY `MaHS` (`MaHS`),
  ADD KEY `diemthi_ibfk_1` (`MaGV`),
  ADD KEY `MaHK` (`MaHK`);

--
-- Chỉ mục cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  ADD PRIMARY KEY (`MaGV`),
  ADD KEY `MaMH` (`MaMH`);

--
-- Chỉ mục cho bảng `hocky`
--
ALTER TABLE `hocky`
  ADD PRIMARY KEY (`MaHK`);

--
-- Chỉ mục cho bảng `hocsinh`
--
ALTER TABLE `hocsinh`
  ADD PRIMARY KEY (`MaHS`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`MaLH`),
  ADD KEY `MaGV` (`MaGV`),
  ADD KEY `lop_ibfk_1` (`MaNH`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`MaMH`);

--
-- Chỉ mục cho bảng `namhoc`
--
ALTER TABLE `namhoc`
  ADD PRIMARY KEY (`MaNH`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `diemthi`
--
ALTER TABLE `diemthi`
  ADD CONSTRAINT `diemthi_ibfk_1` FOREIGN KEY (`MaHK`) REFERENCES `hocky` (`MaHK`);

--
-- Các ràng buộc cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  ADD CONSTRAINT `giaovien_ibfk_1` FOREIGN KEY (`MaMH`) REFERENCES `monhoc` (`MaMH`);

--
-- Các ràng buộc cho bảng `lop`
--
ALTER TABLE `lop`
  ADD CONSTRAINT `lop_ibfk_1` FOREIGN KEY (`MaNH`) REFERENCES `namhoc` (`MaNH`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
