import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoInsert = ({onInsertTodo}) => {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />
      <Button
        style={styles.submitButton}
        icon={<Icon name="add" size={20} color="white" />}
        title=""
        onPress={() => {
          if (todo === '') {
            alert('할 일을 먼저 입력하세요.');
            return;
          }
          onInsertTodo(todo);
          setTodo('');
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
