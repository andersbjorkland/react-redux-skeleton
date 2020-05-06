import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  ...state
});


// const mapDispatchToProps = ({
//   pressedKey: (keycode) => dispatch(pressedKey(keycode))
// });

export default connect(mapStateToProps)(App);
