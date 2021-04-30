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
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(15) NULL,
  PRIMARY KEY (`adminIDID`),
  UNIQUE INDEX `admin_UNIQUE` (`adminID` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '	';


-- -----------------------------------------------------
-- Table `personal_site`.`portfolio_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `personal_site`.`portfolio_input` (
  `portfolioID` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `publish_date` VARCHAR(255) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`portfolioID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `personal_site`.`resume_input`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `personal_site`.`resume_input` (
  `resumeID` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(255) NOT NULL,
  `position` VARCHAR(255) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`portfolioID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emr_group_c`.`PatientHealthSummary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emr_group_c`.`PatientHealthSummary` (
  `PatientID` INT NOT NULL,
  `HealthSummaryID` INT NOT NULL AUTO_INCREMENT,
  `Category` VARCHAR(45) NOT NULL,
  `Detail` LONGTEXT NULL,
  `DetailDate` DATE NOT NULL,
  `ActiveFlag` TINYINT NOT NULL DEFAULT 1,
  INDEX `PatientID_idx` (`PatientID` ASC) VISIBLE,
  PRIMARY KEY (`HealthSummaryID`),
  UNIQUE INDEX `Timestamp_UNIQUE` (`HealthSummaryID` ASC) VISIBLE,
  CONSTRAINT `PatientHealthKey`
    FOREIGN KEY (`PatientID`)
    REFERENCES `emr_group_c`.`Patient` (`HealthCardNumberID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);
