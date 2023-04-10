const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coll = 'events'

const userSchema = new Schema({
    name: String,           // Name
    start: Number,          // Event starting date
    end: Number,
    location: String,       // Location of event
})

module.exports = mongoose.model("Event", userSchema, coll)