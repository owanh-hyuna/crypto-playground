<?php
class Crypto
{
    private $key = 'MySecretKey12345';
    private $iv = '1234567890123456';
    private $algorithm = 'aes-128-cbc';

    public function encrypt($data)
    {
        return bin2hex(openssl_encrypt($data, $this->algorithm, $this->key, OPENSSL_RAW_DATA, $this->iv));
    }

    public function decrypt($data)
    {
        return openssl_decrypt(hex2bin($data), $this->algorithm, $this->key, OPENSSL_RAW_DATA, $this->iv);
    }
}

$crypto = new Crypto();
$text = 'This is a simple message, courtesy of José!';

// Encrypt...
$encrypted = $crypto->encrypt($text);
echo "Encrypted: {$encrypted}\n";

// Decrypt...
$decrypted = $crypto->decrypt($encrypted);
echo "Decrypted: $decrypted\n";
