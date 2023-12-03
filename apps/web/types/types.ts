interface ProductsType {
  _id: string;
  productName: string;
  price: number;
  productDescription: string;
  imageUrl: string;
  __v: number;
  comments: Comment[];
  updatedAt: string;
}

interface Comment {
  user: string;
  comment: string;
  _id: string;
}

export type { ProductsType, Comment };
