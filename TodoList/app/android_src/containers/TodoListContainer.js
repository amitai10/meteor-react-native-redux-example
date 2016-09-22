import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeteorTodoList from '../components/MeteorTodoList';
import * as taskActions from "../../shared/actions/taskActions";

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(taskActions, dispatch);
}

//export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(MeteorTodoList);