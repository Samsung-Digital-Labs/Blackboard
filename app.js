const express = require ('express');

const app = express();

app.use((req, res, nxt) => {
    res.status(200).json({
        message: "It works",
        id: 1
    });
});

module.exports = app;