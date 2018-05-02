# Follow-me Printing Frontend

A Web-UI to show a print dialog for printjobs in the follow-me queue.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have node.js and npm installed on your system.

```
Give examples
```

### Installing

To setup your development environment install the node dependencies:

```
npm install
```

## Running

### Running frontend

To run a local webserver with hot reloading

```
npm run serve
``` 

### Running tests

To run the unit tests with hot reloading

```
npm run test
```

## Deployment

Deployment is done via AWS code pipeline. This project includes a corresponding buildspec.yml file.
To deploy a new version, just push to the master branch.

If you want to build manually run

```
npm run build
```

This will create a new "dist" folder with static assets.

## Built With

* [Vue](https://vuejs.org/v2/guide/) - The web framework used
* [Bulma](https://bulma.io/documentation/) - The CSS framework used
* [Typescript](https://www.typescriptlang.org/docs/home.html) - Programming language

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kai-work/fme-vue/tags). 

## Authors

* **ThinPrint CloudServices Inc** - *Initial work* - [ezeep](https://github.com/ezeep)
