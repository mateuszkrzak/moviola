import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import searchReducer from '../containers/SearchPage/reducer';
import detailsReducer from '../containers/MovieDetailsPage/reducer';

const reducers = combineReducers({
  search: searchReducer,
  details: detailsReducer,
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
