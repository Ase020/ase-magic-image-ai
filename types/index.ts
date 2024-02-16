export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser extends Document {
  clerkId: string;
  firstName?: string;
  lastName?: string;
  email: string;
  username: string;
  photo: string;
  planId?: number;
  creditBalance?: number;
}

export interface ITransaction extends Document {
  createdAt?: Date;
  updatedAt?: Date;
  stripeId: string;
  amount: number;
  credits?: number;
  buyer: IUser;
}
