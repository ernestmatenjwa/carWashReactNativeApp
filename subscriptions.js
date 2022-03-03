/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($owner: String) {
    onCreateAdmin(owner: $owner) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($owner: String) {
    onUpdateAdmin(owner: $owner) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($owner: String) {
    onDeleteAdmin(owner: $owner) {
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
export const onCreateCarwash = /* GraphQL */ `
  subscription OnCreateCarwash($owner: String) {
    onCreateCarwash(owner: $owner) {
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
export const onUpdateCarwash = /* GraphQL */ `
  subscription OnUpdateCarwash($owner: String) {
    onUpdateCarwash(owner: $owner) {
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
export const onDeleteCarwash = /* GraphQL */ `
  subscription OnDeleteCarwash($owner: String) {
    onDeleteCarwash(owner: $owner) {
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
