import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.leftSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/splash.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.helloText}>Hello 👋</Text>
          <Text style={styles.userText}>User</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.iconRow}>
          <View style={styles.iconButton}>
            <Icon name="bell-o" size={20} color="#1A1A1A" />
            <View style={styles.dot} />
          </View>
          <View style={styles.iconButton}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={20}
              color="#1A1A1A"
            />
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/Avatar.png')}
            style={styles.profilePic}
          />
          <View style={styles.activeDot} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  leftSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12,
    flex: 1,
  },
  logoContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 14,
  },
  logo: { 
    height: 52, 
    width: 52, 
    borderRadius: 14,
    backgroundColor: '#F8F8F8',
  },
  helloText: { 
    color: '#999', 
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },
  userText: { 
    color: '#1A1A1A', 
    fontSize: 20, 
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  rightSection: { 
    flexDirection: 'row',
    alignItems: 'center', 
    gap: 16,
  },
  iconRow: { 
    flexDirection: 'row', 
    gap: 10,
  },
  iconButton: { 
    padding: 10,
    backgroundColor: '#F8F8F8', 
    borderRadius: 12,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  dot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4757',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  profileContainer: {
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profilePic: { 
    height: 48, 
    width: 48, 
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  activeDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2ECC71',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});