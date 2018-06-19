import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import searchReducer from '../containers/SearchPage/reducer';
import detailsReducer from '../containers/MovieDetailsPage/reducer';

const reducers = combineReducers({
  search: searchReducer,
  details: detailsReducer,
});

let preloadedState = {};
if (global.PRELOADED_STATE) {
  preloadedState = global.PRELOADED_STATE;
  delete global.PRELOADED_STATE;
}

export const getStore = () => createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
export const getInitialStore = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
