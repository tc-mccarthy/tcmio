import React from 'react';
import ReactDOM from 'react-dom';
import Watch from './plugins/Watch.js';
import Portfolio from './components/portfolio.jsx';
import Experience from './components/resume/experience.jsx';

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

const resume = [
  {
    title: 'Director, Digital Technology',
    date: 'April 2018 - Present',
    company: 'Newsday Media Group',
    items: [
      'Supervise two teams of full stack developers responsible for all CMS, website, publishing system and special project development',
      'Plan and execute technical innovations, such as a video service that generates loops in multiple formats (gif, webp and mp4), encodes and compress video for IGTV and Facebook for optimal quality at smallest possible size. Service is integrated into company Slack for seamless producer workflow (especially while remote on residential internet connections) as well as our existing content publishing system',
      'Developed and employed technical strategy for remote live streaming during COVID-19',
      'Leverage Adobe Premiere Pro, motion graphics and OBS to produce fully-remote multi-camera live streams complete with lower thirds, SOTs and clips via Zoom/GoToWebinar.',
      'Built a ReactJS-based web UI to handle viewer registration, analytics and question submission.',
      'Live stream distributed by Brightcove in 9 renditions allowing best experience for all devices and connection speeds.',
      'Developed automated mastering service using ffmpeg to trim and recompress DVR versions for lower storage costs, crops and trims video into a square "social cut" and auto uploaded the final product to AWS S3 which served as a cloud-based MAM while staff was remote.',
      'Govern and maintain our special projects infrastructure in an AWS hosting environment that allows several different generations of tech to coexist seamlessly to our end users while facilitating constant migration to new technology Spearheaded digital development of Polk Award-winning story Long Island Divided (https://projects.newsday.com/long-island/real-estate-agents-investigation/), a 3-year hidden-camera investigation into the racial profiling that happens in the real-estate market on Long Island. Built custom video implementations for optimal experience across all devices and connection speeds',
      'Managed Election 2020 digital development plan where my homegrown election system served live results for newsday.com, the newsday app, feeds for our print product and real-time data updates for VizRT graphics in our live stream. Worked with VizRT specialists and studio artists for feed construction and adequate infrastructure for load.',
      'Liaised with our multimedia and legal teams to find a suitable vendor and workflow for automated video closed-captioning.',
      'Results were a resounding success where captions are hitting newsday.com videos on all platforms within 8 hours (as required by New York law) without any additional action being required by the multimedia team or the web team responsible for publishing and placement.'
    ]
  }
];

const e_container = document.querySelector('#experience');

ReactDOM.render(<Experience items={resume} />, e_container);

/**
 * Scroll-y nav
 */

document.querySelectorAll("nav [href*='#']").forEach((n) => {
  n.addEventListener('click', (e) => {
    e.preventDefault();
    const item = e.target;
    const location = document.querySelector(item.getAttribute('href'));

    location.scrollIntoView({
      behavior: 'smooth', // Defines the transition animation. default: auto
      block: 'start', // Defines vertical alignment. default: start
      inline: 'nearest' // Defines horizontal alignment. default: nearest
    });
  });
});
