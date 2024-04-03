const mysql = require('mysql');
const connection = require('./src/db'); // Importing the database connection

const express = require("express");
const app = express();
const router = express.Router();



router.use(express.json());
router.use(express.urlencoded({extend:true}));
app.use(router)
router.get('/',(req,res)=>{
    console.log(`Request at ${req.path}`);
    //console.log("Retrieve a search page");
    res.sendFile(path.join(`${__dirname}/L11/search.html`))
})
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
router.get("/searchresults", (req, res) => {
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
router.post("/adduser", (req, res) => {
    console.log("start back");
    //let { firstname, lastname, phone, email, username, pass } = req.body;
    //console.log(firstname);
    const sql = `INSERT INTO Admin (AID, Username, Aemail, Password, AFname, ALname, PhoneNo) VALUES (?, ?, ?, ?, ?, ?, ?)`;
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
