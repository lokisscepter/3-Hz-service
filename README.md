# REI Item Product Page

> Item Checkout and Preview Module

## Related Projects

  - https://github.com/lokisscepter/bschaaf1017-service
  - https://github.com/lokisscepter/sq-service
  - https://github.com/lokisscepter/pvl-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This project uses MySQL

> Edit `db/db.config.js` with your MySQL credentials

> `npm run seed-db` to seed database

Webpack is used to bundle the application

> `npm run webpack-prod` to build production version of service

The service is run using an express server, listening on port 6969

> `npm run start-prod` to start the service

## Requirements

Dependencies are specified in `package.json`

### Installing Dependencies

From within the root directory:

```sh
npm install
```