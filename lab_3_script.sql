SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


DROP SCHEMA IF EXISTS `sierra_2_2` ;

CREATE SCHEMA IF NOT EXISTS `sierra_2` DEFAULT CHARACTER SET utf8 ;
USE `sierra_2` ;

DROP TABLE IF EXISTS `sierra_2`.`company` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `owner` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `sierra_2`.`quarry` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`quarry` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_quarry_company`
    FOREIGN KEY (`company_id`)
    REFERENCES `sierra_2`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_quarry_company_idx` ON `sierra_2`.`quarry` (`company_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`driver` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`driver` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `driver_licence` VARCHAR(9) NOT NULL,
  `sallary` DECIMAL(10) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `sierra_2`.`manager` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`manager` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `sallary` VARCHAR(45) NULL,
  `company_id` INT NOT NULL,
  `quarry_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_manager_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sierra_2`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_manager_quarry1`
    FOREIGN KEY (`quarry_id`)
    REFERENCES `sierra_2`.`quarry` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_manager_company1_idx` ON `sierra_2`.`manager` (`company_id` ASC) VISIBLE;

CREATE INDEX `fk_manager_quarry1_idx` ON `sierra_2`.`manager` (`quarry_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`medical_info` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`medical_info` (
  `id` INT NOT NULL,
  `arterial_pressure` INT NULL,
  `pulse` SMALLINT(3) NULL,
  `temperature` FLOAT NULL,
  `driver_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_medical_info_driver1`
    FOREIGN KEY (`driver_id`)
    REFERENCES `sierra_2`.`driver` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_medical_info_driver1_idx` ON `sierra_2`.`medical_info` (`driver_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`transport_type` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`transport_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `gain_per_hour` INT NULL,
  `load_capasity` INT NULL,
  `speed_per_hour` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `sierra_2`.`sensor` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`sensor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `engine_temperature` INT NULL,
  `fuel_tank_capasity` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


DROP TABLE IF EXISTS `sierra_2`.`transport` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`transport` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NULL,
  `fuel_consuming` VARCHAR(45) NULL,
  `license_plate` VARCHAR(45) NULL,
  `company_id` INT NOT NULL,
  `transport_type_id` INT NOT NULL,
  `sensor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_transport_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sierra_2`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_transport_transport_type1`
    FOREIGN KEY (`transport_type_id`)
    REFERENCES `sierra_2`.`transport_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_transport_sensor1`
    FOREIGN KEY (`sensor_id`)
    REFERENCES `sierra_2`.`sensor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_transport_company1_idx` ON `sierra_2`.`transport` (`company_id` ASC) VISIBLE;

CREATE INDEX `fk_transport_transport_type1_idx` ON `sierra_2`.`transport` (`transport_type_id` ASC) VISIBLE;

CREATE INDEX `fk_transport_sensor1_idx` ON `sierra_2`.`transport` (`sensor_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`driver_has_manager` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`driver_has_manager` (
  `driver_id` INT NOT NULL,
  `manager_id` INT NOT NULL,
  PRIMARY KEY (`driver_id`, `manager_id`),
  CONSTRAINT `fk_driver_has_manager_driver1`
    FOREIGN KEY (`driver_id`)
    REFERENCES `sierra_2`.`driver` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_driver_has_manager_manager1`
    FOREIGN KEY (`manager_id`)
    REFERENCES `sierra_2`.`manager` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_driver_has_manager_manager1_idx` ON `sierra_2`.`driver_has_manager` (`manager_id` ASC) VISIBLE;

CREATE INDEX `fk_driver_has_manager_driver1_idx` ON `sierra_2`.`driver_has_manager` (`driver_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`gained resources` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`gained resources` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `price_per_ton` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_gained resources_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sierra_2`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_gained resources_company1_idx` ON `sierra_2`.`gained resources` (`company_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`spent_resources` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`spent_resources` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `price_per_unit` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_spended_resources_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sierra_2`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_spended_resources_company1_idx` ON `sierra_2`.`spent_resources` (`company_id` ASC) VISIBLE;


DROP TABLE IF EXISTS `sierra_2`.`work_hours` ;

CREATE TABLE IF NOT EXISTS `sierra_2`.`work_hours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `start_hour` VARCHAR(45) NOT NULL,
  `end_hour` VARCHAR(45) NOT NULL,
  `gained_resources` VARCHAR(45) NULL,
  `driver_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_work_hours_driver1`
    FOREIGN KEY (`driver_id`)
    REFERENCES `sierra_2`.`driver` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_work_hours_driver1_idx` ON `sierra_2`.`work_hours` (`driver_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`company` (`id`, `name`, `owner`) VALUES (1, 'Diggers&co', 'Taras');
INSERT INTO `sierra_2`.`company` (`id`, `name`, `owner`) VALUES (2, 'AvengerDig', 'Maik');
INSERT INTO `sierra_2`.`company` (`id`, `name`, `owner`) VALUES (3, 'Outer&CO', 'Sarat');
INSERT INTO `sierra_2`.`company` (`id`, `name`, `owner`) VALUES (4, 'InternationnalDig', 'Petro');
INSERT INTO `sierra_2`.`company` (`id`, `name`, `owner`) VALUES (5, 'InnerDigging', 'Denys');

COMMIT;



START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`quarry` (`id`, `name`, `location`, `company_id`) VALUES (1, 'Yasnyskiy', 'Yasnyska', 1);
INSERT INTO `sierra_2`.`quarry` (`id`, `name`, `location`, `company_id`) VALUES (2, 'Zadorozhniy', 'Lviv', 2);
INSERT INTO `sierra_2`.`quarry` (`id`, `name`, `location`, `company_id`) VALUES (3, 'Ant', 'Kyiv', 3);
INSERT INTO `sierra_2`.`quarry` (`id`, `name`, `location`, `company_id`) VALUES (4, 'Taras', 'Ivano-Frankivsk', 4);
INSERT INTO `sierra_2`.`quarry` (`id`, `name`, `location`, `company_id`) VALUES (5, 'Kushchort', 'Zhytomyr', 5);

COMMIT;



START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`driver` (`id`, `name`, `surname`, `driver_licence`, `sallary`) VALUES (1, 'John', 'Doe', 'UA-1499', 25000);
INSERT INTO `sierra_2`.`driver` (`id`, `name`, `surname`, `driver_licence`, `sallary`) VALUES (2, 'Zenovij', 'Veres', 'UA-2285', 30000);
INSERT INTO `sierra_2`.`driver` (`id`, `name`, `surname`, `driver_licence`, `sallary`) VALUES (3, 'Taras', 'Troschuk', 'UA-1337', 70000);
INSERT INTO `sierra_2`.`driver` (`id`, `name`, `surname`, `driver_licence`, `sallary`) VALUES (4, 'Mykhailo', 'Maik', 'UA-7777', 80000);
INSERT INTO `sierra_2`.`driver` (`id`, `name`, `surname`, `driver_licence`, `sallary`) VALUES (5, 'Denys', 'Melnyk', 'UA-6666', 10000);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`manager` (`id`, `name`, `surname`, `sallary`, `company_id`, `quarry_id`) VALUES (1, 'Denys', 'Hrabovski', '26000', 1, 1);
INSERT INTO `sierra_2`.`manager` (`id`, `name`, `surname`, `sallary`, `company_id`, `quarry_id`) VALUES (2, 'Oleg', 'Nechiporenko', '52000', 2, 2);
INSERT INTO `sierra_2`.`manager` (`id`, `name`, `surname`, `sallary`, `company_id`, `quarry_id`) VALUES (3, 'Andriy', 'Boyarskiy', '14880', 3, 3);
INSERT INTO `sierra_2`.`manager` (`id`, `name`, `surname`, `sallary`, `company_id`, `quarry_id`) VALUES (4, 'Roman', 'Pylyptsiv', '22220', 4, 4);
INSERT INTO `sierra_2`.`manager` (`id`, `name`, `surname`, `sallary`, `company_id`, `quarry_id`) VALUES (5, 'Petro', 'Timlid', '20000', 5, 5);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`medical_info` (`id`, `arterial_pressure`, `pulse`, `temperature`, `driver_id`) VALUES (1, 70, 70, 36.6, 1);
INSERT INTO `sierra_2`.`medical_info` (`id`, `arterial_pressure`, `pulse`, `temperature`, `driver_id`) VALUES (2, 80, 80, 37, 2);
INSERT INTO `sierra_2`.`medical_info` (`id`, `arterial_pressure`, `pulse`, `temperature`, `driver_id`) VALUES (3, 90, 90, 39, 3);
INSERT INTO `sierra_2`.`medical_info` (`id`, `arterial_pressure`, `pulse`, `temperature`, `driver_id`) VALUES (4, 85, 95, 40, 4);
INSERT INTO `sierra_2`.`medical_info` (`id`, `arterial_pressure`, `pulse`, `temperature`, `driver_id`) VALUES (5, 90, 100, 35.5, 5);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`transport_type` (`id`, `name`, `gain_per_hour`, `load_capasity`, `speed_per_hour`) VALUES (1, 'load', 0, 42, 80);
INSERT INTO `sierra_2`.`transport_type` (`id`, `name`, `gain_per_hour`, `load_capasity`, `speed_per_hour`) VALUES (2, 'gain', 43, 0, 30);
INSERT INTO `sierra_2`.`transport_type` (`id`, `name`, `gain_per_hour`, `load_capasity`, `speed_per_hour`) VALUES (3, 'sedan', 12, 12, 120);
INSERT INTO `sierra_2`.`transport_type` (`id`, `name`, `gain_per_hour`, `load_capasity`, `speed_per_hour`) VALUES (4, 'crane', 0, 400, 0);
INSERT INTO `sierra_2`.`transport_type` (`id`, `name`, `gain_per_hour`, `load_capasity`, `speed_per_hour`) VALUES (5, 'evacuator', 1, 1, 90);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`sensor` (`id`, `engine_temperature`, `fuel_tank_capasity`) VALUES (1, 200, 333);
INSERT INTO `sierra_2`.`sensor` (`id`, `engine_temperature`, `fuel_tank_capasity`) VALUES (2, 167, 52);
INSERT INTO `sierra_2`.`sensor` (`id`, `engine_temperature`, `fuel_tank_capasity`) VALUES (3, 241, 43);
INSERT INTO `sierra_2`.`sensor` (`id`, `engine_temperature`, `fuel_tank_capasity`) VALUES (4, 102, 232);
INSERT INTO `sierra_2`.`sensor` (`id`, `engine_temperature`, `fuel_tank_capasity`) VALUES (5, 32, 32);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`transport` (`id`, `category`, `fuel_consuming`, `license_plate`, `company_id`, `transport_type_id`, `sensor_id`) VALUES (1, 'tractor', '10', 'AX1599AX', 1, 1, 1);
INSERT INTO `sierra_2`.`transport` (`id`, `category`, `fuel_consuming`, `license_plate`, `company_id`, `transport_type_id`, `sensor_id`) VALUES (2, 'escalator', '13', 'F404BD', 2, 2, 2);
INSERT INTO `sierra_2`.`transport` (`id`, `category`, `fuel_consuming`, `license_plate`, `company_id`, `transport_type_id`, `sensor_id`) VALUES (3, 'lory', '15', 'XF9081AA', 3, 3, 3);
INSERT INTO `sierra_2`.`transport` (`id`, `category`, `fuel_consuming`, `license_plate`, `company_id`, `transport_type_id`, `sensor_id`) VALUES (4, 'staff_transport', '3', 'BC2206BC', 4, 4, 4);
INSERT INTO `sierra_2`.`transport` (`id`, `category`, `fuel_consuming`, `license_plate`, `company_id`, `transport_type_id`, `sensor_id`) VALUES (5, 'crane', '52', 'BC4324AI', 5, 5, 5);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`driver_has_manager` (`driver_id`, `manager_id`) VALUES (1, 2);
INSERT INTO `sierra_2`.`driver_has_manager` (`driver_id`, `manager_id`) VALUES (2, 2);
INSERT INTO `sierra_2`.`driver_has_manager` (`driver_id`, `manager_id`) VALUES (3, 4);
INSERT INTO `sierra_2`.`driver_has_manager` (`driver_id`, `manager_id`) VALUES (5, 1);
INSERT INTO `sierra_2`.`driver_has_manager` (`driver_id`, `manager_id`) VALUES (4, 3);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`gained resources` (`id`, `type`, `price_per_ton`, `quantity`, `company_id`) VALUES (1, 'coal', '52', 40, 1);
INSERT INTO `sierra_2`.`gained resources` (`id`, `type`, `price_per_ton`, `quantity`, `company_id`) VALUES (2, 'emerald', '45', 20, 2);
INSERT INTO `sierra_2`.`gained resources` (`id`, `type`, `price_per_ton`, `quantity`, `company_id`) VALUES (3, 'diamond', '76', 36, 3);
INSERT INTO `sierra_2`.`gained resources` (`id`, `type`, `price_per_ton`, `quantity`, `company_id`) VALUES (4, 'sand', '45', 23, 4);
INSERT INTO `sierra_2`.`gained resources` (`id`, `type`, `price_per_ton`, `quantity`, `company_id`) VALUES (5, 'mergel', '23', 76, 5);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`spent_resources` (`id`, `type`, `price_per_unit`, `quantity`, `company_id`) VALUES (1, 'Carburator', '2', 1000, 1);
INSERT INTO `sierra_2`.`spent_resources` (`id`, `type`, `price_per_unit`, `quantity`, `company_id`) VALUES (2, 'Inzhektor', '1', 1500, 2);
INSERT INTO `sierra_2`.`spent_resources` (`id`, `type`, `price_per_unit`, `quantity`, `company_id`) VALUES (3, 'Kivsh', '3', 1488, 3);
INSERT INTO `sierra_2`.`spent_resources` (`id`, `type`, `price_per_unit`, `quantity`, `company_id`) VALUES (4, 'Lyst metaly', '3', 1234, 4);
INSERT INTO `sierra_2`.`spent_resources` (`id`, `type`, `price_per_unit`, `quantity`, `company_id`) VALUES (5, 'Electrody', '1', 3456, 5);

COMMIT;


START TRANSACTION;
USE `sierra_2`;
INSERT INTO `sierra_2`.`work_hours` (`id`, `date`, `start_hour`, `end_hour`, `gained_resources`, `driver_id`) VALUES (1, '2024-05-05', '10:00', '21:00', 'coal', 1);
INSERT INTO `sierra_2`.`work_hours` (`id`, `date`, `start_hour`, `end_hour`, `gained_resources`, `driver_id`) VALUES (2, '2024-05-04', '11:00', '22:00', 'coal', 2);
INSERT INTO `sierra_2`.`work_hours` (`id`, `date`, `start_hour`, `end_hour`, `gained_resources`, `driver_id`) VALUES (3, '2024-05-03', '13:45', '02:00', 'diamond', 3);
INSERT INTO `sierra_2`.`work_hours` (`id`, `date`, `start_hour`, `end_hour`, `gained_resources`, `driver_id`) VALUES (4, '2024-05-02', '19:00', '07:00', 'emerald', 4);
INSERT INTO `sierra_2`.`work_hours` (`id`, `date`, `start_hour`, `end_hour`, `gained_resources`, `driver_id`) VALUES (5, '2024-05-01', '13:00', '01:00', 'iron', 5);

COMMIT;
