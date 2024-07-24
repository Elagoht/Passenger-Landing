import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "@/design/globals.css"
import type { Metadata } from "next"
import { DM_Sans as DMSans } from "next/font/google"
import { FC, ReactNode } from "react"

const dmSans = DMSans({ subsets: ["latin"] })

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

      <Footer />
    </body>
  </html>

export default RoutLayout

export const metadata: Metadata = {
  title: {
    default: "Passenger: Passphrase Manager | Self-Host Solution for Passphrases",
    template: "%s | Passenger: Passphrase Manager",
  },
  description: "With Passenger, keep your passphrases safe in your own cloud, not someone else's.",
}
