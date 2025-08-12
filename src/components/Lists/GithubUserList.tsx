import React from 'react';
import { FlatList } from 'react-native';
import GithubUserItem from '../Items/GithubUserItem';
import { GithubUserListProps } from '../../interfaces';

const GithubUserList = ({ data, onSelect }: GithubUserListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GithubUserItem user={item} onSelect={onSelect} />
      )}
    />
  );
}

export default GithubUserList
