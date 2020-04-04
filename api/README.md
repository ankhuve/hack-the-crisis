# Quarma API

API providing the backend for the Quarma App.

## Local Setup

1. Run `npm install`
2. Create a file called `.env` in the root of this folder with the following contents  
```
DB_HOST = 127.0.0.1
DB_USERNAME = <YOUR DB USERNAME>
DB_PASSWORD = <YOUR DB PASSWORD>
DB_DATABASE = <YOUR DB DATABASE>
JWT_SECRET = <(OPTIONAL) SECRET KEY FOR JWT TOKENS, DEFAULTS TO "secret">
```
4. Install local MySQL database.  
OSX: https://dev.mysql.com/doc/refman/8.0/en/osx-installation-pkg.html  
Windows: ??  
Ubuntu: ??
5. Create database `node_modules/.bin/sequelize-cli db:create`
6. Run migrations `node_modules/.bin/sequelize-cli db:migrate`
7. Seed database `node_modules/.bin/sequelize-cli db:seed:all`
