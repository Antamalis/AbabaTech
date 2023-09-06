const express = require("express");
const Movie = require('../models/movie');
const { createMovie, getMovies, getMovie, deleteMovie, updateMovie } = require('../controllers/movieController');

const router = express.Router();

router.get('/', getMovies);

router.get('/:id', getMovie);

router.post('/', createMovie)

router.delete('/:id', deleteMovie)

router.patch('/:id', updateMovie)

module.exports = router;