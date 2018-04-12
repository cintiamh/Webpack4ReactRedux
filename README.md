# Webpack4ReactRedux

Basic starter setup for React Project.

```
$ npm init -y
$ touch .gitignore
```

[.gitignore](.gitignore)

## Basic webpack

* webpack
* HTML
* CSS extract
* Assets / fonts
* Prod / Dev

```
$ npm i -D webpack webpack-cli
$ npm i -D webpack-dev-server
$ npm i -D style-loader css-loader file-loader csv-loader xml-loader html-loader
$ npm i -D html-webpack-plugin clean-webpack-plugin
$ npm i -D extract-text-webpack-plugin@next
$ npm i -D webpack-merge
$ touch webpack.common.js
$ touch webpack.dev.js
$ touch webpack.prod.js
$ mkdir src
$ touch src/index.js
$ touch src/style.css
$ touch src/index.html
$ touch site.webmanifest
```

* [webpack.common.js](webpack.common.js)
* [webpack.dev.js](webpack.dev.js)
* [webpack.prod.js](webpack.prod.js)
* src
  - [index.html](src/index.html)

## ESLint

```
$ npm i -D eslint
$ ./node_modules/.bin/eslint --init
$ touch .eslintignore
$ npm i -D eslint-loader
```

* [.eslintignore](.eslintignore)
* [.eslintrc.js](.eslintrc.js)
* [webpack.common.js](webpack.common.js)

## Babel

```
$ npm i -D "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env @babel/preset-react
$ touch .babelrc
```

* [.babelrc](.babelrc)
* [webpack.common.js](webpack.common.js)

## Jest

```
$ npm i -D jest
$ npm i -D babel-jest regenerator-runtime 'babel-core@^7.0.0-0'
$ mkdir test
$ touch test/index.test.js
$ touch jest.config.js
```

* [jest.config.js](jest.config.js)

Documentation: https://facebook.github.io/jest/docs/en/getting-started.html

## React

## Redux
