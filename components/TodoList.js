import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
