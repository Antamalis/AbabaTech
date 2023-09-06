const Movie = require('../models/movie');
const mongoose = require('mongoose');

async function getMovies(req, res) {
    const movies = await Movie.find({}).lean();

    res.status(200).json(movies);
}

async function getMovie(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such movie found!'});
    }

    const movie = await Movie.findOne({_id: id}).lean();

    if(!movie){
        return res.status(404).json({error: 'No such movie found!'});
    }

    res.status(200).json(movie);
}

async function createMovie(req, res) {
    const {title, description, rating} = req.body;

    try {
        const movie = await Movie.create({title, description, rating});

        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

async function deleteMovie(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such movie found!'});
    }

    const movie = await Movie.findOneAndDelete({_id: id}).lean();

    if(!movie){
        return res.status(404).json({error: 'No such movie found!'});
    }

    res.status(200).json(movie);
}

async function updateMovie(req, res) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such movie found!'});
    }

    const movie = await Movie.findOneAndUpdate({_id: id}, {
        ...req.body
    }).lean();

    if(!movie){
        return res.status(404).json({error: 'No such movie found!'});
    }

    res.status(200).json(movie);
}

module.exports = {
    createMovie,
    getMovies,
    getMovie,
    deleteMovie,
    updateMovie
}