import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4 shadow bg-orange-600">
        <div className="text-white mr-6">
          <h1 className="text-2xl font-display leading-normal">
            Effective Javascript
          </h1>
          <h4 className="text-sm font-display leading-normal">
            Fritz Johnson's Javascript Blog
          </h4>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-orange-300 hover:text-white hover:border-white"
            onClick={() => setExpanded(!expanded)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            !expanded && "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/blog" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 text-base font-display hover:text-white mr-4">
                Blog
              </a>
            </Link>
            <a
              href="https://github.com/ScraperDev"
              className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 text-base font-display hover:text-white mr-4"
            >
              Fritz's Github
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
