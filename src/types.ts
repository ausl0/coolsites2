import { User as FirebaseUser } from 'firebase/auth';

export interface Site {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  url: string;
  imageUrl?: string;
  upvotes: number;
  aiTools: string[];
  createdAt: Date;
  submitterInfo: string;
  addedBy: {
    name: string;
    avatar?: string;
  };
  isOwnSite: boolean;
  tags: string[];
  category: string;
}

export type SortPeriod = 'day' | 'week' | 'month' | 'all';

export interface User extends FirebaseUser {
  votes: { [siteId: string]: 'up' | 'down' | null };
}

export interface Comment {
  id: number;
  siteId: number;
  user: User;
  content: string;
  createdAt: Date;
}

export interface LeaderboardEntry {
  name: string;
  count: number;
}