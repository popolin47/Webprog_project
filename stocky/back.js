const mysql = require('mysql');
const path = require('path');
const dotenv = require("dotenv");
const express = require("express");
const { default: userEvent } = require('@testing-library/user-event');
const app = express();
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extend:true}));
app.use(router)



router.use(express.json());
router.use(express.urlencoded({extend:true}));
app.use(router)
dotenv.config();

const PORT = process.env.MYSQL_PORT;

const connection = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}); // Importing the database connection

router.get('/', (req, res) => {
    res.send('hey');
});

router.get("/usermanage", (req, res) => {
    console.log("Fetching users...");
    let sql = `SELECT * FROM admin`; // Assuming 'admin' is the name of your table
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Error fetching users:", error);
            return res.status(500).send("Error fetching users");
        }
        console.log(`${results.length} rows returned`);
        console.log(results)
        res.send(results);
    });
});

router.get("/searchadmin", (req, res) => {
    const query = req.query.query;
  const sql = `SELECT * from admin WHERE CONCAT(Afname,Alname) LIKE "%${query}%"`;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error searching in MySQL:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(results);
  });
});
router.post("/advancedsearchadmin", (req, res) => {
    console.log("Request body:", req.body);
    const { userID, username, firstname, lastname, phone, email } = req.body;
    console.log("UserID:", userID);
    let sql = '';
    let params;
    if (userID) {
        sql = 'Select * FROM admin WHERE AID = ?';
        params = userID;
    } else if (username) {
        sql = 'Select * FROM admin WHERE Username = ?';
        params = username;
    }else if(firstname){
        sql = 'Select * FROM admin WHERE AFname = ?';
        params = firstname;
    }else if(lastname){
        sql = 'Select * FROM admin WHERE ALname = ?';
        params = lastname;
    }else if(phone){
        sql = 'Select * FROM admin WHERE PhoneNo = ?';
        params = phone;
    }else if(email){
        sql = 'Select * FROM admin WHERE Aemail = ?';
        params = email;
    }
        connection.query(sql, [params], (err, result) => {

            if (err) {
                console.error('Error adding data to database:', err);
                res.status(500).send('Error adding data to database');
                return;
            }
            console.log('Find success');
            console.log(result)
            res.send(result);
        });
    });
    
router.get("/ProductManage", (req, res) => {
    console.log("Fetching products...");
    let sql = `SELECT * FROM Product`;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Error fetching products:", error);
            return res.status(500).send("Error fetching products");
        }
        console.log(`${results.length} rows returned`);
        res.send(results);
    });
});

