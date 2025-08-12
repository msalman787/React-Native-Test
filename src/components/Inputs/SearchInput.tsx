import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { SearchInputProps } from '../../interfaces';

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(text);
    }, 1000); // debounce 1s
    return () => clearTimeout(delay);
  }, [text]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Search GitHub users..."
      value={text}
      onChangeText={setText}
    />
  );
}

export default SearchInput 

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    borderRadius: 6,
  },
});
