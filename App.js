import React from 'react';
import {Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './src/store/reducers/products';
import ProductsOverviewScreen from './src/screens/shop/ProductsOverviewScreen';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}

export default App
