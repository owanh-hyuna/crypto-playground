const crypto = require('crypto');
const key = 'MySecretKey12345'; // secret key known on php end
const iv = '1234567890123456'; // should also be kept secret (but known on php end) for strong security
const algorithm = 'aes-128-cbc'; // the cipher algorithm to use

// Create Cipher and Decipher instances.
const cipher = crypto.createCipheriv(algorithm, key, iv);
const decipher = crypto.createDecipheriv(algorithm, key, iv);

// Encrypt a test message.
const text = 'This is a simple message, courtesy of José!';
let encrypted = cipher.update(text, 'utf8', 'binary');
encrypted += cipher.final('binary');

// Print original message.
console.log('Text, prior to being encrypted:', text);

// Print the encrypted cipher.
const hexVal = Buffer.from(encrypted, 'binary');
newEncrypted = hexVal.toString('hex');
console.log('Encrypted:', newEncrypted);

// Decrypt the cipher.
let decrypted = decipher.update(newEncrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

// Print the decrypted text.
console.log('Decrypted: ', decrypted);
