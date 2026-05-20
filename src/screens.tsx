import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PostCard } from './components/PostCard';
import { helpRequests, leaderboard, posts } from './data/mockData';

const ScreenContainer: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.pageTitle}>{title}</Text>
    {children}
  </ScrollView>
);

export const HomeScreen = () => (
  <ScreenContainer title="Karma Feed">
    {posts.map((post) => <PostCard key={post.id} post={post} />)}
  </ScreenContainer>
);

export const AddPostScreen = () => (
  <ScreenContainer title="Share a Good Deed">
    <View style={styles.card}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="What did you do?" />
      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder="Add context, image proof, and impact." multiline />
      <Text style={styles.hint}>Auto-location enabled • Tags: help, donation, volunteer</Text>
    </View>
  </ScreenContainer>
);

export const LeaderboardScreen = () => (
  <ScreenContainer title="Local Leaderboard (10km)">
    <View style={styles.tabRow}>
      {['Daily', 'Weekly', 'All-time'].map((t) => <Text key={t} style={styles.tab}>{t}</Text>)}
    </View>
    {leaderboard.map((user, index) => (
      <View style={styles.rankCard} key={user.id}>
        <Text style={styles.rank}>#{index + 1}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.hint}>{user.location}</Text>
        </View>
        <Text style={styles.points}>{user.karmaPoints.toFixed(1)}</Text>
      </View>
    ))}
  </ScreenContainer>
);

export const HelpRequestsScreen = () => (
  <ScreenContainer title="Help Requests Nearby">
    {helpRequests.map((req) => (
      <View style={styles.card} key={req.id}>
        <Text style={styles.username}>{req.title}</Text>
        <Text style={styles.hint}>{req.description}</Text>
        <Text style={styles.hint}>{req.requesterName} • {req.location} • {req.distanceKm} km</Text>
        <Text style={styles.status}>Status: {req.status.replace('_', ' ')}</Text>
      </View>
    ))}
  </ScreenContainer>
);

export const ProfileScreen = () => (
  <ScreenContainer title="My Karma Profile">
    <View style={styles.card}>
      <Text style={styles.username}>You • @kindBuilder</Text>
      <Text style={styles.hint}>Level: Hero • Daily streak: 14 days</Text>
      <Text style={styles.points}>Total Karma: 1,284</Text>
      <Text style={styles.hint}>Local Rank #5 • Global Rank #421</Text>
      <Text style={styles.hint}>Badges: First Responder, Helper x50, Community Star</Text>
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f4f4f7' },
  content: { padding: 16, paddingBottom: 40 },
  pageTitle: { fontSize: 28, fontWeight: '800', color: '#111', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 14 },
  label: { fontSize: 12, fontWeight: '600', color: '#667085', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#e4e7ec', borderRadius: 12, padding: 12, marginBottom: 12 },
  textArea: { minHeight: 120, textAlignVertical: 'top' },
  hint: { color: '#667085', marginTop: 6 },
  tabRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  tab: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, fontWeight: '600' },
  rankCard: { backgroundColor: '#fff', borderRadius: 16, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  rank: { width: 42, fontWeight: '800', fontSize: 18 },
  username: { fontWeight: '700', fontSize: 16, color: '#101828' },
  points: { fontWeight: '800', color: '#3f51b5', fontSize: 18 },
  status: { marginTop: 8, fontWeight: '700', color: '#2f7d32' },
});
