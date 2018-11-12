# libsodium-playground

My playground repo for testing the Node.js and PHP ports of the libsodium encryption library. Following are details of each test included.

## Test1: Public Key Authenticated Encryption

**Node.js Source File:** /tests/test1/node/encrypt_decrypt.js
**Purpose**: Encrypt and subsequently decrypt a message using a public-key authenticated encryption scheme using nonces. With this scheme only public keys and the nonce should be shared.

## Test2: Secret Key Authenticated Encryption

**Node.js Source File:** /tests/test2/node/encrypt_decrypt.js
**Purpose**: Encrypt and subsequently decrypt a message using a secret-key authenticated encryption scheme using nonces. With this scheme only the nonce should be shared.
