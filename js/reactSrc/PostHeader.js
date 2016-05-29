import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="post-header">
                <table className="table table-responsive">
                    <tr>
                        <td rowSpan="2">
                            <b>JA</b>
                        </td>
                        <td>
                            <b>Jane Appleseed</b>
                        </td>
                    </tr>
                    <tr>
                        <td><b>has left a message...</b></td>
                        <td>
                            <i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>
                            &nbsp; May 16
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
});