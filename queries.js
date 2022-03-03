/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      email
      phone
      imageUrl
      carwash {
        items {
          id
          name
          location
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        imageUrl
        carwash {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCarwash = /* GraphQL */ `
  query GetCarwash($id: ID!) {
    getCarwash(id: $id) {
      id
      name
      location
      imageUrl
      createdAt
      updatedAt
      adminCarwashId
      owner
    }
  }
`;
export const listCarwashes = /* GraphQL */ `
  query ListCarwashes(
    $filter: ModelCarwashFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarwashes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        imageUrl
        createdAt
        updatedAt
        adminCarwashId
        owner
      }
      nextToken
    }
  }
`;
