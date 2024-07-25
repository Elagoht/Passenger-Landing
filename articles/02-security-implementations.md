key | value
--- | -----
title | Security Implementations
description | How Passenger provide security of my passphrases? Is it really safe to use?
keywords | passenger, password manager, passphrase manager, passphrases, vault, self-hosted, cloud solution, open-source, secure storage
authors | Furkan Baytekin

====

# Security Implementations

Passenger cares about your security. It is designed to be secure and safe. Here are a few security implementations that Passenger has:

## ==Encrypted Database== with AES GCM

Passenger uses an encrypted database to store your passphrases. It uses AES means ==Advanced Encryption Standard== with GCM means ==Galois/Counter Mode== for encryption.

AES is a symmetric encryption algorithm. That means the same key is used for both encryption and decryption. So you need a ==secret key==.

### How Secret Key is Stored?

Well, Passenger Core CLI does not store any secret key. Core works totally stateless. It means it does not store any data. It only processes the data and returns the result. So, where is the secret key stored?

While using the passenger directly, from the terminal, you need to provide the secret key as an ==environment variable==. For the CLI, you need to provide the secret key yourself. It is not stored anywhere. You may consider using an ==.env== file to store the secret key.

> Remember, it is not recommended to store the secret key in the .env file. It is just for demonstration purposes.

**Example:**

```sh
SECRET_KEY=your_secret_key_here passenger login username master_passphrase
# or
export SECRET_KEY=your_secret_key_here
passenger login username master_passphrase
# or
source /path/to/.env # assuming .env file has SECRET_KEY
passenger login username master_passphrase
```

Passenger Desktop and Server uses the core CLI internally. But they provide the secret key automatically. Server can be configured to use the secret key while running docker container. Desktop app saves the secret key from ==keychain== or ==credential manager== of the operating system.

## Session Management

Passenger uses JWT means ==JSON Web Tokens== for session management. JWT is a standard for token generation and verification. It is widely used in the industry.

JWT is generated by Core and it is valid for ==10 minutes==. After that, you need to generate a new token. JWT is used to authenticate the user. It is sent with every request to the server. Server verifies the token and then processes the request.

**Example use of JWT:**

```sh
export SECRET_KEY=your_secret_key_here
JWT=$(passenger login username master_passphrase)
passenger fetchAll $JWT
# or
passenger fetchAll `passenger login username master_passphrase`
# or
passenger fetchAll $(passenger login username master_passphrase)
```

## Secure Communication

Since this is a self-hosted application, you need to take care of secure communication yourself. Passenger, as expected, cannot do anything about it. ==You MUST create an SSL certificate== for your domain to provide secure communication over ==HTTPS==.

> This is not related to Passenger Desktop client. Desktop client communicates with the CLI over ==system calls==, not over the network. So, there is no need for SSL certificate for Desktop client.

## Secure Master Passphrase

Master passphrase is the passphrase that is used to generate JWT to authenticate. **It is the only passphrase you need to remember.** It is used to generate other passphrases. So, it is very important to keep it secure. Do not forget it. If you forget it, you will lose access to all your passphrases.

Master passphrase have to be strong. You need to provide a variety of characters and at least 12 characters long.

## Extra Step of Encryption

By default, Passenger uses a string reverse algorithm to ==encrypt the database second time== (First time is with AES GCM). This provides an extra step of encryption. Yes, it is not a strong encryption algorithm. But the enjoyable part is this: ==You can use your own encryption algorithm==.

Passenger is an open-source project. You can modify the source code to ==create your own, unique Passenger version==. Just modify the [EnDeCoder.cs](https://github.com/Elagoht/Passenger-CLI/blob/main/src/Utilities/EnDeCoder.cs) file. Then compile it and if necessary, implement it to the web server or desktop client.

> You must be sure that your encryption algorithm will not f*ck up the database.

> You also need some knowledge of C# programming language.

## Verified Builds

Passenger is never released via manually built binaries. All the binaries are built using ==GitHub Actions==. So, you can be sure that the binary you are downloading is from the official source and not tampered. You can also build the binaries yourself if you want.

## Conclusion

Passenger is designed to be secure. It uses AES GCM for encryption, JWT for session management, and a second algorithm for an extra step of encryption. You can also use your own encryption algorithm. Passenger is open-source, so you can modify the source code to create your own version of Passenger.