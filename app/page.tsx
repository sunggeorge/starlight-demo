"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { title, subtitle} from "@/components/primitives";
import {Image} from "@heroui/react";
import { useUser } from "@clerk/nextjs";
export default function Home() {
  const { user } = useUser();
  return (
    <WavyBackground backgroundFill="white" className="max-w-4xl mx-auto pb-40 relative overflow-hidden h-[100%]"> 
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
               
              <Image
              width={150}
              height={150}  
              src="/starlight_logo.png"
              alt="Starlight Nails"
              object-fit="cover"
              />      
              
      <div className="inline-block max-w-xl text-center justify-center">

        {user && (
          <section>
            <span className={title()}>Hello </span>
            <span className={title({ color: "violet" })}>{user.firstName} {user.lastName}</span>
            <br />
          </section>
        )}
        <br />
        <span className={title()}>
          Welcome to Starlight Nails Salon - Where Beauty Meets Perfection
        </span>
      </div>
    
    </section>
    </WavyBackground>
  );
}
