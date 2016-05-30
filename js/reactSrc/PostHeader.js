import React from 'react';

export default React.createClass({
    getInitials: function () {
        var name = this.props.children.name;
        var inits = "";
        name.split(" ").forEach(function (partName) {
            inits += partName.charAt(0).toUpperCase();
        });
        return inits;
    },
    getTimeStamp: function () {
        var time = this.props.children.time;

        var monthes = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var date = time.split("T")[0];
        var day = date.split("-")[2];
        var monthIndex = parseInt(date.split("-")[1]) - 1;
        return day + " " + monthes[monthIndex];
    },
    getPostId: function () {
        return "#" + (this.props.children.id + 1);
    },
    render: function() {
        return (
            <div className="post-header">
                <table className="table table-responsive">
                    <tbody>
                        <tr>
                            <td rowSpan="2">
                                <div className="circle">
                                    <b>{this.getInitials()}</b>
                                </div>
                            </td>
                            <td>
                                <b>{this.props.children.name}</b>
                            </td>
                            <td>
                                {this.getPostId()}
                            </td>
                        </tr>
                        <tr>
                            <td><b>has left a message...</b></td>
                            <td>
                                <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
                                &nbsp; {this.getTimeStamp()}
                            </td>
                        </tr>
                        </tbody>
                </table>
            </div>
        );
    }
});