# EJC - REST API

Node.js Backend Application storing data in a MongoDB NoSQL Database to manage volunteering events, by maintaining people and teams. The concept is that more times you participate on events, more likely to become a team coordinator you are. These features are not included yet in the project.

### Instalation

1. Set MongoDB endpoint in [/config/database.config.js](/config/database.config.js)

```sh
$ mongod
$ npm install
$ npm start
```

### Authentication and Authorization

This application has a middleware that verifies a JWT Token for all the controllers. The JWT is generated by a .NET Core API: https://github.com/viniciusmpg/Ejc.Auth

#### Next Steps

- Automated tests
