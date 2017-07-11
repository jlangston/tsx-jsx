import React from 'react';
import Hello from './hello';

class A extends React.Component<void, void> {
  render() {
    return (
      <div>
        <Hello baz="world">
          <div></div>
        </Hello>
      </div>
    );
  }
}
