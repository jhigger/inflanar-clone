/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";
import Section3 from "~/components/Section3";
import Section4 from "~/components/Section4";
import Section5 from "~/components/Section5";
import Section6 from "~/components/Section6";
import Section7 from "~/components/Section7";
import Section8 from "~/components/Section8";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inflanar Clone</title>
        <meta name="description" content="Made by Jhigger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col text-secondary">
        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
      </main>
    </>
  );
}
