import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Logo: FC = () => {
  return <Link href="/">
    <figure className="flex items-center gap-4">
      <Image
        alt="Passenger Logo"
        height={48}
        src="/assets/logo.png"
        width={48}
      />

      <div className="flex flex-col">
        <strong className="text-2xl font-bold">Passenger</strong>

        <small className="text-xs text-center text-tuatara-500">
          Passphrase Manager
        </small>
      </div>
    </figure>
  </Link>
}

export default Logo