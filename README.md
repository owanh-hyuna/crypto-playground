# libsodium-playground

My playground repo for writing sample code that uses the Node.js and PHP ports of the libsodium encryption library. Following are details of each of the code samples included.

## Sample 1: Public Key Authenticated Encryption

**Node.js Source File:** code/sample1/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a public-key authenticated encryption scheme using nonces. With this scheme only public keys and the nonce should be shared.

## Sample 2: Secret Key Authenticated Encryption

**Node.js Source File:** code/sample2/node/encrypt_decrypt.js

**Purpose**: Encrypt and subsequently decrypt a message using a secret-key authenticated encryption scheme using nonces. With this scheme only the nonce should be shared.

## Running the Code Samples (Node.js versions)

-   Clone the repo.
-   Run **npm install** to install the code dependencies.
-   Run each sample file with the node command, e.g.

    ```sh
    $ node code/sample1/node/encrypt_decrypt.js
    ```
