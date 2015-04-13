var React = require('react');
var Mui = require('material-ui');
var { RaisedButton } = Mui;

var AboutContent = React.createClass({

    render() {

        return (
            <div className="text-content mui-app-content-canvas">
                <div className="full-width-section">

                    <h2 className="mui-font-style-headline">Introducción</h2>

                    <p>
                        En Internet existe una gran cantidad de grupos de personas que se encargan de buscar la mejor manera de hacer las cosas en todos los aspectos. Y si hablamos de los referentes a las tecnologías de información podemos encontrarnos con muchos de ellos. Uno de estos grupos es el Framework Interoperabiliy Group quienes tienen la tarea de hacer una recopilación de los puntos en común de los proyectos y encontrar maneras de trabajar en conjunto.
                        El FIG cuenta con una serie de recomendaciones las cuales hace llamar PSR o PHP Standar Recomendation las cuales son elegidas basándose en votación por los miembros del grupo y hasta la fecha cuentan con 4 PSR aceptadas.
                    </p>

                    <blockuote>
                        Nota: Las palabras clave DEBE, NO DEBE, REQUERIDO, DEBERÁ, NO DEBERÁ, DEBERÍA, NO DEBERÍA, RECOMENDADA, PUEDE, y OPCIONAL que aparecen en este documento deben de ser interpretadas a como se describen en la RFC 2119.
                    </blockuote>
                </div>
            </div>
        );
    }
});

module.exports = AboutContent;
