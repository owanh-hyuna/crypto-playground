# crypto-playground

My Node.js/PHP playground repo for code samples that demonstrate use of different encryption libraries. Following are details of each of the code samples included.

## Libsodium

### Sample 1: Public Key Authenticated Encryption

**Node.js Source File:** code/sample1/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a public-key authenticated encryption scheme using nonces. With this scheme only public keys and the nonce should be shared.

### Sample 2: Secret Key Authenticated Encryption

**Node.js Source File:** code/sample2/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a secret-key authenticated encryption scheme using nonces. With this scheme only the nonce should be shared.

## Node.js Crypto w/ Compatible PHP encryption/decryption

Demonstrates a simple encryption/decryption example using Node.js's crypto module with a corresponding implementation in PHP.

## Running the Code Samples

-   Clone the repo.
-   Run **npm install** to install the code dependencies for Node.js.
-   Run each Node sample file with the node command, and the PHP sample file with the php command, e.g.

```sh
$ node libsodium/sample1/node/encrypt_decrypt.js
```

```sh
$ php crypto/php_crypto.php
```
