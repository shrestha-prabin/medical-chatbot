export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Information = {
  id: string;
  category?: string;
  thumbnail?: string;
  summary?: string;
  title: string;
  text?: string;
};
