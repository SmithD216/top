//App.js

import React, {Component} from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent title="React"/>
      </div>
    );
  }
}

export default App;