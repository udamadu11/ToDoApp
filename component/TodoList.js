import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default TodoList = ({list}) => {

const completedCount = list.todos.filter(todo => todo.completed).length;
const remaingCount = list.todos.length - completedCount;
  return(
    <View style={[styles.listContainer, {backgroundColor:list.color}]}>
      <Text style={styles.listTitle} numberOfLine={1}>
        {list.name}
      </Text>

      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.count}>{remaingCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer:{
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:6,
    marginHorizontal:12,
    alignItems: 'center',
    width:200
  },
  listTitle:{
    fontSize: 24,
    fontWeight: "700",
    color:colors.white,
    marginBottom:18
  },
  count:{
    fontSize:48,
    fontWeight:"200",
    color:colors.white
  },
  subtitle:{
    fontSize:12,
    fontWeight:"700",
    color:colors.white
  }
});
