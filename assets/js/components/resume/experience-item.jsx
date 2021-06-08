import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from '../../plugins/Watch.js';

class Item extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    }

    state = {
      inView: false
    }

    itemClass () {
      const { inView } = this.state;

      const classes = ['item'];

      if (inView) {
        classes.push('active');
      }

      return classes.join(' ');
    }

    constructor (props) {
      super(props);
      this.ref = React.createRef();
    }

    componentDidMount () {
      new Watch(this.ref.current, {
        threshold: 0.15
      }).oneInView(() => {
        this.setState({ inView: true });
      });
    }

    render () {
      const { title, items, date, company } = this.props;
      return (<div className={this.itemClass()} ref={this.ref}>
        <header>
          <h3>{title}</h3>
          <div>{date}</div>
        </header>
        <h5>{company}</h5>
        <ul>
          {items.map((i, k) => <li key={k}>{i}</li>)}
        </ul>
      </div>);
    }
}

module.exports = Item;
