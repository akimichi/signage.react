/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlaylist = /* GraphQL */ `
  subscription OnCreatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onCreatePlaylist(filter: $filter) {
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaylist = /* GraphQL */ `
  subscription OnUpdatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onUpdatePlaylist(filter: $filter) {
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaylist = /* GraphQL */ `
  subscription OnDeletePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onDeletePlaylist(filter: $filter) {
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide($filter: ModelSubscriptionSlideFilterInput) {
    onCreateSlide(filter: $filter) {
      id
      url
      filename
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide($filter: ModelSubscriptionSlideFilterInput) {
    onUpdateSlide(filter: $filter) {
      id
      url
      filename
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide($filter: ModelSubscriptionSlideFilterInput) {
    onDeleteSlide(filter: $filter) {
      id
      url
      filename
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
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlaylistSlide = /* GraphQL */ `
  subscription OnCreatePlaylistSlide(
    $filter: ModelSubscriptionPlaylistSlideFilterInput
  ) {
    onCreatePlaylistSlide(filter: $filter) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        category
        playlists {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaylistSlide = /* GraphQL */ `
  subscription OnUpdatePlaylistSlide(
    $filter: ModelSubscriptionPlaylistSlideFilterInput
  ) {
    onUpdatePlaylistSlide(filter: $filter) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        category
        playlists {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaylistSlide = /* GraphQL */ `
  subscription OnDeletePlaylistSlide(
    $filter: ModelSubscriptionPlaylistSlideFilterInput
  ) {
    onDeletePlaylistSlide(filter: $filter) {
      id
      playlistID
      slideID
      playlist {
        id
        name
        slides {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      slide {
        id
        url
        filename
        category
        playlists {
          nextToken
        }
        memo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
