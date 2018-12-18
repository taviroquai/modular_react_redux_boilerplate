import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStore } from '../actions';

class Input extends Component {

  update(value) {
    const { dispatch } = this.props;
    dispatch(changeStore(value));
  }

  render() {
    return (
      <input value={ this.props.data }
        onChange={e => this.update(e.target.value)}
      />
    );
  }
}

export default connect(store => store.example)(Input);
