import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookingSuccessModal from '../../components/BookingSuccessModal';

// import BookingSuccessModal from '../components/BookingSuccessModal';

const { width, height } = Dimensions.get('window');

export default function ConfirmBookingScreen({ route, navigation }) {
  const { title, price, image, time } = route.params;

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const [notes, setNotes] = useState('');
  const [successVisible, setSuccessVisible] = useState(false);

  const handleConfirm = async () => {
    const booking = {
      id: Date.now(),
      title,
      price,
      image,
      date: date.toDateString(),
      time: selectedTime.toLocaleTimeString(),
      notes,
    };

    const existing = await AsyncStorage.getItem('BOOKINGS');
    const parsed = existing ? JSON.parse(existing) : [];

    parsed.push(booking);
    await AsyncStorage.setItem('BOOKINGS', JSON.stringify(parsed));

    setSuccessVisible(true);
  };

  const handleSuccessClose = () => {
    setSuccessVisible(false);

    navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={22} color="#0E7F3D" />
      </TouchableOpacity>

      <Text style={styles.heading}>Complete Your Booking</Text>

      <View style={styles.serviceCard}>
        <Image source={image} style={styles.serviceImage} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.serviceTitle}>{title}</Text>
          <Text style={styles.servicePrice}>{price}</Text>
          <Text style={styles.serviceTime}>{time}</Text>
        </View>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Select Date</Text>

        <TouchableOpacity style={styles.selector} onPress={() => setShowDate(true)}>
          <Text style={styles.selectorText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            display="calendar"
            onChange={(event, selected) => {
              setShowDate(false);
              if (selected) setDate(selected);
            }}
          />
        )}
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Select Time</Text>

        <TouchableOpacity style={styles.selector} onPress={() => setShowTime(true)}>
          <Text style={styles.selectorText}>
            {selectedTime.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>

        {showTime && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="spinner"
            onChange={(event, selected) => {
              setShowTime(false);
              if (selected) setSelectedTime(selected);
            }}
          />
        )}
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={styles.notesInput}
          value={notes}
          onChangeText={setNotes}
          placeholder="Add any additional notes..."
          multiline
        />
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm Booking</Text>
        <Ionicons name="checkmark-circle" size={22} color="#fff" />
      </TouchableOpacity>

      <BookingSuccessModal
        visible={successVisible}
        onClose={handleSuccessClose}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F8F9FA' },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1A1A1A',
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  serviceImage: { width: 80, height: 80, borderRadius: 12 },
  serviceTitle: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
  servicePrice: { fontSize: 16, color: '#0E7F3D', marginTop: 4 },
  serviceTime: { fontSize: 14, color: '#666', marginTop: 4 },
  inputBox: { marginTop: 18 },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 8, color: '#1A1A1A' },
  selector: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  selectorText: { marginLeft: 10, fontSize: 15, color: '#222' },
  notesInput: {
    height: 100,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    textAlignVertical: 'top',
    fontSize: 14,
    elevation: 2,
  },
  confirmBtn: {
    backgroundColor: '#0E7F3D',
    paddingVertical: 16,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
    marginBottom: 40,
    elevation: 5,
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
});
