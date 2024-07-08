const express = require('express');
const cors = require('cors');
const app = express();
const port = 4003;

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { days } = req.body;
    const seconds = days * 24 * 60 * 60;
    res.json({ seconds });
});

app.listen(port, () => {
    console.log(`Microservice Seconds listening at http://localhost:${port}`);
});
