-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fhd_cinema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fhd_cinema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fhd_cinema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `fhd_cinema` ;

-- -----------------------------------------------------
-- Table `fhd_cinema`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`accounts` (
  `account_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `account_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `account_password` VARCHAR(1000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `account_type` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`account_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`customers` (
  `customer_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `account_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT '',
  `customer_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `customer_phone` VARCHAR(20) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `customer_email` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`ratings` (
  `rating_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `rating_name` VARCHAR(8) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `rating_description` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`rating_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`movies` (
  `movie_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `movie_title` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_genre` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_director` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_cast` VARCHAR(1000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_status` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_format` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_duration_minute` INT UNSIGNED NOT NULL,
  `movie_release_date` DATE NOT NULL,
  `movie_trailer_url` VARCHAR(1000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_description` VARCHAR(2000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_language` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `movie_poster_url` VARCHAR(1000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `rating_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`movie_id`),
  INDEX `fk_movies_ratings1_idx` (`rating_id` ASC) VISIBLE,
  CONSTRAINT `fk_movies_ratings1`
    FOREIGN KEY (`rating_id`)
    REFERENCES `fhd_cinema`.`ratings` (`rating_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`locations` (
  `location_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `location_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`location_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`cinemas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`cinemas` (
  `cinema_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `location_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `cinema_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`cinema_id`),
  INDEX `fk_cinemas_locations_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_cinemas_locations`
    FOREIGN KEY (`location_id`)
    REFERENCES `fhd_cinema`.`locations` (`location_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`screens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`screens` (
  `screen_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `cinema_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `screen_name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`screen_id`),
  INDEX `fk_screens_cinemas` (`cinema_id` ASC) VISIBLE,
  CONSTRAINT `fk_screens_cinemas`
    FOREIGN KEY (`cinema_id`)
    REFERENCES `fhd_cinema`.`cinemas` (`cinema_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`showtimes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`showtimes` (
  `showtime_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `movie_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `screen_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `showtime_price` INT UNSIGNED NOT NULL,
  `showtime_at` DATETIME NOT NULL,
  PRIMARY KEY (`showtime_id`),
  INDEX `fk_showtimes_movie1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_showtimes_screens_idx` (`screen_id` ASC) VISIBLE,
  CONSTRAINT `fk_showtimes_movies`
    FOREIGN KEY (`movie_id`)
    REFERENCES `fhd_cinema`.`movies` (`movie_id`),
  CONSTRAINT `fk_showtimes_screens`
    FOREIGN KEY (`screen_id`)
    REFERENCES `fhd_cinema`.`screens` (`screen_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`bookings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`bookings` (
  `booking_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `showtime_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `customer_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `booking_price` INT UNSIGNED NOT NULL,
  `booking_create_at` DATETIME NOT NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `fk_bookings_showtimes_idx` (`showtime_id` ASC) VISIBLE,
  INDEX `fk_bookings_customers_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookings_customers`
    FOREIGN KEY (`customer_id`)
    REFERENCES `fhd_cinema`.`customers` (`customer_id`),
  CONSTRAINT `fk_bookings_showtimes`
    FOREIGN KEY (`showtime_id`)
    REFERENCES `fhd_cinema`.`showtimes` (`showtime_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`bills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`bills` (
  `bill_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `bill_amount` INT NOT NULL,
  `is_paid` TINYINT(1) NOT NULL,
  `bill_created_at` DATETIME NOT NULL,
  `booking_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`bill_id`),
  INDEX `fk_bill_bookings1_idx` (`booking_id` ASC) VISIBLE,
  CONSTRAINT `fk_bill_bookings1`
    FOREIGN KEY (`booking_id`)
    REFERENCES `fhd_cinema`.`bookings` (`booking_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`vouchers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`vouchers` (
  `voucher_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `voucher_code` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `voucher_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `voucher_description` VARCHAR(1000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `voucher_discount_percent` INT UNSIGNED NOT NULL,
  `voucher_started_at` DATETIME NOT NULL,
  `voucher_ended_at` DATETIME NOT NULL,
  PRIMARY KEY (`voucher_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`bills_vouchers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`bills_vouchers` (
  `bill_id` VARCHAR(36) NOT NULL,
  `voucher_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`bill_id`, `voucher_id`),
  INDEX `fk_vouchers_has_bills_bills1_idx` (`bill_id` ASC) VISIBLE,
  INDEX `fk_vouchers_has_bills_vouchers1_idx` (`voucher_id` ASC) VISIBLE,
  CONSTRAINT `fk_vouchers_has_bills_bills1`
    FOREIGN KEY (`bill_id`)
    REFERENCES `fhd_cinema`.`bills` (`bill_id`),
  CONSTRAINT `fk_vouchers_has_bills_vouchers1`
    FOREIGN KEY (`voucher_id`)
    REFERENCES `fhd_cinema`.`vouchers` (`voucher_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`snacks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`snacks` (
  `snack_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `snack_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `snack_price` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`snack_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`bookings_snacks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`bookings_snacks` (
  `booking_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `snack_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  INDEX `fk_bookings_has_snacks_snacks1_idx` (`snack_id` ASC) VISIBLE,
  INDEX `fk_bookings_has_snacks_bookings1_idx` (`booking_id` ASC) VISIBLE,
  CONSTRAINT `fk_bookings_has_snacks_bookings1`
    FOREIGN KEY (`booking_id`)
    REFERENCES `fhd_cinema`.`bookings` (`booking_id`),
  CONSTRAINT `fk_bookings_has_snacks_snacks1`
    FOREIGN KEY (`snack_id`)
    REFERENCES `fhd_cinema`.`snacks` (`snack_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`customers_vouchers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`customers_vouchers` (
  `customer_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `voucher_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  INDEX `fk_customers_has_vouchers_vouchers1_idx` (`voucher_id` ASC) VISIBLE,
  INDEX `fk_customers_has_vouchers_customers1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_customers_has_vouchers_customers1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `fhd_cinema`.`customers` (`customer_id`),
  CONSTRAINT `fk_customers_has_vouchers_vouchers1`
    FOREIGN KEY (`voucher_id`)
    REFERENCES `fhd_cinema`.`vouchers` (`voucher_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`news`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`news` (
  `news_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `news_title` VARCHAR(300) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `news_description` VARCHAR(2000) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `news_created_at` DATETIME NOT NULL,
  `news_url` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `news_image_url` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`news_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`seats_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`seats_types` (
  `seat_type_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `seat_type_name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `seat_type_price` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`seat_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`seats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`seats` (
  `seat_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `type_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `screen_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `seat_name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `is_booked` TINYINT(1) NOT NULL,
  PRIMARY KEY (`seat_id`),
  INDEX `fk_seats_screen_idx` (`screen_id` ASC) VISIBLE,
  INDEX `fk_seats_types_idx` (`type_id` ASC) VISIBLE,
  CONSTRAINT `fk_seats_screen`
    FOREIGN KEY (`screen_id`)
    REFERENCES `fhd_cinema`.`screens` (`screen_id`),
  CONSTRAINT `fk_seats_types`
    FOREIGN KEY (`type_id`)
    REFERENCES `fhd_cinema`.`seats_types` (`seat_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`staff_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`staff_roles` (
  `staff_role_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `staff_role_name` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `staff_role_level` INT NOT NULL,
  PRIMARY KEY (`staff_role_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`staffs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`staffs` (
  `staff_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `account_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `staff_role_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `staff_name` VARCHAR(200) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  PRIMARY KEY (`staff_id`),
  INDEX `fk_staffs_roles_idx` (`staff_role_id` ASC) VISIBLE,
  INDEX `fk_staffs_accounts1_idx` (`account_id` ASC) VISIBLE,
  CONSTRAINT `fk_staffs_roles`
    FOREIGN KEY (`staff_role_id`)
    REFERENCES `fhd_cinema`.`staff_roles` (`staff_role_id`),
  CONSTRAINT `fk_staffs_accounts1`
    FOREIGN KEY (`account_id`)
    REFERENCES `fhd_cinema`.`accounts` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `fhd_cinema`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fhd_cinema`.`tickets` (
  `ticket_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL DEFAULT (UUID()),
  `seat_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `booking_id` VARCHAR(36) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NOT NULL,
  `ticket_price` INT UNSIGNED NOT NULL,
  `ticket_create_at` DATETIME NOT NULL,
  PRIMARY KEY (`ticket_id`, `seat_id`),
  INDEX `fk_tickets_bookings_idx` (`booking_id` ASC) VISIBLE,
  INDEX `fk_tickets_seats_idx` (`seat_id` ASC) VISIBLE,
  CONSTRAINT `fk_tickets_bookings`
    FOREIGN KEY (`booking_id`)
    REFERENCES `fhd_cinema`.`bookings` (`booking_id`),
  CONSTRAINT `fk_tickets_seats`
    FOREIGN KEY (`seat_id`)
    REFERENCES `fhd_cinema`.`seats` (`seat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
