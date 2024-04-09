DROP DATABASE IF EXISTS stocky;
CREATE DATABASE IF NOT EXISTS stocky;
USE stocky;

CREATE TABLE IF NOT EXISTS `Admin` (

  `AID` int auto_increment PRIMARY KEY,
  `Username` VARCHAR(100) NOT NULL,
  `Aemail` VARCHAR(100) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  `AFname` VARCHAR(100) NOT NULL,
  `ALname` VARCHAR(100) NOT NULL,
  `PhoneNo` CHAR(12) NOT NULL,
  CONSTRAINT UQ_Username UNIQUE (Username)
);

CREATE TABLE IF NOT EXISTS `LogInHistory` (
  `AID` int NOT NULL,
  `LogID` CHAR(6) NOT NULL,
  `LogDate` DATE NOT NULL,
  `Username` VARCHAR(100) NOT NULL,
  CONSTRAINT PK_login PRIMARY KEY (LogID),
  CONSTRAINT FK_AID_LogInHistory FOREIGN KEY (AID) REFERENCES Admin(AID),
  CONSTRAINT FK_Username_LogInHistory FOREIGN KEY (Username) REFERENCES Admin(Username)
);

ALTER TABLE admin AUTO_INCREMENT=100;

INSERT INTO `Admin` (`Username`, `Aemail`, `Password`, `AFname`, `ALname`, `PhoneNo`) VALUES
('user1', 'user@gmail.com', 'user1234', 'Mongkon', 'Poetpathuhaipiak', '096-191-1112'),
('user2', 'user2@gmail.com', 'user1244', 'Mongk1on', '1Poetpathuhaipiak', '096-190-1112');

INSERT INTO `LogInHistory` (`AID`, `LogID`, `LogDate`, `Username`) VALUES
('101', 'LOG001', '2022-05-01', 'user1');

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

CREATE TABLE IF NOT EXISTS `ModifyProduct` (
  `PID` CHAR(5) NOT NULL,
  `AID` int NOT NULL,
  `Username` VARCHAR(100) NOT NULL,
  `Date` DATE NOT NULL,
  `Action` TEXT NOT NULL,
  CONSTRAINT PKmodi__admin PRIMARY KEY (PID, AID),
  CONSTRAINT FK_PID FOREIGN KEY (PID) REFERENCES Product(PID),
  CONSTRAINT FK_Aid_pro FOREIGN KEY (AID) REFERENCES Admin(AID),
  CONSTRAINT FK_user FOREIGN KEY (Username) REFERENCES Admin(Username)
);

INSERT INTO `ModifyProduct` (`PID`, `AID`, `Username`, `Date`, `Action`) VALUES
('PD001', '101', 'user1', '2022-04-07', 'add stock');

CREATE TABLE IF NOT EXISTS `ModifyAdmin` (
  `AID` int NOT NULL,
  `Username` VARCHAR(100) NOT NULL,
  `Date` DATE NOT NULL,
  `Action` TEXT NOT NULL,
  CONSTRAINT PKmodi__admin PRIMARY KEY (AID, Username),
  CONSTRAINT FK_Aid_ad FOREIGN KEY (AID) REFERENCES Admin(AID),
  CONSTRAINT FK_user_ad FOREIGN KEY (Username) REFERENCES Admin(Username)
);

INSERT INTO `ModifyAdmin` (`AID`, `Username`, `Date`, `Action`) VALUES
('101', 'user1', '2022-04-08', 'change password');
