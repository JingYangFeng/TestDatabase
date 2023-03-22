import { gql } from "apollo-boost"



const getUsersQuery = gql`
    {
        users {
            id
            username
            name
            age
            badge
            inventory
        }
    }
`


// const getUsersQuery = gql`
//     {
//         users {
//             id
//             username
//             name
//             age
//             badge
//             inventory
//         }
//     }
// `

export { getUsersQuery, }