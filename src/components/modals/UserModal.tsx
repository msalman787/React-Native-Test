import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { UserModalProps } from '../../interfaces';

const UserModal = ({ visible, user, onClose }: UserModalProps) => {
  if (!user) return null;
  return (
    <Modal
      backdropOpacity={0.35}
      statusBarTranslucent
      swipeDirection="down"
      isVisible={visible}
      onBackdropPress={onClose}
    >
      <View style={styles.modal}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{user.name || user.login}</Text>
        <Text>Location: {user.location || 'N/A'}</Text>
        <Text>Followers: {user.followers}</Text>
        <Text>Following: {user.following}</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default UserModal

const styles = StyleSheet.create({
  modal: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  closeBtn: { marginTop: 15, backgroundColor: 'red', padding: 8, borderRadius: 5 },
  closeText: { color: 'white' },
});
