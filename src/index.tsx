import * as React from 'react';
import { render } from 'react-dom';
import Constants from './Constants';
import { App } from './components/App';

const appProps = {
    compiler: Constants.COMPILER,
    framework: Constants.FRAMEWORK
};

render(<App {...appProps} />, document.getElementById('root'));
