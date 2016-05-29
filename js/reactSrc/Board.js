import React from 'react';
import Header from './header';
import Post from './post';

var $ = require('jquery');

export default React.createClass({
    getInitialState: function () {
        return {records:[]};
    },
    add2State: function (record) {
        var arr = this.state.records;
        arr.push({
            id: this.nextId(),
            time: record.created_at,
            name: record.screen_name,
            text: record.text,
            image: record.image
        });
        this.setState({notes: arr});
    },
    nextId: function () {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON("https://relish.digital/foxp2/timeline.json", 
            function (results) {
                console.log(results);
            }
        );
    },
    render: function() {
        return (
            <div className="container-fluid">
                <Header>Timeline</Header>
                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 post">
                    <Post />
                </div>
            </div>
        );
    }
});
