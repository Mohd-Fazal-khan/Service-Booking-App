import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';
// import DeleteConfirmationModal from './DeleteConfirmationModal';

const { width, height } = Dimensions.get('window');

export default function MyBookingsScreen({ navigation }) {
  const [bookings, setBookings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const loadBookings = async () => {
    const data = await AsyncStorage.getItem('BOOKINGS');
    if (data) {
      setBookings(JSON.parse(data));
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadBookings);
    return unsubscribe;
  }, [navigation]);

  const promptDelete = (item) => {
    setSelectedBooking(item);
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    const updated = bookings.filter((b) => b.id !== selectedBooking.id);
    setBookings(updated);
    await AsyncStorage.setItem('BOOKINGS', JSON.stringify(updated));
    setModalVisible(false);   
    setSelectedBooking(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <View
        style={styles.card}
        
      >
        <Image source={item.image} style={styles.image} />

        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>📅</Text>
            <Text style={styles.infoText}>{item.date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.icon}>🕐</Text>
            <Text style={styles.infoText}>{item.time}</Text>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.price}>{item.price}</Text>
            
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.deleteBtn}
        activeOpacity={0.6}
        onPress={() => promptDelete(item)}
      >
        <Icon name="delete" size={22} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Bookings</Text>
        <Text style={styles.subheading}>
          {bookings.length} {bookings.length === 1 ? 'booking' : 'bookings'}
        </Text>
      </View>

      {bookings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyCircle}>
            <Text style={styles.emptyIcon}>📋</Text>
          </View>
          <Text style={styles.emptyTitle}>No bookings yet</Text>
          <Text style={styles.emptySubtitle}>
            Your upcoming bookings will appear here
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <DeleteConfirmationModal
        visible={modalVisible}
        title={selectedBooking?.title}
        onCancel={() => setModalVisible(false)}
        onDelete={confirmDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
  },

  subheading: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
    fontWeight: '500',
  },

  listContent: {
    padding: 16,
  },

  cardWrapper: {
    marginBottom: 20,
    position: 'relative',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    flexDirection: 'row',
    padding: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
  },

  image: {
    width: 110,
    height: 140,
    borderRadius: 16,
  },

  cardContent: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
    paddingVertical: 6,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  icon: {
    fontSize: 15,
    marginRight: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#059669',
  },

  arrowBtn: {
    width: 34,
    height: 34,
    backgroundColor: '#F1F5F9',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrow: {
    fontSize: 18,
    color: '#64748B',
    fontWeight: '700',
  },

  deleteBtn: {
    position: 'absolute',
    top: 15,
    right: 8,
    backgroundColor: '#FEE2E2',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  emptyCircle: {
    width: 90,
    height: 90,
    backgroundColor: '#E2E8F0',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  emptyIcon: {
    fontSize: 40,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
  },

  emptySubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 6,
    color: '#94A3B8',
  },
});
