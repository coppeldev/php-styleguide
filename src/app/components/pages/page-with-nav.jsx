import React from 'react';
import Router from 'react-router';
import Mui from 'material-ui';

var { RouteHandler } = Router;
var { Menu } = Mui;

export default React.createClass({

    mixins: [ Router.Navigation ],

    render() {
        return (
            <div className="mui-app-content-canvas page-with-nav">
                <div className="page-with-nav-content">
                    <RouteHandler />
                </div>
                <div className="page-with-nav-secondary-nav">
                    <Menu
                        ref="menuItems"
                        zDepth={0}
                        menuItems={this.props.menuItems}
                        selectedIndex={this._getSelectedIndex()}
                        onItemClick={this._onMenuItemClick}
                    />
                </div>
            </div>
        );
    },

    _getSelectedIndex() {

        var menuItems = this.props.menuItems;
        var currentItem;

        for(var i = menuItems.length -1; i >= 0; i--) {
            currentItem = menuItems[i];

            if (currentItem.route && this.context.router.isActive(currentItem.route)) {
                return i;
            }
        };
    },

    _onMenuItemClick(e, index, item) {
        this.context.router.transitionTo(item.route);
    }
});
