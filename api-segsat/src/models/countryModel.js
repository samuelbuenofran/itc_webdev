import { Sequelize } from "sequelize";
import db from "../db.js";

const Country = db.define("country", {
  country_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  country_official_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gini_coefficient: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  human_development_index: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  country_population: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  country_area: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  capital: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  currency: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Country;

// The following is a set of comments that explain the code in the snippet above:

/* 
The const User = db.define() statement creates a new model called User. The first parameter is the name of the model, and the second parameter is an object that contains the model's fields. The id field is the primary key and is automatically incremented. The name and email fields are strings and cannot be null.

You might be wondering why the db variable is imported from the db.js file. The db variable is a Sequelize instance that is used to connect to the database and define models. The db variable is defined in the db.js file, and is exported so that it can be used in other files. The db variable is imported in the userModel.js file so that it can be used to define the User model.

You may also be wondering why we are stored the return value of the db.define() function to the constant "User", and then exporting the constant "User". The reason is that the db.define() function returns a Sequelize model, which is used to perform CRUD operations on the database. The User model is used to perform CRUD operations on the User table in the database. The User model is exported so that it can be used in other files.

*/

/* The following is a brief explanation about the "Sequelize" object being used in the snippet above:
  The Sequelize object is a class that represents a Sequelize instance. It is used to create a new Sequelize instance, which is used to connect to a database and define models.
  As we can see above within the db.define() function call, the Sequelize object is used to define the data types of the model's fields. 

*/
