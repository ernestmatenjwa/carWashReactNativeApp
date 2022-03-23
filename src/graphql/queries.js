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
        picture {
          id
          imageUrl
          createdAt
          updatedAt
        }
        request {
          nextToken
        }
        carwash {
          nextToken
        }
        createdAt
        updatedAt
        adminPictureId
      }
      nextToken
    }
  }
`;
export const getAdminRequests = /* GraphQL */ `
  query GetAdminRequests($id: ID!) {
    getAdminRequests(id: $id) {
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
  }
`;
export const listAdminRequests = /* GraphQL */ `
  query ListAdminRequests(
    $filter: ModelAdminRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getAdminPic = /* GraphQL */ `
  query GetAdminPic($id: ID!) {
    getAdminPic(id: $id) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listAdminPics = /* GraphQL */ `
  query ListAdminPics(
    $filter: ModelAdminPicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminPics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
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
      logo {
        id
        imageUrl
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      adminCarwashId
      carwashLogoId
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
        logo {
          id
          imageUrl
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        adminCarwashId
        carwashLogoId
      }
      nextToken
    }
  }
`;
export const getBusinessLogo = /* GraphQL */ `
  query GetBusinessLogo($id: ID!) {
    getBusinessLogo(id: $id) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listBusinessLogos = /* GraphQL */ `
  query ListBusinessLogos(
    $filter: ModelBusinessLogoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessLogos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        createdAt
        updatedAt
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
      request {
        items {
          id
          brand
          regNO
          model
          Desc
          location
          package
          packDesc
          totalDue
          status
          carwashName
          serTime
          userName
          carUrl
          createdAt
          updatedAt
          userRequestId
        }
        nextToken
      }
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
      picture {
        id
        imageUrl
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPictureId
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
        request {
          nextToken
        }
        car {
          nextToken
        }
        picture {
          id
          imageUrl
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPictureId
      }
      nextToken
    }
  }
`;
export const getRegisteredCars = /* GraphQL */ `
  query GetRegisteredCars($id: ID!) {
    getRegisteredCars(id: $id) {
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
  }
`;
export const getUserRequests = /* GraphQL */ `
  query GetUserRequests($id: ID!) {
    getUserRequests(id: $id) {
      id
      brand
      regNO
      model
      Desc
      location
      package
      packDesc
      totalDue
      status
      carwashName
      serTime
      userName
      carUrl
      createdAt
      updatedAt
      userRequestId
    }
  }
`;
export const listUserRequests = /* GraphQL */ `
  query ListUserRequests(
    $filter: ModelUserRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        regNO
        model
        Desc
        location
        package
        packDesc
        totalDue
        status
        carwashName
        serTime
        userName
        carUrl
        createdAt
        updatedAt
        userRequestId
      }
      nextToken
    }
  }
`;
export const getUserPic = /* GraphQL */ `
  query GetUserPic($id: ID!) {
    getUserPic(id: $id) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listUserPics = /* GraphQL */ `
  query ListUserPics(
    $filter: ModelUserPicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
