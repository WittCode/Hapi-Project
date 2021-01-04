const Sequelize = require('sequelize');

const seq = new Sequelize('hapiBlogs', 'postgres', 'toor', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

seq.authenticate().then(() => {
    console.log("Database connection established.");
}).catch((data) => {
    console.log(data);
    console.log("Error connecting to database.");
});

seq.query("SELECT * FROM blogs").then((data) => {
    const [results, metadata] = data;
    console.log(results);
    console.log(metadata);
}).catch((error) => {
    console.log(error);
});

