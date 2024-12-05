/* 
● Generar al menos dos rutas, la principal y una protegida, tal como se vio en la clase
de Express donde se retringió el acceso a los /productos.
● Comprobar el funcionamiento con Postman o ThunderClient de la API y generar un
documento con pantallazos donde se muestren las pruebas de funcionamiento que
ejecutes.
● Puedes utilizar como referencia el código de la aplicación de la clase Introducción a
Express. Recuerda que esta aplicación está disponible en la plataforma.
*/
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Servidor iniciado');
});
