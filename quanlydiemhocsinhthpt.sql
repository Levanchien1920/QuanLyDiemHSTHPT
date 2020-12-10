-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 01, 2020 lúc 03:56 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.4.11

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
  `MaDT` int(11) NOT NULL,
  `MaHS` varchar(20) NOT NULL,
  `MaGV` varchar(20) NOT NULL,
  `MaLH` varchar(20) NOT NULL,
  `DiemGK` float NOT NULL,
  `DiemCK` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `diemthi`
--

INSERT INTO `diemthi` (`MaDT`, `MaHS`, `MaGV`, `MaLH`, `DiemGK`, `DiemCK`) VALUES
(1, 'HS20180001', 'GV0001', 'LH1001', 5, 8),
(2, 'HS20180002', 'GV0001', 'LH1001', 2, 9),
(3, 'HS20180003', 'GV0001', 'LH1001', 7, 9),
(4, 'HS20180010', 'GV0001', 'LH1004', 6, 10),
(5, 'HS20180011', 'GV0001', 'LH1004', 9, 9),
(6, 'HS20180012', 'GV0001', 'LH1004', 4, 9),
(7, 'HS20180001', 'GV0002', 'LH1001', 3, 5);

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
('GV0003', 'La Văn Chiến', 'MH03', 'GV_levanchien', '333'),
('GV0004', 'Lê Vy', 'MH06', 'GV_levy', '444'),
('GV0005', 'Lê Bi', 'MH11', 'GV_lebi', '555'),
('GV0006', 'Nguyễn An', 'MH08', 'GV_nguyenan', '666'),
('GV0007', 'Trần Dân', 'MH09', 'GV_trandan', '777'),
('GV0008', 'Lê Lợi', 'MH05', 'GV_leloi', '888'),
('GV0009', 'Quang Trung', 'MH10', 'GV_quangtrung', '999'),
('GV0010', 'Donal Trum', 'MH07', 'GV_doanltrum', '101010'),
('GV0011', 'Ngô Thị Bắp', 'MH04', 'GV_ngothibap', '111111'),
('GV0012', 'Đào Hoa', 'MH05', 'GV_daohoa', '121212'),
('GV0013', 'Phạm Quí Dương', 'MH01', 'GV_phamquiduong', '131313'),
('GV0014', 'Phan Gia Sang', 'MH02', 'GV_phangiasang', '141414'),
('GV0015', 'Tô Việt Anh', 'MH03', 'GV_tovietanh', '151515'),
('GV0016', 'Bui Văn Hóa', 'MH06', 'GV_buivanhoa', '161616'),
('GV0017', 'Nguyễn Thị Hồng', 'MH04', 'GV_nguyenthihong', '171717'),
('GV0018', 'Phạm Văn Phương', 'MH07', 'GV_phamvanphuong', '181818'),
('GV0019', 'Phạm Minh Tuấn', 'MH08', 'GV_phamminhtuan', '191919'),
('GV0020', 'Nguyễn Văn Hiệu', 'MH09', 'GV_nguyenvanhieu', '202020'),
('GV0021', 'Nguyễn Văn Thanh', 'MH10', 'GV_nguyenvanthanh', '212121'),
('GV_0022', 'Đào Tất Thanh', 'MH11', 'GV_daotatthanh', '222222');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `han`
--

