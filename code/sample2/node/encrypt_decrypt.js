// Let's use the low-level API exposed by node-sodium via the sodium.api object.
const sodium = require('sodium').api;

const plainMsg = Buffer.from('This is a simple test message', 'utf-8');
console.log('Text we will encrypt is:', plainMsg.toString());

// Generate random key and nonce.
var key = Buffer.allocUnsafe(sodium.crypto_secretbox_KEYBYTES);
var nonce = Buffer.allocUnsafe(sodium.crypto_secretbox_NONCEBYTES);
sodium.randombytes(key);
sodium.randombytes(nonce);

// Encrypt and authenticate the message.
var cipherMsg = sodium.crypto_secretbox(plainMsg, nonce, key);
if (!cipherMsg) {
	throw `Unable to encrypt message: ${plainMsg.toString()}`;
}

// Decrypt the message.
var plainMsg2 = sodium.crypto_secretbox_open(cipherMsg, nonce, key);
if (!plainMsg2) {
	throw 'Unable to decrypt cipher text';
} else {
	console.log('The decrypted text is:', plainMsg2.toString());
}
