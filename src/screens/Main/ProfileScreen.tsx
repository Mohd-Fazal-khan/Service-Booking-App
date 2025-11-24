import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import LogoutModal from '../../components/LogoutModal';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { logout } = useAuth();
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'user@example.com',
    image: require('../../assets/images/Avatar.png'),
  });
  const [logoutVisible, setLogoutVisible] = useState(false);

  const loadUserData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('USER_INFO');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.log('Error loading user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadUserData);
    return unsubscribe;
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await logout(); // This will clear the token and update the context
      setLogoutVisible(false);
      
      // Optional: You can also clear other user data
      await AsyncStorage.removeItem('USER_INFO');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const MenuItem = ({
    icon,
    label,
    onPress,
    color = '#0E7F3D',
    iconBg = '#E8F5E9',
    showBadge = false,
  }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={[styles.menuText, color === '#ff4444' && { color }]}>
        {label}
      </Text>
  
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#C0C0C0"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0E7F3D" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Gradient */}
        <LinearGradient colors={['#0E7F3D', '#0A5F2E']} style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.avatarWrapper}>
              <Image source={user.image} style={styles.avatar} />
              <TouchableOpacity style={styles.cameraButton}>
                <Ionicons name="camera" size={16} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>

            {/* Edit Profile Button */}
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => navigation.navigate('EditProfile')}
              activeOpacity={0.8}
            >
              <Ionicons name="create-outline" size={18} color="#0E7F3D" />
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuWrapper}>
          <Text style={styles.sectionTitle}>Account</Text>

          <MenuItem
            icon="calendar-outline"
            label="My Bookings"
            onPress={() => navigation.navigate('MyBookings')}
            showBadge={true}
          />

          <MenuItem
            icon="heart-outline"
            label="Favorites"
            onPress={() => navigation.navigate('Favorites')}
          />

          <MenuItem
            icon="card-outline"
            label="Payment Methods"
            onPress={() => navigation.navigate('PaymentMethods')}
          />
        </View>

        <View style={styles.menuWrapper}>
          <Text style={styles.sectionTitle}>Support</Text>

          <MenuItem
            icon="help-circle-outline"
            label="Help & Support"
            onPress={() => navigation.navigate('HelpSupport')}
          />

          <MenuItem
            icon="chatbubble-outline"
            label="Contact Us"
            onPress={() => navigation.navigate('ContactUs')}
          />

          <MenuItem
            icon="settings-outline"
            label="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setLogoutVisible(true)}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#FFE5E5' }]}>
              <Ionicons name="log-out-outline" size={22} color="#ff4444" />
            </View>
            <Text style={[styles.menuText, { color: '#ff4444' }]}>Logout</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#C0C0C0"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>

      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onLogout={handleLogout}
      />
    </View>
  );
}

// Keep all your existing styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 80,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
  },
  profileCard: {
    backgroundColor: '#fff',
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginTop: -20,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#0E7F3D',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  editBtn: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    color: '#0E7F3D',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0E7F3D',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    marginLeft: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  chevron: {
    marginLeft: 'auto',
  },
  badge: {
    backgroundColor: '#ff4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginRight: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  version: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginVertical: 20,
  },
});