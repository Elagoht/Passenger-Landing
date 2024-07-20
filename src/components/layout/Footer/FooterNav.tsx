import { FC, ForwardRefExoticComponent, RefAttributes, createElement } from "react"
import FooterLink, { IFooterLinkProps } from "./FooterLink"
import { Icon, IconProps } from "@tabler/icons-react"

interface IFooterNavProps {
  links: IFooterLinkProps[]
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  ariaLabel: string
}

const FooterNav: FC<IFooterNavProps> = ({ ariaLabel, icon, links }) =>
  <nav
    aria-label={ariaLabel}
    className="text-center flex max-lg:flex-col items-center gap-1"
  >
    {createElement(icon)}
    <ul className="flex flex-wrap items-center justify-center gap-2">
      {links.map((link) => <li key={link.text}>
        <FooterLink {...link} />
      </li>
      )}
    </ul>
  </nav>


export default FooterNav
