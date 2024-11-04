export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Information = {
  id: string;
  category?: string;
  subcategory?: string;
  title: string;
  text?: string;
};
