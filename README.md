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

######  INDICACIONES  ###
These are the instructions to run the repo you must have a version of node.js >14 installed on your system.
1. Clone this repository.
2. Install the external libraries using npm install and run the server using npm run start.
To run the dockerFile run docker-compose up –build to run the Backend and Frontend dockerFile.

For the implementation, the following procedures were carried out: For the REST API it was implemented in node 14.21.3, for this a SERVER folder was created where all the files related to the service go for its execution. This Simple REST API is an interface that follows the principles of the REST architecture style and allows through an endpoint the application to communicate with each other over the web using HTTP requests to access and manipulate data resources. The configurations made to it provide an efficient and scalable way to integrate with other applications and online services.

![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/5954b17f-6c73-4897-854b-fcc21f729923)

 The React application was then connected to the API through Axios and Express, which involved creating an Express server that acted as an intermediary between the client application developed in React and the external API or a JSON object that acted as a database. Below are the general steps to obtain the following results:
1.	Configure the Express Server: On the Express server, routes and drivers have been configured to handle incoming HTTP requests and communicate with the API and the database. Here in the files you will be able to see the code implemented to configure the Express server.
2.	Axios requests from React: In the application that was developed, Axios can be used to make HTTP requests to the Express server.
3.	Connection and Configuration: We make sure that the application is running on a different port than the Express server. By default, Axios will make requests to the same domain and port that the React application is running on.
4.	Handling CORS (Cross-Origin Resource Sharing): Careful consideration was given to configuring CORS on the Express server to allow requests from your React application's domain. To do this, it was installed using “npm install cors”.

The FrontEnd was developed in React, for this we use the JavaScript library called React. Below, I give you a brief explanation of how the application and its components were developed:

1. Implemented Components:
It was taken into account that the components were part of the reusable construction principle for a better user interface. Some components can be simple, like a button or a header, or more complex, like a list of elements, the structure of the main component looks like this:

```react
import { useKittens, useSlides } from './hoock/';
const Footer = React.lazy(() => import('./components/Footer'));
const Topbar = React.lazy(() => import('./components/Topbar'));
const Slides = React.lazy(() => import('./components/Slides'));
const ModalKittens = React.lazy(() => import('./components/ModalKittens'));
const ListarKittens = React.lazy(() => import('./components/ListarKittens'));

const loading = () => <div className=""></div>;
const Kittens = () => {

  const { kittens,
    openModal,
    isopenModal,
    itemsDetal,
    loadings,
    closeModal } = useKittens();
  const { items } = useSlides();
  return (<>
    <div className="wrapper">
      <div className="content-page">
        <div className="content">
          <Container fluid>
            <Suspense fallback={loading()}>
              <Topbar hideLogo={true} />
            </Suspense>
            <Suspense fallback={loading()}>
              <Slides items={items?.body} />
            </Suspense>
            <Suspense fallback={loading()}>
              <ListarKittens items={kittens} openModal={openModal} isopenModal={isopenModal} />
            </Suspense>
          </Container>
        </div>
        <Suspense fallback={loading()}>
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={loading()}>
        <ModalKittens openModal={openModal}
          isopenModal={isopenModal}
          Obj={itemsDetal}
          kittens={kittens}
          loadings={loadings}
          closeModal={closeModal} />
      </Suspense>
    </div>
  </>
  );
};
export default Kittens;
```
Each component was wrapped in a fallback: to obtain an alternative interface to render instead of the real interface if it has not finished loading.


## Styles:

![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/c882721c-9746-42e0-b0c0-7439a8482145)

For the development, preprocessors such as SASS were used to stylize components.
without the need to manually pass properties.
```
@media (max-width: 767px) {

    /* Estilos para pantallas pequeñas */
    .mensaje {
        font-size: calc(1.25rem);
    }

    .grid-container {
        grid-template-columns: repeat(1, 8fr);
        grid-template-rows: repeat(1, 286px);
        gap: 2px;
    }

    .imgCat {
        object-fit: cover;
        padding: 0.1em;
        height: 17em;
        width: 24em;
    }
}
```
## Global Status:
To manage the global state of the application, a state management hook was implemented. This allows data to be shared between components 
<sub> Hoock Developed</sub>
To provide state and a life cycle for developed components.
```
import { useKittens, useSlides } from './hoock/';
  const { kittens,
    openModal,
    isopenModal,
    itemsDetal,
    loadings,
    closeModal } = useKittens();
  const { items } = useSlides();
 ```

Finally, the application resulted in the following images for each of the screens:

### FOR TABLES
![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/aba1c332-b359-4d86-892a-bf4f528c16d6)

### FOR MOVIL
![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/0f7974e0-33e6-4811-8374-6db0cb3d42e6)

### FOR DESKTOP
![image](https://github.com/hepintoAvila/FrontendDevHolafly/assets/142340366/4020516a-be5f-435d-a137-52db5a396fae)

Also, a file was deployed to Docker and Docker compose was run to make the application portable to simplify application development, deployment, and management in production environments.
Finally, Unit tests were performed to verify the implementation.The tests could not be executed due to the low capacity of my PC.


REFERENCES

https://web.dev/color-and-contrast-accessibility/?utm_source=devtools

https://nodejs.org/en/download

https://docs.docker.com/get-docker/

https://expressjs.com/en/starter/installing.html

https://responsively.app/




