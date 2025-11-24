import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function LogoutModal({ visible, onCancel, onLogout }) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Ionicons name="log-out-outline" size={48} color="#ff4444" />

          <Text style={styles.title}>Logout</Text>
          <Text style={styles.message}>
            Are you sure you want to log out?
          </Text>

          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.btn, styles.cancelBtn]}
              onPress={onCancel}
            >
              <Text style={[styles.btnText, { color: '#333' }]}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, styles.logoutBtn]}
              onPress={onLogout}
            >
              <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    elevation: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginTop: 6,
  },

  message: {
    marginTop: 6,
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },

  btnRow: {
    flexDirection: 'row',
    marginTop: 20,
  },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
  },

  cancelBtn: {
    backgroundColor: '#e6e6e6',
    marginRight: 10,
  },

  logoutBtn: {
    backgroundColor: '#ff4444',
  },

  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
