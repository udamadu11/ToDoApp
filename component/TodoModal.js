import { Text,View,StyleSheet ,SafeAreaView,TouchableOpacity,Image,FlatList,KeyboardAvoidingView,TextInput,Keyboard} from "react-native";
import React, { Component } from 'react';
import colors from '../Colors';
import Icon from 'react-native-ionicons'

export default class TodoModal extends React.Component{
    state = {
        newTodo : ""
    };

    toggleTodoCompleted = index => {
        let list = this.props.list;
        list.todos[index].completed = !list.todos[index].completed;
        this.props.updateList(list);
    }

    addTodo = () => {
        let list = this.props.list;
        list.todos.push({title: this.state.newTodo, completed: false});

        this.props.updateList(list);
        this.setState({ newTodo: "" });
        Keyboard.dismiss();
    }

    renderTodo = (todo,index) => {
        return(
            <View style={styles.todoContainer}>
            <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                <Icon 
                name = {todo.completed ? "md-square" : "md-square-outline"}
                size={24} color={colors.grey} 
                style={{width:32}} />
            </TouchableOpacity>
            <Text style={[styles.todo, {textDecorationLine: todo.completed ? "line-through" : "none" , color: todo.completed ? colors.grey : colors.black}]}>{todo.title}</Text>
        </View>
        );
    };
    render(){
        const list = this.props.list;
        const taskCount = list.todos.length;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        return(
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position:'absolute',top:10,right:5}} onPress={this.props.closeModal}>
                    <Image
                         style={{width:30,height:30}}
                         source={require('../assests/close.png')}
                    />
                </TouchableOpacity>
                <View style={[styles.section, styles.header,{borderBottomColor:list.color}]}>
                    <View>
                      <Text style={styles.title}>{list.name}</Text>
                      <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                      </Text>
                    </View>
                </View>
                <View style={[styles.section ,{flex:3} ]}>
                    <FlatList
                        data = {list.todos}
                        renderItem = {({item,index}) =>this.renderTodo(item,index)}
                        keyExtractor = {item => item.title}
                        contentContainerStyle={{paddingHorizontal:32,paddingVertical:64}}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={[styles.section , styles.footer]}>
                    <TextInput 
                    style={[styles.input, {borderBottomColor:list.color}]}
                    onChangeText={text => this.setState({ newTodo: text })}
                    value={this.state.newTodo}
                    />
                    <TouchableOpacity style={styles.addTodo, {backgroundColor:list.color}} onPress={() => this.addTodo()}>
                    <Image
                        style={{width:30,height:30}}
                        source={require('../assests/plus.png')}
                  />    
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
        );
    };
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems: 'center',
      flex:1
},
section:{
    flex:1,
    alignSelf:'stretch'
},
header:{
    marginBottom: 8,
    borderBottomWidth:3,
    justifyContent:'flex-end',
    marginLeft:64
},
title:{
    fontSize:30,
    fontWeight:"800",
    color:colors.black
},
taskCount:{
    marginTop:4,
    marginBottom:16,
    color:colors.grey,
    fontWeight:"800"
},
footer:{
    paddingHorizontal:32,
    flexDirection:'row',
    alignItems:'center'
},
input:{
    flex:1,
    height:40,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:6,
    marginRight:8,
    paddingHorizontal:8
},
addTodo:{
    borderRadius:4,
    padding:16,
    alignItems: 'center',
    justifyContent:'center'
},
todoContainer:{
    paddingVertical:16,
    flexDirection:'row',
    alignItems:'center'
},
todo:{
    color:colors.black,
    fontWeight:"700",
    fontSize:18
}
});