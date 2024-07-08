const express = require('express');
const cors = require('cors');
const app = express();
const port = 4002;

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { days } = req.body;
    const minutes = days * 24 * 60;
    res.json({ minutes });
});

app.listen(port, () => {
    console.log(`Microservice Minutes listening at http://localhost:${port}`);
});
