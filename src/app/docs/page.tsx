import DocsPageButtons from "@/components/docs/DocsPageButtons"
import React from "react"

const DocsMainPage = () => <article>
  <h1>Introduction</h1>

  <p>
    Passenger: Passphrase Manager is a secure and open-source
    password manager that allows you to store your passphrases
    and secrets in your own cloud storage or desktop computer.
  </p>

  <p>
    Designed to be simple and easy to use. Provides a simple
    and intuitive user interface. It is a cross-platform
    application so you can use it on your <mark>Linux
    </mark>, <mark>BSD</mark>, <mark>Windows</mark>, <mark>Mac
    </mark>, <mark>Android</mark>, and <mark>iOS</mark> devices.
    Also available as a <mark>web application</mark>, so you
    can access your passphrases from any device with a modern
    web browser.
  </p>

  <h2>Why Use Passenger?</h2>

  <p>
    There are many password managers available, so why use
    Passenger? Here are a few reasons:
  </p>

  <em>Built by a nerd for nerds.</em>

  <ul>
    <li>
      <strong>Open Source:</strong> You can verify the source
      code and build the application yourself. You can also
      contribute to the project.
    </li>

    <li>
      <strong>Self-Hosted:</strong> You can store your
      passphrases <mark>in your own cloud</mark> storage or
      desktop computer.
    </li>

    <li>
      <strong>Cloud is Optional:</strong> You can use Passenger
      without cloud storage. You can use it as a <mark>desktop app
      </mark>. So you may consider using a version control system
      to manage your encrypted passphrases. You can use <mark>Git
      </mark> or <mark>Mercurial</mark>.
    </li>

    <li>
      <strong>Forces You to Be Secure:</strong> Passenger does
      not allow you to use weak passphrases. You cannot use a
      passphrase that is in the <mark>RockYou.txt</mark> file.
      Yes, your passphrase is checked against the
      <mark>brute-force dictionary lists</mark>. This means you
      are safe against <mark>14 million passphrases</mark> in
      the list.
    </li>

    <li>
      <strong>Self Employed Detective:</strong> Passenger is
      also a detective.

      <ul>
        <li>
          Checks for <mark>duplicate passphrases</mark>.
        </li>

        <li>
          Checks passphrases for <mark>similar with username
          </mark> or email address.
        </li>

        <li>
          Checks <mark>old passphrases</mark> that have not been
          changed for over a year.
        </li>

        <li>
          Checks <mark>weak passphrases</mark>. 8 characters is
          the minimum acceptable length, but they are still
          considered weak.
        </li>

        <li>
          Keeps you up to date with the <mark>latest data breaches
          </mark>.
        </li>

        <li>
          Lets you know if any of your passphrases are in
          the <mark>leaked databases</mark>.
        </li>
      </ul>
    </li>
  </ul>

  <DocsPageButtons next={{
    title: "How It Works",
    href: "/docs/how-it-works"
  }} />
</article>

export default DocsMainPage
