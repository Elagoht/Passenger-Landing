import { FC } from "react"
import { CTAButton } from "./CTAButton"
import HeroSlider from "./HeroSlider"
import HeroText from "./HeroText"

const Hero: FC = () =>
  <main className="md:px-24 flex lg:gap-24 p-4 items-center justify-center max-w-screen-3xl mx-auto max-lg:flex-col">
    <article className="flex flex-col my-24 basis-2/5 prose dark:prose-invert prose-xl">
      <HeroText />

      <CTAButton />
    </article>

    <figure className="basis-3/5">
      <HeroSlider />
    </figure>
  </main>

export default Hero
