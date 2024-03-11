const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    _id: String,
    coords: {
       lat: Number,
       lng: Number 
    }
})

module.exports = mongoose.model("location", LocationSchema);