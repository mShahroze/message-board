interface User {
  id: string;
  name:string;
}

export interface Comment {
  id: string;
  user: User;
  comment: string;
  replies: Comment[];
}

export interface CommentData {
  data: Comment[];
  continuationToken: unknown;
  httpStatusCode: string;
  errors: unknown[];
  isError: boolean;
}

