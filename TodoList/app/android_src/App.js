import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer';
import todoApp from '../shared/reducers'; 


const store = createStore(
  todoApp,
  applyMiddleware(thunk)
  );

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    );
  }
}

export default App;
