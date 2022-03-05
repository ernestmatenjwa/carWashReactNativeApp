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
export const createRegisteredCars = /* GraphQL */ `
  mutation CreateRegisteredCars(
    $input: CreateRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    createRegisteredCars(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRegisteredCars = /* GraphQL */ `
  mutation UpdateRegisteredCars(
    $input: UpdateRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    updateRegisteredCars(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRegisteredCars = /* GraphQL */ `
  mutation DeleteRegisteredCars(
    $input: DeleteRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    deleteRegisteredCars(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      model
      Desc
      imageUrl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOders = /* GraphQL */ `
  mutation CreateOders(
    $input: CreateOdersInput!
    $condition: ModelOdersConditionInput
  ) {
    createOders(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      userName
      package
      o_date
      createdAt
      updatedAt
    }
  }
`;
export const updateOders = /* GraphQL */ `
  mutation UpdateOders(
    $input: UpdateOdersInput!
    $condition: ModelOdersConditionInput
  ) {
    updateOders(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      userName
      package
      o_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteOders = /* GraphQL */ `
  mutation DeleteOders(
    $input: DeleteOdersInput!
    $condition: ModelOdersConditionInput
  ) {
    deleteOders(input: $input, condition: $condition) {
      id
      userID
      brand
      regNO
      userName
      package
      o_date
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
