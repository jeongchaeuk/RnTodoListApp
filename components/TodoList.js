import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  console.log('render TodoList:', {todos});
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.idx}
          item={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
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
