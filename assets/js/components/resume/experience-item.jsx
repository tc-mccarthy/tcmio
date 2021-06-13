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
      inView: false,
      more_height: 0
    }

    itemClass () {
      const { inView, more_height } = this.state;

      const classes = ['item'];

      if (inView) {
        classes.push('active');
      }

      if (more_height) {
        classes.push('expand');
      }

      return classes.join(' ');
    }

    constructor (props) {
      super(props);
      this.ref = React.createRef();
      this.more_ref = React.createRef();
    }

    componentDidMount () {
      new Watch(this.ref.current, {
        threshold: 0.15
      }).oneInView(() => {
        this.setState({ inView: true });
      });
    }

    more_class () {
      const { expand } = this.state;
      const classes = ['more'];

      if (expand) {
        classes.push('active');
      }

      return classes.join(' ');
    }

    more_button () {
      const { items } = this.props;

      if (items.slice(3, items.length).length > 0) {
        return <a href="#" className="btn expand" onClick={e => this.expand(e)}>More <i className="fa fa-angle-double-down" /></a>;
      }
    }

    expand (e) {
      e.preventDefault();

      const height = this.more_ref.current.scrollHeight;
      this.setState({ more_height: `${height}px` });
    }

    render () {
      const { title, items, date, company } = this.props;
      const { more_height } = this.state;
      return (<div className={this.itemClass()} ref={this.ref}>
        <header>
          <h3>{title}</h3>
          <div>{date}</div>
        </header>
        <h5>{company}</h5>
        <ul>
          {items.slice(0, 3).map((i, k) => <li key={k}>{i}</li>)}
        </ul>
        <ul className={this.more_class()} style={{ height: more_height }} ref={this.more_ref}>
          {items.slice(3, items.length).map((i, k) => <li key={k}>{i}</li>)}
        </ul>
        {this.more_button()}
      </div>);
    }
}

module.exports = Item;
