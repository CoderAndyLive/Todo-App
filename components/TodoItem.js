import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ id, text, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.todoItem}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
