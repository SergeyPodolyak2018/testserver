const insertUrl = (url) => `
INSERT INTO Urls (id, url, visits, created_time, user_id)
VALUES ("${url.id}", "${url.url}", "${url.visits}", "${url.created_time}", ${url.user_id})
RETURNING (id)
`;

const getUrlByCode = (id) => `
  SELECT * 
  FROM Urls
  WHERE id = "${id}"
`;

const getUrlByUser = (id) => `
  SELECT *
  FROM Urls
  WHERE user_id = ${id}
`;

module.exports = { insertUrl, getUrlByCode, getUrlByUser };
