const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    _id: String,
    location: {
       long: Number,
       lat: Number 
    }
})

module.exports = mongoose.model("location", LocationSchema);