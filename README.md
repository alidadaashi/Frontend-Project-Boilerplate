# **Frontend Project Boilerplate (Bootstrap)**
As a front-end developer, you always want to have some useful tools like browser auto refresh, minifying files, browser sync and etc and you know you should use task runners like Gulp, Grunt and etc. Besides for every project you may also use any CSS framework and nowadays it isn't so simple to use all of the framework's facilities. I built a boilerplate for my front-end projects to get rid of all ambiguities exists in every framework. (Bootstrap in this case)

## **Prerequisites**
You  need to install a few assets before you can get started, such as Node.

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x. If you saw the node version it's OK and go to the below Install section if not install Node.js from the above link.

## **Install**

Next, install the local dependencies. Type this script in project folder to install all of the packages written in the package.json file:

```sh
$ npm install
```

Note: if you have the [Yarn](https://yarnpkg.com/) package manager installed, you can just run `yarn`.
The project includes a yarn.lock file that will be used here.

That's it! You should now have everything needed to use the task-runner.

---

**You can see some of the available commands.**

## Watch For Changes & Automatically Refresh Across Devices

```sh
$ npm start
# or
$ yarn start
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.

## Build & Optimize

```sh
$ npm run build
# or
$ yarn build
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.


## Serve the Fully Built & Optimized Site

```sh
$ npm run demo
# or
$ yarn demo
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.

---

## .babelrc

[.babelrc](https://babeljs.io/docs/usage/babelrc/) is a configuration file for passing options to [Babel](https://babeljs.io) - the ES2015 transpiler recommended for writing next-generation JavaScript in Web Starter Kit. 

## .editorconfig

[EditorConfig](http://editorconfig.org/) is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.

## gulpfile.babel.js

[Gulp](http://gulpjs.com) is a streaming build system that allows you to automate tedious development tasks. Compared with other build systems, such as Grunt, gulp uses Node.js streams as a means to automate tasks, thereby removing the need to create intermediate files when transforming source files. 

In gulp, you would install plugins, that do one thing and do it well, and construct a 'pipeline' by connecting them to each other. A `gulpfile` allows you to put together tasks that use plugins to accomplish a task like minification. 

`gulpfile.babel.js` is a gulpfile written in ES2015. The `babel` portion of the name refers to its use of the [Babel](https://babeljs.io) transpiler for enabling ES2015 code to run there.

## src/scripts/main.js

This is a file where your custom JavaScript can go. 

## src/styles/main.scss

This is a file where your custom SCSS can go. You can place any Sass you wish to have compiled into the `styles` directory.

## src/manifest.json

`manifest.json` contains a [Web Application Manifest](https://w3c.github.io/manifest/) - a simple JSON file that gives you the ability to control how your app appears to the user in the areas that they would expect to see apps (for example the mobile home screen). In here you can control what the user can launch and more importantly how they can launch it. 

For more information on the manifest, see [Web Fundamentals](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android).

## src/manifest.webapp

`manifest.webapp` refers to the proprietary [Firefox OS manifest format](https://developer.mozilla.org/en-US/Apps/Build/Manifest), and not the W3C [manifest spec](https://w3c.github.io/manifest/), designed for cross-browser open web applications. 

The Firefox OS app manifest provides information about an app (such as name, author, icon, and description) and a list of Web APIs that your app needs.

This manifest included in Web Starter Kit until Firefox OS switches to using the manifest spec instead.

## package.json

A [package.json](https://docs.npmjs.com/files/package.json) file is used to specify project tooling dependencies from [npm](http://npmjs.org) - the Node package manager. When you run `npm install`, `package.json` is read to discover what packages need to be installed. 

`package.json` can also contain other metadata such as a project description, version, license and configuration information.
