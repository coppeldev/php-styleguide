var React = require('react');
var Mui = require('material-ui');
var { RaisedButton } = Mui;

var HomePage = React.createClass({

    componentDidMount() {
        document.querySelector('body').classList.add('hero');
    },

    render() {

        return (
            <div className="mui-app-content-canvas">
                <div className="home-page-hero full-width-section">
                    <div className="home-page-hero-content">
                        <div className="hero-logo-content">
                            <img className="hero-logo" src="/images/php-logo-white.png" />
                        </div>
                        <div className="tagline">
                            <h1 className="brand-name">PHP Styleguide</h1>
                            <h2 className="mui-font-style-headline">
                                Guia de estilo de programación
                            </h2>
                            <RaisedButton className="demo-button" label="Comenzar" onTouchTap={this._onDemoClick} linkButton={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;
