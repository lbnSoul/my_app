/*
 Navicat Premium Data Transfer

 Source Server         : my_app
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : my_app

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 22/05/2020 19:47:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alats
-- ----------------------------
DROP TABLE IF EXISTS `alats`;
CREATE TABLE `alats` (
  `article_id` int NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `title` varchar(32) DEFAULT NULL,
  `is_open` int DEFAULT NULL,
  `create_user` varchar(32) DEFAULT NULL,
  `uid` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `img_arr` longtext,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for long_text
-- ----------------------------
DROP TABLE IF EXISTS `long_text`;
CREATE TABLE `long_text` (
  `article_id` int NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `title` varchar(32) DEFAULT NULL,
  `is_open` int DEFAULT NULL,
  `create_user` varchar(32) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `uid` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_name` char(128) DEFAULT NULL,
  `password` char(128) DEFAULT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
