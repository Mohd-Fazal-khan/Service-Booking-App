import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform, StyleSheet } from 'react-native';

import HomeScreen from '../screens/Main/HomeScreen';
import AllServicesScreen from '../screens/Main/AllServicesScreen';
import MyBookingsScreen from '../screens/Main/MyBookingsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0E7F3D',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 65,
          paddingBottom: Platform.OS === 'ios' ? 28 : 10,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: -4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name="home" 
              color={color} 
              size={focused ? size + 2 : size} 
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="AllServices"
        component={AllServicesScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? "grid-view" : "grid-on"} 
              color={color} 
              size={focused ? size + 2 : size} 
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? "event" : "event-note"} 
              color={color} 
              size={focused ? size + 2 : size} 
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon 
              name={focused ? "person" : "person-outline"} 
              color={color} 
              size={focused ? size + 2 : size} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}