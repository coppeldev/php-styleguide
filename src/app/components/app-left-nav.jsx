import React from 'react';
import Router from 'react-router';
import Mui from 'material-ui';

var { LeftNav } = Mui;

export default React.createClass({

    mixins: [ Router.Navigation ],

    getInitialState() {
        return {
            selectedIndex: null
        }
    },

    render() {

        let header = <div className="logo" onClick={this._onHeaderClick}>PHP Styleguide</div>;

        return (
            <LeftNav
                ref="leftNav"
                docked={false}
                isInitiallyOpen={false}
                header={header}
                menuItems={this.props.menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onLeftNavChange}
            />
        );
    },

    toggle: function() {
        this.refs.leftNav.toggle();
    },

    _getSelectedIndex() {
        var currentItem;

        for (var i = this.props.menuItems.length - 1; i >= 0; i--) {
            currentItem = this.props.menuItems[i];

            if (currentItem.route && this.context.router.isActive(currentItem.route)) {
                return i;
            }
        }
    },

    _onHeaderClick() {
        this.context.router.transitionTo('root');
        this.refs.leftNav.close();
    },

    _onLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    }
});
