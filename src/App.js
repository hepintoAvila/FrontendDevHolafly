// src/App.js

import React from 'react';

import Kittens from './Kittens';

// For Saas import Saas.scss
import './assets/scss/Saas.scss';

type AppProps = {};
const App = (props: AppProps): React$Element<any> => {
  return <Kittens></Kittens>;
};
export default App;