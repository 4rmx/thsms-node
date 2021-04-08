const xmlParser = require('fast-xml-parser');
async function parser(data, key) {
    try {
        const res = await xmlParser.parse(data)
        if (!res) return;
        const { service } = res
        if (service[key].status === 'success') {
            return service[key]
        }
        else if (service[key].status === 'fail') {
            return service[key].message
        }
    } catch (err) {
        throw err
    }
};

module.exports = { parser }