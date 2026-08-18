import React from "react";
import Image from "next/image";
import logoImg from "../../public/assets/logo.png";
import { links } from "@/config/links";
import { LinkItem } from "@/components/LinkItem";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div className="logo-container">
          <Image 
            src={logoImg} 
            alt="Link Stack Logo" 
            fill 
            sizes="100px" 
            priority
            style={{ objectFit: "cover" }} 
          />
        </div>
        <h1 className="header-title">Link Stack</h1>
        <p className="header-description">
          Folge unseren Kanälen, um über weitere Vorträge, Workshops und Ausflüge der Google Developer Group University of Duisburg-Essen auf dem Laufenden zu bleiben!
        </p>
      </header>

      <section className="links-container">
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </section>
    </main>
  );
}
