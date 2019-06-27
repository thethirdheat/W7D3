import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world! Yes React is connected!
      < PokemonIndexContainer />
    </div>
  </Provider>
);

export default Root;