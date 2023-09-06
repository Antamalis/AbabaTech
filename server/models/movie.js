const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    rating: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('movie', movieSchema);