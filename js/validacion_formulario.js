
/* VALIDACIÓN INICIO DE SESIÓN */

/* Se utilizó el link proporcionado por el material de estudio 
Clase 18. JS 6.pptx
https://www.youtube.com/watch?v=L5Yin6K4ARs
Javascript #10: Formularios
*/


/* https://bluuweb.github.io/desarrollo-web-bluuweb/11-08-js-form/#expresiones-regulares */
/* Expresiones regulares */



const formulario = document.getElementById("form-iniciar-sesion");
const userEmail = document.getElementById("userEmail");
const userContrasenia = document.getElementById("contrasenia");

formulario.addEventListener("submit", (e) => {
          e.preventDefault();


          const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; 


          if (userContrasenia.value === "") {
                    return alert("Debe ingresar una contraseña.");
          }if (userEmail.value === "") {
                    return alert("Debe ingresar una dirección de correo eléctronico.");
          } if (!regUserEmail.test(userEmail.value)) {
                    return alert("Formato email no válido, por favor corrige los errores e intenta nuevamente.");
          }

          alert("Formulario enviado con éxito");
});


/* VALIDACIÓN REGISTRARSE */
