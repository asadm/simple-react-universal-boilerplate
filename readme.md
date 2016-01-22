Simple React Universal Boilerplate
===========================

My aim with this repo is to create a no-bullshit, fast, and easy to use react boilerplate (mostly for my personal projects).
Based on example from [express-react-views](https://github.com/reactjs/express-react-views/).
Rendering the application server-side using express-react-views.



How To Run
------
When developing on local machine, run:
``` sh
    npm install
    npm run dev
```
This will allow you to edit files on the fly and see changes without having to restart the server.

When you want the minified/production-like version for running on server use:
``` sh
	npm install
	npm start
```

What's Included
------
- Server-side react rendering using express.
- Client-side react with initial state sent from server.
- Very simple login system based on passport.
- Browserify and Watchify.


Relevant Files
------

- [```./app.js```](app.js) is the main entry point for node. Set's up express server and assigns routes to their corresponding components.
- [```./routes/index.js```](routes/index.js) holds all an object with information on what component should be rendered at what route. Along with it's initial state sent from server.
- [```./views```](views) holds all the view related files and all React components.
- [```./api.js```](api.js) set's up api endpoints. Preferably at /api/* path. These api endpoints can be used by our client-sided react app to send form data or request new data.
- [```./db.js```](db.js) should hold all the interaction with database or our persistent storage. These are quite simply our 'models'. Currently has dummy models.
- [```./loginapi.js```](loginapi.js) set's up login api endpoints using passport and passport-local.

No Flux?
------

I have intentionally left many things out (including flux, redux, etc) to make it easy to get started.

#### License [MIT](LICENSE.md)
