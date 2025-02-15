import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function NewHomepage() {
  return (
    <div className="min-h-screen bg-[#FAF3EB]">
      {/* HeroUI Navbar , but going to remove the following block*/}
      <Navbar />    

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-semibold text-gray-800">Skilled Nail Art</h1>
        <p className="text-lg text-gray-600 mt-4">5K+ Happy Customers | 8+ Years of Experience</p>
        <Link href="/booking">
          <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-lg rounded-lg">
            Book Appointment Now
          </Button>
        </Link>
      </section>

      {/* Services Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        {[
          { name: "Nail Art", img: "/nail-art.jpg" },
          { name: "Manicure", img: "/manicure.jpg" },
          { name: "Pedicure", img: "/pedicure.jpg" },
        ].map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src={service.img} alt={service.name} className="h-40 w-full object-cover rounded-md" />
            <h3 className="text-xl font-medium text-gray-800 mt-4">{service.name}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Starlight Nails. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
