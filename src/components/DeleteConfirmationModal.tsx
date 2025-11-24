import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function DeleteConfirmationModal({
  visible,
  onCancel,
  onDelete,
  title,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.heading}>Delete Booking</Text>

          <Text style={styles.message}>
            Are you sure you want to delete "{title}"?
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
              <Text style={styles.deleteText}>Delete</Text>
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
    paddingHorizontal: 30,
  },

  modalBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    elevation: 6,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 12,
  },

  message: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 14,
  },

  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
  },

  cancelText: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
  },

  deleteBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#EF4444',
    borderRadius: 8,
  },

  deleteText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});
