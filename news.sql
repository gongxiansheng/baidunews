-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-10-11 09:53:19
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newssrc` char(100) NOT NULL,
  `newstime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='百度新闻';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstype`, `newsimg`, `newstitle`, `newssrc`, `newstime`) VALUES
(50, '精选', 'img/10.jpeg', '济南限购令出台一周后 网签量减少5500套', '网易新闻', '2016-10-11'),
(51, '精选', 'img/11.jpg', '三星要求全球停售Note7 建议关机停止使用', '热点', '2016-10-11'),
(52, '精选', 'img/12.jpeg', '马云一个月内两见巴育总理 泰国已准备好同阿里全面合作', '猜你喜欢', '2016-10-11'),
(53, '精选', 'img/13.jpeg', '关于阉割版小米5s 雷军正面为其平反了', '猜你喜欢', '2016-10-11'),
(54, '精选', 'img/14.jpeg', '马云对话斯皮尔伯格：阿里影业落下国际化关键棋子', '猜你喜欢', '2016-10-11'),
(55, '精选', 'img/15.jpeg', '卓伟无惧张靓颖炮轰 奉劝：听妈妈的话', '猜你喜欢', '2016-10-11'),
(56, '娱乐', 'img/15.jpeg', '卓伟无惧张靓颖炮轰 奉劝：听妈妈的话', '张靓颖', '2016-10-11'),
(57, '娱乐', 'img/16.jpeg', '金海心戴猫脸面具内心奔溃', '猜你喜欢', '2016-10-11'),
(58, '百家', 'img/17.jpeg', '为什么你不敢去创业？', '热点', '2016-10-11'),
(59, '百家', 'img/18.jpeg', '存贷汇：互联网金融机构积极布局， P2P引入区块链技术', '热点', '2016-10-11'),
(60, '百家', 'img/19.jpeg', '密集调控冰冻楼市 北京现房一天只成交两套', '热点', '2016-10-11'),
(61, '百家', 'img/20.jpeg', '厉害了我的姐!陈乔恩晒自己养的蚕 用手把玩 网友表示被吓到', '热点', '2016-10-11'),
(62, '本地', 'img/21.jpeg', '楼市三大销售乱象:未批先售、哄抬房价、场外配资', '楼市', '2016-10-11'),
(63, '本地', 'img/22.jpeg', '“沸雪”世界单板滑雪赛连续第七年落户北京', '滑雪', '2016-10-11'),
(64, '图片', 'img/23.jpg', '主播载美女被调戏 警告其下车', '', '2016-10-11'),
(65, '图片', 'img/24.jpg', '辣眼睛！宋小宝成了白雪公主', '', '2016-10-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
