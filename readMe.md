# Age of Empires Units Filtering App

This app filters Age of Empires units by given parameters on UI selectors.

## Features

- Fetch units on page load from JSON file
- Filter units by minimum required age
- Filter units by minimum and maximum costs (Wood, Food, Gold) with sliders range between 0 - 200
- Filter units by multiple cost and age selectors
- Activate or deactivate costs filter
- Re-filter units on every filter selector change
- List matching costs
- Deatiled view of any matched cost on a different page
- Handle all the data flow with Redux-Saga middleware on Redux

## Used Packages

- ReactJS
- React Router
- Redux
- Redux-Saga
- Axios
- MaterialUI
- Node Sass

## Scripts

## Installation

In project directory, you can run:

```node
npm install
```

Installs all the modules listed as dependencies in package.json

## Start

```node
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Test

```node
npm run test
```

Launches the test runner in the interactive watch mode.

## Test Coverage Report

```node
npm run test-coverage
```

Launches the test runner, then collects test coverage information and reports in the output.

## Build

```node
npm run build
```

Builds the app for production to the build folder.
