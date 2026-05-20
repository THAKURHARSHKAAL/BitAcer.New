import { HelpRequest, LeaderboardUser, Post } from '../types';

export const CURRENT_USER_ID = 'u100';

export const posts: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    username: 'AvaKind',
    profilePhoto: '🌟',
    title: 'Grocery support for senior neighbor',
    description: 'Delivered weekly groceries and helped organize medicines.',
    location: 'Downtown, NY',
    createdAt: '2h ago',
    tag: 'help',
    ratings: [9, 8, 10, 8, 9, 9],
    voters: 6,
  },
  {
    id: 'p2',
    userId: 'u2',
    username: 'NoahCares',
    profilePhoto: '🤝',
    title: 'Community park cleanup',
    description: 'Joined 12 volunteers and removed plastic waste from the park.',
    location: 'Brooklyn, NY',
    createdAt: '5h ago',
    tag: 'volunteer',
    ratings: [7, 8, 8, 9],
    voters: 4,
  },
];

export const leaderboard: LeaderboardUser[] = [
  { id: 'u1', name: 'AvaKind', location: 'Downtown, NY', karmaPoints: 241.2 },
  { id: 'u3', name: 'EllaHope', location: 'Downtown, NY', karmaPoints: 220.4 },
  { id: 'u2', name: 'NoahCares', location: 'Brooklyn, NY', karmaPoints: 198.3 },
];

export const helpRequests: HelpRequest[] = [
  {
    id: 'h1',
    title: 'Need blood donor O+',
    description: 'Urgent donor needed at City Hospital by this evening.',
    requesterName: 'RyanM',
    location: 'Midtown, NY',
    distanceKm: 3.2,
    status: 'open',
  },
  {
    id: 'h2',
    title: 'Wheelchair transport assistance',
    description: 'Need help transporting my father to physiotherapy tomorrow.',
    requesterName: 'MiaL',
    location: 'Queens, NY',
    distanceKm: 6.8,
    status: 'in_progress',
  },
];
