import React from 'react';
import { hydrate } from 'react-dom';
import Snack from './components/snack';

hydrate(<Snack />, document.getElementById('app'));
