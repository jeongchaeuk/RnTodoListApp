import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import ADIcon from 'react-native-vector-icons/Feather';

const TodoItem = ({item, onDeleteTodo, onToggleTodo}) => {
  console.log('TodoItem');
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggleTodo(item.id)}>
        <View style={styles.buttonContainer}>
          {item.checked ? (
            <ADIcon name="check-square" size={30} color="green" />
          ) : (
            <ADIcon name="square" size={30} color="green" />
          )}
        </View>
      </TouchableOpacity>
      {item.checked ? (
        <Text style={styles.strikeText} children={item.textValue} />
      ) : (
        <Text style={styles.itemText} children={item.textValue} />
      )}
      <TouchableOpacity onPress={() => onDeleteTodo(item.id)}>
        <View style={styles.buttonContainer}>
          <ADIcon name="minus-square" size={30} color="red" />
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
    // fontWeight: 'bold',
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
    // fontWeight: 'normal',
    fontSize: 20,
    marginVertical: 5,
    width: 100,
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  buttonContainer: {
    margin: 5,
  },
});
