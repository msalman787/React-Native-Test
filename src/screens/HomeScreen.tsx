import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/githubSlice';
import { RootState, AppDispatch } from '../redux/store';
import { fetchUserDetails, fetchUsers } from '../redux/githubAction';
import { GithubUserList, SearchInput, UserModal } from '../components';

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, selectedUser, modalVisible } = useSelector((state: RootState) => state.github);

  const handleSearch = (query: string) => {
    dispatch(fetchUsers(query));
  };

  const handleSelect = (username: string) => {
    dispatch(fetchUserDetails(username));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Test</Text>

      <SearchInput onSearch={handleSearch} />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : users.length === 0 ? (
        <Text style={styles.emptyText}>No users found. Try searching for something else!</Text>
      ) : (
        <GithubUserList data={users} onSelect={handleSelect} />
      )}

      <UserModal
        visible={modalVisible}
        user={selectedUser}
        onClose={() => dispatch(closeModal())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 26,
    marginTop: 30,
    textAlign: 'center'
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888'
  }
});
