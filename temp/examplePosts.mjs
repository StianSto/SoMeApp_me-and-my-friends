const fakePostData = {
  id: 12345,
  title: "What a wonderful world",
  body: "i see trees of green <br> red soses too. <br>i see them bloom. <br>for me and you. <br>and i think to myself. <br><br> what a wonderful world",
  tags: ["fake", "random"],
  media: "https://source.unsplash.com/random/600x400",
  created: "2022-09-04T08:08:38.830Z",
  updated: "2022-11-10T08:08:38.830Z",
  author: {
    name: "George R. R. Martin",
    email: "user@example.com",
    avatar: "https://source.unsplash.com/random/400x400",
    banner: "https://source.unsplash.com/random/1920x600",
  },
  reactions: [
    {
      symbol: "string",
      count: 3,
      postId: 0,
      message: "string",
    },
  ],
  comments: [
    {
      body: "this is a comment",
      replyToId: null, // or number if comment is reply to another comment
      id: 0,
      postId: 0,
      owner: "Bjarne",
      created: "2022-09-04T08:17:59.383Z",
    },
    {
      body: "this is another comment",
      replyToId: null, // or number if comment is reply to another comment
      id: 4,
      postId: 2,
      owner: "Bjørnar",
      created: "2022-09-04T08:17:59.383Z",
    },
  ],
  _count: {
    reactions: 2,
    comments: 1,
  },
};
const fakePostData2 = {
  id: 12345,
  title: "Fake Post",
  body: "i made this fake post to test my JavaScript without making a 1000 calls to the Noroff API",
  tags: ["fake", "random"],
  media: "https://source.unsplash.com/random/600x400",
  created: "2022-09-04T08:08:38.830Z",
  updated: "2022-11-10T08:08:38.830Z",
  author: {
    name: "Mr Melk",
    email: "user@example.com",
    avatar: "https://source.unsplash.com/random",
    banner: "https://source.unsplash.com/random/1920x600",
  },
  reactions: [
    {
      symbol: "string",
      count: 3,
      postId: 0,
      message: "string",
    },
  ],
  comments: [
    {
      body: "this is a comment",
      replyToId: null, // or number if comment is reply to another comment
      id: 0,
      postId: 0,
      owner: "Bjarne",
      created: "2022-09-04T08:17:59.383Z",
    },
    {
      body: "this is another comment",
      replyToId: null, // or number if comment is reply to another comment
      id: 4,
      postId: 2,
      owner: "Bjørnar",
      created: "2022-09-04T08:17:59.383Z",
    },
  ],
  _count: {
    reactions: 2,
    comments: 1,
  },
};

export const examplePosts = [fakePostData, fakePostData2];
