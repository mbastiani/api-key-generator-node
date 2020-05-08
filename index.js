const Crypto = require('crypto');

console.table([
    Crypto.randomBytes(64).toString('base64'),
    Crypto.randomBytes(64).toString('base64'),
    Crypto.randomBytes(64).toString('base64')
]);