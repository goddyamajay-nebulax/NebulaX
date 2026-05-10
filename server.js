const express = require('express');
const app = express();

app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
    res.json({ status: "NebulaX backend running" });
});

app.post('/log', (req, res) => {
    const body = req.body;
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        return res.status(400).json({ error: 'Invalid payload' });
    }
    // Serialize safely to prevent log injection
    console.log("Incoming data:", JSON.stringify(body));
    res.json({ received: true });
});

// Catch-all error handler
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.message);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
