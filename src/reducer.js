import {extend, adapter} from './utils.js';
import {sessions} from './mock';

const initialState = {
  isDataReady: false,
  sessions: [],
};

const ActionType = {
  IS_DATA_READY: `IS_DATA_READY`,
  LOAD_SESSIONS: `LOAD_SESSIONS`,
};

export const ActionCreator = {
  setIsDataReady: (value) => ({
    type: `IS_DATA_READY`,
    payload: value,
  }),  
  loadSessions: (sessions) => ({
    type: `LOAD_SESSIONS`,
    payload: sessions,
  }),  
};

export const Operation = {
  loadSessions: () => (dispatch, getState, api) => {    
    return api.get(`/users?page=2`).then((response) => {          
      dispatch(ActionCreator.loadSessions(adapter(response.data.data)));
      dispatch(ActionCreator.setIsDataReady(true));           
    })
    .catch((err) => {      
      throw err;
    });
  }, 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionType.IS_DATA_READY:
    return extend(state, {isDataReady: action.payload});

  case ActionType.LOAD_SESSIONS:
    return extend(state, {sessions: [...state.sessions, ...action.payload]});

  case ActionType.SET_ACTIVE_FLIGHT:
    return extend(state, {flights: action.payload});

    default:
      return state;
  }
};
