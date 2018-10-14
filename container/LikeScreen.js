import React, { Component } from 'react';
import { connect } from 'react-redux';

export default Wrappee => {
  
  class Wrapper extends Component {
    render() {      
      return <Wrappee {...this.props} />;
    }
    shouldComponentUpdate(nextProps) {      
      return nextProps.activeRoute
        === Wrappee.displayName;
    }
  }

  const mapStateToProps = state => ({
    activeRoute: state.navigation.stack[state.navigation.stack.length - 1]
  });

  const mapDispatchToProps = dispatch => ({
    //navigate: screen => dispatch(push(screen)),
    dispatch
  });

  const Connected = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
  Connected.navigationOptions = Wrappee.navigationOptions;

  return Connected;
};
