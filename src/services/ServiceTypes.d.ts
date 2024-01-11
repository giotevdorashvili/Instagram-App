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
  profilePictureUri?: string;
  username?: string;
}
