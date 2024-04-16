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
  `PID` int auto_increment PRIMARY KEY,
  `P_name` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  `quantity` int NOT NULL,
  `Price` double NOT NULL,
  `Pic` blob,
  `Size` double NOT NULL,
  `ReDate` date NOT NULL,
  `Category` varchar(50) NOT NULL,
  `color` varchar(20) NOT NULL,
  CONSTRAINT UQ_Pname UNIQUE (P_name)
);
ALTER TABLE Product AUTO_INCREMENT=300;
insert into `Product` (`P_name`, `Description`,`quantity`, `Price`, `Pic`, `Size`, `ReDate`, `Category`, `color`) values
('product 1', 'this is a product', 9, 9999.00, null, 4, '2022-04-05', 'Man', 'white'),
('product 2', 'this is a product', 2, 9999.00, null, 4.5, '2022-04-05', 'Kid', 'red'),
('product 3', 'this is a product',0 , 9999.00, null, 5, '2022-04-05', 'Man', 'red');


CREATE TABLE IF NOT EXISTS `ModifyProduct` (
  `PID` int NOT NULL,
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
('300', '101', 'user1', '2022-04-07', 'add stock');

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
