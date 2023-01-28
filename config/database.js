// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST', '127.0.0.1'),
//       port: env.int('PGPORT', 5931),
//       database: env('PGDATABASE', 'josh-cms'),
//       user: env('PGUSER', 'root'),
//       password: env('PGPASSWORD', 'deji'),
//       ssl: env.bool(true),
//     },
//   },
// });