import gql from 'graphql-tag'

// export const global = gql`
export default gql`
# Write your query or mutation here
query {
  collections(first: 10) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        title
        description
        handle
        onlineStoreUrl
        descriptionHtml
        image {
          altText
          url
          id
        }
      }
    }
  }
}
`
