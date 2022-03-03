/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
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
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
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
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
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
export const createCarwash = /* GraphQL */ `
  mutation CreateCarwash(
    $input: CreateCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    createCarwash(input: $input, condition: $condition) {
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
export const updateCarwash = /* GraphQL */ `
  mutation UpdateCarwash(
    $input: UpdateCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    updateCarwash(input: $input, condition: $condition) {
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
export const deleteCarwash = /* GraphQL */ `
  mutation DeleteCarwash(
    $input: DeleteCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    deleteCarwash(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVehicleType = /* GraphQL */ `
  mutation CreateVehicleType(
    $input: CreateVehicleTypeInput!
    $condition: ModelVehicleTypeConditionInput
  ) {
    createVehicleType(input: $input, condition: $condition) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateVehicleType = /* GraphQL */ `
  mutation UpdateVehicleType(
    $input: UpdateVehicleTypeInput!
    $condition: ModelVehicleTypeConditionInput
  ) {
    updateVehicleType(input: $input, condition: $condition) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteVehicleType = /* GraphQL */ `
  mutation DeleteVehicleType(
    $input: DeleteVehicleTypeInput!
    $condition: ModelVehicleTypeConditionInput
  ) {
    deleteVehicleType(input: $input, condition: $condition) {
      id
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
