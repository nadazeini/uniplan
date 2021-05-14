# Uniplan

### Developer Guide

#### 👾 Requirements

1. <a href="https://nodejs.org/en/"  target="_blank">Node.js v14.15.3 or newer </a>
2. <a href="https://account.mongodb.com/account/login"  target="_blank">MongoDB account</a>
3. Clone repository 
4. [Run locally](#Run-locally)

#### 🗂 Structure

- [backend](#backend)
  - models
  - routes 
- [frontend](#frontend)
  - [cypress](frontend/cypress/README.md)
  - src
    - components
    - pages
  - public
- [test-automation](#test-automation)
- [docker](#docker)

#### 💻 Run locally

//diagram picture here

- Database:

  This is the structure of our database:
  //collections diagram here

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
- Client:

#### Branching and Contributions

Uniplan is open to contributions, we recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

##### Pull requests
1. Fork the repo and create your branch (usually named after the issue).
2. If the code added should be tested, add some test examples.
3. Ensure to describe your pull request.


+ If the issue exists, comment that you will be working on it

#### Backend
#### Frontend
#### Test Automation

Frontend testing: [Cypress testing README](frontend/cypress/README.md)
Backend testing

#### Docker

