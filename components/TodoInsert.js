import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const TodoInsert = () => {
  const [todo, setTodo] = useState('');
  const handleInputTodo = () => {};

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        onChangeText={(text) => setTodo(text)}
      />
      <Button
        style={styles.submitButton}
        title="등록"
        onPress={() => {
          alert(todo);
        }}
      />
    </View>
  );
};

export default TodoInsert;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  submitButton: {
    width: '25%',
  },

  input: {
    width: '75%',
    padding: 5,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    fontSize: 20,
  },
});
