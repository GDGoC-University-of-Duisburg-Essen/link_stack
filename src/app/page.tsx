import React from "react";
import Image from "next/image";
import { links } from "@/config/links";
import { LinkItem } from "@/components/LinkItem";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div className="logo-container">
          <Image 
            src="/assets/logo.png" 
            alt="Link Stack Logo" 
            fill 
            sizes="100px" 
            priority
            style={{ objectFit: "cover" }} 
          />
        </div>
        <h1 className="header-title">Link Stack</h1>
      </header>

      <section className="links-container">
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </section>
    </main>
  );
}
