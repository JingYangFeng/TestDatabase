import { gql } from "apollo-boost"



// Search
const GET_USERS_QUERY = gql`
    {
        users {
            id,
            username,
            name,
            email,
            password,
            age,
            badge,
            inventory,
            wallet
        }
    }
`

const GET_USER = gql`
    query user( $username: String!, $email: String! ) {
        user( username: $username, email: $email ) {
            
            id,
            username,
            name,
            email,
            password,
            age,

            inventory,
            badge,
            wallet

        }
    }
  
`



// Mutate
const ADD_USER = gql`
    mutation addUser( $name: String!, $username: String!, $email: String!, $password: String!,  $dateofBirth: Int!, $age: Int!, $wallet: Float!) {
        addUser( name: $name, username: $username, email: $email, password: $password, dateofBirth: $dateofBirth, age: $age, wallet: $wallet ) {
            username,
            name,
            email,
            password
            dateofBirth,
            age,
            
            badge,
            inventory,
            wallet
        }
    }
`

export { GET_USERS_QUERY, ADD_USER, GET_USER, }