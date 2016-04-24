import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDemo from './component.js';

const HelloWorld =  () => (
    <ComponentDemo />
);

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
