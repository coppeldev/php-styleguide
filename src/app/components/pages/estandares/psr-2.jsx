import React from 'react';
import Mui from 'material-ui';
import CodeBlock from '../../code-example/code-block.jsx';
import Router from 'react-router';

let { Paper, Snackbar } = Mui;
let { Link } = Router;

export default React.createClass({

    render() {

        let Headline = <div>
            <h1 className="mui-font-style-headline">Guía de estilo de codificación</h1>
            <p>
                Esta guía amplía y extiende el estándar de codificación básica <Link to="psr-1">PSR-1</Link>.
            </p>

            <p>
                El objetivo de esta guía es la de reducir la dificultad cuando se lee código de diferentes autores.
                Lo realiza mediante la enumeración de una serie de reglas común y expresiones sobre cómo dar formato al código PHP.
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
                    El código DEBE seguir el estándar <Link to="psr-1">PSR-1</Link>.
                </li>
                <li>
                    El código DEBE usar 4 espacios como indentación, no tabuladores.
                </li>
                <li>
                    NO DEBE haber un límite estricto en la longitud de la línea;
                    el límite DEBE estar en 120 caracteres; las líneas DEBERÍAN
                    tener 80 caracteres o menos.
                </li>
                <li>
                    DEBE haber una línea en blanco después de la declaración del <code>namespace</code>,
                    y DEBE haber una línea en blanco después del bloque de declaraciones <code>use</code>.
                </li>
                <li>
                    Las llaves de apertura de las clases DEBEN ir en la línea siguiente, y las llaves
                    de cierre DEBEN ir en la línea siguiente al cuerpo de la clase.
                </li>
                <li>
                    Las llaves de apertura de los métodos DEBEN ir en la línea siguiente, y las llaves
                    de cierre DEBEN ir en la línea siguiente al cuerpo del método.
                </li>
                <li>
                    La visibilidad DEBE estar declarada en todas las propiedades y métodos;
                    <code>abstract</code> y <code>final</code> DEBEN estar declaradas antes de la
                    visibilidad; <code>static</code> DEBE estar declarada después de la visibilidad.
                </li>
                <li>
                    Las palabras clave de las estructuras de control DEBEN tener un espacio después de ellas,
                    las llamadas a los métodos y las funciones NO DEBEN tenerlo.
                </li>
                <li>
                    Las llaves de apertura de las estructuras de control DEBEN estar en la misma línea,
                    y las de cierre DEBEN ir en la línea siguiente al cuerpo.
                </li>
                <li>
                    Los paréntesis de apertura en las estructuras de control NO DEBEN tener un espacio
                    después de ellos, y los paréntesis de cierre NO DEBEN tener un espacio antes de ellos.
                </li>
            </ul>

            <h2 className="mui-font-style-title">Ejmeplo</h2>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

use FooInterfaz;
use BarClase as Bar;
use OtroProveedor\\OtroPaquete\\BazClase;

class Foo extends Bar implements FooInterfaz
{
    public function funcionDeEjemplo($a, $b = null)
    {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClase::bar($arg2, $arg3);
        }
    }

    final public static function bar()
    {
        // cuerpo del método
    }
}`}
                </CodeBlock>
            </Paper>

        </div>;

        let General = <div>
            <h1 className="mui-font-style-headline">Guía de estilo de codificación</h1>

            <h2 className="mui-font-style-title">Codificación estándar básica</h2>

            <p>
                El código DEBE seguir las normas expuestas en el estándar <Link to="psr-1">PSR-1</Link>.
            </p>

            <h2 className="mui-font-style-title">Archivos</h2>

            <p>
                Todos los archivos PHP DEBEN usar el final de línea Unix LF.
            </p>

            <p>
                Todos los archivos PHP DEBEN terminar con una línea en blanco.
            </p>

            <p>
                La etiqueta de cierre <code>&#63;&gt;</code> DEBE ser omitida en los archivos que sólo contengan código PHP.
            </p>


            <h2 className="mui-font-style-title">Líneas</h2>

            <p>
                NO DEBE haber un límite estricto en la longitud de la línea.
            </p>

            <p>
                El límite flexible de la línea DEBE estar en 120 caracteres; los correctores de estilo automáticos
                DEBEN advertir de ésto, pero NO DEBEN producir errores.
            </p>

            <p>
                Las líneas NO DEBERÍAN ser más largas de 80 caracteres; las líneas más largas de estos 80 caracteres
                DEBERÍAN dividirse en múltiples líneas de no más de 80 caracteres cada una.
            </p>

            <p>
                NO DEBE haber espacios en blanco al final de las líneas que no estén vacías.
            </p>

            <p>
                PUEDEN añadirse líneas en blanco para mejorar la lectura del código y para indicar bloques de código que estén relacionados.
            </p>

            <p>
                NO DEBE haber más de una sentencia por línea.
            </p>


            <h2 className="mui-font-style-title">Identación</h2>

            <p>
                El código DEBE usar una indentación de 4 espacios, y NO DEBE usar tabuladores para la indentación.
            </p>

            <blockquote>
                Nota: Utilizar sólo los espacios, y no mezclar espacios con tabuladores, ayuda a evitar problemas con diffs,
                parches, historiales y anotaciones. El uso de los espacios también facilita a ajustar la alineación entre líneas.
            </blockquote>


            <h2 className="mui-font-style-title">Palabras clave y true/false/null.</h2>

            <p>
                Las <a href="http://php.net/manual/es/reserved.keywords.php" target="_blank">Palabras clave</a> de PHP DEBEN estar en minúsculas.
            </p>

            <p>
                Las constantes de PHP <code>true</code>, <code>false</code> y <code>null</code> DEBEN estar en minúsculas.
            </p>

        </div>;

        let Namespaces = <div>
            <h1 className="mui-font-style-headline">Espacio de nombre y declaraciones <code>use</code></h1>

            <p>
                Cuando esté presente, DEBE haber una línea en blanco después de la declación del <code>namespace</code>.
            </p>

            <p>
                Cuando estén presentes, todas las declaraciones <code>use</code> DEBEN ir después de la declaración del <code>namespace</code>.
            </p>

            <p>
                DEBE haber un <code>use</code> por declaración.
            </p>

            <p>
                DEBE haber una línea en blanco después del bloque de declaraciones <code>use</code>.
            </p>

            <p>
                Por ejemplo:
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

use FooClass;
use BarClase as Bar;
use OtroProveedor\\OtroPaquete\\BazClase;

// ... código PHP adicional ...`}
                </CodeBlock>
            </Paper>
        </div>;

        let Clases = <div>
            <h1 className="mui-font-style-headline">Clases, propiedades y métodos</h1>

            <p>
                El término "clase" hace referencia a todas las clases, interfaces o traits.
            </p>
        </div>;

        let Extensiones = <div>
            <h1 className="mui-font-style-headline">Extensiones e implementaciones</h1>

            <p>
                Las palabras clave <code>extends</code> e <code>implements</code> DEBEN declararse en la misma línea del nombre de la clase.
            </p>

            <p>
                La llave de apertura de la clase DEBE ir en la línea siguiente; la llave de cierre DEBE ir en la línea siguiente al cuerpo de la clase.
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\Paquete;

use FooClase;
use BarClase as Bar;
use OtroProveedor\OtroPaquete\BazClase;

class NombreDeClase extends ClasePadre implements \ArrayAccess, \Countable
{
    // constantes, propiedades, métodos
}`}
                </CodeBlock>
            </Paper>

            <p>
                La lista de <code>implements</code> PUEDE ser dividida en múltiples líneas, donde las líneas subsiguientes serán indentadas una vez.
                Al hacerlo, el primer elemento de la lista DEBE estar en la línea siguiente, y DEBE haber una sola interfaz por línea.
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

use FooClase;
use BarClase as Bar;
use OtroProveedor\\OtroPaquete\\BazClase;

class NombreDeClase extends ClasePadre implements
    \\ArrayAccess,
    \\Countable,
    \\Serializable
{
    // constantes, propiedades, métodos
}`}
                </CodeBlock>
            </Paper>

            <h2 className="mui-font-style-title">Propiedades</h2>

            <p>
                La visibilidad DEBE ser declarada en todas las propiedades.
            </p>

            <p>
                La palabra clave <code>var</code> NO DEBE ser usada para declarar una propiedad.
            </p>

            <p>
                NO DEBE declararse más de una propiedad por sentencia.
            </p>

            <p>
                Los nombres de las propiedades NO DEBERÍAN usar un guión bajo como prefijo para indicar si son privadas o protegidas.
            </p>

            <p>
                Una declaración de propiedas tendrá el siguiente aspecto.
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

