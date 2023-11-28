"use client";

import { useEffect } from "react";
import { useActiveCatagoryContext } from "@/context/activeCatagoryContext";
import { LINKS } from "@/lib/data";
import Link from "next/link";

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
      className="flex flex-col justify-center items-center w-full h-10 shadow-md bg-gray-200 dark:bg-neutral mb-4 z-50"
    >
      <div role="tablist" className="tabs tabs-bordered flex items-center ">
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
