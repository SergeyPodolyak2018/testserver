const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(
  './storage/test.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err && err.code == 'SQLITE_CANTOPEN') {
      createDatabase();
      return;
    } else if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
    if (!err) {
      createTables(db);
    }
  }
);

function createDatabase() {
  var newdb = new sqlite3.Database('./storage/test.db', (err) => {
    if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
    createTables(newdb);
  });
}

function createTables(newdb) {
  console.log('point3');
  let sql1 = `
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_time INTEGER DEFAULT 0
    );
    `;
  let sql2 = `
    CREATE TABLE IF NOT EXISTS Urls (
        id TEXT primary key not null,
        url TEXT NOT NULL,
        visits INTEGER DEFAULT 0,
        created_time INTEGER DEFAULT 0,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id)
          REFERENCES Users (id) 
    ) WITHOUT ROWID;
      `;
  newdb.run(sql1, [], (err) => {
    if (err) {
      return console.log('Users', err.message);
    }
    console.log(`A Users has been created`);
    newdb.run(sql2, [], (err) => {
      if (err) {
        return console.log('Urls', err.message);
      }
      console.log(`A Urls has been created`);
    });
  });
}

module.exports = db;
