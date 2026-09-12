import { Hero } from "@/components/sections/hero";
import { ChainNavStrip } from "@/components/sections/chain-nav-strip";
import { Misconnected } from "@/components/sections/misconnected";
import { AttirerPipeline } from "@/components/sections/attirer-pipeline";
import { ConverserBusiness } from "@/components/sections/converser-business";
import { ConnecterTech } from "@/components/sections/connecter-tech";
import { GrandirSolutions } from "@/components/sections/grandir-solutions";
import { CasUsage } from "@/components/sections/cas-usage";
import { Vision } from "@/components/sections/vision";
import { CtaFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <ChainNavStrip />
      <Misconnected />
      <AttirerPipeline />
      <ConverserBusiness />
      <ConnecterTech />
      <GrandirSolutions />
      <CasUsage />
      <Vision />
      <CtaFinal />
    </>
  );
}
