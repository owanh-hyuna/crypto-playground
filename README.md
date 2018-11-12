# crypto-playground

My Node.js/PHP playground repo for code samples that demonstrate use of different encryption libraries. Following are details of each of the code samples included.

## Libsodium

### Sample 1: Public Key Authenticated Encryption

**Node.js Source File:** code/sample1/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a public-key authenticated encryption scheme using nonces. With this scheme only public keys and the nonce should be shared.

### Sample 2: Secret Key Authenticated Encryption

**Node.js Source File:** code/sample2/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a secret-key authenticated encryption scheme using nonces. With this scheme only the nonce should be shared.

## Node.js Crypto

Demonstrates a simple encryption/decryption example using Node.js's crypto module.

## Running the Code Samples (Node.js versions)

-   Clone the repo.
-   Run **npm install** to install the code dependencies.
-   Run each sample file with the node command, e.g.

```sh
$ node libsodium/sample1/node/encrypt_decrypt.js
```
