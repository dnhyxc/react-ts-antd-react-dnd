import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <DndProvider backend={HTML5Backend as any}>
    <App />
  </DndProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();