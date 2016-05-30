import React from 'react';
var $ = require('jquery');

export default React.createClass({
    // getInitialState: function () {
    //     return {
    //         postNo: 0
    //     };
    // },
    // getSelectValue: function () {
    //     var select = document.getElementsByTagName("select")[0];
    //     var val = select.options[select.selectedIndex].value;
    //     this.setState({postNo: parseInt(val)});
    //
    //     var allPosts = $(".post");
    //     console.log(val);
    //     if (this.state.postNo == 0) {
    //         allPosts.css('display', 'block');
    //     } else if (this.state.postNo == -5) {
    //         console.log("show last 5");
    //     }
    // },
// <select className="form-control" onChange={this.getSelectValue}>
// <option value="0">Show All</option>
// <option value="5">Show 5</option>
// <option value="10">Show 10</option>
// <option value="15">Show 15</option>
// <option value="-5">Show last 5</option>
// </select>
    render: function () {
        return (
            //The header
            <section className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 timeline">
                    <p>{this.props.children}</p>

                </div>
            </section>
        );
    }
});