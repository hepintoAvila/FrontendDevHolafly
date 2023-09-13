## Holakittens instructions

Hey there!

Are you ready to make a super cute app featuring adorable kittens? Great! Here's what you'll need to do:

Use a language you're comfortable with (like NodeJS, Rails, or Java) to create a simple REST API with a single endpoint called /kittens. This endpoint should return the "kittens.json" data (or a similar version of it). You don't need to worry about storing the data - just mock it up for now.

Next, use React to create an app that displays the kittens from the API. You can use a library like Axios to fetch the data from the API. Your app should show a list of all the kittens at first, and then allow the user to select a specific kitten to see more details about it. While the app is waiting for the API request to finish, display a spinner or placeholder component. Make sure your app looks decent and is somewhat responsive, so it doesn't look terrible on mobile phones.

Finally, put your code on a public Github repository with a README.md file that explains how to run the API and frontend app.

### BONUS
If you're feeling extra ambitious:
-   Dockerize the app
-   Write realistic unit/end-to-end tests to make sure everything is working properly.

Para la implementación se realizaron los siguientes procedimientos:
Para la REST API se implementó en node 14.21.3, para ello se creo una carpeta SERVER donde van todos los archivos relacionados con el servicio para la ejecución del mismo.
Esta Simple REST API es una interfaz que sigue los principios del estilo de arquitectura REST y permite que a través de un endpoint la aplicación se comunique entre sí a través de la web mediante solicitudes HTTP para acceder y manipular recursos de datos. Las configuraciones realizadas a esta, proporcionan una forma eficaz y escalable de integrar con otras aplicaciones y servicios en línea.

![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/0c2c1001-257f-478a-a9f5-f6ed9874c1f8)

Seguidamente se conectó la aplicación React a la API mediante Axios y Express lo que implicó la creación de un servidor Express que actuara como intermediario entre la aplicación cliente desarrollada en React y la API externa o un objeto JSON que hiciera de base de datos. A continuación, se detallan los pasos generales para lograr esto:
1.	Configurar el Servidor Express: En el servidor Express, se configuró las rutas y los controladores para manejar las solicitudes HTTP entrantes y comunicarse con la API y está la base de datos. Aquí en los archivos podrás apreciar el código implementado para la configurar del servidor Express.
2.	Solicitudes Axios desde React: En la aplicación que se desarrolló se puede utilizar Axios para realizar solicitudes HTTP al servidor Express.
3.	Conexión y Configuración: Nos aseguramos de que la aplicación se esté ejecutando en un puerto diferente al del servidor Express. De manera predeterminada, Axios realizará solicitudes al mismo dominio y puerto en el que se está ejecutando la aplicación React.
4.	Manejo de CORS (Cross-Origin Resource Sharing): Se tuvo muy en cuenta la configurar CORS en el servidor Express para permitir las solicitudes desde el dominio de tu aplicación React. Para ello se instaló, mediante “npm install cors”.


