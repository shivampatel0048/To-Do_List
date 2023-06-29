const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Read 1hr", "Write 1hr", "Learn something new"];

let workItems = [];

app.set("view engine", "ejs"); // For Reference- https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));  // For multiple pages - https://ejs.co/#docs (Layout Section)

app.get("/", (req, res) => {

    let day = date(); // this is called node module For more - https://nodejs.org/api/modules.html#the-module-object

    res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", (req, res) => {

   let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {

    res.render("list", { listTitle: "Work List", newListItems: workItems });

});

app.listen(3000, () => {

    console.log("Server is running on port 3000.");

});