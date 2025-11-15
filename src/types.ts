
export enum BlogCategory {
  Tech = 'Tech',
  Business = 'Business',
  Travel = 'Travel',
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  category: BlogCategory;
  image: string;
  excerpt: string;
  content: string;
}

export interface Skill {
  name: string;
  percentage: number;
}
