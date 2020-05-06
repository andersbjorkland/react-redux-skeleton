# React Redux Skeleton
This is a skeleton project for building React Redux applications. It uses Redux Thunk middleware for asyncronous actions.

## Starting up
After cloning this repo you should run `npm install`to install all the dependencies.

## React Scripts
As this skeleton project is built with create-react-app it also comes with a couple of scripts:
* *npm start* Starts development server at [http://localhost:3000](http://localhost:3000)
* *npm test* Starts the Jest test runner.
* *npm run build* Builds the prod version of the app and outputs the files to the `build` folder. Update the `package.json` if you have a need to specify the app url. Example: "homepage": "http://femtearenan.se/projects/skeleton"
* *npm run eject* Aborts the option for `npm run build` if you want to have full control of the build options. **Once run it removes the option for the default build tool**

## Background
Running create-react-app gives the basics of a React app. To handle state of the app Redux is often the option to use. But this also requires a few more dependencies. If you also want to handle asyncronous actions with Redux that's another dependencies. This skeleton is shortcut for:
1. `npx create-react-app my-app`
2. `npm install redux`
3. `npm install react-redux`
4. `npm install redux-thunk`

It also removes som "opinions":
* App.js no longer is a React-front. Logos for React is removed.

And set up a whole suite of other opinions. React is prepared for redux with the following files:
* actions.js *- for contains your actions and action constants*
* appReducer.js *- for containing your basic state management logic*
* rootReducer.js *- for combining multiple reducers*
* store.js *- for applying reducer and middleware to store*
* index.js *- applys Provisioner with store*

## Manual configurations
As you set up your own React Redux app there are still some configurations you need to do on the existing boiler plate:
* manifest.json needs to be updated with your app information.
* icons and logos are boiler plate. As a default they use my logos and favicon. Remember to switch these out in the public folder.
* index.html should be updated with correct title and meta data

### Connecting React components to Redux state and actions
Using classes for the components, each class should extend React.Component.
Export the class with connections to actions and state like this:
```javascript
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  pressedKey: (keycode) => dispatch(pressedKey(keycode)),
  timedout: () => dispatch(timedout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

## Feedback
Get in touch with me at anders@femtearenan.se

## Learn more
[React documentation](https://reactjs.org/docs/getting-started.html)
[Redux documentation](https://redux.js.org/introduction/getting-started)
[React Redux](https://react-redux.js.org/)

[Who is Anders Björkland?](https://www.femtearenan.se/about)

## Follow me
I am active on [Twitter](https://twitter.com/abjorkland) and [LinkedIn](https://www.linkedin.com/in/anders-bj%C3%B6rkland-9679b859). 