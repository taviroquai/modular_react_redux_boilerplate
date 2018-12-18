import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../example/components/Input';
import { bootState } from '../actions';

class Boot extends Component {

  componentDidMount() {
    const { loaded, dispatch } = this.props;
    if (!loaded) dispatch(bootState())
  }

  render() {
    const { loaded } = this.props;
    if (!loaded) return <p>Loading...</p>
    return (
      <React.Fragment>
        <Input />
      </React.Fragment>
    );
  }
}

export default connect(state => state.boot)(Boot);
