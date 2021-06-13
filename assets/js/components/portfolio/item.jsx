import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from '../../plugins/Watch.js';

class Item extends Component {
    static propTypes = {
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      award: PropTypes.bool
    }

    state = {
      inView: false,
      show: false
    }

    itemClass () {
      const { show } = this.state;
      const { award } = this.props;

      const classes = ['item'];

      if (show) {
        classes.push('active');
      }

      if (award) {
        classes.push('award');
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
      }, 250);
    }

    picture () {
      const { inView } = this.state;
      const { headline, image } = this.props;

      if (inView) {
        return (<picture>
          <source srcSet={`img/projects/${image}.avif`} type='image/avif' />
          <source srcSet={`img/projects/${image}.webp`} type='image/webp' />
          <img ref={this.ref} src={`img/projects/${image}.jpg`} width="640" height="360" alt={headline} onLoad={e => { this.reveal(e); }} />
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

    award () {
      const { award } = this.props;

      if (award) {
        return (<><div className="overlay" /><i className="fa fa-trophy" /></>);
      }
    }

    render () {
      const { link, headline } = this.props;
      return (
        <div className={this.itemClass()}>
          <a href={link}>
            <div className='thumb'>
              {this.picture()}
              {this.award()}
            </div>
            <span>{headline}</span>
          </a>

        </div>
      );
    }
}

module.exports = Item;
