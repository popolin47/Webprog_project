DROP DATABASE IF EXISTS stocky;
CREATE DATABASE IF NOT EXISTS stocky;
USE stocky;

CREATE TABLE IF NOT EXISTS `Admin` (
  `AID` char(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Aemail` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `AFname` varchar(100) NOT NULL,
  `ALname` varchar(100) NOT NULL,
  `PhoneNo` char(12) NOT NULL
);

insert into `Admin` (`AID`, `Username`, `Aemail`, `Password`, `AFname`, `ALname`, `PhoneNo`) values
('AD001', 'user1', 'user@gmail.com', 'user1234', 'Mongkon', 'Poetpathuhaipiak', '096-191-1112');

-- --------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `LogInHistory` (
  `AID` char(5) NOT NULL,
  `LogID` char(6) NOT NULL,
  `LogDate` date NOT NULL
);

insert into `LogInHistory` (`AID`,`LogID`, `LogDate`) values
('AD001', 'LOG001', '2022-05-01');

-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Product` (
  `PID` char(5) NOT NULL,
  `P_name` char(50) NOT NULL,
  `Description` text NOT NULL,
  `Price` double NOT NULL,
  `Pic` blob,
  `Size` double NOT NULL,
  `quantity` int NOT NULL,
  `ReDate` date NOT NULL,
  `Catagory` char(50) NOT NULL,
  `color` char(20) NOT NULL
);

insert into `Product` (`PID`, `P_name`, `Description`, `Price`, `Pic`, `Size`, `quantity`, `ReDate`, `Catagory`, `color`) values
('PD001', 'product 1', 'this is a product', 9999.00, null, 10.5, 13, '2022-04-05', 'cat', 'white');


-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `ModifyProduct` (
  `PID` char(5) NOT NULL,
  `AID` char(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Action` text NOT NULL
);

insert into `ModifyProduct` (`PID`, `AID`, `Username`, `Date`, `Action`) values
('PD001', 'AD001', 'user1', '2022-04-07', 'add stock');

-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `ModifyAdmin` (
  `AID` char(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Action` text NOT NULL
);

insert into `ModifyAdmin` (`AID`, `Username`, `Date`, `Action`) values
('AD001', 'user1', '2022-04-08', 'chaange password');

alter table `Admin`
	add primary key(`AID`),
    add unique key(`Username`);
alter table `LogInHistory`
	add primary key(`LogID`),
    add foreign key(`AID`) references `Admin`(`AID`);
alter table `Product`
	add primary key(`PID`);
alter table `ModifyProduct`
	add primary key(`PID`, `AID`, `Username`),
	add index (`PID`),
    add foreign key(`PID`) references `Product`(`PID`),
    add foreign key(`AID`) references `Admin`(`AID`),
    add foreign key(`Username`) references `Admin`(`Username`);
alter table `ModifyAdmin`
	add foreign key(`AID`) references `Admin`(`AID`),
	add foreign key(`Username`) references `Admin`(`Username`);