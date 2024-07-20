import Header from "@/components/layout/Header"
import "@/design/globals.css"
import type { Metadata } from "next"
import { DM_Sans as DMSans } from "next/font/google"
import { FC, ReactNode } from "react"

const dmSans = DMSans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Passenger: Passphrase Manager",
  description: "Keep your passwords safe in your own cloud.",
}

interface IRoutLayoutProps {
  readonly children: ReactNode
}

const RoutLayout: FC<IRoutLayoutProps> = ({
  children
}) =>
  <html lang="en">
    <body className={dmSans.className}>
      <Header />

      {children}
    </body>
  </html>


export default RoutLayout
