-- MySQL Script generated by MySQL Workbench
-- 02/08/22 19:09:41
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `documento` VARCHAR(20) NOT NULL COMMENT '',
  `nombres` VARCHAR(45) NOT NULL COMMENT '',
  `apellidos` VARCHAR(45) NOT NULL COMMENT '',
  `direccion` VARCHAR(50) NOT NULL COMMENT '',
  `telefono` VARCHAR(20) NOT NULL COMMENT '',
  `correo` VARCHAR(60) NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  UNIQUE INDEX `documento_UNIQUE` (`documento` ASC)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `editoriales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `editoriales` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nombre` VARCHAR(45) NOT NULL COMMENT '',
  `created` TIMESTAMP NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `nombre` VARCHAR(45) NOT NULL COMMENT '',
  `created` TIMESTAMP NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `libros` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `titulo` VARCHAR(45) NOT NULL COMMENT '',
  `descripcion` VARCHAR(70) NOT NULL COMMENT '',
  `precio` DOUBLE NOT NULL COMMENT '',
  `ejemplares` INT NOT NULL COMMENT '',
  `autor` VARCHAR(45) NOT NULL COMMENT '',
  `editoriales_id` INT NOT NULL COMMENT '',
  `categorias_id` INT NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  INDEX `fk_libros_editoriales_idx` (`editoriales_id` ASC)  COMMENT '',
  INDEX `fk_libros_categorias1_idx` (`categorias_id` ASC)  COMMENT '',
  CONSTRAINT `fk_libros_editoriales`
    FOREIGN KEY (`editoriales_id`)
    REFERENCES `editoriales` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_libros_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prestamos` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fecha` DATE NOT NULL COMMENT '',
  `devolucion` DATE NOT NULL COMMENT '',
  `entrega` DATE NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  `usuarios_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  INDEX `fk_prestamos_usuarios1_idx` (`usuarios_id` ASC)  COMMENT '',
  CONSTRAINT `fk_prestamos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `detalles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `detalles` (
  `Id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `libros_id` INT NOT NULL COMMENT '',
  `prestamos_id` INT NOT NULL COMMENT '',
  `precio` DOUBLE NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  INDEX `fk_detalles_libros1_idx` (`libros_id` ASC)  COMMENT '',
  INDEX `fk_detalles_prestamos1_idx` (`prestamos_id` ASC)  COMMENT '',
  PRIMARY KEY (`Id`)  COMMENT '',
  CONSTRAINT `fk_detalles_libros1`
    FOREIGN KEY (`libros_id`)
    REFERENCES `libros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_prestamos1`
    FOREIGN KEY (`prestamos_id`)
    REFERENCES `prestamos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `multas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `multas` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fecha` DATE NOT NULL COMMENT '',
  `observacion` VARCHAR(50) NOT NULL COMMENT '',
  `valor` DOUBLE NOT NULL COMMENT '',
  `usuarios_id` INT NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modfied` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  INDEX `fk_multas_usuarios1_idx` (`usuarios_id` ASC)  COMMENT '',
  CONSTRAINT `fk_multas_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pagos` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `fecha` DATE NOT NULL COMMENT '',
  `valor` DOUBLE NOT NULL COMMENT '',
  `concepto` VARCHAR(45) NOT NULL COMMENT '',
  `usuarios_id` INT NOT NULL COMMENT '',
  `created` TIMESTAMP NOT NULL COMMENT '',
  `modified` TIMESTAMP NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  INDEX `fk_pagos_usuarios1_idx` (`usuarios_id` ASC)  COMMENT '',
  CONSTRAINT `fk_pagos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;