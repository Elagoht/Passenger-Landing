import DocsPageButtons from "@/components/docs/DocsPageButtons"
import Image from "next/image"
import { FC } from "react"

const InstallationPage: FC = () => <article>
  <h1>How It Works?</h1>

  <p>
    Passenger is built on top of the <a href="https://github.com/Elagoht/Passenger-CLI">Passenger Core</a> which is a <mark>CLI tool</mark> that
    can be used as a standalone terminal tool. Not many people are comfortable
    with the terminal, so we offer lots of <mark>GUI</mark> tools to make it
    easier for you.
  </p>

  <p>
    Core CLI is a <mark>cross-platform</mark> tool that can be used on <mark>Windows
    </mark>, <mark>macOS</mark>, and <mark>Linux</mark>. It is written in <mark>C#
    </mark>. The core is the heart of the Passenger. It is responsible for all
    the encryption, decryption, and other operations. Nothing else can access
    your passphrases without the core.
  </p>

  <p>
    Here is a simple diagram of how Passenger built:
  </p>

  <figure>
    <Image
      src="/docs/how-it-works/project-structure.svg"
      alt="How It Works?"
      width={800}
      height={600}
      className="brightness-0 dark:brightness-100 mx-auto"
    />

    <figcaption className="text-center">Passenger Project Structure</figcaption>
  </figure>

  <p>
    As shown in the diagram, the both <mark>Web Server</mark> and <mark>Desktop App
    </mark> are using the <mark>Passenger Core</mark> to perform the operations.
  </p>

  <p>
    The Passenger Core is a <mark>POSIX</mark> compliant tool. It can be used in
    directly in the terminal as well. It already designed as a <mark>CLI tool</mark>.
    Desktop app and web server are just wrappers around the core.
  </p>

  <p>
    The Desktop App is built using <mark>Tauri</mark> which is powered by <mark>Rust
    </mark>. UI is built using <mark>React.js</mark>. Desktop app is distributed
    with Passenger Core in it. So, you don&apos;t need to install the core separately.
    You can directly download and use it.
  </p>

  <p>
    The Web Server is built using <mark>Flask</mark> which is powered by <mark>Python
    </mark>. The server is responsible for translating the <mark>HTTP</mark> requests
    to the <mark>system calls</mark> to the Passenger Core. Core will perform the
    operations and return the result to the server. The server will send the result
    as an HTTP Response to the client.
  </p>

  <p>
    There are various kinds of Web interfaces available for the Passenger. You can
    <mark>self-host</mark> a web interface to use it directly from your server. Or
    you can use the <mark>official web interface</mark> which is hosted by us.
  </p>

  <p>
    The <mark>official web interface</mark> is built using <mark>Next.js</mark>. It
    will ask you to enter your Passenger Server URL to let you connect to your server.
    Once you are connected, you can perform all the operations that you can do with
    the Desktop App. Don&apos;t worry, all network operations will be done on
    client-side that means your passphrases will never reach the server.
  </p>

  <p>
    This modern web interface may need a modern browser and a good internet connection.
    If you are using an old browser or a slow internet connection, you can switch to
    the <mark>legacy web interface</mark>. This version is built
    using <mark>Web-Components</mark> and a <mark>minimal amount of JavaScript</mark>.
    It will work on almost all browsers.
  </p>

  <p>
    Mobile apps are also available for the Passenger. Mobile side is powered by
    <mark>React Native</mark>. You can download the mobile app from the <mark>Play Store
    </mark> or <mark>App Store</mark>. Also available on <mark>F-Droid</mark> for
    open-source lovers.
  </p>

  <DocsPageButtons
    prev={{
      title: "Introduction",
      href: "/docs/"
    }}
    next={{
      title: "Quick Start",
      href: "/docs/quick-start"
    }}
  />
</article>

export default InstallationPage
