import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import FIcon from 'react-native-vector-icons/Feather';

function makeTodo(id, textValue, checked) {
  return {id: id, textValue: textValue, checked: checked};
}

const App = () => {
  const [todos, setTodos] = useState([
    makeTodo(1, 'aaa', true),
    makeTodo(2, 'bbb', false),
    makeTodo(3, 'ccc', true),
  ]);

  const insertTodo = (text) => {
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue: text, checked: false},
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <>
      <StatusBar style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>
          <FIcon name="list" size={30} color="white" /> 할 일 목록
        </Text>
        <View style={styles.card}>
          <TodoInsert onInsertTodo={insertTodo} />
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
          />
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
    backgroundColor: '#23527C',
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
