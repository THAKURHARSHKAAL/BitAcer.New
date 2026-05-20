import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Post } from '../types';
import { calculateAverageScore, calculateKarma } from '../utils/karma';

interface Props {
  post: Post;
}

export const PostCard: React.FC<Props> = ({ post }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [voters, setVoters] = useState(post.voters);
  const [ratings, setRatings] = useState(post.ratings);

  const average = useMemo(() => calculateAverageScore(ratings), [ratings]);
  const karma = useMemo(() => calculateKarma(ratings), [ratings]);

  const submitRating = (value: number) => {
    if (selectedRating !== null) return;
    setSelectedRating(value);
    setRatings((prev) => [...prev, value]);
    setVoters((prev) => prev + 1);
  };

  return (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <Text style={styles.avatar}>{post.profilePhoto}</Text>
          <View>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.meta}>{post.location} • {post.createdAt}</Text>
          </View>
        </View>
        <Text style={styles.tag}>{post.tag.toUpperCase()}</Text>
      </View>

      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.description}</Text>

      <View style={styles.stats}>
        <Text style={styles.score}>⭐ {average}/10</Text>
        <Text style={styles.meta}>{voters} voters</Text>
        <Text style={styles.karma}>Karma +{karma}</Text>
      </View>

      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <Pressable
            key={value}
            style={[styles.ratingButton, selectedRating === value && styles.selectedRating]}
            onPress={() => submitRating(value)}
          >
            <Text style={[styles.ratingText, selectedRating === value && styles.selectedRatingText]}>{value}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatar: { fontSize: 24 },
  username: { fontSize: 16, fontWeight: '700', color: '#111' },
  meta: { color: '#5f6368', fontSize: 12 },
  tag: { color: '#3f51b5', fontWeight: '600', fontSize: 12 },
  title: { fontSize: 16, fontWeight: '700', marginTop: 12 },
  description: { fontSize: 14, color: '#333', marginTop: 8 },
  stats: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  score: { fontWeight: '700', color: '#101828' },
  karma: { color: '#2f7d32', fontWeight: '700' },
  ratingRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  ratingButton: { paddingVertical: 6, paddingHorizontal: 8, borderRadius: 10, backgroundColor: '#f2f4f7' },
  selectedRating: { backgroundColor: '#111' },
  ratingText: { fontSize: 12, color: '#111' },
  selectedRatingText: { color: '#fff' },
});
