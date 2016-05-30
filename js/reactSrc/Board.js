import React from 'react';
import Header from './Header';
import Post from './Post';

var $ = require('jquery');

export default React.createClass({
    getInitialState: function () {
        return {
            records:[],
        };
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
        this.setState({records: arr});
    },
    nextId: function () {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    eachPost: function (post, i) {
        return (
            <Post key={post.id} index={i}>{post}</Post>
        );
    },
    componentWillMount: function() {
        var self = this;
        $.getJSON("https://relish.digital/foxp2/timeline.json", 
            function (results) {
                results.forEach(function (result) {
                    self.add2State(result);
                });
            }
        );
    },
    render: function() {
        return (
            <section className="container-fluid">
                <Header changeNum={this.props.changeNum}>Timeline</Header>
                {this.state.records.map(this.eachPost)}
            </section>
        );
    }
});
