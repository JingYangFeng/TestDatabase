const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql

const _ = require('lodash')
const inventoryModels = require('../models/inventoryModels')
const User = require('../models/user')


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        username: { type: GraphQLString },
        badge: { type: new GraphQLList(GraphQLString) },
        inventory: {type: new GraphQLList(GraphQLID)}
    })
})


const EmailType = new GraphQLObjectType({
    name: 'Email',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})


const inventoryType = new GraphQLObjectType({
    name: 'Inventory',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        quantity: { type: GraphQLInt }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        // Finding users ==================================
        // Finds a single user by id or name
        user: {
            type: UserType,
            args: { 
                id: {type: GraphQLID },
                username: {type: GraphQLString}
            },

            resolve(parent, args){
                // to get data from database / other source
                if (args.username) return User.findOne({username: args.username})
                if (args.id) return User.findById(args.id)
                
            }
        },


        // Lists all users
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({})
            }
        },




        // Finding email ==================================
        email: {
            type: EmailType,
            args: { 
                id: {type: GraphQLID },
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                // to get data from database / other source
                return User.findOne({email: args.id})
                
            }
        },


        // Finding Inventory Items ==================================
        inventory: {
            type: inventoryType,
            args: { 
                id: {type: GraphQLID },
                name: {type: GraphQLString},
            },
            resolve(parent, args){
                // to get data from database / other source
                return inventory.findOne({name: args.id})
                
            }
        }

    }
})


// Mutating data (Adding, editing, deleting)
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        // Add User =================
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                username: { type: GraphQLString},
                badge: { type: new GraphQLList(GraphQLString) },
                inventory:{ type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    age: args.age,
                    username: args.username,
                    badge: args.badge,
                    inventory: args.inventory
                })
                user.save()
            }
        },


        // Update User =================
        updateUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                username: { type: GraphQLString},
                badge: { type: GraphQLString },
                inventory:{ type: GraphQLString }
            },
            resolve(parent, args){
                User.findOneAndUpdate({
                    name: args.name,
                    age: args.age,
                    username: args.username,
                    badge: args.badge,
                    inventory: args.inventory
                })
                
            }
        },

        // Add Inventory Item to overall database =================
        addItem: {
            type: inventoryType,
            args: {
                name: { type: GraphQLString },
                quantity: { type: GraphQLInt }
            },
            resolve(parent, args){
                let user = new Inventory({
                    name: args.name,
                    quantity: args.age
                })
                inventory.save()
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})


// // dummy data
// var dummyUsers = [
//     { name: 'Jason1', age:'20', username:'jasonjason111', id:'1' },
//     { name: 'Ethan', age:'2', username:'twoTwo', id:'2' },
//     { name: 'September', age:'33', username:'threeTh3', id:'3' }
// ]

// var dummyEmails = [
//     { email: 'Jason@gmail.com', password: '123', id:'1' },
//     { email: 'Ethan@gmail.com', password: 'test', id:'2' },
//     { email: 'September@gmail.com', password: 'password123', id:'3' },
// ]
