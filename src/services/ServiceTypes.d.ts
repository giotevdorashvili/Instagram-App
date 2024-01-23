export interface SignUpUserTypes {
  email: string;
  password: string;
  fullName: string;
  username: string;
}

export interface SignInUserTypes {
  email: string;
  password: string;
}

export interface CreateUserTypes {
  userId: string;
  username: string;
  fullName: string;
}

export interface CreatePostTypes {
  userId: string;
  postTitle: string;
  postImageUri: string;
  timeStamp: number;
}

export interface UpdateUSerTypes {
  fullName?: string;
  profilePictureUri?: string | null;
  username?: string;
}

export interface updatedPostLikesDataTypes {
  likes: {
    userId: UpdateUSerTypes;
  };
}

interface CommonPostProperties {
  postImageUri?: string;
  postTitle?: string;
  timeStamp: number;
}

export interface Likes {
  [id]: CommonPostProperties;
}

export interface PostTypes extends CommonPostProperties {
  likes?: Likes;
}

export interface UpdatePostLikesProps {
  liked?: boolean;
  postUserUid: string;
  timeStamp: number;
  updatedPostLikesData: PostTypes;
}
