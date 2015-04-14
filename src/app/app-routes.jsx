import React from 'react';
import Router from 'react-router';

import MasterPage from './components/master-page.jsx';
import HomePage from './components/pages/home.jsx';
import AboutContent from './components/pages/about-content.jsx';
import Estandares from './components/pages/estandares.jsx';
import Introduccion from './components/pages/estandares/introduccion.jsx';

import Psr1 from './components/pages/estandares/psr-1.jsx';
import Psr2 from './components/pages/estandares/psr-2.jsx';

let { Route, DefaultRoute, Redirect } = Router;

export default (
    <Route name="root" path="/" handler={MasterPage}>
        <Route name="home" handler={HomePage} />
        <Route name="about-content" handler={AboutContent} />
        <Route name="estandares" handler={Estandares}>
            <Route name="introduccion" handler={Introduccion} />
            <Route name="psr-1" handler={Psr1} />
            <Route name="psr-2" handler={Psr2} />
            <Redirect from="/estandares" to ="introduccion" />
        </Route>

        <DefaultRoute handler={HomePage} />
    </Route>
);
