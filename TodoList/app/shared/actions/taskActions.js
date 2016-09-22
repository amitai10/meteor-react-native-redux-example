import Meteor, { createContainer} from 'react-native-meteor';

export function add_task(task) {
  return {
    type: 'ADD_TASK',
    task
  };
}

export function addTask (text) {
  return (dispatch) => {
   Meteor.call('addItem', text, (err, res) => {
      if (res) {
        console.log(res);
        // dispatch(add_task(res));
      }
      });
  } ;
}; 