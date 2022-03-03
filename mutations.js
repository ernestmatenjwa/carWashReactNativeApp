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
export const createCarwash = /* GraphQL */ `
  mutation CreateCarwash(
    $input: CreateCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    createCarwash(input: $input, condition: $condition) {
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
export const updateCarwash = /* GraphQL */ `
  mutation UpdateCarwash(
    $input: UpdateCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    updateCarwash(input: $input, condition: $condition) {
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
export const deleteCarwash = /* GraphQL */ `
  mutation DeleteCarwash(
    $input: DeleteCarwashInput!
    $condition: ModelCarwashConditionInput
  ) {
    deleteCarwash(input: $input, condition: $condition) {
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
