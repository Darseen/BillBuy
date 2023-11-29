"use client";

import { useEffect } from "react";
import { useActiveCatagoryContext } from "@/context/activeCatagoryContext";
import { LINKS } from "@/lib/data";
import Link from "next/link";
import { Catagories } from "@/@types/types";

export default function SubNav() {
  const { activeCatagory, setActiveCatagory } = useActiveCatagoryContext();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("stickyNav");

      if (nav) {
        const sticky = nav.offsetTop;

        if (window.scrollY > sticky) {
          nav.classList.add("fixed", "top-0");
        } else {
          nav.classList.remove("fixed", "top-0");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="stickyNav"
      className="z-50 mb-4 flex h-8 w-full flex-col items-center justify-center bg-gray-200 shadow-md dark:bg-neutral sm:h-10"
    >
      <div
        role="tablist"
        className="tabs tabs-bordered tabs-sm flex items-center sm:tabs-md"
      >
        {LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            role="tab"
            className={`tab ${
              activeCatagory === link.catagory && "tab-active"
            } transition-all duration-300`}
            onClick={() => setActiveCatagory(link.catagory)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
