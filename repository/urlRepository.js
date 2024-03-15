const urlRep = new Map();

const save = (urlModel) => {
  urlRep.set(urlModel.id, urlModel);
};

const get = (id) => {
  return urlRep.get(id);
};

const modify = (id) => {
  const data = urlRep.get(id);
  data.visited();
};

const getAll = () => {
  return Array.from(urlRep).map(([name, value]) => value);
};

module.exports = { save, get, getAll, modify };
