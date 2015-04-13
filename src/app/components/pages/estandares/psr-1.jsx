import React from 'react';
import Mui from 'material-ui';
import CodeBlock from '../../code-example/code-block.jsx';

let { Paper, Snackbar } = Mui;

export default React.createClass({

    render() {

        let Headline = <div>
            <h1 className="mui-font-style-headline">Codificación estándar básica</h1>
            <p>
                Esta sección de la norma comprende lo que debe considerarse la norma de codificación
                de los elementos que se requieren para garantizar un alto nivel técnico de
                interoperabilidad entre el código PHP.
            </p>

            <blockquote>
                En el documento original se usa el <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a> para el uso de las palabras MUST, MUST NOT,
                SHOULD, SOULD NOT y MAY. Para que la traducción sea lo más fiel posible, se traducira
                siempre MUST como el verbo deber en presente (DEBE, DEBEN), SHOULD como el verbo deber
                en condicional (DEBERÍA, DEBERÍAN) y el verbo MAY como el verbo PODER.
            </blockquote>
        </div>;

        let VisionGeneral = <div>
            <h1 className="mui-font-style-headline">Visión general</h1>
            <ul>
                <li>
                    Los archivos DEBEN utilizar solamente las etiquetas <code>&lt;&#63;php</code> y <code>&lt;&#63;=</code>.
                </li>
                <li>
                    Los archivos DEBEN emplear solamente la codificación UTF-8 sin BOM para el código PHP.
                </li>
                <li>
                    Los archivos DEBERÍAN declarar cualquier estructura (clases, funciones, constantes, etc,...)
                    o realizar partes de la lógica de negocio (por ejemplo, generar una salida, cambio de
                    configuración ini, etc,...) pero NO DEBERÍAN hacer las dos cosas.
                </li>
                <li>
                    Los espacios de nombres y las clases DEBEN cumplir el estándar <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/es/PSR-0.md" target="_blank">PSR-0</a>.
                </li>
                <li>
                    Los nombres de las clases DEBEN declararse en notación <code>StudlyCaps</code><sup onClick={this._showFootNote.bind(null, 1)}>1</sup>.
                </li>
                <li>
                    Las constantes de las clases DEBEN declararse en mayúsculas con guiones bajos como separadores <code>CONSTANTE_DE_CLASE</code>.
                </li>
                <li>
                    Los nombres de los métodos DEBEN declararse en notación <code>camelCase</code><sup onClick={this._showFootNote.bind(null, 2)}>2</sup>.
                </li>
            </ul>
        </div>;

        let Archivos = <div>
            <h1 className="mui-font-style-headline">Archivos</h1>

            <h2 className="mui-font-style-title">Etiquetas PHP</h2>

            <p>
                El código PHP DEBE utilizar las etiquetas largas <code>&lt;&#63;php &#63;&gt;</code> o las etiquetas cortas para
                imprimir salida de información &lt;&#63;= &#63;&gt; NO DEBE emplear otras variantes.
            </p>

            <h2 className="mui-font-style-title">Codificación de caracteres</h2>

            <p>
                El código PHP DEBE utilizar codificación UTF-8 sin BOM.
            </p>

            <h2 className="mui-font-style-title">Efectos secundarios</h2>

            <p>
                Un archivo DEBERÍA declarar estructuras (clases, funciones, constantes, etc,...) y
                no causar efectos secundarios, o DEBERÍA ejecutar partes de la lógica de negocio,
                pero NO DEBERÍA hacer las dos cosas.
             </p>

             <p>
                 La frase "efectos secundarios" significa: que la ejecución de la lógica de negocio no está directamente
                 relacionado con declarar clases, funciones, constantes, etc, simplemente la de incluir el archivo.
             </p>

             <p>
                 "Efectos secundarios" incluyen, pero no se limitan a: generar salidas, uso explícito de requiere o include,
                 conexiones a servicios externos, modificación de configuraciones iniciales, enviar errores o excepciones,
                 modificar variables globales o estáticas, leer o escribir un archivo, etc.
             </p>

             <p>
                 El siguiente ejemplo muestra un archivo que incluye las dos: declaraciones y efectos secundarios; Un ejemplo de lo que debe evitar:
             </p>

             <Paper>
                 <CodeBlock>
                     {`<?php
// efecto secundario: cambiar configuracion inicial
ini_set('error_reporting', E_ALL);

// efecto secundario: cargar ficheros
include "archivo.php";

// efecto secundario: generar salida
echo "<html>";

// declaración
function foo()
{
// cuerpo de la función
}`}
                 </CodeBlock>
             </Paper>

             <p>
                 El siguiente ejemplo es el de un archivo que contiene declaraciones sin efectos secundarios; Un ejemplo que puede seguir:
             </p>

             <Paper>
                 <CodeBlock>
                     {`<?php
// declaración
function foo()
{
    // cuerpo de la función
}

// una declaración condicional *no* es un
// efecto secundario
if (! function_exists('bar')) {
    function bar()
    {
        // cuerpo de la función
    }
}`}
                 </CodeBlock>
             </Paper>

         </div>;

         let Namespaces = <div>
             <h1 className="mui-font-style-headline">Espacios de nombres y nombres de las Clases</h1>

             <p>
                 Los espacios de nombres y las clases DEBEN seguir el estándar <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/es/PSR-0.md" target="_blank">PSR-0</a>.
             </p>

             <p>
                 Esto significa que cada clase estará en un fichero independiente y está dentro de
                 un espacio de nombres en al menos un nivel: un nombre de proveedor de nivel superior.
             </p>

             <p>
                 Los nombres de las clases DEBEN declararse con notación <code>StudlyCaps</code><sup onClick={this._showFootNote.bind(null, 1)}>1</sup>.
             </p>

             <p>
                 El código escrito para PHP 5.3 o superior DEBE hacer un uso formal de los espacios de nombres.
             </p>

             <p>
                 Por ejemplo:
             </p>

             <Paper>
                 <CodeBlock>
                     {`<?php
// PHP 5.3 o superior:
namespace Proveedor\\Modelo;

class Foo
{
}`}
                 </CodeBlock>
             </Paper>

             <p>
                 El código escrito para PHP 5.2.x o inferior DEBERÍA emplear una convención de pseudo-espacios
                 de nombres con prefijos en los nombres de las clases con el formato <code>Proveedor_</code>.
             </p>

             <Paper>
                 <CodeBlock>
                     {`<?php
// PHP 5.2.x o inferior:
class Proveedor_Modelo_Foo
{
}`}
                 </CodeBlock>
             </Paper>

         </div>;

         let Constantes = <div>
             <h1 className="mui-font-style-headline">Constantes de Clases, Propiedades y Métodos</h1>

             <p>
                 El término "clases" hace referencia a todas las clases, interfaces y traits.
             </p>

             <h2 className="mui-font-style-title">Constantes</h2>

             <p>
                 Las constantes de las clases DEBEN declararse siempre en mayúsculas y separadas por guiones bajos. Por ejemplo:
             </p>

             <Paper>
                 <CodeBlock>
                     {`<?php
namespace Proveedor\\Modelo;

class Foo
{
    const VERSION = '1.0';
    const FECHA_DE_APROBACION = '2012-06-01';
}`}
                 </CodeBlock>
             </Paper>

             <h2 className="mui-font-style-title">Propiedades</h2>

             <p>
                 Esta guía evita intencionadamente cualquier recomendación respecto al uso de las notaciones
                 <code>StudlyCaps</code><sup onClick={this._showFootNote.bind(null, 1)}>1</sup>,
                 <code>camelCase</code><sup onClick={this._showFootNote.bind(null, 2)}>2</sup>,
                 o <code>guion_bajo</code> en los nombres de las propiedades.
             </p>

             <p>
                 Cualquiera que sea la convención en nomenclatura, DEBERÍA ser utilizada de forma coherente con un alcance razonable.
                 Este alcance PUEDE ser a nivel de proveedor, a nivel de paquete, a nivel de clase o a nivel de método.
             </p>

             <h2 className="mui-font-style-title">Métodos</h2>

             <p>
                 Los nombres de los métodos DEBEN declararse en notación<code>camelCase</code><sup onClick={this._showFootNote.bind(null, 2)}>2</sup>.
             </p>

         </div>;

         let Messages = <div>
             <Snackbar
                 ref="footNote1"
                 message="StudlyCaps es una forma de notación de texto que sigue el patrón de palabras en minúscula sin espacios y con la primera letra de cada palabra en mayúscula."
                 action="Cerrar"
                 onActionTouchTap={this._snackBarOnActionTouchTap.bind(null, 1)} />
             <Snackbar
                 ref="footNote2"
                 message="camelCase es una forma de notación de texto que sigue el patrón de palabras en minúscula sin espacios y con la primera letra de cada palabra en mayúsculas exceptuando la primera palabra."
                 action="Cerrar"
                 onActionTouchTap={this._snackBarOnActionTouchTap.bind(null, 2)} />
         </div>;

        return (
            <section>
                {Headline}
                {VisionGeneral}
                {Archivos}
                {Namespaces}
                {Constantes}
                {Messages}
            </section>
        );
    },

    _showFootNote(id) {

        switch (id) {
            case 1:
                this.refs.footNote1.show();
                break;
            case 2:
                this.refs.footNote2.show();
                break;
        }
    },

    _snackBarOnActionTouchTap(id) {

        switch (id) {
            case 1:
                this.refs.footNote1.dismiss();
                break;
            case 2:
                this.refs.footNote2.dismiss();
                break;
        }
    }
});
