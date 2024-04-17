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
('S_Coups', 's_coups@gmail.com', 'password1', 'Choi', 'Seung-cheol', '0921234567'),
('Jeonghan', 'jeonghan@gmail.com', 'password2', 'Yoon', 'Jeong-han', '0922345678'),
('Joshua', 'joshua@gmail.com', 'password3', 'Joshua', 'Hong', '0923456789'),
('Jun', 'jun@gmail.com', 'password4', 'Wen', 'Jun-hui', '0924567890'),
('Hoshi', 'hoshi@gmail.com', 'password5', 'Kwon', 'Soon-young', '0925678901'),
('Wonwoo', 'wonwoo@gmail.com', 'password6', 'Jeon', 'Won-woo', '0926789012'),
('Woozi', 'woozi@gmail.com', 'password7', 'Lee', 'Ji-hoon', '0927890123'),
('DK', 'dk@gmail.com', 'password8', 'Lee', 'Seok-min', '0928901234'),
('Mingyu', 'mingyu@gmail.com', 'password9', 'Kim', 'Min-gyu', '0929012345'),
('The8', 'the8@gmail.com', 'password10', 'Xu', 'Minghao', '0920123456'),
('Seungkwan', 'seungkwan@gmail.com', 'password11', 'Boo', 'Seung-kwan', '0921234567'),
('Vernon', 'vernon@gmail.com', 'password12', 'Hansol', 'Chwe', '0922345678'),
('Dino', 'dino@gmail.com', 'password13', 'Lee', 'Chan', '0923456789');


INSERT INTO `LogInHistory` (`AID`, `LogID`, `LogDate`, `Username`) VALUES
('101', 'LOG001', '2022-05-01', 'Jun');

