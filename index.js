const express = require("express");

const app = express();

const port = 4000;

app.listen(port, (err) => {
	if (err) {
        return console.log("Error: ", err)
    }
	console.log("Server is listening")
})

app.get("/api", (req, res) => {
	res.send({method: "GET"})
});