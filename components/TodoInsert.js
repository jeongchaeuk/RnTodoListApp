import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import FIcon from 'react-native-vector-icons/Feather';

const TodoInsert = ({onInsertTodo}) => {
  const [todo, setTodo] = useState('');

  const insertTodo = () => {
    onInsertTodo(todo);
    setTodo('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        placeholderTextColor="#aaa"
        onChangeText={(text) => setTodo(text)}
        value={todo}
        multiline={true}
      />
      <Button
        style={styles.submitButton}
        icon={<FIcon name="plus" size={30} color="#fff" />}
        disabled={todo === ''}
        disabledStyle={styles.disabledButton}
        onPress={insertTodo}
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

  disabledButton: {
    backgroundColor: '#aaa',
  },

  submitButton: {
    width: '50%',
  },

  input: {
    width: '75%',
    padding: 5,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    fontSize: 20,
    color: 'black',
  },
});
