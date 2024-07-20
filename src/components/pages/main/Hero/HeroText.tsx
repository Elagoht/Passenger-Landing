import { FC } from "react"

const HeroText: FC = () => <>
  <h1 className="mb-0">
    Your Secrets, In Your Vault
  </h1>

  <p>
    Store your passphrases in your own cloud, not someone else&apos;s.
    With our <mark>open-source</mark>, <mark>self-hosted</mark>, <mark>docker deployable</mark> solution,
    you can be sure that your secrets are safe.
    For non cloud owners, we also provide an <mark>offline desktop app</mark>.
  </p>

  <small>
    <strong>Note to Nerds:</strong> Passenger Core can be used standalone with its CLI.
  </small>
</>

export default HeroText
