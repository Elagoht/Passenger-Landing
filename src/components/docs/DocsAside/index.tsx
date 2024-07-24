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
        { title: "Security of Secrets", href: "/docs/security-of-secrets" },
        { title: "Productions", href: "/docs/productions" },
        { title: "Core CLI", href: "/docs/cli-tool" },
        { title: "Desktop App", href: "/docs/desktop-app" },
        { title: "Deploy Web Server", href: "/docs/deploy-web-server" },
        { title: "Deploy Web UI", href: "/docs/deploy-web-ui" },
        { title: "Mobile Apps", href: "/docs/mobile-apps" }
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
