export type PostTag = 'help' | 'donation' | 'volunteer' | 'community';

export interface Post {
  id: string;
  userId: string;
  username: string;
  profilePhoto: string;
  title: string;
  description: string;
  location: string;
  createdAt: string;
  mediaUrl?: string;
  tag: PostTag;
  ratings: number[];
  voters: number;
}

export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  requesterName: string;
  location: string;
  distanceKm: number;
  status: 'open' | 'in_progress' | 'completed';
}

export interface LeaderboardUser {
  id: string;
  name: string;
  location: string;
  karmaPoints: number;
}
