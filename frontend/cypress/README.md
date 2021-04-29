# Testing frontend with Cypress

## Installing Cypress
  ```
  cd uniplan
  cd frontend
  npm install cypress --save-dev 
  
  ```
  if cloning repo, dependency is already in ```package.json``` simply run ```npm install``` from the ``frontend`` directory
  
## Running tests
- Run ```npm test``` from ```frontend```, this will run ```cypress open``` in the back
  ```
  cd uniplan
  cd frontend
  npm test
  
  ```
  This window will pop up:
  
  <img width="665" alt="Screen Shot 2021-04-28 at 1 18 05 AM" src="https://user-images.githubusercontent.com/47260563/116371189-02f37080-a7c0-11eb-97b5-3851787018e8.png">
  
  You can choose a preferred browser
  
  Click on each file to start running the tests

### Tests

There are 3 files that test a couple features, the name of each test suggests what it's testing.
- ``homepage.js``:

<img width="1194" alt="Screen Shot 2021-04-28 at 5 42 44 PM" src="https://user-images.githubusercontent.com/47260563/116489173-257d9c00-a849-11eb-8eb9-f2c61368ba18.png">
(In the last test in homepage.js, we are checking for if not logged in, the page should go back to login, but it doesn't, which is why the test fails, this should be fixed)


- ``courseplan.js``:

<img width="986" alt="Screen Shot 2021-04-28 at 1 30 23 AM" src="https://user-images.githubusercontent.com/47260563/116372513-50bca880-a7c1-11eb-8504-f6fa44d72642.png">


- ``searchpage.js``:

<img width="1125" alt="Screen Shot 2021-04-28 at 1 24 40 AM" src="https://user-images.githubusercontent.com/47260563/116371659-8319d600-a7c0-11eb-87a0-63f92d691af2.png">



