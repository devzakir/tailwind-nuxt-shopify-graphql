import gql from 'graphql-tag'

export default gql`
query {
  products (first: 20) {
    edges {
      cursor
      node {
        id
        handle
        title
        onlineStoreUrl
        vendor
        productType
        tags
        description
        descriptionHtml
        seo {
          title
          description
        }
        featuredImage {
          id
          altText
          url
        }
        images(first: 10) {
          edges {
            cursor
            node {
              altText
              id
              url
            }
          }
        }
        collections(first: 2) {
          edges {
            cursor
            node {
              id
              title
              handle
            }
          }
        }
        options {
          id
          name
          values
        }
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
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`
