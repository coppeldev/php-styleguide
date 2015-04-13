import React from 'react';
import Mui from 'material-ui';
import CodeBlock from './code-block.jsx';

let { Paper } = Mui;

export default React.createClass({

    propTypes: {
        code: React.PropTypes.string.isRequired
    },

    render: function() {

        return (
            <Paper className="code-example">
                <div className="example-label">example</div>
                <div className="example-block">
                    {this.props.children}
                </div>
                <CodeBlock>{this.props.code}</CodeBlock>
            </Paper>
        );
    }
});
