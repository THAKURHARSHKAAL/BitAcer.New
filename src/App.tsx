import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddPostScreen, HelpRequestsScreen, HomeScreen, LeaderboardScreen, ProfileScreen } from './screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 8, borderTopWidth: 0 },
          tabBarActiveTintColor: '#101828',
          tabBarInactiveTintColor: '#98a2b3',
          tabBarIcon: ({ color, size }) => {
            const map: Record<string, keyof typeof Ionicons.glyphMap> = {
              Home: 'home-outline',
              Add: 'add-circle-outline',
              Leaderboard: 'trophy-outline',
              Help: 'heart-outline',
              Profile: 'person-outline',
            };
            return <Ionicons name={map[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddPostScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="Help" component={HelpRequestsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
