(function() {
    var React = require('react');
    var Router = require('react-router');
    var AppRoutes = require('./app-routes.jsx');

    window.React = React;

    var injectTapEventPlugin = require("react-tap-event-plugin");

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    Router.run(AppRoutes, Router.HistoryLocation, Handler => {
        React.render(<Handler />, document.body);
    });

})();
