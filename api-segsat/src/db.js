import { Sequelize } from "sequelize";

const db = new Sequelize("database", "user", "passw", {
  dialect: "sqlite",
  storage: "src/db.sqlite",
});

export default db;

// Mysql
/*
{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
}
*/

// The following comments explain the code in the snippet above:

/*
The "storage:'src/db.sqlite'" statement is the path to the database file. If you want to use a different database, you can change the dialect and the storage path. For example, if you want to use MySQL, you can change the dialect to mysql and the storage path to the MySQL database path. For example: storage: 'mysql://localhost:3306/database'
*/

/*
The const db = new Sequelize() statement creates a new Sequelize instance. The first parameter is the database name, the second parameter is the username, and the third parameter is the password. The fourth parameter is an object that contains the database configuration.
*/

/* 
The export default db statement exports the db variable so that it can be used in other files.
*/
