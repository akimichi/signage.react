

type Slide {
  url: String!
  filename: String!
  category: [Image|PDF|Web]
  extention
  memo: String
}

type Playlist {
  name: String
  slides: [Slide]
}
