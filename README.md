### NODE1.1: Getting started with Express

#### Objective
Create a simple Express app.

#### Skills
* Setting up Express
* Understanding routes
* Serving static web pages

#### Resources
* [nodejs.org](http://nodejs.org/)
* [expressjs.com](http://expressjs.com/)

#### Requirements

##### _Part I_

1. Create a new folder in your projects directory
2. Navigate to that folder with Terminal
3. Type "express" and press enter
4. Type "npm install" and press enter
5. Use _app.get()_ to create a route for "/hi"
6. Inside teh route's callback, _res.send()_ to write a message to the response
7. Test your route in the browser by typing [http://localhost:3000/hi](http://localhost:3000/hi)
8. Create 2 more routes with different URLs. Do a _res.send()_ to send some data to each page.

##### _Part II_
1. Create a route that serves a static HTML page with a form. Use _fs.readFile_ to send your html file to the client
2. Setup a post route that will accept incoming data submitted by your form
'''
Refer to sample code on GitHub
'''
3. Setup a success route that the page is redirected to after the form is submitted _req.redirect()_
'''
Success! Now you know how to create your own web server using Express!
'''
