import React from 'react';
import Router from 'react-router';
import Routes from './app-routes.jsx';

window.React = React;

let injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

// Router.HistoryLocation
Router.run(Routes, Handler => {
    React.render(<Handler />, document.body);
});
