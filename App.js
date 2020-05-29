import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image ,FlatList,Modal} from 'react-native';
import colors from './Colors';
import tempData from './tempData';
import TodoList from './component/TodoList';
import AddListModal from './component/AddListModal';
export default class App extends React.Component {

state ={
  addTodoVisible:true
};
toggleAddTodoModal(){
  this.setState({addTodoVisible: !this.state.addTodoVisible});
}
  render(){
    return(
      <View style={styles.container}>
       <Modal
       animationType='slide'
       visible={this.state.addTodoVisible}
       onRequestClose={() => this.toggleAddTodoModal()}>

        <AddListModal closeModal={() =>this.toggleAddTodoModal()} />
       </Modal>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.divider} />
              <Text style={styles.title}>
                  Todo <Text style={{fontWeight:'300',color:colors.blue}}>Lists</Text>
              </Text>
              <View style={styles.divider} />
          </View>

          <View style={{marginVertical: 30}}>
              <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                 <Image
                 style={{width:30,height:30}}
                 source={require('./assests/plus.png')}
                  />
              </TouchableOpacity>
          </View>

          <View style={{height:275,paddingLeft:32}}>
              <FlatList
              data={tempData}
              keyExtractor={item => item.name}
              horizontal={true}
              showHorizontalScrollIndicator ={false}
              renderItem={({item}) => (
              <TodoList  list={item}/>
              )
            }
              />
          </View>

      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  divider:{
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title:{
    fontSize:38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal:64
  },
  addList:{
    borderWidth: 2,
    borderColor:colors.lightBlue,
    borderRadius:4,
    padding:16,
    alignItems:'center',
    justifyContent:'center'
  }
  });
