import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');

  const textChangeHandler = (enteredText) => {
    setTodoText(enteredText);
  };

  const addTodo = () => {
    onAddTodo(todoText);
    setTodoText(''); // Clear the input after adding
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="New Todo"
        style={styles.input}
        onChangeText={textChangeHandler}
        value={todoText}
      />
      <Button title="ADD" onPress={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%' 
  },
});