class NombreDeClase
{
    public $foo = null;
}`}
                </CodeBlock>
            </Paper>


            <h2 className="mui-font-style-title">Métodos</h2>

            <p>
                La visibilidad DEBE ser declarada en todos los métodos.
            </p>

            <p>
                Los nombres de los métodos NO DEBERÍAN usar un guión bajo como prefijo para indicar si son privados o protegidos.
            </p>

            <p>
                Los nombres de métodos NO DEBEN estar declarados con un espacio después del nombre del método. La llave de
                apertura DEBE situarse en su propia línea, y la llave de cierre DEBE ir en la línea siguiente al cuerpo
                del método. NO DEBE haber ningún espacio después del paréntesis de apertura, y NO DEBE haber ningún
                espacio antes del paréntesis de cierre.
            </p>

            <p>
                La declaración de un método tendrá el siguiente aspecto. Fíjese en la situación de los paréntesis,
                las comas, los espacios y las llaves:
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

class NombreDeClase
{
    public function fooBarBaz($arg1, &$arg2, $arg3 = [])
    {
        // cuerpo del método
    }
}`}
                </CodeBlock>
            </Paper>

            <h2 className="mui-font-style-title">Argumentos de los métodos</h2>

            <p>
                En la lista de argumentos NO DEBE haber un espacio antes de cada coma y DEBE haber un espacio después de cada coma.
            </p>

            <p>
                Los argumentos con valores por defecto del método DEBEN ir al final de la lista de argumentos.
            </p>

            <Paper>
                <CodeBlock>
                    {`<?php
namespace Proveedor\\Paquete;

class NombreDeClase
{
    public function foo($arg1, &$arg2, $arg3 = [])
    {
        // cuerpo del método
    }
}`}
                </CodeBlock>
            </Paper>

        </div>;

        // <h1 className="mui-font-style-headline"></h1>
        // <h2 className="mui-font-style-title"></h2>

        return (
            <section>
                {Headline}
                {VisionGeneral}
                {General}
                {Namespaces}
                {Clases}
                {Extensiones}
            </section>
        );
    }
});
