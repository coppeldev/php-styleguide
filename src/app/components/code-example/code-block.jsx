import React from 'react';
import Hightlight from 'highlight.js';

export default React.createClass({

    componentDidMount: function() {
        Hightlight.highlightBlock(this.getDOMNode());
    },

    componentDidUpdate: function(prevProps, prevState) {
        Hightlight.highlightBlock(this.getDOMNode());
    },

    render: function() {
        return (
            <pre className="code-block">
                <code>{this.props.children}</code>
            </pre>
        );
    }
});
