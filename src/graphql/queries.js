/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
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
export const listPlaylists = /* GraphQL */ `
  query ListPlaylists(
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slides {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
      id
      url
      filename
      extention
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
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        filename
        extention
        category
        playlists {
          nextToken
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlaylistSlide = /* GraphQL */ `
  query GetPlaylistSlide($id: ID!) {
    getPlaylistSlide(id: $id) {
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
        extention
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
export const listPlaylistSlides = /* GraphQL */ `
  query ListPlaylistSlides(
    $filter: ModelPlaylistSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylistSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playlistID
        slideID
        playlist {
          id
          name
          description
          createdAt
          updatedAt
        }
        slide {
          id
          url
          filename
          extention
          category
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
