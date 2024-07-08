const express = require('express');
const cors = require('cors');
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { days } = req.body;
    const hours = days * 24;
    res.json({ hours });
});

app.listen(port, () => {
    console.log(`Microservice Hours listening at http://localhost:${port}`);
});
