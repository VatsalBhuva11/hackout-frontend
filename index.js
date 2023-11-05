const express = require("express")
require("dotenv").config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/doctor/auth", (req, res) => {
    res.render("doctor-auth");
})


app.get("/patient/dashboard", (req, res) => {
    res.render("user-dashboard");
})

app.get("/patient/auth", (req, res) => {
    res.render("patient-auth");
})

const PORT = process.env.PORT || 5050
app.listen(5050, ()=>{
    console.log(`Listening on port ${PORT}`);
})