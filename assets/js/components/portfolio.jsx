import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './portfolio/item.jsx';

class Portfolio extends Component {
    static propTypes = {
      items: PropTypes.array.isRequired
    }

    render () {
      const { items } = this.props;

      return items.map(i => <Item {...i} key={i.link} />);
    }
}

module.exports = Portfolio;
