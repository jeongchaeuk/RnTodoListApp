import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';

const TodoItem = ({item, onDeleteTodo, onToggleTodo}) => {
  console.log('TodoItem');
  const fontSize = 24;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggleTodo(item.id)}>
        <View style={styles.buttonContainer}>
          <FIcon
            name={item.checked ? 'check-square' : 'square'}
            size={fontSize}
            color="green"
          />
        </View>
      </TouchableOpacity>
      <Text
        style={item.checked ? styles.strikeText : styles.itemText}
        children={item.textValue}
      />
      <TouchableOpacity onPress={() => onDeleteTodo(item.id)}>
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
    fontSize: 24,
    marginVertical: 5,
    width: 100,
    color: 'black',
  },

  unstrikeText: {
    color: '#29323c',
  },

  strikeText: {
    flex: 1,
    fontSize: 24,
    marginVertical: 5,
    width: 100,
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  buttonContainer: {
    marginHorizontal: 5,
  },
});
