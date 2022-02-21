import gql from 'graphql-tag'

export default gql`
query collectionByHandle($slug: String!) {
  collection(handle: $slug) {
    title
    description
    id
    handle
    image {
      altText
      url
      id
    }
    products(first: 20) {
      edges {
        cursor
        node {
          title
          description
          id
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
            id
          }
          images(first: 10, sortKey: POSITION) {
            edges {
              cursor
              node {
                altText
                id
                url
              }
            }
          }
        }
      }
    }
  }
}
`
