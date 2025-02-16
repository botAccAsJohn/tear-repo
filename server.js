const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint 1: Home Route
app.get("/", (req, res) => {
    console.log("hello")
    res.send("Welcome to the Express Docker App!");
});

// Endpoint 2: About Route
app.get("/about", (req, res) => {
    res.json({ message: "This is the about page." });
});

// Endpoint 3: Echo Route (POST)
app.post("/echo", (req, res) => {
    res.json({ received: req.body });
});

// Endpoint 4: Status Route
app.get("/status", (req, res) => {
    res.json({ status: "Running", timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
