

/* ************************ */


/* INICIO GALERIA DE PERFILES DE EXPLORADORES */

/* Los perfiles van a ser importados desde la api
https://randomuser.me/api/
solo se utilizarán algunos datos de esos usuarios
para llenar el template de html
*/
let perfiles = [];
function invocarApiPerfiles() { // boton "Exploradores"

    /* quiero importar 6 perfiles 
    pero la api solo me devuelve un perfil por acción.
    Entonces:
            voy a utilizar un for 
            para ir llenando un array con el metodo push()
            y recién al final de la función un return que me devuelva el array*/

    for (let i = 0; i <= 5; i++) {

        const json =
            /* petición http ó https */
            fetch('https://randomuser.me/api/')
                /* que la respuesta se convierta en .json() */
                .then(response => response.json())
                /* obtener el objeto json */
                .then(data => dibujarDatos_perfiles(data));
        console.log(json);
    }
}

// objetoCompleto.atributo
// objetoCompleto.atributo.map(x => Filas(x));
//   función map, agarra un objeto y a cada elemento le aplica una funcion determinada, obteniendo un nuevo objeto.
// const nuevoObjeto = objetoCompleto.atributo.map(x => Filas(x));


function dibujarDatos_perfiles(json) {

    const filas_perfiles = json.results.map(x => Fila_perfiles(x));
    document.getElementById('section-api-exploradores').innerHTML = filas_perfiles.join(' ');
}


// impresión en html - template String
//obj = nombre del parametro, que es el objeto que recibe la función
function Fila_perfiles(obj) {

    perfiles.push(
        ` 
          <div class="perfil">
                  <img src=${obj.picture.medium} alt="Logistica">
                  <div class="perfil-datos">
                       <ul>
                        <!-- listas: items etiquetas li-->   
                            <li>
                                <p>Hola.</p>
                            </li>
                            <li>
                                <p>Me llamo ${obj.name.title} ${obj.name.first}  ${obj.name.last}</p>
                            </li>
                            <li>
                                <p>Tengo ${obj.dob.age} años</p>       
                            </li>
                            <li>
                                <p>Mi usuario es ${obj.login.username}</p>   
                            </li>
                            <li>
                                <p>y mi correo ${obj.email}</p>
                            </li>
                            <li>
                                <p>Soy explorador</p>
                            </li>
                       </ul>
                   </div>
          </div>
          `
    )

    return `<div class="api-exploradores-titulo">
        <h2>Estos son tus exploradores y ya están listos para ser activados.
        </h2>
        <p>Puedes hacer que exploren y acumulen datos de recorridos en tiempo
                  real de las distintas secciones de la ciudad.</p>
        <p>Los datos que tus exploradores obtengan podrán ser consultados por ti en cualquier momento desde
                  cualquier dispositivo electrónico.</p>
</div>

<div class="api-exploradores-enlaces">
          <button class="enlace-activarlos boton" href=" " >Activarlos!</button>
                    <a class="enlace-seleccionar-otros boton"
                    href=" " onclick="invocarApiPerfiles()" >Seleccionar otros</a>
</div> 

<div class="perfiles-exploradores" id="perfiles-exploradores">${perfiles}</div>`


}


/* ************************ */
