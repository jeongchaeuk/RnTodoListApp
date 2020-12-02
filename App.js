import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import FIcon from 'react-native-vector-icons/Feather';

import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'todo.db'});

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    enablePromise(true);
    console.log('App: start useEffect');
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_todo'",
        [],
        (tx, res) => {
          console.log('table:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_todo', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_todo(idx INTEGER PRIMARY KEY AUTOINCREMENT, todo VARCHAR(100), created_at VARCHAR(25), done_at VARCHAR(25))',
              [],
            );
          } else {
            selectTodos();
          }
        },
      );
    });
  }, []);

  const selectTodos = () => {
    console.log('App: start selectTodos');
    db.transaction((txn) => {
      txn.executeSql('SELECT * FROM table_todo', [], (tx, res) => {
        console.log('selects : ', res.rows.length);
        let temp = [];
        for (let i = 0; i < res.rows.length; ++i) {
          temp.push(res.rows.item(i));
        }
        setTodos(temp);
      });
    });
  };

  const insertTodo = (todo) => {
    console.log('App: start insertTodo');
    db.transaction((txn) => {
      txn.executeSql(
        "INSERT INTO table_todo (todo, created_at) VALUES (?, datetime('now'))",
        [todo],
      );
    });
    selectTodos();
  };

  const deleteFromDB = (idx) => {
    console.log('App: start deleteFromDB');
    db.transaction((txn) => {
      txn.executeSql(`DELETE FROM table_todo WHERE idx=${idx}`, []);
    });

    selectTodos();
  };

  const deleteTodo = (idx) => {
    console.log('App: start deleteTodo');
    Alert.alert(
      '삭제',
      '정말 삭제하시겠습니까?',
      [
        {
          text: '아니오',
          onPress: () => {},
          style: 'cancel',
        },
        {text: '네', onPress: () => deleteFromDB(idx)},
      ],
      {cancelable: false},
    );
  };

  const toggleTodo = (idx) => {
    console.log('App: start toggleTodo');
    db.transaction((txn) => {
      txn.executeSql(
        `UPDATE table_todo 
            SET done_at = 
            (
                CASE
                      WHEN done_at NOT NULL THEN NULL
                      ELSE datetime('now')
                END
            )   WHERE idx = ${idx}`,
        [],
      );
    });
    selectTodos();
  };

  console.log('App: start toggleTodo');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>
        <FIcon name="list" size={30} color="white" /> 할 일 목록
      </Text>
      <View style={styles.card}>
        <TodoInsert onInsertTodo={insertTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </View>
    </SafeAreaView>
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
    backgroundColor: '#23527C',
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
