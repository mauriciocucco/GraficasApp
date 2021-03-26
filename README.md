# GraficasApp

Éste proyecto corresponde a la sexta app que desarrollé a través del curso de `Angular: de cero a experto (edición 2021)` de Fernando Herrera en Udemy. Es una app que utiliza la librería de **ng2-charts** (https://valor-software.com/ng2-charts/) para mostrar diversos tipos de gráficas que la misma provee y el uso de información proveniente de un "servidor" para crear una de estas gráficas.

Se encuentra hecho con **Bootstrap** (versión 5.0.0-beta1), **JSON Server** (https://www.npmjs.com/package/json-server), el cual permite crear un servidor con la información precargada para crear la gráfica, y **Angular CLI** (versión 11.0.4.), con un patrón de diseño **Lazyload**. Para su instalación:

```bash
npm install -g @angular/cli json-server
```

## Iniciar la aplicación

Primero se deben instalar las dependencias del proyecto con:

```bash
npm install
```

Luego, con una consola distinta, posicionarse dentro de la carpeta "server" y escribir:

```bash
json-server --watch db.json
```

> Esta consola debe permanecer abierta para realizar la peticion de la información.

Por último, para abrir la aplicación:

```bash
ng serve -o
```

Abrirá la página en la siguiente URL: `http://localhost:4200/`.

### Nota

> La página se actualizará automáticamente al realizar cambios y guardar.
