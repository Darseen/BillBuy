import { LINKS } from "@/lib/data";
import Link from "next/link";

export default function SubNav() {
  return (
    <nav className="flex flex-col justify-center w-full h-10 shadow-md bg-gray-200 dark:bg-neutral mb-4">
      <ul className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm underline cursor-pointer font-semibold"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
