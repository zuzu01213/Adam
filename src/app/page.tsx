import { CardContainer, CardBody, CardItem } from "@/components/global/3dCard";
import { HeroParallax } from "@/components/global/ConnectParallax";
import { ContainerScroll } from "@/components/global/ContainerScrollAnimation";
import { InfiniteMovingCards } from "@/components/global/InfiniteMovingCards";
import { LampComponent } from "@/components/global/lamp";
import { Navbar } from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";

import { CheckIcon } from 'lucide-react'
import { pricingPlans } from "../lib/constants";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  
      !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full 
                  border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex 
                  items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 
                  to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r 
                  group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b 
                from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[16rem] mt-[-98px]"
        items={clients}
        direction="right"
        speed="slow"
      />
       <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="md:mt-[-350px] mt-[-480px]">
        <LampComponent />
        <div className="flex flex-col items-center justify-center md:flex-row gap-8 mt-[-300px]">
          {pricingPlans.map((plan, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody 
                className={`bg-gray-50 relative group/card dark:bg-black dark:border-gray-700 
                border-gray-300 w-full md:w-[350px] h-auto rounded-xl p-6 border ${plan.name === "Pro Plan" ? "border-gradient" : ""}`}
              >
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {plan.name}
                  <h2 className="text-6xl">{plan.price}</h2>
                </CardItem>

                <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {plan.description}
                  <ul className="my-4 flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckIcon />{feature}
                      </li>
                    ))}
                  </ul>
                </CardItem>

                <div className="flex justify-between items-center mt-8">
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black 
                  dark:bg-white dark:text-black text-white text-xs font-bold">
                    Get Started Now
                  </CardItem>
                </div>

              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </main>
          
  );
}
