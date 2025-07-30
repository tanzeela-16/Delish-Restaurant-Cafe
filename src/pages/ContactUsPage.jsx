import React from "react";
import Header from "../components/Header";
import Bottom from '../components/Bottom';
import OfficeInfo from '../sections/OfficeInfo';
import ContactForm from '../sections/ContactForm';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 bg-[#F1F1F1] text-[#111]">
        {/* Hero Section */}
        <section className="bg-[#2E2E2E] text-white text-center py-20">
          <h1 className="text-4xl font-semibold">CONTACT US</h1>
          <p className="text-sm mt-2 opacity-80">HOME / CONTACT US</p>
          <h2 className="mt-10 text-6xl font-bold tracking-wide opacity-5 select-none">
            GET IN TOUCH
          </h2>
        </section>

        {/* Office Info Section */}
        <section className="py-12 flex justify-center px-4">
          <OfficeInfo />
        </section>

        {/* Contact Form Section */}
        <section className="pb-20 flex justify-center px-4">
          <ContactForm />
        </section>
      </main>

    </div>
  );
}