/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TodoInsert from './components/TodoInsert';

const App = () => {
  return (
    <>
      <StatusBar style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>할 일 목록</Text>
        <View style={styles.card}>
          <TodoInsert />
          <ScrollView></ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {},

  submitButton: {
    backgroundColor: 'whitesmoke',
    height: 40,
  },

  submitButtonText: {
    color: 'blue',
    fontSize: 18,
  },

  card: {
    backgroundColor: 'whitesmoke',
    marginHorizontal: 10,
    // marginVertical: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },

  input: {
    padding: 10,
    margin: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    fontSize: 24,
  },

  container: {
    flex: 1,
    backgroundColor: '#44f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  appTitle: {
    color: 'whitesmoke',
    fontSize: 36,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  },
});

export default App;
