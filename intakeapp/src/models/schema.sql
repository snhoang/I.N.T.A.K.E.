DROP DATABASE IF EXISTS intake_db;
CREATE DATABASE intake_db;

USE intake_db;
-- table for the user
CREATE TABLE user(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,

    name VARCHAR(30) NOT NULL,

    intake INTEGER(11) NOT NULL,
);
-- table for the sugar
CREATE TABLE sugar(
    
    id INTEGER(11) AUTO_INCREMENT NOT NULL,

    grams INTEGER(11) NOT NULL,
    
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY(id)

);


-- table for the caffiene content
CREATE TABLE caffiene(
    
    id INTEGER(11) AUTO_INCREMENT NOT NULL,

    grams INTEGER(11) NOT NULL,
    
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY(id)

);
-- table for the alcohol content
CREATE TABLE alcohol(
    
    id INTEGER(11) AUTO_INCREMENT NOT NULL,

    grams INTEGER(11) NOT NULL,
    
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY(id)

