key | value
--- | -----
title | How It Works
description | How Passenger: Passphrase Manager works behind the scenes? Here is how.
keywords | passenger, password manager, passphrase manager, passphrases, vault, self-hosted, cloud solution, open-source, secure storage
authors | Furkan Baytekin

====

# How It Works?

Passenger is built on top of the [Passenger Core](https://github.com/Elagoht/Passenger-CLI) which is a ==CLI tool== that can be used as a standalone terminal tool. Not many people are comfortable with the terminal, so we offer lots of ==GUI== tools to make it easier for you.

Core CLI is a ==cross-platform== tool that can be used on ==Windows==, ==macOS==, and ==Linux==. It is written in ==C#==. The core is the heart of the Passenger. It is responsible for all the encryption, decryption, and other operations. Nothing else can access your passphrases without the core.

Here is a simple diagram of how Passenger built:

<figure>
  <img
    src="/docs/how-it-works/project-structure.svg"
    alt="Venn Schema of Project Structure"
    width=800
    height=600
    className="brightness-0 dark:brightness-100 mx-auto"
  />

  <figcaption className="text-center">Passenger Project Structure</figcaption>
</figure>

As shown in the diagram, both ==Web Server== and ==Desktop App== are using the ==Passenger Core== to perform the operations.

The Passenger Core is a ==POSIX== compliant tool. It can be used directly in the terminal as well. It is already designed as a ==CLI tool==. The Desktop app and web server are just wrappers around the core.

The Desktop App is built using ==Tauri== which is powered by ==Rust==. UI is built using ==React.js==. The Desktop app is distributed with Passenger Core in it. So, you don't need to install the core separately. You can directly download and use it.

The Web Server is built using ==Flask== which is powered by ==Python==. The server is responsible for translating the ==HTTP== requests to the ==system calls== to the Passenger Core. Core will perform the operations and return the result to the server. The server will send the result as an HTTP Response to the client.

There are various kinds of Web interfaces available for the Passenger. You can ==self-host== a web interface to use it directly from your server. Or you can use the ==official web interface== which is hosted by us.

The ==official web interface== is built using ==Next.js==. It will ask you to enter your Passenger Server URL to let you connect to your server. Once you are connected, you can perform all the operations that you can do with the Desktop App. Don't worry, all network operations will be done on client-side which means your passphrases will never reach the server.

This modern web interface may need a modern browser and a good internet connection. If you are using an old browser or a slow internet connection, you can switch to the ==legacy web interface==. This version is built using ==Web-Components== and a ==minimal amount of JavaScript==. It will work on almost all browsers.

Mobile apps are also available for the Passenger. The mobile side is powered by ==React Native==. You can download the mobile app from the ==Play Store== or ==App Store==. Also available on ==F-Droid== for open-source lovers.
