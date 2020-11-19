import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <View style={styles.circle}>
          <Icon name="circledowno" size={30} color="blue" />
        </View>
      </TouchableOpacity>
      <Text style={styles.itemText}>Todo Item</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
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

  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  itemText: {
    flex: 5,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },

  unstrikeText: {
    color: '#29323c',
  },

  circle: {
    margin: 10,
  },
});
