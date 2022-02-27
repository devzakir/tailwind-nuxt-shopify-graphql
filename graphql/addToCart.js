import gql from 'graphql-tag'

// export const global = gql`
export default gql`
# Write your query or mutation here
mutation cartCreate($variantId: ID!) {
  cartCreate (
    input: {
      lines: [
        {
          quantity: 1,
          merchandiseId: $variantId
        }
      ],
      attributes: {key: "cart_attribute 1", value: "This is a cart attribute 2"}
    }
  ) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
      attributes {
        key
        value
      }
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      checkoutUrl
    }
  }
}`
