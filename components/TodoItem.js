import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';

const TodoItem = ({item, onDeleteTodo, onToggleTodo}) => {
  console.log('render TodoItem:', item);
  const fontSize = 24;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggleTodo(item.idx)}>
        <View style={styles.buttonContainer}>
          <FIcon
            name={item.done_at !== null ? 'check-square' : 'square'}
            size={fontSize}
            color="green"
          />
        </View>
      </TouchableOpacity>
      <Text
        style={item.done_at !== null ? styles.strikeText : styles.itemText}
        children={item.todo}
      />
      <TouchableOpacity onPress={() => onDeleteTodo(item.idx)}>
        <View style={styles.buttonContainer}>
          <FIcon name="minus-square" size={fontSize} color="red" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  itemText: {
    flex: 1,
    fontSize: 20,
    marginVertical: 5,
    width: 100,
    color: 'black',
  },

  unstrikeText: {
    color: '#29323c',
  },

  strikeText: {
    flex: 1,
    fontSize: 20,
    marginVertical: 5,
    width: 100,
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  buttonContainer: {
    marginHorizontal: 5,
  },
});