router.delete("/delete/:userID", async (req, res) => {
    console.log("Deleting user...");
    const userID = req.params.userID; 
    console.log("UserID:", userID);
    
    let sql2 = `DELETE FROM Modifyadmin WHERE AID = ?`;
    let sql3 = `DELETE FROM Modifyproduct WHERE AID = ?`;
    let sql4 = `DELETE FROM LogInHistory WHERE AID = ?`;
    let sql = `DELETE FROM admin WHERE AID = ?`; 
    
    try {
        await Promise.all([
            
            connection.query(sql2, [userID]),
            connection.query(sql3, [userID]),
            connection.query(sql4, [userID]), connection.query(sql, [userID])
        ]);

        console.log("User deleted successfully from all tables");
        res.status(200).send("User deleted successfully from all tables");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
});

router.delete("/deleteProduct/:productID", async (req, res) => {
    console.log("Deleting Product...");
    const productID = req.params.productID;
    console.log("ProductID:", productID);

    let sql = `DELETE FROM Product WHERE PID = ?`;
    let sql2 = `DELETE FROM ModifyProduct WHERE PID = ?`;
    
    try {
        await Promise.all([
            connection.query(sql, [productID]),
            connection.query(sql2, [productID])
        ]);

        console.log("Product deleted successfully from all tables");
        res.status(200).send("Product deleted successfully from all tables");
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send("Error deleting product");
    }
});

router.put("/modifyuser/:userId", (req, res) => {
    console.log("start back");
    //let { firstname, lastname, phone, email, username, pass } = req.body;
    //console.log(firstname);
    const userid = req.params.userId;
    const Password = req.body.Password;
    const username = req.body.Username;
    const firstname = req.body.Afname;
    const lastname= req.body.Alname;
    const phone= req.body.PhoneNo;
    const email= req.body.Aemail;
 
    console.log(req.body)
     if (username) {
        sql = 'UPDATE  admin set Username = ? WHERE AID = ?';
        params = username;
    }else if(firstname){
        sql = 'UPDATE  admin set AFname = ? WHERE AID = ?';
        params = firstname;
    }else if(lastname){
        sql = 'UPDATE  admin set ALname = ? WHERE AID = ?';
        params = lastname;
    }else if(phone){
        sql = 'UPDATE  admin set PhoneNo = ? WHERE AID = ?';
        params = phone;
    }else if(email){
        sql = 'UPDATE  admin set Aemail = ? WHERE AID = ?';
        params = email;
    }else if(Password){
        sql = 'UPDATE  admin set Password = ? WHERE AID = ?';
        params = Password;
    }
    // const sql = `UPDATE  Admin (AID, Username, Aemail, Password, AFname, ALname, PhoneNo) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    // let id = `select AID from admin`
    connection.query(sql, [params, userid], (err, result) => {
        if (err) {
            console.error('Error updating data to database:', err);
            res.status(500).send('Error updating data to database');
            return;
        }
        console.log('Data updated to database successfully');
        res.status(200).send('Data updated to database successfully');
    });
});

router.put("/ModifyProduct/:productID", (req, res) => {
    console.log("Updating product...");
    const productID = req.params.productID;
    const productName = req.body.P_name;
    const Des = req.body.Description;
    const quantity = req.body.quantity;
    const price = req.body.Price;
    const pic = req.body.pic;
    const size = req.body.Size;
    const Redate = req.body.ReDate;
    const collection = req.body.Catagory;
    const color = req.body.color;
    let productSet = {};
    const sql = `UPDATE Product SET ? WHERE PID = ?`;

    if (productName != null) {
        productSet.P_name = productName;
    }
    if (Des != null) {
        productSet.Description = Des;
    }
    if (price != null) {
        productSet.Price = price;
    }
    if (quantity != null){
        productSet.quantity = quantity;
    }
    if (pic != null) {
        productSet.pic = pic;
    }
    if (size != null) {
        productSet.Size = size;
    }
    if (Redate != null) {
        productSet.ReDate = Redate;
    }
    if (collection != null) {
        productSet.Catagory = collection;
    }
    if (color != null) {
        productSet.color = color;
    }

    connection.query(sql, [productSet, productID], (err, result) => {
        if (err) {
            console.error('Error updating data in database:', err);
            return res.status(500).send('Error updating data in database');
        }
        console.log('Product updated successfully');
        res.status(200).send('Product updated successfully');
    });
});


router.post("/adduser", (req, res) => {
    console.log("start back");
    //let { firstname, lastname, phone, email, username, pass } = req.body;
    //console.log(firstname);
    const sql = `INSERT INTO Admin ( Username, Aemail, Password, AFname, ALname, PhoneNo) VALUES ( ?, ?, ?, ?, ?, ?)`;
    let id = `select AID from admin`
    connection.query(sql, [req.body.username,req.body.email, req.body.pass, req.body.firstname, req.body.lastname, req.body.phone], (err, result) => {

        if (err) {
            console.error('Error adding data to database:', err);
            res.status(500).send('Error adding data to database');
            return;
        }
        console.log('Data added to database successfully');
        res.status(200).sendFile(path.join(`${__dirname}/src/Usermanage.jsx`));
    });
});


router.post("/AddProduct", (req, res) => {
    console.log("Adding new product...");
    const productID =  req.body.PID;
    const productName = req.body.P_name;
    const Des = req.body.Description;
    const quantity = req.body.quantity;
    const price = req.body.Price;
    const pic = req.body.pic;
    const size = req.body.Size;
    const Redate = req.body.ReDate;
    const collection = req.body.Catagory;
    const color = req.body.color;

    const sql = `INSERT INTO Product (PID, P_name, Description, quantity, Price, Pic, Size, ReDate, Catagory, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(sql, [productID, productName, Des, quantity, price, pic, size, Redate, collection, color], (err, result) => {
        if (err) {
            console.error('Error adding data to database:', err);
            return res.status(500).send('Error adding data to database');
        }
        console.log('New product added successfully');
        res.status(200).send('New product added successfully');
    });
});

router.get("/searchHome", (req, res) => {
    const searchName = req.body.searchName;
    const searchcolor = req.body.searchcolor;
    const category = req.body.category;
    const size = req.body.size;
    const searchAvailable = req.body.isAvailable;
    let sql ='SELECT * FROM Product WHERE 1=1'

    if (searchName !== '') {
        sql += ` AND P_name LIKE "${searchName}"`;
    }

    if (searchcolor !== '') {
        sql += ` AND color LIKE "${searchcolor}"`;
    }

        if (searchAvailable === 'true') {
            sql += ' AND quantity > 0';
        } 
        else if (searchAvailable === 'false') {
            sql += ' AND quantity = 0';
        }

    if (size !== 'All') {
        sql += ` AND size LIKE "${size}"`;
    }

    if (category !== 'All') {
        sql += ` AND category LIKE "${category}"`;
    }

    connection.query(sql, function (error, results) {
        if (error) {
            console.error('Error executing SQL query:', error);
            return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        console.log(sql);
        console.log(`${results.length} rows returned`);
        return res.json(results);
    });
});

router.get("/productdetail/:id", (req, res) => {
    const ProductID = req.params.id;
    console.log(ProductID);
    if (!ProductID) {
        return res.status(400).send({ error: true, message: 'Please provide a valid product id.' });
    }
    connection.query('SELECT * FROM Product WHERE PID = ?', ProductID, function (error, results) {
        if (error) {
            throw error;
        }
        return res.send({ error: false, data: results[0], message: '' });
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    // Ensure the database connection is established when the server starts
    connection.connect(function(err) {
        if (err) {
            console.error("Error connecting to database:", err);
            process.exit(1); // Exit the process if database connection fails
        }
        console.log('Connected to database');
    });
});
