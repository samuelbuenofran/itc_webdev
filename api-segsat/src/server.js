/* A BIG OBSERVATION:

Please DO NOT use "https", use "http" instead. The https protocol is supported, but it is not recommended to use it. The reason is that the https protocol requires a certificate to be installed on the server. The certificate is used to encrypt the data that is sent between the server and the client. The certificate is not installed on the server in this tutorial, so the https protocol will not work.

*/

import express from "express";
import db from "./db.js";
import userRoutes from "./routes/userRoutes.js";
import regionRoutes from "./routes/regionRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

db.sync(() => console.log("Database Ready"));
app.use("/users", userRoutes);
app.use("/routes", regionRoutes);
app.use("/countries", countryRoutes);

app.listen(port, () => console.log("Server running on port: " + port));

// The following comments explain the code in the snippet above:

/* 
The import express from 'express' statement imports the express module. The import db from './db.js' statement imports the db variable from the db.js file. The import userRoutes from './routes/userRoutes.js' statement imports the userRoutes variable from the userRoutes.js file.
*/

/*   
    -> The const app = express() statement creates a new express application.
    -> The "const port = 3000" statement sets the port number to 3000.
    -> The app.use(express.json()) statement parses the request body as JSON.
*/

/*
This code sets up a Node.js server using the Express.js framework to handle HTTP requests. The server listens on port 3000 and connects to a database using Sequelize ORM.

The code first imports the necessary dependencies: Express.js, a database module called db, and user routes from a separate file.

Then, an instance of Express.js is created and assigned to the app constant. The port number 3000 is also assigned to a port constant.

Next, app.use(express.json()) is called to enable parsing of incoming JSON data in requests. This is middleware that processes the incoming data and converts it into a JavaScript object.

The code then calls db.sync() to synchronize the database schema with the Sequelize model definitions. Once the synchronization is complete, a message "Database Ready" is logged to the console.

The server is set up to handle requests to the '/users' route by calling app.use('/users', userRoutes). The userRoutes is imported from a separate file, and contains the definitions of various routes related to user management, such as '/users/get', '/users/create', etc.

Finally, the server starts listening on the specified port using app.listen(port, callback). Once the server is running, a message "Server running on port [port number]" is logged to the console.

Overall, this code sets up a basic Node.js server using Express.js and Sequelize ORM to handle requests related to user management.
*/
