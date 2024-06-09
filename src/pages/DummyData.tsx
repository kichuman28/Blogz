export interface Post {
  postId: number;
  title: string;
  content: string;
  imageUrl?: string;
  status: string;
  publishAt: string;
  author: {
    userId: number;
    name: string;
    image: string; // Added author image field
  };
  tags: string[];
  comments: number;
  likes: number;
  source: string; // Added source field
  sourceLink: string; // Added source link field
}

export const posts: Post[] = [
  {
    postId: 1,
    title: "Deploying Your Next.js App to Vercel: A Complete Guide",
    content: "Vercel, the creators of Next.js, offers a seamless deployment experience tailored for Next.js applications...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 1,
      name: "ByteScrum Technologies",
      image: "https://via.placeholder.com/40",
    },
    tags: ["autodeploy"],
    comments: 10,
    likes: 80,
    source: "ByteScrum Technologies",
    sourceLink: "https://blog.bytescrum.com",
  },
  {
    postId: 2,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 15,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
  {
    postId: 3,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 90,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
  {
    postId: 4,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 45,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
  {
    postId: 5,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 78,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
  {
    postId: 6,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 100,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
  {
    postId: 7,
    title: "How to Handle Side Effects in Angular Using NgRx Effects",
    content: "Side-effects! They are one of the most common tasks in our applications. In Angular, we build applications if we don't take care...",
    imageUrl: "https://via.placeholder.com/150",
    status: "published",
    publishAt: new Date().toISOString(),
    author: {
      userId: 2,
      name: "Dany Paredes",
      image: "https://via.placeholder.com/40",
    },
    tags: ["Angular", "NgRx"],
    comments: 3,
    likes: 12,
    source: "Dany Walls",
    sourceLink: "https://www.danywalls.com",
  },
];
