import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './experience-item.jsx';

class Experience extends Component {
    static propTypes = {
      items: PropTypes.array.isRequired
    }

    render () {
      const { items } = this.props;
      return (
        <>
          {items.map(i => <Item {...i} key={i.title} />)}
        </>
      );
    }
}

module.exports = Experience;
