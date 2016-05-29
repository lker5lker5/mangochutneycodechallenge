import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

export default React.createClass({
    render: function() {
       return (
            <section className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 post">
                    <PostHeader  />
                    <PostBody />
                </div>
            </section>
        ); 
    }
});