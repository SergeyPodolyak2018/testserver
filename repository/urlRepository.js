const db = require('../db/sqlite');
const urlQuery = require('../querytemplates/urls.js');
const getThenable = require('../helper/thenable.js');

const save = (urlModel) => {
  const sql = urlQuery.insertUrl(urlModel);
  return getThenable((resolve, reject) => {
    db.run(sql, [], function (err) {
      if (!err) {
        return void resolve({ id: this.lastID });
      }
      return void reject({ err });
    });
  });
};

const getById = (id) => {
  const sql = urlQuery.getUrlByCode(id);
  return getThenable((resolve, reject) => {
    db.get(sql, [], function (err, data) {
      if (!err) {
        return void resolve(data);
      }
      reject({ err });
    });
  });
};

const getByUser = (id) => {
  const sql = urlQuery.getUrlByUser(id);
  return getThenable((resolve, reject) => {
    db.all(sql, [], function (err, data) {
      if (!err) {
        return void resolve(data);
      }
      reject({ err });
    });
  });
};

const modify = (id) => {
  const data = urlRep.get(id);
  data.visited();
};

const getAll = () => {
  return Array.from(urlRep).map(([name, value]) => value);
};

module.exports = { save, getById, getByUser, modify };
