const creditBalance = require('./thsms-node.min.js').credit;
creditBalance()
    .then(res => console.log(res))
    .catch(err => console.log(err))