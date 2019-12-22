import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../Redux/columnsRedux.js';
import {createAction_addColumn} from '../../Redux/columnsRedux.js';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);