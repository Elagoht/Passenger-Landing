key | value
--- | -----
title | Quick Start
description | Okay, you convinced me, how can I install and use the Passenger?
keywords | passenger, password manager, passphrase manager, passphrases, vault, self-hosted, cloud solution, open-source, secure storage
authors | Furkan Baytekin

====

# Passenger CLI

Passenger CLI is the Core of the Passenger. Every client uses the CLI internally and that also means you can use the Core as a ==standalone tool==. It is a ==cross-platform== tool written in ==C#== that can be used on ==Windows==, ==macOS==, ==Linux== and ==BSD==. It is a ==stateless== tool which means it does not store any data. It only processes the data and returns the result.

## Database Interaction

Passenger CLI creates the database file and interacts with it and get using in both local and cloud methods. But in this article, we will focus on the ==local database== since we are talking about a standalone tool.

## Installation

You can download the latest version of the Passenger CLI from the [downloads page](/downloads) or official [GitHub repository](https://github.com/Elagoht/Passenger-CLI). After downloading the binary, you can run start using it.

## Usage

Passenger CLI has an ==help command== that you can use to see the available commands and options. Also provides a detailed manual page which can be accessed by the `man` command.

Passenger needs a ==SECRET KEY== to interact with the database. CLI itself does not store the key, so you need to provide it via ==environment variables==. You can set the key by using the following command:

```bash
export SECRET_KEY="your-secret-key"
# or
source .env # if you have a .env file with the key
```

After setting the key, you can start using the Passenger CLI. But you need an account to create a database. Just after the registration, your database will be created and you can start using the Passenger CLI.

```bash
# Assuming you have the SECRET_KEY set
passenger register [username] [passphrase] # replace the placeholders with your data
```

And then, you must login to the CLI to manage your database. You can use the following command to login:

```bash
passenger login [username] [passphrase]
```

This command will create a ==JWT that valid for 10 minutes==. You will need this token to interact with the database. You can use the following command to get the token.

> Every command that requires authentication will take the token in **first argument**.

To use the JWT , you can copy and paste the token to the command (not best practice):

```bash
passenger fetchAll eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

As you can see, the token is too long to copy and paste. So, here is a better way to use the token (still not best practice):

```bash
passenger fetchAll $(passenger login [username] [passphrase])
# or
passenger fetchAll `passenger login [username] [passphrase]`
```

Here is the best practice to use the token:

```bash
export JWT=$(passenger login [username] [passphrase])
passenger fetchAll $JWT
```

> Rest of the commands are available on man page and --help command.

## Outputs of the Commands

Since Passenger CLI is created to be a core tool, it produces ==JSON== outputs and accepts JSON inputs. So you can consider learning `jq` to parse the outputs and inputs.

## Exit Codes

Passenger CLI ==can be translated to HTTP status codes==. As you may know, in shells, exit codes are 8-bit integers which means the highest value is **255**. But in HTTP status codes, the highest value is **599**. So, Passenger CLI uses the following exit codes:

| Status                   | Exit Code | Referring to HTTP |
|--------------------------|-----------|-------------------|
| Success                  | must be 0 | 200               |
| Created                  | must be 0 | 201               |
| See Other                | 33        | 303               |
| Bad Request              | 40        | 400               |
| Unauthorized             | 41        | 401               |
| Forbidden                | 43        | 403               |
| Not Found                | 44        | 404               |
| Not Acceptable           | 46        | 406               |
| Conflict                 | 49        | 409               |
| Unsupported Media Type   | 45        | 415               |
| Internal Server Error    | 50        | 500               |

## Conclusion

Passenger CLI is a powerful tool that can be used as a standalone tool. It is a stateless tool that does not store any data. It is a cross-platform tool that can be used on Windows, macOS, Linux and BSD. It is a core tool that is used by every client internally. It produces JSON outputs and accepts JSON inputs. It uses HTTP status codes as exit codes.

If you are a nerd who loves to use the terminal, Passenger CLI is the best tool for you. But you may still consider [Passenger Server](/docs/passenger-server) if you want to use the Passenger on multiple devices.
`;
