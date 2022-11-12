/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist(
    $input: CreatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    createPlaylist(input: $input, condition: $condition) {
      id
      name
      slides {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const updatePlaylist = /* GraphQL */ `
  mutation UpdatePlaylist(
    $input: UpdatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    updatePlaylist(input: $input, condition: $condition) {
      id
      name
      slides {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const deletePlaylist = /* GraphQL */ `
  mutation DeletePlaylist(
    $input: DeletePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    deletePlaylist(input: $input, condition: $condition) {
      id
      name
      slides {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
      id
      url
      filename
      mimetype
      category
      playlists {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
      id
      url
      filename
      mimetype
      category
      playlists {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
      id
      url
      filename
      mimetype
      category
      playlists {
        items {
          id
          playlistID
          slideID
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      region
      bucket
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      region
      bucket
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      region
      bucket
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const createPlaylistSlide = /* GraphQL */ `
  mutation CreatePlaylistSlide(
    $input: CreatePlaylistSlideInput!
    $condition: ModelPlaylistSlideConditionInput
  ) {
    createPlaylistSlide(input: $input, condition: $condition) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        mimetype
        category
        playlists {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlaylistSlide = /* GraphQL */ `
  mutation UpdatePlaylistSlide(
    $input: UpdatePlaylistSlideInput!
    $condition: ModelPlaylistSlideConditionInput
  ) {
    updatePlaylistSlide(input: $input, condition: $condition) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        mimetype
        category
        playlists {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlaylistSlide = /* GraphQL */ `
  mutation DeletePlaylistSlide(
    $input: DeletePlaylistSlideInput!
    $condition: ModelPlaylistSlideConditionInput
  ) {
    deletePlaylistSlide(input: $input, condition: $condition) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        mimetype
        category
        playlists {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
