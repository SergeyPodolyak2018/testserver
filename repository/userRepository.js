const userRep = new Map();
const db = require('../db/sqlite');
const userQuery = require('../querytemplates/users.js');
const getThenable = require('../helper/thenable.js');

const save = (userModel) => {
  const sql = userQuery.insertUser(userModel);
  return getThenable((resolve, reject) => {
    db.run(sql, [], function (err) {
      if (!err) {
        return void resolve({ id: this.lastID });
      }
      reject({ err });
    });
  });
};

const get = (id) => {
  return userRep.get(id);
};

const getByName = (name) => {
  const sql = userQuery.getUserByName(name);
  return getThenable((resolve, reject) => {
    db.get(sql, [], function (err, data) {
      if (!err) {
        return void resolve(data);
      }
      reject({ err });
    });
  });
};

const getAll = () => {
  return userRep;
};

module.exports = { save, get, getAll, getByName };
