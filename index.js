const express = require('express');
const server = express();
require('dotenv').config()','

const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.send('Hello World');
})

server.listen(PORT, () => console.log(`API running on port ${PORT}`));