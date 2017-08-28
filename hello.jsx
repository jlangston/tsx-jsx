import React, { Component } from 'react';

/**
 * @augments {Component<any, any>}
 */
class Hello extends React.Component {
  render() {
    return <div>{this.props.baz}</div>;
  }
}
export default Hello;

