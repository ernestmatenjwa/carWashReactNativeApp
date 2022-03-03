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
          Desc
          imageUrl
          createdAt
          updatedAt
          adminCarwashId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      Desc
      imageUrl
      createdAt
      updatedAt
      adminCarwashId
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
        Desc
        imageUrl
        createdAt
        updatedAt
        adminCarwashId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      phone
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVehicleType = /* GraphQL */ `
  query GetVehicleType($id: ID!) {
    getVehicleType(id: $id) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listVehicleTypes = /* GraphQL */ `
  query ListVehicleTypes(
    $filter: ModelVehicleTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicleTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
