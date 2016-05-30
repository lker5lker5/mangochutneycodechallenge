import React from 'react';
import Board from './Board';
import ToTop from './ToTop';

export default React.createClass({
    render: function() {
        return (
            <div class="container">
                <Board /> 
                <ToTop />
            </div>
        );
    }
});