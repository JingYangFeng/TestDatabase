const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coll = 'users'

const userSchema = new Schema({
    name: String,           // Name
    age: Number,            // Age
    username: String,       // Username
    
    badge: Array,           // Badge:  Ex Beginner, Advance, etc. (Each badge has certain permissions. Level+1 has all permisions of Levels and a few more)
                            //         Ex an Intermediate level has all permissions as Beginner level + a few more
    inventory: Array,       // Each element in this array has the id for the specific models in inventoryModels collection
    eventsRegistered: Array
})


// Badge Details -------------
//  Badge levels uncertain for now
//  - First level (new users)
//      - Optional tutorial
//      - This level is time dependent (time stamp table)

// ==============================
// Definitive to adds:
//     - Wallet
//         - Under construction
    
//     - Games
//         - Under construction


// ========================
// To adds:
//      History location
//          - This is to show existing user
//          - Will take up a lot of space if we have duplicate accounts
//
//      Device type
//          - IOS, Android, Desktop, etc.
//          - For security (include this in a user session table, which is a unique table)
//          - Do we have data for this app?
//
//      User type
//          - Educator
//          - Student
//          - Admin
//          - Others...

//  ---------
// Spotstitch Game Engine
//      Inventory: Array
//          - The image is 2D, but it is tied to a 3D object (like a thumbnail tied to a video, thumbnail takes less space to represent the video)
// 
//      Events Table
//          - Spotstich has a feature that allows users to sign up for events in inputed locations
//          - Mapping user to this table if they are participating in this event
//              - events: Array
//                  - contains all events that the user is participating in
//                  - Once event times out, is put into user's history array so they can look back onto it  

// ========================

module.exports = mongoose.model("User", userSchema, coll)
