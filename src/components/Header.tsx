import { Navigation } from "@/components/Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { Header };
