import React from 'react';
import Router from 'react-router';
import AppLeftNav from './app-left-nav.jsx';
import Mui from 'material-ui';

var { RouteHandler } = Router;
var { AppCanvas, AppBar } = Mui;
var menuItems = [
    { route: 'about-content', text: 'Acerca del contenido' },
    { route: 'css-framework', text: 'Visión general' },
    { route: 'estandares', text: 'Estandares' }
];

export default React.createClass({

    mixins: [Router.State],

    propTypes: {
        title: React.PropTypes.string
    },

    render() {

        var title = '';

        menuItems.forEach(item => {
            if ('/' + item.route === this.context.router.getCurrentPathname()) {
                title = item.text;
                return;
            }
        });

        return (
            <AppCanvas predefinedLayout={1}>
                <AppBar
                    showMenuIconButton={true}
                    onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
                    title={title}
                    zDepth={0}
                />

                <AppLeftNav ref="leftNav" menuItems={menuItems} />

                <RouteHandler />
            </AppCanvas>
        );
    },

    _onMenuIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    }
});