CREATE TABLE `han` (
  `gk` tinyint(1) NOT NULL,
  `ck` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `han`
--

INSERT INTO `han` (`gk`, `ck`) VALUES
(1, 0);

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
  `MaLH` varchar(20) NOT NULL,
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

INSERT INTO `hocsinh` (`MaHS`, `MaLH`, `Hoten`, `GioiTinh`, `NgaySinh`, `DiaChi`, `SoDT`, `Username`, `Password`) VALUES
('HS20170001', 'LH1101', 'Lê B0', 1, '1999-01-12', 'Soc Trang', '789456123', 'HS_leb0', '0001'),
('HS20170002', 'LH1101', 'Lê B1', 0, '1999-05-12', 'Phú Yên', '12345688', 'HS_leb1', '0002'),
('HS20170003', 'LH1101', 'Lê B2', 1, '1999-07-10', 'Quảng Nam', '017894561', 'HS_leb2', '0003'),
('HS20170004', 'LH1102', 'Lê B3', 1, '1996-01-12', 'Đà Nẵng', '789456123', 'HS_leb3', '0004'),
('HS20170005', 'LH1102', 'Lê B4', 0, '1997-05-12', 'Phú Yên', '12345688', 'HS_leb4', '0005'),
('HS20170006', 'LH1102', 'Lê B5', 1, '1999-07-10', 'Quảng Nam', '017894561', 'HS_leb5', '0006'),
('HS20170007', 'LH1103', 'Lê B6', 1, '2000-01-12', 'Đà Nẵng', '789456123', 'HS_leb6', '0007'),
('HS20170008', 'LH1103', 'Lê B7', 0, '1997-05-12', 'Phú Yên', '12345688', 'HS_leb7', '0008'),
('HS20170009', 'LH1103', 'Lê B8', 1, '1999-07-10', 'Quảng Ngãi', '017894561', 'HS_leb8', '0009'),
('HS20170010', 'LH1104', 'Lê B9', 1, '2001-01-12', 'Đà Nẵng', '789456123', 'HS_leb9', '0010'),
('HS20170011', 'LH1104', 'Lê B10', 0, '1997-05-02', 'Phú Yên', '12345688', 'HS_leb10', '0011'),
('HS20170012', 'LH1104', 'Lê B11', 1, '1999-07-10', 'Quảng Nam', '017894561', 'HS_leb11', '0012'),
('HS20180001', 'LH1001', 'Lê Văn Cường', 1, '2019-05-06', 'Phú Yên', '0123456789', 'HS_levancuong', '111'),
('HS20180002', 'LH1001', 'Donald Biden', 1, '1999-05-06', 'Chicago', '0123456700', 'HS_donaldbiden', '222'),
('HS20180003', 'LH1001', 'Phạm Quí Dương', 1, '1999-05-06', 'Quảng Ngãi', '09123478569', 'HS_phamquiduong', '333'),
('HS20180004', 'LH1002', 'Lê A0', 1, '1999-01-21', 'Hà Nội', '123456789', 'HS_lea0', '444'),
('HS20180005', 'LH1002', 'Lê A1', 0, '1999-04-21', 'Đà Năng', '123456789', 'HS_lea1', '555'),
('HS20180006', 'LH1002', 'Lê A2', 1, '1999-05-21', 'Nha Trang', '123456789', 'HS_lea2', '666'),
('HS20180007', 'LH1003', 'Lê A3', 0, '1999-06-21', 'Bạc Liêu', '123456789', 'HS_lea3', '777'),
('HS20180008', 'LH1003', 'Lê A4', 1, '1999-07-21', 'Cà Mau', '123456789', 'HS_lea4', '888'),
('HS20180009', 'LH1003', 'Lê A5', 0, '1999-08-21', 'Biện Biên Phủ', '123456789', 'HS_lea5', '999'),
('HS20180010', 'LH1004', 'Lê A6', 1, '1999-01-12', 'Soc Trăng', '789456123', 'HS_lea6', '101010'),
('HS20180011', 'LH1004', 'Lê A7', 0, '1999-03-12', 'Kiên Giang', '789456123', 'HS_lea7', '101010'),
('HS20180012', 'LH1004', 'Lê A8', 1, '1999-02-12', 'Hải Phòng', '789456123', 'HS_lea8', '101010');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `STT` int(11) NOT NULL,
  `MaLH` varchar(20) NOT NULL,
  `TenLop` varchar(20) NOT NULL,
  `MaGV` varchar(20) NOT NULL,
  `MaNH` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`STT`, `MaLH`, `TenLop`, `MaGV`, `MaNH`) VALUES
