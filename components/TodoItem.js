import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="checksquare" size={30} color="green" />
        </View>
      </TouchableOpacity>
      <Text style={styles.itemText}>
        [{item.id}] {item.textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
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
    flex: 5,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
    width: 100,
  },

  unstrikeText: {
    color: '#29323c',
  },

  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },

  buttonContainer: {
    margin: 5,
  },
});
