key | value
--- | -----
title | Quick Start
description | Okay, you convinced me, how can I install and use the Passenger?
keywords | passenger, password manager, passphrase manager, passphrases, vault, self-hosted, cloud solution, open-source, secure storage
authors | Furkan Baytekin

====

# Quick Start

**TL; DR:**

The easiest way to use the Passenger is downloading [Passenger Desktop](/docs/passenger-desktop). But if you want to use it on multiple devices, you should consider using the Passenger Server.

## Installation

First, you need to decide which method to use Passenger. Here are the options:

- **Local Database**: Easy for single - device usage. You can use the Passenger without any additional setup. But, you need to backup your data manually. While using on multiple devices, you need to sync the database file manually. *Merging database will not be possible unless you export and import the database manually.*
- **Cloud Database**: You can self - host the Passenger on your server. This way, you can access your data from anywhere and no merge conflicts will occur. You can also use the Passenger on multiple devices without any additional setup. *But, you must ensure to provide a secure connection to your server.*

## Clients and Platforms

For these two methods, you can select the appropriate client for your platform. Currently, we have the following clients:

### For Local Database

Client | Platform | Installation
------ | -------- | ------------
Passenger CLI | Windows, macOS, Linux, BSD | [Installation Guide](/docs/passenger-cli)
Passenger Desktop | Windows, macOS, Linux | [Installation Guide](/docs/passenger-desktop)

### For Cloud Database

For the cloud database, you need to install the Passenger Server on your server. Then, you can choose an appropriate client for your platform.

Client | Platform | Installation
------ | -------- | ------------
Passenger Server | Windows, macOS, Linux, BSD | [Installation Guide](/docs/passenger-derver)
Passenger Web | Any modern web browser | [Installation Guide](/docs/passenger-web)
Passenger Web Lite | Any browser with JavaScript support | [Installation Guide](/docs/passenger-web-lite)
Passenger Web Public | Any modern web browser | [Installation Guide](/docs/passenger-web-public)
Passenger Mobile | Android, iOS | [Installation Guide](/docs/passenger-mobile)