(1, 'LH1001', '10A1', 'GV0001', 'NH20172018'),
(2, 'LH1001', '10A1', 'GV0002', 'NH20172018'),
(3, 'LH1001', '10A1', 'GV0004', 'NH20172018'),
(4, 'LH1001', '10A1', 'GV0003', 'NH20182019'),
(5, 'LH1001', '10A1', 'GV0005', 'NH20192020'),
(6, 'LH1001', '10A1', 'GV0006', 'NH20172018'),
(7, 'LH1001', '10A1', 'GV0007', 'NH20172018'),
(8, 'LH1001', '10A1', 'GV0008', 'NH20172018'),
(9, 'LH1001', '10A1', 'GV0009', 'NH20172018'),
(10, 'LH1001', '10A1', 'GV0010', 'NH20172018'),
(11, 'LH1001', '10A1', 'GV0011', 'NH20172018'),
(12, 'LH1002', '10A2', 'GV0012', 'NH20172018'),
(13, 'LH1002', '10A2', 'GV0013', 'NH20172018'),
(14, 'LH1002', '10A2', 'GV0014', 'NH20172018'),
(15, 'LH1002', '10A2', 'GV0015', 'NH20172018'),
(16, 'LH1002', '10A2', 'GV0016', 'NH20172018'),
(17, 'LH1002', '10A2', 'GV0017', 'NH20172018'),
(18, 'LH1002', '10A2', 'GV0018', 'NH20172018'),
(19, 'LH1002', '10A2', 'GV0019', 'NH20172018'),
(20, 'LH1002', '10A2', 'GV0020', 'NH20172018'),
(22, 'LH1002', '10A2', 'GV0021', 'NH20172018'),
(23, 'LH1002', '10A2', 'GV0022', 'NH20172018'),
(36, 'LH1004', '10A4', 'GV0001', 'NH20172018'),
(37, 'LH1004', '10A4', 'GV0002', 'NH20172018'),
(38, 'LH1004', '10A4', 'GV0003', 'NH20172018'),
(39, 'LH1004', '10A4', 'GV0004', 'NH20172018'),
(40, 'LH1004', '10A4', 'GV0005', 'NH20172018'),
(41, 'LH1004', '10A4', 'GV0006', 'NH20172018'),
(42, 'LH1004', '10A4', 'GV0007', 'NH20172018'),
(43, 'LH1004', '10A4', 'GV0008', 'NH20172018'),
(44, 'LH1004', '10A4', 'GV0009', 'NH20172018'),
(45, 'LH1004', '10A4', 'GV0010', 'NH20172018'),
(46, 'LH1004', '10A4', 'GV0011', 'NH20172018'),
(48, 'LH1003', '10A3', 'GV0012', 'NH20172018'),
(49, 'LH1003', '10A3', 'GV0013', 'NH20172018'),
(50, 'LH1003', '10A3', 'GV0014', 'NH20172018'),
(51, 'LH1003', '10A3', 'GV0015', 'NH20172018'),
(52, 'LH1003', '10A3', 'GV0016', 'NH20172018'),
(53, 'LH1003', '10A3', 'GV0017', 'NH20172018'),
(54, 'LH1003', '10A3', 'GV0018', 'NH20172018'),
(55, 'LH1003', '10A3', 'GV0019', 'NH20172018'),
(56, 'LH1003', '10A3', 'GV0020', 'NH20172018'),
(57, 'LH1003', '10A3', 'GV0021', 'NH20172018'),
(58, 'LH1003', '10A3', 'GV0022', 'NH20172018');

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
('MH03', 'Hóa'),
('MH04', 'Sinh Học'),
('MH05', 'Lịch Sử'),
('MH06', 'Địa Lý'),
('MH07', 'Tiếng Anh'),
('MH08', 'Ngữ Văn'),
('MH09', 'Giáo Dục Công Dân'),
('MH10', 'Công Nghệ'),
('MH11', 'Thể Dục');

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
-- Cấu trúc bảng cho bảng `phanhoi`
--

