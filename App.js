import React from 'react';
import {View} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ProductsOverviewScreen from './src/screens/shop/ProductsOverviewScreen';
import productsReducer from './src/store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <ProductsOverviewScreen />
      </View>
    </Provider>
  )
}

export default App
