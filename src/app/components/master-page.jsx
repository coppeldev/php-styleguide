var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var AppLeftNav = require('./app-left-nav.jsx');
var Mui = require('material-ui');
var { AppCanvas, AppBar } = Mui;

var menuItems = [
    { route: 'about-content', text: 'Acerca del contenido' },
    { route: 'css-framework', text: 'Visión general' },
    { route: 'estandares', text: 'Estandares' }
];

var MasterPage = React.createClass({

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

    _onMenuIconButtonTouchTap: function() {
        this.refs.leftNav.toggle();
    }
});

module.exports = MasterPage;