CREATE TABLE IF NOT EXISTS `Product` (
  `PID` int auto_increment PRIMARY KEY,
  `P_name` varchar(100) NOT NULL,
  `Description` text ,
  `quantity` int NOT NULL,
  `Price` double NOT NULL,
  `Pic` text ,
  `Size` double NOT NULL,
  `ReDate` date NOT NULL,
  `Category` varchar(50) NOT NULL,
  `color` varchar(20) NOT NULL,
  CONSTRAINT UQ_Pname UNIQUE (P_name)
);
ALTER TABLE Product AUTO_INCREMENT=300;
insert into `Product` (`P_name`, `Description`,`quantity`, `Price`, `Pic`, `Size`, `ReDate`, `Category`, `color`) values
('Jordan 4 Retro', 'The Air Jordan 4 Retro Military Blue 2024 stands as a beacon of Jordan Brand innovation and style.'
, 9, 265.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbzHezVDrShuxVtLLJ_neFlaeug6Ie_rCsr_u916vHoVZEiYxSuBf8AU9X4cyWbM0-Tev2fzvT7bFdgdJKyTT3vfFXskrYB5g=s2560', 4, '2024-04-05', 'Man', 'white'),
('Nike Dunk Low Retro', 'From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985.',
 2, 93.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbwHG9RxZrgprX6US3HGqJ0Tzi-qBf5uEXM4n3wemZbUR9RDelLfsobGrgovtZZo1GQGTRF2AKn8fUp6p2Plsu7WG6S0hdCkig=s2560', 4.5, '2021-10-03', 'Kid', 'black'),
('3Jordan 4 Retro Bred Reimagined', 'Rediscover a classic with the Jordan 4 Retro Bred Reimagined, dropping on February 17, 2024. This sneaker is a fresh take on the iconic Jordan 4, bringing a contemporary edge to a timeless design. ',
0 , 86.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYnOVLmDTwEx4bmV_EqZT5q5ExA4UXgr_31w5OB6SW4k04s7St3968KWQ7-CE4NFc_qu0OOi2t5wubjMYM8rV4KDxXGA-cx0lA=s1600-v0', 5, '2024-02-17', 'Man', 'red'),
('Nike Air Max 1 Jackie Robinson', 'Step into a legacy of greatness with the Nike Air Max 1 86 Jackie Robinson, an exquisite sneaker that celebrates the trailblazing spirit of the iconic baseball legend. ',
3 , 310.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihb6PrHCrOl8pSjAeaITYZjbUc9ggOCzkEU3-242FTXPvSDOp4dlxKX5cf_vt6evORvywySGBL_dHTgD433yPvrN4k5T3gCln9U=s1600-v0', 5.5, '2024-04-15', 'Man', 'blue'),
('Nike Dunk Low Polar Blue', 'The Nike Dunk Low in Polar Blue is a unique and crisp colorway of the Dunk Low shoes traditionally worn on the basketball court since the mid-1980s.',
0 , 99.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbgQOu8vzPSq33yGx-6cT4Wqb8d8jlqIN9U6z3-nSbplo13B-sBry2mxrDnsYpFC7kzAXwo4WMsOBarAkHXU2enGz_YqzMFbHI=s1600-v0', 4.5, '2023-10-14', 'Man', 'blue'),
('Nike Dunk Low Chlorophyll', 'The Nike Dunk Low Chlorophyll features a light green smooth leather upper with darker green overlays and white Swooshes. Woven tongue labels and Nike embroideries on the heel tabs add a retro look. At the base, a white and green foam sole completes the design.',
0 , 164.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbWYTiVEV99HdmYliQ6cvD1jrXZqzHxlNANDDQ82UpZLCMetGf-5jN5DeGrySBEfr6whzKzhmtUMujFbJGWuNBYw1DoelOUsuA=s1600-v0', 6, '2022-08-07', 'Man', 'green'),
('Nike Dunk Low Light Bone Rough Red', null,
2 , 65.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZe7-FOcZvnF6hQ1xRBPNXYnGrVz9KMzc3e8ZdxllrMLc5ouQZEFUCrKgKP9T756wUJOgcSTTioX0vU3fWt6rnCcq4uMu7i4Hg=s1600-v0', 4.5, '2003-01-01', 'Man', 'brown'),
('Nike Dunk Low Rose Whisper', 'The Nike Dunk Low Rose Whisper arrives in a classic two-tone color blocked look similar to the original Nike Dunks of the 1980s. This Dunk offers a warm palette primed for the summer weather, with a white and Rose Whisper leather construction.',
10 , 79.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYt-UNrArsmJroDQ9U-06SXMvYiAXCqL5kjSB7Rds0P-EXxXVby8UdWUAs-mbXPTW3LaWtUugotjOdSMGaty03GvG4ce5D2mQ=s1600-v0', 4, '2024-08-03', 'Woman', 'pink'),
('Nike Dunk Low Give Her Flowers', null,
13 , 218.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYBejEj4yF_VXMUn2BntwxCvLyqZIww4nyscZ0mLBM39PX6iXGIVRGqvBjSKw0qLEx95YJtG_YbVwk-wc0KObpOvIubbns4f5A=s1600-v0', 5, '2024-08-03', 'Woman', 'pink'),
('Nike Dunk Low Cacao Wow', 'Nike did it again on July 28, 2023, when they dropped the Dunk Low in the enticing Cacao Wow colorway. This shoe is a surefire hit for those who crave unique kicks.',
3 , 114.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbpP1lgd7L9sY-VOB1AQqBdUyJHCQSQayl5ewCb6pd6TBDcMTVZKZdEHuqfQ_68-ve5EbbCQIP5j3yqWbEEUpQ2uh-seJXNZXg=s1600-rw-v1', 5, '2023-07-28', 'Woman', 'brown'),
('Nike Dunk Low Valentine', 'The Nike Dunk Low Valentines Day (2024) (Women) reconfigures the colors and fabrics of a classic silhouette. The bold, romantic colors of this sneaker specifically sized for women complement the Nike Dunk dependability.',
5 , 98.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihby1cG2FkR7bgE830RPTNqfutsRw6Q2eraQoCIIsc5-85-2SIKu3_wZsLztHHw7dj2YboAabOwkALv5d-QPlxv6wSg8eziCh-0=s2560',4.5,'2023-07-28', 'Woman', 'red'),
('adidas Campus 00s Grey Gum ', 'The adidas Campus 00s Grey Gum (GS) was designed particularly for grade schoolers and comes in a Grey Three and Cloud White colorway.',
13 , 80.00, 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZVQgDnK7YTha1f1o7gtZeXl6YfMa3FDtciJ6mK1Bu9vmvljv6quJz7qGVTZeD_uZti5fTlZ-V_c79niszyDQjLIzknS1fSuLg=s1600-rw-v1', 5, '2024-02-18', 'Kid', 'grey')
;


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
('300', '101', 'Jun', '2022-04-07', 'add stock');

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
('101', 'Jun', '2022-04-08', 'change password');
