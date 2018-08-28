// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const start = (
    <h1
        style = { {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            minHeight:       '100vh',
            backgroundColor: '#070A13',
            color:           'white',
            fontSize:        24,
            fontWeight:      '600',
            textAlign:       'center',
        } }>
        Добро пожаловать на воркшоп по React
    </h1>
);

ReactDOM.render(start, document.getElementById('app'));
