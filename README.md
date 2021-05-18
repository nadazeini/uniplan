# Uniplan

### User Guide

<a href="https://docs.google.com/document/d/1aJ_RK6QkcDIHBQYMIbAp1Q9q2KC5b4_d8xWGZF0OiU8/edit?usp=sharing"  target="_blank">instructions</a>

### Developer Guide

#### 👾 Requirements

1. <a href="https://nodejs.org/en/"  target="_blank">Node.js v14.15.3 or newer </a>
2. <a href="https://account.mongodb.com/account/login"  target="_blank">MongoDB account</a>
3. Clone repository 
4. [Run locally](#-run-locally)

#### 🗂 Structure

- [backend](#-backend)
  - models
  - routes 
- [frontend](#-frontend)
  - [cypress](frontend/cypress/README.md)
  - src
    - components
    - pages
  - public
- [test-automation](#-test-automation)
- [docker](#-docker)

#### 💻 Run locally

- Database:

  The structure of our database is found <a href="https://docs.google.com/document/d/1UzjPNOmVDPNzSXKqMaZ80MPLGmhRFLFr6GXK5MddRLU/edit?usp=sharing"  target="_blank">here</a>
  
  Create an ``.env`` file in this format:
  ``` 
  PORT=5000
  DEBUG=true
  API_URL=http://localhost:5000
  CORS_ORIGINS=http://localhost:8080
  APP_SECRET='secret key'
  MONGODB_URI="mongodb uri"

  ```
  - Replace "mongodb uri" with the uri to the database that you create on your account.
  - Place the ``.env`` file in the ``backend`` folder

  ##### Full database access: The contributing team will need to provide you with the uri

- Server:
  ##### Usage:
  ```
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to db: ", err);
  });
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
  ```
  To run the server:
  - ``cd backend``
  - ``npm install`` 
  - `` npm start`` this will run ``nodemon`` which allows you to directly see changes without restarting the server manually 
  - The server will start running on port 5000

- Client:
   - ``cd frontend``
   - ``npm install`` 
   - ``npm start`` 
   - The react app will start running on port 3000

More details for setting up your developer environment can be found <a href="https://docs.google.com/document/d/1nB0lRI0E6x9cO13FxYdyd5gTg8Ya10P7GRPWN3HU_2k/edit?usp=sharing"  target="_blank">here</a>

#### 👩‍💻 Branching and Contributions

Uniplan is open to contributions, we recommend creating an issue or replying in a comment to the issue let us know what you are working on first that way we don't overwrite each other.

##### Pull requests
1. Fork the repo and create your branch (usually named after the issue).
2. If the code added should be tested, add some test examples.
3. Ensure to describe your pull request.


#### 🛠 Backend
  - <a href="https://docs.google.com/document/d/1UwwsonkqD68Jg1awcimWrtvlqRNyD1CB2H6F86l-eds/edit?usp=sharing"  target="_blank">Backend APIs</a>
  - Steps to create a new collection: 
    - Create a model in ``models`` folder with the name of the collection and follow the name formatting and overall structure of the models that already exist - make sure to add this line ``mongoose.model("Teacher", teacherSchema);`` the second argument should be the same name ending in "Schema".
    - For everything to work you need to require the model file in ``server.js`` at the top like ``require("./models/teacher");``
    - then go to ``home.js`` (or whatever file you want to use ``Teacher``) and add the model like this: ``const Teacher = mongoose.model("Teacher");`` so whenever you add to make an http request you just call it on the ``Teacher`` object

#### 🖼 Frontend

  - Frontend testing: [Cypress testing README](frontend/cypress/README.md)
  - ``public`` contains files generated by ``create-react-app`` and are usually available to the public
  - ``src`` is subdivided into ``pages`` and ``components``
    - ``pages`` contains ``js`` files each representing a page in Uniplan
    - ``components`` are different ``React`` components reused across the project
    - ``styles`` contains ``css`` files to style pages and components across the project
  - `App.js` is the main react component that the application will render at the root
  - ``index.js`` is the root file of the react app that renders the `App` component 

More on <a href="https://reactjs.org">React.js</a>

#### 🚗 Test Automation

Backend testing: Done with using Postman, tests and results exported into a json file

<a href="https://docs.google.com/document/d/1kOiGYqF64Q1FonaBKAe9zZcTp9LdUACW9IjhNbEecF0/edit?usp=sharing">Our testplan</a>

#### 🐳 Docker
Instructions to run images on Docker:
1. Install Docker
2. Download backend.tar and frontend.tar from the Docker folder in Sprint 6
3. In terminal CD to where you downloaded the files to
4. In terminal type: docker load < frontend.tar
5. In terminal type: docker load < backend.tar 
6. In terminal type: docker run -p 5000:5000 backend-images
      - This will run the backend image on port 5000
7. In terminal type: docker run -p 3000:3000 frontend-image
      - This will run the frontend image on port 3000
8. Open http://localhost:3000 to see running images


