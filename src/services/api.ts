import { CommentData } from "../types/Comment";

const endpoint = "https://run.mocky.io/v3/be0609d3-6a1b-4597-8af1-101221ac99c9";

const fetchComments = ():Promise<CommentData> => {
  return fetch(endpoint).then((res) => res.json())
  .then((data) => data)
}

export default fetchComments;

