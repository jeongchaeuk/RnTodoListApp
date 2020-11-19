import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const TodoInsert = () => {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="할 일을 입력하세요." />
      <Button title="aaa">aaa</Button>
    </View>
  );
};

export default TodoInsert;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 10,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    fontSize: 24,
  },
});
