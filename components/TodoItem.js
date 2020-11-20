import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({item, onDeleteTodo}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <ADIcon name="checksquare" size={30} color="green" />
        </View>
      </TouchableOpacity>
      <Text style={styles.itemText} children={item.textValue} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onDeleteTodo(item.id)}>
        <View style={styles.buttonContainer}>
          <MCIcon name="delete" size={30} color="red" />
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
