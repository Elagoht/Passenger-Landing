import { FC } from "react"
import Logo from "./Logo"
import NavBar from "./Navbar"

const Header: FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm p-2 lg:px-8 bg-tuatara-50 dark:bg-tuatara-1000 bg-opacity-90 dark:bg-opacity-90 border-b border-tuatara-100 dark:border-tuatara-900">
    <div className="max-w-screen-3xl flex justify-between items-center mx-auto">
      <Logo />

      <NavBar />
    </div>
  </header>
}

export default Header
