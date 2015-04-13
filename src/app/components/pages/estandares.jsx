import React from 'react';
import PageWithNav from './page-with-nav.jsx';

export default React.createClass({

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
