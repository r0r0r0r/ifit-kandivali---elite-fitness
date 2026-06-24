
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  isDark?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  video?: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  avatar: string;
  rating: number;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  type: 'video' | 'image';
}

export interface Transformation {
  id: string;
  name: string;
  result: string;
  image: string;
}
