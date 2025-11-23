import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Banner from "@/components/Banner/Banner";
import Overview from "@/components/Overview/Overview";
import Categories from "@/components/Categories/Categories";
import Timeline from "@/components/Timeline/Timeline";
import Accordion_comp from "@/components/Accordion/Accordion";
import Gallery from "@/components/Gallary/Gallery";
import Contact from "@/components/Contact/Contact";
import IntroVideo from "@/components/IntroVideo/IntroVideo";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Statistics from "@/components/Statistics/Statistics";
import ThingsToSeeAndDo from "@/components/ThingsToSeeAndDo/ThingsToSeeAndDo";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <About />
      <ThingsToSeeAndDo />
      <Gallery />
      <Statistics />
      <Banner />
      <Contact />
    </section>
  );
}
