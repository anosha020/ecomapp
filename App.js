import React from 'react'
import { View, Text } from 'react-native'
import MainNavigator from './Navigator/Navigators';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ProductReducer from './Store/Reducers/ProductReducer';

const App = () => {
  const rootReducer = combineReducers({
    product: ProductReducer,
  });

  const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={Store}>
      <MainNavigator />
    </Provider>
  )
};
export default App;

