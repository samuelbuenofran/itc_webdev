import { Sequelize } from "sequelize";
import db from "../db.js";

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default User;

// The following is a set of comments that explain the code in the snippet above:

/* 
The const User = db.define() statement creates a new model called User. The first parameter is the name of the model, and the second parameter is an object that contains the model's fields. The id field is the primary key and is automatically incremented. The name and email fields are strings and cannot be null.
*/
