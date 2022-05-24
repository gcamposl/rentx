import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});

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