# bf-exercise
Exercise for BF

The archive consists of three folders: `api`, `client` and `mongodb`.

-------------
`api` contains the API implementation in NodeJS with ExpressJS.

You should have installed MongoDB installed and running on the host in order to run the API.

- Node version used: v4.0.0
- Npm version used: 2.14.2
- MongoDB version used: 2.6.11

To start the API please run the following:
- `npm install`
- `npm start`

You should see in the console the following output:

> `Development
Express server listening on port 8007` <br />
`Established connection to the database.`

The API will listen on the port 8007, which means that the port must not be used on the host machine.

-----------
`client` contains the client implementation in AngularJS

To serve the client please run the following command (in a new terminal):
- `npm run serve`

It will automatically open a page in your default browser pointing to http://127.0.0.1:8080/.

---------------
`mongodb` contains a Vagrant configuration for the MongoDB server.
This is optional as you may have installed locally your own MongoDB server.

You need to have Vagrant working in order to be able to run the box.

To start the box simply run:
- `vagrant up`

----
I have used different technologies and libraries that I have worked with in the past. There are even some code snippets from some projects of my own.

Let me know if you have questions!
