import gql from "graphql-tag"
import { client } from "../ApolloClient/client"


const userWithFetch = async (data) => {
  try {
    const respose = await client.query({
      query: gql`
      query{
        users {
          pageInfo {
            endCursor startCursor hasNextPage hasPreviousPage
          } 
          totalCount nodes {
            id name email gender status
          }
        }
      }`,
    })
    return respose
  } catch (error) {
    console.log('error', error)
    // alert(error)
  }
}

export { userWithFetch }