CREATE TABLE `phanhoi` (
  `id` int(11) NOT NULL,
  `monhoc` varchar(50) NOT NULL,
  `noidung` text NOT NULL,
  `MaHS` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phanhoi`
--

INSERT INTO `phanhoi` (`id`, `monhoc`, `noidung`, `MaHS`) VALUES
(1, 'MH01', 'AAA', 'HS20180001'),
(5, 'MH01', 'ABC', 'HS20180001'),
(7, 'MH01', 'NNN', 'HS20180003'),
(8, 'MH02', 'QQQ', 'HS20180001');

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
(1, 'Lễ khai giảng', 'Học sinh tất cả các lớp có mặt lúc 7:00 sáng ngày 5/9 để dự lễ khai giảng. Khi đi mang đồng phục trường. Các lớp cử ra từ 2 bạn trở lên có mặt lúc 6:30 để nhận ghế và xếp ghế. Đội văn nghệ cần có mặt lúc 6:00 để chuẩn bị'),
(2, 'he', 'đ'),
(3, 'Họp phụ huynh đầu năm', 'Các lớp bắt đầu họp phụ huynh vào lúc 9:00 AM chủ nhật 7/9');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tkb`
--

CREATE TABLE `tkb` (
  `id` int(11) NOT NULL,
  `MaGV` varchar(20) NOT NULL,
  `Thu2Tiet1` varchar(20) NOT NULL,
  `Thu2Tiet2` varchar(20) NOT NULL,
  `Thu2Tiet3` varchar(20) NOT NULL,
  `Thu2Tiet4` varchar(20) NOT NULL,
  `Thu2Tiet5` varchar(20) NOT NULL,
  `Thu3Tiet1` varchar(20) NOT NULL,
  `Thu3Tiet2` varchar(20) NOT NULL,
  `Thu3Tiet3` varchar(20) NOT NULL,
  `Thu3Tiet4` varchar(20) NOT NULL,
  `Thu3Tiet5` varchar(20) NOT NULL,
  `Thu4Tiet1` varchar(20) NOT NULL,
  `Thu4Tiet2` varchar(20) NOT NULL,
  `Thu4Tiet3` varchar(20) NOT NULL,
  `Thu4Tiet4` varchar(20) NOT NULL,
  `Thu4Tiet5` varchar(20) NOT NULL,
  `Thu5Tiet1` varchar(20) NOT NULL,
  `Thu5Tiet2` varchar(20) NOT NULL,
  `Thu5Tiet3` varchar(20) NOT NULL,
  `Thu5Tiet4` varchar(20) NOT NULL,
  `Thu5Tiet5` varchar(20) NOT NULL,
  `Thu6Tiet1` varchar(20) NOT NULL,
  `Thu6Tiet2` varchar(20) NOT NULL,
  `Thu6Tiet3` varchar(20) NOT NULL,
  `Thu6Tiet4` varchar(20) NOT NULL,
  `Thu6Tiet5` varchar(20) NOT NULL,
  `Thu7Tiet1` varchar(20) NOT NULL,
  `Thu7Tiet2` varchar(20) NOT NULL,
  `Thu7Tiet3` varchar(20) NOT NULL,
  `Thu7Tiet4` varchar(20) NOT NULL,
  `Thu7Tiet5` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tkb`
--

INSERT INTO `tkb` (`id`, `MaGV`, `Thu2Tiet1`, `Thu2Tiet2`, `Thu2Tiet3`, `Thu2Tiet4`, `Thu2Tiet5`, `Thu3Tiet1`, `Thu3Tiet2`, `Thu3Tiet3`, `Thu3Tiet4`, `Thu3Tiet5`, `Thu4Tiet1`, `Thu4Tiet2`, `Thu4Tiet3`, `Thu4Tiet4`, `Thu4Tiet5`, `Thu5Tiet1`, `Thu5Tiet2`, `Thu5Tiet3`, `Thu5Tiet4`, `Thu5Tiet5`, `Thu6Tiet1`, `Thu6Tiet2`, `Thu6Tiet3`, `Thu6Tiet4`, `Thu6Tiet5`, `Thu7Tiet1`, `Thu7Tiet2`, `Thu7Tiet3`, `Thu7Tiet4`, `Thu7Tiet5`) VALUES
(1, 'GV0001', '10A1', '10A1', '10A1', '-', '-', '10A2', '10A2', '10A2', '-', '-', '11A1', '11A1', '11A1', '11A2', '11A2', '10A1', '10A1', '10A1', '-', '-', '10A1', '10A1', '10A1', '-', '-', '11A1', '11A1', '11A1', '-', '-');

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
  ADD PRIMARY KEY (`MaDT`),
  ADD KEY `MaHS` (`MaHS`),
  ADD KEY `diemthi_ibfk_1` (`MaGV`);

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
  ADD PRIMARY KEY (`STT`),
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
-- Chỉ mục cho bảng `phanhoi`
--
ALTER TABLE `phanhoi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MaHS` (`MaHS`);

--
-- Chỉ mục cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tkb`
--
ALTER TABLE `tkb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MaGV` (`MaGV`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `diemthi`
--
ALTER TABLE `diemthi`
  MODIFY `MaDT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `lop`
--
ALTER TABLE `lop`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT cho bảng `phanhoi`
--
ALTER TABLE `phanhoi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tkb`
--
ALTER TABLE `tkb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

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

--
-- Các ràng buộc cho bảng `tkb`
--
ALTER TABLE `tkb`
  ADD CONSTRAINT `tkb_ibfk_1` FOREIGN KEY (`MaGV`) REFERENCES `giaovien` (`MaGV`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
