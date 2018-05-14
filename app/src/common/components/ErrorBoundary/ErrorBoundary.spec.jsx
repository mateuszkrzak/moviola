import { mount } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggedComponent extends React.Component {
  makeBug = () => {
    throw new Error('Test error message');
  };

  render() {
    this.makeBug();

    return <span>This should not appear anywhere</span>;
  }
}

test('ErrorBoundary generates a error message when an error is caught', () => {
  const wrapper = mount(<ErrorBoundary>
    <BuggedComponent />
                        </ErrorBoundary>);
  expect(wrapper).toMatchSnapshot();
});
