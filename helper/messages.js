const statusIndex = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  DUPLICATE: 422,
  UNAUTORIZED: 401,
  FORBIDDEN: 403,
  DELETED: 204,
};

const MESSAGE = {
  INVALID_CREDENTIALS: (id) => {
    return {
      status: statusIndex.BAD_REQUEST,
      data: {
        errors: [
          {
            msg: 'Unautorized',
          },
        ],
      },
    };
  },

  UNAUTORIZED: () => {
    return {
      status: statusIndex.UNAUTORIZED,
      data: {
        errors: [
          {
            msg: 'Unautorized',
          },
        ],
      },
    };
  },

  SINGIN_IN_SUCCESS: (data) => {
    return {
      status: statusIndex.OK,
      data,
    };
  },
  SINGIN_UP_SUCCESS: () => {
    return {
      status: statusIndex.OK,
      data: {
        result: 'Signup is successful',
      },
    };
  },
  ADD_URL_SUCCESS: () => {
    return {
      status: statusIndex.OK,
      data: {
        result: 'Url add successful',
      },
    };
  },
  FORBIDDEN: () => {
    return {
      status: statusIndex.FORBIDDEN,
      data: {
        errors: [
          {
            msg: 'FORBIDDEN',
          },
        ],
      },
    };
  },
  URLS: (data) => {
    return {
      status: statusIndex.OK,
      data: {
        urls: data,
      },
    };
  },
  USERS: (data) => {
    return {
      status: statusIndex.OK,
      data: {
        users: data,
      },
    };
  },
};
module.exports = MESSAGE;
