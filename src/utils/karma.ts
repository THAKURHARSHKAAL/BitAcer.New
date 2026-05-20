export const calculateAverageScore = (ratings: number[]): number => {
  if (!ratings.length) return 0;
  const sum = ratings.reduce((acc, value) => acc + value, 0);
  return Number((sum / ratings.length).toFixed(1));
};

export const calculateKarma = (ratings: number[]): number => {
  const averageScore = calculateAverageScore(ratings);
  const multiplier = Math.log(ratings.length + 1);
  return Number((averageScore * multiplier).toFixed(2));
};

export const canRatePost = ({
  currentUserId,
  postOwnerId,
  alreadyRated,
}: {
  currentUserId: string;
  postOwnerId: string;
  alreadyRated: boolean;
}): boolean => {
  if (currentUserId === postOwnerId) return false;
  return !alreadyRated;
};
