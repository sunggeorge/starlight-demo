"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { title } from "@/components/primitives";
import { Image } from "@heroui/react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <WavyBackground backgroundFill="white" className="max-w-4xl mx-auto pb-40 relative overflow-hidden h-[100%]">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
        {/* Clickable Logo */}
        <Link href="/new-homepage">
          <Image
            width={150}
            height={150}
            src="/starlight_logo.png"
            alt="Starlight Nails"
            object-fit="cover"
            className="cursor-pointer"
          />
        </Link>

        <div className="inline-block max-w-xl text-center justify-center">
          {user && (
            <section>
              <span className={title()}>Hello </span>
              <span className={title({ color: "violet" })}>{user.firstName} {user.lastName}</span>
              <br />
            </section>
          )}
          <br />

          {/* Clickable Welcome Text */}
          <Link href="/new-homepage">
            <span className={`${title()} cursor-pointer`}>
              Welcome to Starlight Nails Salon - Where Beauty Meets Perfection
            </span>
          </Link>

        </div>
      </section>
    </WavyBackground>
  );
}
