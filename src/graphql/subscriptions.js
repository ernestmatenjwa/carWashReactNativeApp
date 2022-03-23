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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
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
export const onCreateAdminRequests = /* GraphQL */ `
  subscription OnCreateAdminRequests {
    onCreateAdminRequests {
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
export const onUpdateAdminRequests = /* GraphQL */ `
  subscription OnUpdateAdminRequests {
    onUpdateAdminRequests {
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
export const onDeleteAdminRequests = /* GraphQL */ `
  subscription OnDeleteAdminRequests {
    onDeleteAdminRequests {
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
export const onCreateAdminPic = /* GraphQL */ `
  subscription OnCreateAdminPic {
    onCreateAdminPic {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdminPic = /* GraphQL */ `
  subscription OnUpdateAdminPic {
    onUpdateAdminPic {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdminPic = /* GraphQL */ `
  subscription OnDeleteAdminPic {
    onDeleteAdminPic {
      id
      imageUrl
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
export const onUpdateCarwash = /* GraphQL */ `
  subscription OnUpdateCarwash {
    onUpdateCarwash {
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
export const onDeleteCarwash = /* GraphQL */ `
  subscription OnDeleteCarwash {
    onDeleteCarwash {
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
export const onCreateBusinessLogo = /* GraphQL */ `
  subscription OnCreateBusinessLogo {
    onCreateBusinessLogo {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBusinessLogo = /* GraphQL */ `
  subscription OnUpdateBusinessLogo {
    onUpdateBusinessLogo {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBusinessLogo = /* GraphQL */ `
  subscription OnDeleteBusinessLogo {
    onDeleteBusinessLogo {
      id
      imageUrl
      createdAt
      updatedAt
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRegisteredCars = /* GraphQL */ `
  subscription OnCreateRegisteredCars {
    onCreateRegisteredCars {
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
export const onUpdateRegisteredCars = /* GraphQL */ `
  subscription OnUpdateRegisteredCars {
    onUpdateRegisteredCars {
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
export const onDeleteRegisteredCars = /* GraphQL */ `
  subscription OnDeleteRegisteredCars {
    onDeleteRegisteredCars {
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
export const onCreateUserRequests = /* GraphQL */ `
  subscription OnCreateUserRequests {
    onCreateUserRequests {
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
export const onUpdateUserRequests = /* GraphQL */ `
  subscription OnUpdateUserRequests {
    onUpdateUserRequests {
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
export const onDeleteUserRequests = /* GraphQL */ `
  subscription OnDeleteUserRequests {
    onDeleteUserRequests {
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
export const onCreateUserPic = /* GraphQL */ `
  subscription OnCreateUserPic {
    onCreateUserPic {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPic = /* GraphQL */ `
  subscription OnUpdateUserPic {
    onUpdateUserPic {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPic = /* GraphQL */ `
  subscription OnDeleteUserPic {
    onDeleteUserPic {
      id
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
