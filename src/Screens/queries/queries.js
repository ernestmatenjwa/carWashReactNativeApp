export const getRegCars = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      car {
        items {
          id
          brand
          regNO
          model
          Desc
          imageUrl
          createdAt
          updatedAt
          userCarId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPictureId
    }
  }
`;