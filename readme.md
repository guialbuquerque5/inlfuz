
TypeORM has a CLI tool that allow us to generate a base application already in TypeScript. To use this tool we need first to install typeORM as a global dependency:

    npm install -g typeorm

Now we can set up our application:

    typeorm init --name jwt-express-typeorm --database sqlite --express

It will create an example express application already in TypeScript with TypeORM and body-parser. Let’s install those dependencies with:

    npm install

Now, we are going to install some additional dependencies

    npm install -s helmet cors jsonwebtoken bcryptjs class-validator ts-node-dev

**helmet**
Help us to secure our application by setting various HTTP headers

**cors**
Enable cross-origin Requests

**body-parser**
Parses the client’s request from json into javascript objects

**jsonwebtoken**
Will handle the jwt operations for us

**bcryptjs**
Help us to hash user passwords

**typeorm**
The ORM we are going to use to manipulate database

**reflect-metadata**
allow some annotations features used with TypeORM

**class-validator** 
A validation package that works really well with TypeORM

**sqlite3** 
We are going to use sqlite as dev database

**ts-node-dev**
Automatically restarts the server when we change any file

### Installing type check dependencies 

Since we are working with TypeScript, it is a good idea to install @types for our dependencies.

    npm install -s @types/bcryptjs @types/body-parser @types/cors @types/helmet @types/jsonwebtoken

A

Now, let’s create our first migration

    typeorm migration:create -n CreateAdminUser


Now we start the server, so the synchronize tool can generate our database tables.

    npm start

Now we can run the migration, to insert the first admin user.

    npm run migration:run

Finally, your server is ready to go. Just get the Postman, or any other tool, and make some requests.




