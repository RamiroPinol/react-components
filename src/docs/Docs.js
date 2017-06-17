import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // window.location.hash returns URL after #. (mozilla.org/docs#DOM -> "#DOM")
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    // If URL changes, set state with new value.
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <div>
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    )
  }
}
