const insertUser = (user) => `
INSERT INTO Users (name, password, created_time)
VALUES  ("${user.name}",	"${user.password}" ,${user.created_time})
RETURNING (id)
`;

const getUserByName = (name) => `
  SELECT * 
  FROM Users
  WHERE name = "${name}"
`;

module.exports = { insertUser, getUserByName };
