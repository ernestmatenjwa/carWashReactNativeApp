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
export const getRegisteredCars = /* GraphQL */ `
  query GetRegisteredCars($id: ID!) {
    getRegisteredCars(id: $id) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listRegisteredCars = /* GraphQL */ `
  query ListRegisteredCars(
    $filter: ModelRegisteredCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisteredCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        brand
        regNO
        model
        Desc
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCars = /* GraphQL */ `
  query GetCars($id: ID!) {
    getCars(id: $id) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        brand
        regNO
        model
        Desc
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRequests = /* GraphQL */ `
  query GetRequests($id: ID!) {
    getRequests(id: $id) {
      id
      brand
      regNO
      userName
      package
      totalDue
      status
      carwash
      o_date
      createdAt
      updatedAt
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        regNO
        userName
        package
        totalDue
        status
        carwash
        o_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
