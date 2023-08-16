export interface IDoc {
  slug: string;
  data: any;
  content?: string;
}

export interface IArticle {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: Date;
  timeToRead: string;
  categories: string[];
  content?: string;
}
export interface ICategory {
  slug: string;
  index: number;
  image: string;
  title: string;
  description: string;
}
