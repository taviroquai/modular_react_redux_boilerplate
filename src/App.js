import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Boot from './modules/boot/components/Boot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Boot />
      </Provider>
    );
  }
}

export default App;
