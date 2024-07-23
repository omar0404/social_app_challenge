export interface Post {
  user_id: number;
  user: User;
  id: number;
  title: string;
  body: string;
}
export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
export interface User {
  id: number;
  name: string;
}
