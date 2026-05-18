import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("/");

  const navItems = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "About", url: "/about" },
    { id: 3, label: "Projects", url: "/projects" },
    { id: 4, label: "Contact", url: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b bg-slate-950/80 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2">
          <span
            className="text-xl font-bold tracking-tight bg-gradient-to-r 
          from-slate-400 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:brightness-110"
          >
            XimenT
          </span>
        </a>

        <nav className="flex items-center space-x-6 sm:space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.url;
            return (
              <a
                key={item.id}
                href={item.url}
                onClick={() => setActiveSection(item.url)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 group ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 origin-center ${
                    isActive
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
