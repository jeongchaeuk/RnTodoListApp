import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
