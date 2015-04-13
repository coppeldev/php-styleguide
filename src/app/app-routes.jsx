var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect } = Router;

var MasterPage = require('./components/master-page.jsx');

var HomePage = require('./components/pages/home.jsx');
var AboutContent = require('./components/pages/about-content.jsx');

var Estandares = require('./components/pages/estandares.jsx');
var Introduccion = require('./components/pages/estandares/introduccion.jsx');

var AppRoutes = (
    <Route name="root" path="/" handler={MasterPage}>
        <Route name="home" handler={HomePage} />
        <Route name="about-content" handler={AboutContent} />
        <Route name="estandares" handler={Estandares}>
            <Route name="introduccion" handler={Introduccion} />
            <Redirect from="/estandares" to ="introduccion" />
        </Route>

        <DefaultRoute handler={HomePage} />
    </Route>
);

module.exports = AppRoutes;
