const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coll = 'usersGame'

const userSchema = new Schema({
    name: String,
    age: Number,
    username: String
})

module.exports = mongoose.model("User", userSchema, coll)
