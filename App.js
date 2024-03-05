import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    setTodos(currentTodos => [
      ...currentTodos, 
      { id: Math.random().toString(), text: todoText }
    ]);
  };

  const removeTodoHandler = (todoId) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <AddTodo onAddTodo={addTodoHandler} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={itemData => (
            <TodoItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDelete={removeTodoHandler} 
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  container: {
    flex: 1,
    paddingTop: 20, 
  },
});
