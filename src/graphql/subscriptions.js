/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin {
    onCreateAdmin {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
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
export const onCreateCarwash = /* GraphQL */ `
  subscription OnCreateCarwash {
    onCreateCarwash {
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
export const onUpdateCarwash = /* GraphQL */ `
  subscription OnUpdateCarwash {
    onUpdateCarwash {
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
export const onDeleteCarwash = /* GraphQL */ `
  subscription OnDeleteCarwash {
    onDeleteCarwash {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRegisteredCars = /* GraphQL */ `
  subscription OnCreateRegisteredCars {
    onCreateRegisteredCars {
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
export const onUpdateRegisteredCars = /* GraphQL */ `
  subscription OnUpdateRegisteredCars {
    onUpdateRegisteredCars {
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
export const onDeleteRegisteredCars = /* GraphQL */ `
  subscription OnDeleteRegisteredCars {
    onDeleteRegisteredCars {
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
export const onCreateCars = /* GraphQL */ `
  subscription OnCreateCars {
    onCreateCars {
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
export const onUpdateCars = /* GraphQL */ `
  subscription OnUpdateCars {
    onUpdateCars {
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
export const onDeleteCars = /* GraphQL */ `
  subscription OnDeleteCars {
    onDeleteCars {
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
export const onCreateRequests = /* GraphQL */ `
  subscription OnCreateRequests {
    onCreateRequests {
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
export const onUpdateRequests = /* GraphQL */ `
  subscription OnUpdateRequests {
    onUpdateRequests {
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
export const onDeleteRequests = /* GraphQL */ `
  subscription OnDeleteRequests {
    onDeleteRequests {
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
