const fakePostData = {
  id: 1234,
  title: "What a wonderful world",
  body: "i see trees of green <br> red soses too. <br>i see them bloom. <br>for me and you. <br>and i think to myself. <br><br> what a wonderful world",
  tags: ["fake", "random"],
  media:
    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
  created: "2022-09-04T08:08:38.830Z",
  updated: "2022-11-10T08:08:38.830Z",
  author: {
    name: "George R. R. Martin",
    email: "user@example.com",
    avatar: "",
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
  title: "Milk is good for you",
  body: "Drink your milk, every day!",
  tags: ["fake", "random"],
  media: "",
  created: "2022-09-04T08:08:38.830Z",
  updated: "2022-11-10T08:08:38.830Z",
  author: {
    name: "Mr Melk",
    email: "user@example.com",
    avatar:
      "https://labrador-www.kk.no/images/76978605.jpg?imageId=76978605&panow=99.893674641148&panoh=60.493829059829&panox=0&panoy=6.8376068376068&heightw=100&heighth=100&heightx=0&heighty=0&width=1200&height=1200",
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
