import { IconBrandGithub, IconScript } from "@tabler/icons-react"
import { FC } from "react"
import FooterNav from "./FooterNav"

const links = [
  { text: "License", href: "/license" },
  { text: "Code of Conduct", href: "/code-of-conduct" },
  { text: "Roadmap", href: "https://github.com/users/Elagoht/projects/3", external: true },
  { text: "Security Policy", href: "/security-policy" },
]

const githubLinks = [
  { text: "Core CLI", href: "https://github.com/Elagoht/Passenger-CLI" },
  { text: "Desktop", href: "https://github.com/Elagoht/Passenger-Desktop" },
  { text: "Server", href: "https://github.com/Elagoht/Passenger-Server" },
  { text: "Web App", href: "https://github.com/Elagoht/Passenger-Web" },
  { text: "Mobile Apps", href: "https://github.com/Elagoht/Passenger-Mobile" },
]


const Footer: FC = () => <footer
  className="backdrop-blur-sm p-4 lg:px-8 bg-tuatara-50 dark:bg-tuatara-1000 bg-opacity-90 dark:bg-opacity-90 flex max-lg:flex-col max-w-screen-3xl items-center justify-between gap-4 border-t border-tuatara-100 dark:border-tuatara-900"
>
  <FooterNav
    ariaLabel="Document Links"
    links={links}
    icon={IconScript}
  />

  <FooterNav
    ariaLabel="Github Links"
    links={githubLinks}
    icon={IconBrandGithub}
  />
</footer>

export default Footer