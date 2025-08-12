import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { GithubUserItemProps } from '../../interfaces';

const GithubUserItem = ({ user, onSelect }: GithubUserItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <TouchableOpacity onPress={() => onSelect(user.login)}>
        <Text style={styles.username}>{user.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(user.html_url)}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GithubUserItem

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontSize: 16, fontWeight: 'bold', color: 'blue' },
  link: { color: 'purple', marginLeft: 10 },
});
