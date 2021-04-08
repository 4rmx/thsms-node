const AXIOS = require('../lib/axios');
const { parser } = require('../lib/response-parser')
const METHOD = 'credit'
module.exports = async () => {
    try {
        return await AXIOS({
            params: {
                method: METHOD,
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