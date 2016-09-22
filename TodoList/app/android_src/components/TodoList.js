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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(props.tasks),
    };

    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  updateDataSource(tasks) {
    this.setState({
      dataSource: ds.cloneWithRows(tasks)
    });
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.tasks);
  }

  handleTextChange(text) {
    this.setState({text});
  }

  reset() {
      this.setState({text: ''});
  }

  save() {
    console.log("save", this.state.text);
    this.props.add_task(this.state.text);
     this.setState({text: ''});
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
        
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>    <TouchableOpacity style={styles.link}>
          <Text style={[styles.link_text ]}>{rowData.title}</Text>
        </TouchableOpacity>}
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
export default  TodoList;

