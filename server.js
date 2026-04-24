const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 }
    ]);
});

app.get('/', (req, res) => {
    res.send("Backend running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
