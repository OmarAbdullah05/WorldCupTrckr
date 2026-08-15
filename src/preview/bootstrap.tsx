import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './preview.global.scss';
import StadiumTracker from '../webparts/stadiumTracker/components/StadiumTracker';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    React.createElement(
      'div',
      { className: 'sp-preview-shell' },
      React.createElement(
        'div',
        { className: 'sp-suite-bar' },
        React.createElement('div', { className: 'app-icon' }, 'V'),
        'Verizon · World Cup 2026 Infrastructure'
      ),
      React.createElement(
        'div',
        { className: 'sp-command-bar' },
        React.createElement('strong', null, 'Stadium Network Readiness'),
        React.createElement('span', null, '·'),
        React.createElement('span', null, 'SharePoint Local Preview')
      ),
      React.createElement(
        'div',
        { className: 'sp-page-canvas' },
        React.createElement(
          'div',
          { className: 'CanvasZone' },
          React.createElement(StadiumTracker, { description: 'Local preview' })
        )
      )
    ),
    root
  );
}
