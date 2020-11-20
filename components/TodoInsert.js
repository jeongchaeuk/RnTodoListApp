import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import FIcon from 'react-native-vector-icons/Feather';

const TodoInsert = ({onInsertTodo}) => {
  const [todo, setTodo] = useState('');

  // const handleKeyPress = (e) => {
  //   if (e.nativeEvent.key === 'Enter') {
  //     let txt = todo.replace('\n', 'x');
  //     setTodo(txt);
  //     // onInsertTodo(todo);
  //     // setTodo('');
  //   }
  // };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        onChangeText={(text) => setTodo(text)}
        // onKeyPress={handleKeyPress}
        value={todo}
        autoCorrect={false}
      />
      <Button
        style={styles.submitButton}
        icon={<FIcon name="plus" size={20} color="white" />}
        disabled={todo === ''}
        disabledStyle={styles.disableButton}
        onPress={() => {
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

  disableButton: {
    backgroundColor: 'lightgray',
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
