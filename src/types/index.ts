export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  backgroundImage: string;
  year: number;
  rating: string;
  duration: string;
  genre: string[];
  cast: string[];
  director: string;
  language: string;
  maturityRating: string;
  isNew?: boolean;
  isLeaving?: boolean;
  hasNewEpisode?: boolean;
  trailerUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  content: Content[];
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  isKids: boolean;
}