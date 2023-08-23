// Initialization 
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./models/note");
const password = encodeURIComponent("PjSaha@2861"); // URL-encode the password
const dbUrl = `mongodb+srv://PriyangshuJS:${password}@cluster0.vb3zepa.mongodb.net/your-database-name?retryWrites=true&w=majority`;

// mongoose.connect() needs - Connection String
mongoose.connect(dbUrl).then(function() {
        console.log("Connected to MongoDB");

        // App Routes
        app.get("/", function(req, res) {
            res.send("Hello, this is Home");
        });
        app.get("/notes/list", async function(req, res) {
            var notes= await Note.find(); 
            // - find() function is a promise type function, it cannot fetch values at once , thus req await
            res.send(notes);
        });

        app.get("/notes/newnode", async function(req, res){
            const newNode = new Note({
                id:"e1",
                userid:"test1",
                title:"First Task",
                content:"First task completed",
            });
            await newNode.save();
            const response= {message :"Message Created!!"};
            res.json(response);
        });

        // Starting the server on the Port
        app.listen(5000, function() {
            console.log("Server started at port 5000");
        });
    })
    .catch(function(err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Add this line to rethrow the error and get more detailed error information
    });
