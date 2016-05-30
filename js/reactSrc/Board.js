import React from 'react';
import Header from './Header';
import Post from './Post';
var $ = require('jquery');

export default React.createClass({
    getDefaultProps: function () {
        return {
            width: 100,
            position: "absolute",
            top: 15,
            right: 15,
            zIndex: 10
        }
    },
    getInitialState: function () {
        return {
            records:[],
            postNo: 0,
            postId: 0,
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
        // this.uniqueId = this.uniqueId || 0;
        // return this.uniqueId++;
        this.state.postId = this.state.postId || 0;
        this.setState({postId: this.state.postId + 1})
        return this.state.postId;
    },
    eachPost: function (post, i) {
        return (
            <Post key={post.id} index={i}>{post}</Post>
        );
    },
    showPostNo: function () {
        var select = document.getElementsByTagName("select")[0];
        var newNo = parseInt(select.options[select.selectedIndex].value);
        this.setState({postNo: newNo});
        var self = this;

        self.setState({records:[], postId: 0});
        
        $.getJSON("https://relish.digital/foxp2/timeline.json",
            function (results) {
                var total = results.length;
                if (self.state.postNo == 0) {
                    results.forEach(function (result) {
                        self.add2State(result);
                    });
                } else if (self.state.postNo == -5) {
                    var arr = [];
                    results.forEach(function (result) {
                        arr.push(result);
                    });
                    arr.slice(-5).forEach(function (result) {
                        self.add2State(result);
                        self.state.records[self.state.records.length - 1].id +=24;
                    });
                } else {
                    var arr = [];
                    results.forEach(function (result) {
                        arr.push(result);
                    });
                    arr.slice(0, self.state.postNo).forEach(function (result) {
                        self.add2State(result);
                    })
                }
            }
        );
    },
    componentWillMount: function () {
        var self = this;
        self.setState({records:[]});
        $.getJSON("https://relish.digital/foxp2/timeline.json",
            function (results) {
                results.forEach(function (result) {
                    self.add2State(result);
                });
        });
    },
    render: function() {
        return (
            <section className="container-fluid">
                <Header>Timeline</Header>
                <select style={this.props} className="form-control" onChange={this.showPostNo}>
                    <option value="0">Show All</option>
                    <option value="5">Show 5</option>
                    <option value="10">Show 10</option>
                    <option value="15">Show 15</option>
                    <option value="-5">Show last 5</option>
                </select>
                {this.state.records.map(this.eachPost)}
            </section>
        );
    },
     
});
