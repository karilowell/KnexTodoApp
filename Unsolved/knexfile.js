// Update with your config setting

module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "nodeUser",
    password: "",
    database: "knex_todolist_db",
    debug: ['ComQueryPacket', 'RowDataPacket']
  }
};

