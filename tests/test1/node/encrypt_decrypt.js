// Let's use the low-level API exposed by node-sodium via the sodium.api object.
const sodium = require('sodium').api;

const plainMsg = Buffer.from('Hi, my name is José', 'utf-8');
console.log('Text we will encrypt is:', plainMsg.toString());

// Generate new random public and secret keys for José and Alice.
const joseKeys = sodium.crypto_box_keypair();
const aliceKeys = sodium.crypto_box_keypair();

// Generate a new nonce.
const nonce = Buffer.allocUnsafe(sodium.crypto_box_NONCEBYTES);
sodium.randombytes(nonce);

// José wants Alice to know his name, so let's encrypt it!
const cipherMsg = sodium.crypto_box(plainMsg, nonce, aliceKeys.publicKey, joseKeys.secretKey);
if (!cipherMsg) {
	throw `Unable to encrypt message: ${plainMsg.toString()}`;
}

// Alice really wants to know José's name too so let's decrypt the cipher text.
const plainMsg2 = sodium.crypto_box_open(cipherMsg, nonce, joseKeys.publicKey, aliceKeys.secretKey);
if (!plainMsg2) {
	throw 'Unable to decrypt cipher text';
} else {
	console.log('The decrypted text is:', plainMsg2.toString());
}
