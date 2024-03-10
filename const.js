const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const PORT = process.env['PORT'];
const BASE_URI = process.env['BASE_URI'] || '';
const ACCESS_TOKEN_SECRET = process.env['ACCESS_TOKEN_SECRET'] || '';

module.exports = { PORT, BASE_URI, ACCESS_TOKEN_SECRET };
