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
export const onCreateVehicleType = /* GraphQL */ `
  subscription OnCreateVehicleType {
    onCreateVehicleType {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVehicleType = /* GraphQL */ `
  subscription OnUpdateVehicleType {
    onUpdateVehicleType {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVehicleType = /* GraphQL */ `
  subscription OnDeleteVehicleType {
    onDeleteVehicleType {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
