import shortid from 'shortid';
import searchString from './searchStringRedux.js';
//import card from '../Card/Card.js';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

export const getCardsForSearch = ({ cards }, searchString) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title));
// action name creator
const reducerName = 'Cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_Card = createActionName('ADD_Card');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_Card });
export const createAction_moveCard = payload => ({ payload, type: MOVE_CARD });
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_Card:
      return [...state, { ...action.payload, id: shortid.generate() }];
    case MOVE_CARD:
      return [...state, { ...action.payload, id:  shortid.generate( )}];
    default:
      return state;
  }
}