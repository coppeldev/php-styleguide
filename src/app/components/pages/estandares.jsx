var React = require('react');
var PageWithNav = require('./page-with-nav.jsx');


var Estandares = React.createClass({

    render() {

        var menuItems = [
            { route: 'introduccion', text: 'Introducción' },
            { route: 'psr-1', text: 'PSR-1' }
        ];

        return (
            <div>
                <PageWithNav menuItems={menuItems} />
            </div>

        );
    }
});

module.exports = Estandares;
