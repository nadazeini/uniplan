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

(errors to be resolved, explained in test report)
<img width="383" alt="Screen Shot 2021-04-28 at 1 23 29 AM" src="https://user-images.githubusercontent.com/47260563/116371499-582f8200-a7c0-11eb-80d0-ec789570db41.png">

- ``courseplan.js``:

<img width="970" alt="Screen Shot 2021-04-28 at 1 22 38 AM" src="https://user-images.githubusercontent.com/47260563/116371396-39c98680-a7c0-11eb-8551-23fa89d3c680.png">

- ``searchpage.js``:

<img width="1125" alt="Screen Shot 2021-04-28 at 1 24 40 AM" src="https://user-images.githubusercontent.com/47260563/116371659-8319d600-a7c0-11eb-87a0-63f92d691af2.png">



