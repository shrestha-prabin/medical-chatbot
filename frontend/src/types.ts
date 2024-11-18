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

export type Message = {
  id?: string;
  user_prompt?: string;
  model_response?: string;
  created_at?: string;
  user?: string;
};
