import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from '../../plugins/Watch.js';

class Item extends Component {
    static propTypes = {
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      reveal: PropTypes.func.isRequired
    }

    state = {
      inView: false,
      show: false
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

    reveal (e) {
      setTimeout(() => {
        this.setState({ show: true });
      }, 1 * 1000);
    }

    picture () {
      const { inView } = this.state;
      const { headline, image } = this.props;

      if (inView) {
        return (<picture>
          <img ref={this.ref} src={image} width="640" height="360" alt={headline} onLoad={e => { this.reveal(e); }} />
        </picture>);
      }

      return (<picture>
        <img ref={this.ref} src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'></svg>" width="640" height="360" />
      </picture>);
    }

    componentDidMount () {
      new Watch(this.ref.current, {
        threshold: 0.35
      }).oneInView(() => {
        this.setState({ inView: true });
      });
    }

    render () {
      const { link, headline } = this.props;
      return (
        <div className={this.itemClass()}>
          <a href={link}>
            {this.picture()}
            <span>{headline}</span>
          </a>

        </div>
      );
    }
}

module.exports = Item;
