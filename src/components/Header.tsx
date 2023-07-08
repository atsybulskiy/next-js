import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/blog"}
          >
            Blog
          </Link>
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/about"}
          >
            About
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export { Header };
