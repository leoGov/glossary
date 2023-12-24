const express = require('express');
const createError = require('http-errors');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/glossary', (req, res, next) => {
    try {
        const data = require('./data/glossary.json');
        res.json(data);
    } catch (error) {
        next(createError(500, 'Failed to retrieve glossary data'));
    }
});

app.get('/mindmap', (req, res, next) => {
    try {
        const data = require('./data/mindMap.json');
        res.json(data);
    } catch (error) {
        next(createError(500, 'Failed to retrieve mind map data'));
    }
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});