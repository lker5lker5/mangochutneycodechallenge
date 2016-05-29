import React from 'react';

export default React.createClass({
    getInitialState: function () {
        return {display: "block"};
    },
    componentWillMount: function () {
        if (this.props.children.image) {
            this.setState({display:"block"});
        }else {
            this.setState({display:"none"});
        }
    },
    render: function() {
        return (
            <div className="post-body">
                <div style={this.state}>
                    <img src={this.props.children.image} />
                </div>
                <p>{this.props.children.text}</p>
            </div>
        );
    }
});