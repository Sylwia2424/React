import {connect} from 'react-redux';
import List from './List';
import getColumnsForList from '../../Redux/columnsRedux.js';
import createAction_addColumn from '../../Redux/columnsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);