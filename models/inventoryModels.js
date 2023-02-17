const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coll = 'inventoryModels'

const inventoryModelSchema = new Schema({
    // an id of a model
    name: String,
    quantity: Number
})


module.exports = mongoose.model("inventoryModels", userSchema, coll)