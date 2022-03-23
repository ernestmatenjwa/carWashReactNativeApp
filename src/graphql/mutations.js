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
export const createAdminRequests = /* GraphQL */ `
  mutation CreateAdminRequests(
    $input: CreateAdminRequestsInput!
    $condition: ModelAdminRequestsConditionInput
  ) {
    createAdminRequests(input: $input, condition: $condition) {
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
export const updateAdminRequests = /* GraphQL */ `
  mutation UpdateAdminRequests(
    $input: UpdateAdminRequestsInput!
    $condition: ModelAdminRequestsConditionInput
  ) {
    updateAdminRequests(input: $input, condition: $condition) {
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
export const deleteAdminRequests = /* GraphQL */ `
  mutation DeleteAdminRequests(
    $input: DeleteAdminRequestsInput!
    $condition: ModelAdminRequestsConditionInput
  ) {
    deleteAdminRequests(input: $input, condition: $condition) {
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
export const createAdminPic = /* GraphQL */ `
  mutation CreateAdminPic(
    $input: CreateAdminPicInput!
    $condition: ModelAdminPicConditionInput
  ) {
    createAdminPic(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateAdminPic = /* GraphQL */ `
  mutation UpdateAdminPic(
    $input: UpdateAdminPicInput!
    $condition: ModelAdminPicConditionInput
  ) {
    updateAdminPic(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdminPic = /* GraphQL */ `
  mutation DeleteAdminPic(
    $input: DeleteAdminPicInput!
    $condition: ModelAdminPicConditionInput
  ) {
    deleteAdminPic(input: $input, condition: $condition) {
      id
      imageUrl
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
export const createBusinessLogo = /* GraphQL */ `
  mutation CreateBusinessLogo(
    $input: CreateBusinessLogoInput!
    $condition: ModelBusinessLogoConditionInput
  ) {
    createBusinessLogo(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateBusinessLogo = /* GraphQL */ `
  mutation UpdateBusinessLogo(
    $input: UpdateBusinessLogoInput!
    $condition: ModelBusinessLogoConditionInput
  ) {
    updateBusinessLogo(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteBusinessLogo = /* GraphQL */ `
  mutation DeleteBusinessLogo(
    $input: DeleteBusinessLogoInput!
    $condition: ModelBusinessLogoConditionInput
  ) {
    deleteBusinessLogo(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
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
export const createRegisteredCars = /* GraphQL */ `
  mutation CreateRegisteredCars(
    $input: CreateRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    createRegisteredCars(input: $input, condition: $condition) {
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
export const updateRegisteredCars = /* GraphQL */ `
  mutation UpdateRegisteredCars(
    $input: UpdateRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    updateRegisteredCars(input: $input, condition: $condition) {
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
export const deleteRegisteredCars = /* GraphQL */ `
  mutation DeleteRegisteredCars(
    $input: DeleteRegisteredCarsInput!
    $condition: ModelRegisteredCarsConditionInput
  ) {
    deleteRegisteredCars(input: $input, condition: $condition) {
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
export const createUserRequests = /* GraphQL */ `
  mutation CreateUserRequests(
    $input: CreateUserRequestsInput!
    $condition: ModelUserRequestsConditionInput
  ) {
    createUserRequests(input: $input, condition: $condition) {
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
export const updateUserRequests = /* GraphQL */ `
  mutation UpdateUserRequests(
    $input: UpdateUserRequestsInput!
    $condition: ModelUserRequestsConditionInput
  ) {
    updateUserRequests(input: $input, condition: $condition) {
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
export const deleteUserRequests = /* GraphQL */ `
  mutation DeleteUserRequests(
    $input: DeleteUserRequestsInput!
    $condition: ModelUserRequestsConditionInput
  ) {
    deleteUserRequests(input: $input, condition: $condition) {
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
export const createUserPic = /* GraphQL */ `
  mutation CreateUserPic(
    $input: CreateUserPicInput!
    $condition: ModelUserPicConditionInput
  ) {
    createUserPic(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPic = /* GraphQL */ `
  mutation UpdateUserPic(
    $input: UpdateUserPicInput!
    $condition: ModelUserPicConditionInput
  ) {
    updateUserPic(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPic = /* GraphQL */ `
  mutation DeleteUserPic(
    $input: DeleteUserPicInput!
    $condition: ModelUserPicConditionInput
  ) {
    deleteUserPic(input: $input, condition: $condition) {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
