/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAuthor {
  _id: string;
  name: string;
  profilePicture: string;
}

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  coverImage: string;
  author: IAuthor;
  upvotes: number;
  downvotes: number;
  isPremium: boolean;
}

export interface IUserProfile {
  name: string;
  email: string;
  role: string;
  bio: string;
  phone: string;
  profilePicture: string;
  followers: any[];
  following: any[];
  createdAt: string;
}
