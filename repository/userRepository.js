const userRep = new Map();

const save = (userModel) => {
  userRep.set(userModel.id, userModel);
};

const get = (id) => {
  return userRep.get(id);
};

const getByName = (name) => {
  for (const [key, value] of userRep.entries()) {
    if (value.name === name) return value;
  }
  return null;
};

const getAll = () => {
  return [...userRep];
};

module.exports = { save, get, getAll, getByName };
