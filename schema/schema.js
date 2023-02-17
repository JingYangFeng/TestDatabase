const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql

const _ = require('lodash')
const User = require('../models/user')


// dummy data
var dummyUsers = [
    { name: 'Jason1', age:'20', username:'jasonjason111', id:'1' },
    { name: 'Ethan', age:'2', username:'twoTwo', id:'2' },
    { name: 'September', age:'33', username:'threeTh3', id:'3' }
]

var dummyEmails = [
    { email: 'Jason@gmail.com', password: '123', id:'1' },
    { email: 'Ethan@gmail.com', password: 'test', id:'2' },
    { email: 'September@gmail.com', password: 'password123', id:'3' },
]


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        username: { type: GraphQLString },
        badge: { type: GraphQLString }
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
        }
    }
})


// Mutating data (Adding, editing, deleting)
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                username: { type: GraphQLString},
                badge: { type: GraphQLString }
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    age: args.age,
                    username: args.username,
                    badge: args.badge
                })
                user.save()
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})