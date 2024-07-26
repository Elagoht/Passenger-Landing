"use client"

import React, { FC } from "react"
import DocsNavBar from "./DocsNavBar"
import { usePathname } from "next/navigation"

const DocsAside: FC = () => {
  const pathname = usePathname()

  return <aside className="sticky top-16 max-w-80 w-full bg-gradient-to-b from-tuatara-100 dark:from-tuatara-950 p-4 border-x border-tuatara-50 dark:border-tuatara-900">
    <DocsNavBar
      title="Getting Started"
      pathname={pathname}
      links={[
        { title: "Introduction", href: "/docs" },
        { title: "How It Works", href: "/docs/how-it-works" },
        { title: "Security Implementations", href: "/docs/security-implementations" },
        { title: "Quick Start", href: "/docs/quick-start" },
        { title: "Passenger CLI", href: "/docs/passenger-cli" },
        { title: "Passenger Desktop", href: "/docs/passenger-desktop" },
        { title: "Passenger Server", href: "/docs/passenger-server" },
        { title: "Passenger Web", href: "/docs/passenger-web" },
        { title: "Passenger Web Lite", href: "/docs/passenger-web-lite" },
        { title: "Passenger Web Public", href: "/docs/passenger-web-public" },
        { title: "Passenger Mobile", href: "/docs/passenger-mobile" }
      ]}
    />

    <DocsNavBar
      title="API Reference"
      pathname={pathname}
      links={[
        { title: "API Introduction", href: "/docs/api" },
        { title: "Core Verbs", href: "/docs/core-verbs" },
        { title: "HTTP Translations", href: "/docs/http-translations" },
        { title: "Error Codes", href: "/docs/error-codes" }
      ]}
    />

    <DocsNavBar
      title="Community"
      pathname={pathname}
      links={[
        { title: "Contributing", href: "/docs/contributing" },
        { title: "Code of Conduct", href: "/docs/code-of-conduct" }
      ]}
    />
  </aside>
}

export default DocsAside
