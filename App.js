/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, textValue: 'aaa', checked: false},
    {id: 2, textValue: 'bbb', checked: true},
    {id: 3, textValue: 'ccc', checked: false},
    {id: 4, textValue: 'ddd', checked: false},
    {id: 5, textValue: 'aaa', checked: false},
    {id: 6, textValue: 'bbb', checked: true},
    {id: 7, textValue: 'ccc', checked: false},
    {id: 8, textValue: 'ddd', checked: false},
    {id: 4, textValue: 'ddd', checked: false},
    {id: 5, textValue: 'aaa', checked: false},
    {id: 6, textValue: 'bbb', checked: true},
    {id: 7, textValue: 'ccc', checked: false},
    {id: 8, textValue: 'ddd', checked: false},
  ]);

  const insertTodo = (text) => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>할 일 목록</Text>
        <View style={styles.card}>
          <TodoInsert />
          <TodoList todos={todos} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {},

  submitButton: {
    backgroundColor: 'whitesmoke',
    height: 40,
  },

  submitButtonText: {
    color: 'blue',
    fontSize: 18,
  },

  card: {
    backgroundColor: 'whitesmoke',
    marginHorizontal: 10,
    // marginVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },

  input: {
    padding: 10,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    fontSize: 24,
  },

  container: {
    flex: 1,
    backgroundColor: '#44f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  appTitle: {
    color: 'whitesmoke',
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  },
});

export default App;
