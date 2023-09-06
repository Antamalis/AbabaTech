const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Get all movies"})
});

router.get('/:id', (req, res) => {
    res.json({message: "Get a specific movie"})
});

router.post('/', (req, res) => {
    res.json({message: "Add a new movie"})
})

router.delete('/:id', (req, res) => {
    res.json({message: "Delete a specific movie"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "Update a specific movie"})
})

module.exports = router;