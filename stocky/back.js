const mysql = require('mysql');
const connection = require('./src/db'); // Importing the database connection

const express = require("express");
const app = express();
const router = express.Router();



router.use(express.json());
router.use(express.urlencoded({extend:true}));
app.use(router)
// router.get('/',(req,res)=>{
//     console.log(`Request at ${req.path}`);
//     //console.log("Retrieve a search page");
//     res.sendFile(path.join(`${__dirname}/L11/search.html`))
// })
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

router.delete("/delete/:userID", async (req, res) => {
    console.log("Deleting user...");
    const userID = req.params.userID; 
    console.log("UserID:", userID);
    let sql = `DELETE FROM admin WHERE AID = ?`; 
    let sql2 = `DELETE FROM Modifyadmin WHERE AID = ?`;
    let sql3 = `DELETE FROM Modifyproduct WHERE AID = ?`;
    let sql4 = `DELETE FROM LogInHistory WHERE AID = ?`;
    
    try {
        await Promise.all([
            connection.query(sql, [userID]),
            connection.query(sql2, [userID]),
            connection.query(sql3, [userID]),
            connection.query(sql4, [userID])
        ]);

        console.log("User deleted successfully from all tables");
        res.status(200).send("User deleted successfully from all tables");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
});

router.put("/modifyuser/:userId", (req, res) => {
    console.log("start back");
    //let { firstname, lastname, phone, email, username, pass } = req.body;
    //console.log(firstname);

    const sql = `INSERT INTO Admin (AID, Username, Aemail, Password, AFname, ALname, PhoneNo) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    let id = `select AID from admin`
    connection.query(sql, ["AID06", req.body.username,req.body.email, req.body.pass, req.body.firstname, req.body.lastname, req.body.phone], (err, result) => {
        if (err) {
            console.error('Error adding data to database:', err);
            res.status(500).send('Error adding data to database');
            return;
        }
        console.log('Data added to database successfully');
        res.status(200).send('Data added to database successfully');
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
        res.status(200).send('Data added to database successfully');
    });
});

router.post("/searchHome", (req, res) => {
    const searchName = req.body.searchName;
    const category = req.body.category;
    const searchBrand =req.body.searchBrand;
    const size = req.body.size;
    const searchAvailable = res.body.searchAvailable;
    let sql ='SELECT * FROM Product WHERE 1=1'

    if (searchName!=null) {
        sql += ` AND P_name LIKE "%${searchName}%"`;
      }

    if (searchBrand!=null) {
    sql += ` AND brand LIKE "%${category}%"`;
    }

        if (searchAvailable === 'true') {
            sql += ' AND quantity > 0';
        } 
        else if (searchAvailable === 'false') {
            sql += ' AND quantity = 0';
        }

    if (size!=='All') {
        sql += ` AND size LIKE "%${category}%"`;
    }

    if (category!=='All') {
        sql += ` AND category LIKE "%${category}%"`;
    }

    connection.query( sql, function (error, results) {
        if (error) throw error;
        console.log(`${results.length} rows returned`);
        return res.send(results);
        
    });
});

router.get("/productdetail/:id", (req, res) => {
    const ProductID = req.params.id;
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


const PORT = 8000;
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
