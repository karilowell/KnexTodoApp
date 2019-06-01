-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS todolist;
-- Creates the "todolist" database --
CREATE DATABASE todolist;


USE chirpy;

CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
