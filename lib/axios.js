const axios = require('axios').default;
const { baseURL, url, username, password } = require('../config/thsms-api')

const AXIOS = axios.create({
    baseURL: `${baseURL}/${url}`,
    params: {
        username: username,
        password: password
    }
});

module.exports = AXIOS