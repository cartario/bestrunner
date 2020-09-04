import {extend, adapter, parseItemFromStorage} from './utils.js';
import {sessions} from './mock';
import {history} from "./history.js";
import {getItems, setItem, setItems, removeItem} from './local-storage';

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

const storageSessions = Object.values(getItems());
const parsedSessionsFromStorage = storageSessions.map((session)=>parseItemFromStorage(session));

// localStorage.clear();
// console.log(createStoreStructure(sessions));
console.log(createStoreStructure(sessions));

const initialState = {
  isDataReady: false,
  sessions: [],
};

const ActionType = {
  IS_DATA_READY: `IS_DATA_READY`,
  LOAD_SESSIONS: `LOAD_SESSIONS`,
  CREATE_SESSION: `CREATE_SESSION`,
  EDIT_SESSION: `EDIT_SESSION`,
  DELETE_SESSION: `DELETE_SESSION`,
};

export const ActionCreator = {
  setIsDataReady: (value) => ({
    type: `IS_DATA_READY`,
    payload: value,
  }),  
  loadSessions: (sessions) => ({
    type: ActionType.LOAD_SESSIONS,
    payload: sessions,
  }),
  createSession: (session) => ({
    type: ActionType.CREATE_SESSION,
    payload: session,
  }), 
  editSession: (session) => ({
    type: ActionType.EDIT_SESSION,
    payload: session,
  }), 
  deleteSession: (id) => ({
    type: ActionType.DELETE_SESSION,
    payload: id,
  }), 
};

export const Operation = {
  loadSessions: () => (dispatch, getState, api) => {    
    return api.get(`/users?page=2`).then((response) => {          
      dispatch(ActionCreator.loadSessions(adapter(response.data.data)));      
      dispatch(ActionCreator.loadSessions(parsedSessionsFromStorage));
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
    // setItems(createStoreStructure([...state.sessions, ...action.payload]));   
    
    return extend(state, {sessions: [...state.sessions, ...action.payload]});

  case ActionType.CREATE_SESSION:
    // setItems(action.payload);
    
    setItem(action.payload.id, action.payload);
    
    history.goBack(); 
    return extend(state, {sessions: [...state.sessions, action.payload]});

  case ActionType.EDIT_SESSION:
      const editSession = action.payload;
      const index = state.sessions.findIndex((session) => session.id === editSession.id);

      if(index === -1){
        return false;
      }

      const newSessions = [...state.sessions.slice(0, index), editSession, ...state.sessions.slice(index + 1)];

     debugger;
      setItems(createStoreStructure(newSessions));
      
    return extend(state, {sessions: newSessions});

  case ActionType.DELETE_SESSION:
    
    removeItem(action.payload); //storage
    const sessionsFiltered = state.sessions.filter((session)=>session.id!==action.payload)  
    return extend(state, {sessions: sessionsFiltered});

    default:
      return state;
  }
};
