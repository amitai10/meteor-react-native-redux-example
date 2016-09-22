import React, { Component } from 'react';

import {
  StyleSheet,
  PropTypes,
  View,
  Text,
  ListView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
Meteor.connect('ws://192.168.3.17:3000/websocket');//do this only once

class MeteorTodoList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   tasks: Meteor.collection('tasks')
    // };
    this.state = {
      text: ''
    }

    // Meteor.subscribe('tasks');
    Meteor.collection('tasks');

    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

 handleTextChange(text) {
    this.setState({text});
  }

  reset() {
      this.setState({text: ''});
  }

  save() {
    console.log("save", this.state.text);
    this.props.addTask(this.state.text);
    this.setState({text: ''});
  }

   renderRow(task) {
    return (
      <Text>{task.text}</Text>
    );
  }

  render() {
    return (
      <View>


       <TextInput
          onSubmitEditing={ this.reset }
          placeholder={ 'Type a new task here' }
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         <TouchableOpacity onPress={this.save}>
          <Text style={[styles.link_text ]}>Add</Text>
        </TouchableOpacity>
        
        <MeteorListView
          collection="tasks"
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(230, 233, 238)',
    borderColor: 'white',

  },
  link: {
    flex: 1,
    borderColor: 'white',
    justifyContent: 'center',
    elevation: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 18,
    marginVertical: 6
  },
  link_text: {
    color: 'black',
    fontSize: 14,
    fontWeight: '100'
  },
  link_text_light: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 11,
  }
})
// export default createContainer(params=>{
//   const handle = Meteor.subscribe('tasks');

//   return {
//     todosReady: handle.ready(),
//   };
// }, MeteorTodoList)

export default MeteorTodoList;
