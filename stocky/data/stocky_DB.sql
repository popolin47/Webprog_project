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
  `PhoneNo` char(12) NOT NULL,
  constraint PK_admin Primary key (AID),
  CONSTRAINT UQ_Username UNIQUE (Username)
);

insert into `Admin` (`AID`, `Username`, `Aemail`, `Password`, `AFname`, `ALname`, `PhoneNo`) values
('AD001', 'user1', 'user@gmail.com', 'user1234', 'Mongkon', 'Poetpathuhaipiak', '096-191-1112');

-- --------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `LogInHistory` (
  `AID` char(5) NOT NULL,
  `LogID` char(6) NOT NULL,
  `LogDate` date NOT NULL,
  `Username` varchar(100) NOT NULL,
   constraint PK_login Primary key (LogID),
   Constraint FK_Aid FOREIGN KEY (AID)
	REFERENCES Admin(AID),
	Constraint FK_Username FOREIGN KEY (Username)
	REFERENCES Admin(Username)
);

insert into `LogInHistory` (`AID`,`LogID`, `LogDate`,`Username`) values
('AD001', 'LOG001', '2022-05-01','user1');

-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Product` (
  `PID` char(5) NOT NULL,
  `P_name` char(50) NOT NULL,
  `Description` text NOT NULL,
  `Price` double NOT NULL,
  `Pic` blob,
  `Size` double NOT NULL,
  `ReDate` date NOT NULL,
  `Catagory` char(50) NOT NULL,
  `color` char(20) NOT NULL,
  constraint PK_pid Primary key (PID)
);

insert into `Product` (`PID`, `P_name`, `Description`, `Price`, `Pic`, `Size`, `ReDate`, `Catagory`, `color`) values
('PD001', 'product 1', 'this is a product', 9999.00, null, 10.5, '2022-04-05', 'cat', 'white');


-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `ModifyProduct` (
  `PID` char(5) NOT NULL,
  `AID` char(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Action` text NOT NULL,
  CONSTRAINT PKmodi__admin PRIMARY KEY (PID, AID),
  CONSTRAINT FK_PID FOREIGN KEY (PID) REFERENCES Product(PID),
  CONSTRAINT FK_Aid_pro FOREIGN KEY (AID) REFERENCES Admin(AID),
  CONSTRAINT FK_user FOREIGN KEY (Username) REFERENCES Admin(Username)
);


insert into `ModifyProduct` (`PID`, `AID`, `Username`, `Date`, `Action`) values
('PD001', 'AD001', 'user1', '2022-04-07', 'add stock');

-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `ModifyAdmin` (
  `AID` char(5) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Action` text NOT NULL,
   constraint PKmodi__admin Primary key (AID,Username),
   Constraint FK_Aid_ad FOREIGN KEY (AID)
	REFERENCES Admin(AID),
	Constraint FK_user_ad  FOREIGN KEY (Username)
	REFERENCES Admin(Username)
);

insert into `ModifyAdmin` (`AID`, `Username`, `Date`, `Action`) values
('AD001', 'user1', '2022-04-08', 'chaange password');
