import React from 'react';

export default React.createClass({
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