export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      email
      phone
      imageUrl
      picture {
        id
        imageUrl
        createdAt
        updatedAt
      }
      request {
        items {
          id
          brand
          regNO
          model
          Desc
          package
          packDesc
          totalDue
          status
          serTime
          userName
          carUrl
          createdAt
          updatedAt
          adminRequestId
        }
        nextToken
      }
      carwash {
        items {
          id
          name
          location
          Desc
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
          carwashLogoId
        }
        nextToken
      }
      createdAt
      updatedAt
      adminPictureId
    }
  }
`;