-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema personal_site
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema personal_site
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `personal_site` DEFAULT CHARACTER SET utf8 ;
USE `personal_site` ;

-- -----------------------------------------------------
-- Table `personal_site`.`admin_login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `personal_site`.`admin_login` (
  `adminID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`adminID`),
COMMENT = '	';


-- -----------------------------------------------------
-- Table `personal_site`.`portfolio_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `personal_site`.`portfolio_input` (
  `portfolioID` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`portfolioID`),
COMMENT = '	';


-- -----------------------------------------------------
-- Table `personal_site`.`resume_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `personal_site`.`admin_resume_input` (
  `resumeID` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(255) NULL,
  `position` VARCHAR(255) NULL,
  `location` VARCHAR(255) NULL,
  `start_date` VARCHAR(255) NULL,
  `end_date` VARCHAR(255) NULL,
  `description` LONGTEXT NULL,
  `type` VARCHAR(255) NULL,
  PRIMARY KEY (`resumeID`),
COMMENT = '	';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



