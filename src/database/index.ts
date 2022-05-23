import { createConnection } from 'typeorm';

createConnection();


// import { DataSource } from "typeorm";

// const DataSource = new DataSource({
//     type: "postgres",
//     host: "database",
//     port: 5432,
//     username: "docker",
//     password: "1234",
//     database: "avalon",
// });

// DataSource.initialize();