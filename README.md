# Challenge-room-control-application

# CHALLENGE

## OBJETIVO

Se quiere llevar un control de las salas que hay en las distintas plantas de un edificio para ver el porcentaje de ocupación y la capacidad máxima que tienen. Además, se debe poder editar esta información, así como añadir nuevas salas o eliminar las existentes.

Para desarrollarlo puedes utilizar Angular, Vue o React; con la que más cómod@ te sientas 😉

<img src="./src/images/diseño.PNG" width="750"/>

## OBLIGATORIO

- Listar salas de una planta seleccionada (mínimo 2 plantas a elegir)
- Añadir nuevas salas a una planta
- Editar la información de una sala

Readme con las siguientes secciones:

- Pasos para arrancar el proyecto
- Explicación de las decisiones que hayas tomado
- Dificultades encontradas

## EXTRAS

- Simular la conexión con backend con una API mockeada (puedes crearla con https://apimocha.com/ u otra plataforma que conozcas)
- Eliminar salas de una planta
- Filtrar las salas por capacidad y ocupación
- Responsive


## RECURSOS

Te adjuntamos el diseño de cómo se vería el listado de salas y algunos valores para conseguir el pixel perfect:

- Colores: azul oscuro (#2E344D) y azul claro (#F5F7FB)
- Border-radius containers: 26px
- Border-radius inputs and buttons: 12px
- Fuente: Helvetica

--------------------------------------------------------------
### PASOS PARA ARRANCAR EL PROYECTO

Guía de inicio rápido 

NOTA: Necesitas tener instalado Node JS.

Instala las dependencias locales ejecutando este comando en la terminal:

- npm install

Una vez hemos instalado las dependencias, el proyecto se arranca ejecutando:

- npm start

### DECISIONES TOMADAS y PROBLEMAS ENCONTRADOS

Para comenzar con el proyecto en primer lugar me centré en definir los componentes que iban a componer la aplicación. Pensando previamente cómo se iban a relacionar entre ellos y haciendo un boceto del flujo de información.

Me pareció importante acompañar los componentes que iba creando con sus correspondientes estilos, para tener una visión que acompañara con las interacciones.

Generé los archivos de los estilos, las variables y añadí el reset y normalize para resetear los valores por defecto de los elementos.

Realicé el diseño responsive de la aplicación.

Realicé las interacciones de añadir salas, pintar las salas de cada planta, modificar los campos de los inputs y que se queden guardados, borrar salas.

En las interacciones de los componentes, una de las dificultades encontradas ha sido:

- Cómo pintar las salas de cada planta rooms1 y rooms2 cada vez que el usuario pincha en el <input select>. Decidí generar una constante de estado nueva llamada paintFloor para que almacenase los valores de rooms1 y rooms2 correspondiendo con la planta.

- El manejo de las constantes de estado, durante toda la prueba estaba cometiendo el error de setear paintFloor con los valores de rooms pero no se actualizaban a la vez dando muchos errores a la hora de borrar las salas y repintarlas, hasta que di con la solución a esto.

- La validación de los inputs al modificarlos no ha quedado del todo implementada.

- Por último, a la hora de borrar las salas usando el icono-delete no funcionaba correctamente el filtrado de las salas porque el idRoom recibido del icono me estaba llegando como string y lo estaba comparando con el idRoom del array que venía en formato numero.


Como conclusión, ha sido un reto muy interesante en el cual he puesto a prueba parte de mis conocimientos de React.js y maquetación.
