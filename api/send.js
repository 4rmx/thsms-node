const AXIOS = require('../lib/axios');
const { parser } = require('../lib/response-parser')
const METHOD = 'send'

module.exports = async (senderName = 'SMS', phoneNumber, message) => {
    try {
        return await AXIOS({
            url: `${baseURL}/${url}`,
            params: {
                method: METHOD,
                from: senderName,
                to: phoneNumber,
                message: message
            },
        })
            .then(async result => {
                return await parser(result.data, METHOD)
            })
            .catch(err => {
                throw err
            })

    } catch (err) {
        throw err;
    }
};