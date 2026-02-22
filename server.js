const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: "NebulaX backend running 🚀" });
});

app.post('/log', (req, res) => {
    console.log("Incoming data:", req.body);
    res.json({ received: true });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
