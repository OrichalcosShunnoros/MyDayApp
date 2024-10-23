# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


--------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------

**Requirements:**

**1. Ocultar las secciones main y footer**
[x] Cuando no hay tareas, los elementos con ID `#main` y `#footer` deberían estar ocultos.

**2. Crear una nueva tarea.**

[x] Se debe crear una nueva tarea se debe usar el input principal de la aplicación.
[x] Este input debe enfocarse cuando se cargue la página, preferiblemente utilizando el atributo `autofocus` en el input.
[x] Al presionar la tecla Enter la tarea se crea con el estado **pending** y se agrega a la lista de tareas y el input debería quedar en limpio.
[x] Asegúrate de usar métodos como `.trim()` para limpiar espacios al inicio o al final y verifica que la tarea no sea un `string` vacío.

**3. Una tarea**

Una tarea debería tener 3 posibles interacciones:

[x] Cuando se haga clic en el checkbox las tareas es marcada como **completed**, de igual manera si se vuele a hacer clic sobre en el checkbox vuelve a su estado de **pending**.
[x] Si se hace doble clic en el `<label>` se activa el modo edición.
[x] Si se hace la acción `:hover` en una tarea se debería mostrar el botón para eliminar (`.destroy`).

**4. Editando una tarea**

[x] Cuando el modo edición está activado, se deberían ocultar los otros elementos y se mostrará un input que contiene el título de la tarea pendiente, que debe estar enfocado (`.focus()`).
[x] La edición debe guardarse cuando se presione la tecla Enter y salir del modo edición.
[x] Asegúrate de usar métodos como `.trim()` limpiar espacios al inicio o al final.
[x] Si se presiona la tecla Escape durante la edición, se debe salir del modo edición y descartar cualquier cambio.

**5. Contador**

[x] En el footer se debería mostrar el número de tareas en estado **pending**.
[x] Asegúrese de que el número esté envuelto por una etiqueta `<strong>`.
[x] También asegúrese de pluralizar la palabra `item` correctamente, por ejemplo: `0 items`, `1 item`, `2 items`.

**6. Botón de limpiar**

[x] Debería existir un botón para eliminar todas las tareas que están con estado de **completed**.

**7. Persistencia**

[x] Cuando se recargue la aplicación se debe obtener las tareas, para esto tu aplicación debería guardar las tareas en LocalStorage.
[x] El key que se debe usar para el LocalStorage debe ser `mydayapp-reactjs` .
[x] NO es necesario persistir estados de la interfaz como por ejemplo guardar el modo de edición. Solo se debe guardar las tareas.

**8. Filtros y rutas**

Deben existir tres filtros que funcione desde la URL y funcionan como links en el footer:

[x] `/all`: Muestra todas las tareas tanto las que están en estado de **completed** y **pending**.
[x] `/pending`: Muestra todas las tareas en estado **pending**.
[x] `/completed`: Muestra todas las tareas en estado **completed**.

**9. Deployment**

Desplegar la aplicación en alguno de los siguientes servicios: GitHub Pages, Netlify, Vercel.