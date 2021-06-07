import React from 'react';
import ReactDOM from 'react-dom';
import Watch from './plugins/Watch.js';
import Portfolio from './components/portfolio.jsx';

document.querySelectorAll('.overlay').forEach((o) => {
  new Watch(o).oneInView(() => {
    setTimeout(() => {
      o.classList.add('active');
    }, 500);
  });
});

const portfolio_items = [
  {
    headline: 'Item 1',
    link: '#item_1',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 2',
    link: '#item_2',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 3',
    link: '#item_3',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 4',
    link: '#item_4',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 5',
    link: '#item_5',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 6',
    link: '#item_6',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 7',
    link: '#item_7',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 8',
    link: '#item_8',
    image: 'https://picsum.photos/640/360'
  },
  {
    headline: 'Item 9',
    link: '#item_9',
    image: 'https://picsum.photos/640/360'
  }
];

const p_container = document.querySelector('#portfolio');

ReactDOM.render(<Portfolio items={portfolio_items} />, p_container);
