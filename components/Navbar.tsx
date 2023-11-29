import Image from "next/image";
import defaultProfilePic from "@/public/images/profilePic.png";
import logo from "@/public/images/billBuyLogo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar flex-row justify-between border-b border-gray-300 bg-base-100 shadow-md dark:border-gray-600 dark:bg-neutral sm:px-7">
      <div>
        <Link
          href="/"
          className="flex flex-row items-center transition-all active:scale-105 lg:hover:scale-105"
        >
          <Image
            src={logo}
            alt="BillBuy logo"
            quality={95}
            width={40}
            height={40}
            className="lg:ml-2"
          />

          <span className="gradient-bg">BillBuy</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge indicator-item badge-sm">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <Image alt="profile image" src={defaultProfilePic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
