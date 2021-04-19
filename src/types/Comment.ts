interface User {
  id: string;
  name:string;
}

interface Reply {
  id: string;
  user: User;
  comment: string;
  replies: Reply[];
}

export interface Comment {
  id: string;
  user: User;
  comment: string;
  replies: Reply[];
}

export interface CommentData {
  data: Comment[];
  continuationToken: unknown;
  httpStatusCode: string;
  errors: unknown[];
  isError: boolean;
}

