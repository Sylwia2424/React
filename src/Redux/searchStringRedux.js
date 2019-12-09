// selectors
export const getSearchString = state => state.searchString;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({cards}) => cards.length;
// action name creator
const reducerName = 'String';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const ADD_CHANGE = createActionName('ADD_CHANGE');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: ADD_CHANGE });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case ADD_CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

