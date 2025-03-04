import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenus, setActiveSubmenus] = useState<string[]>([]);

  const navItems = [
    { name: "Solutions", submenu: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Why OrangeHRM", submenu: ["Reason 1", "Reason 2", "Reason 3"] },
    { name: "Resources", submenu: ["Doc 1", "Doc 2", "Doc 3"] },
    { name: "Company", submenu: ["About", "Team", "Careers"] },
    { name: "Pricing", submenu: ["Plan 1", "Plan 2", "Plan 3"] },
  ];

  const handleSubmenuHover = (path: string[]) => {
    setActiveSubmenus(path);
  };

  return (
    <nav className="fixed top-2 left-4 right-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="mr-8"
          />
          
          {/* Navigation Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setActiveSubmenus([]);
                }}
              >
                <button className="text-gray-700 hover:text-orange-500 transition-colors">
                  {item.name}
                </button>

                {/* Dropdown Menu */}
                {activeMenu === item.name && (
                  <div className="absolute top-full left-0 flex rounded-b-lg overflow-visible shadow-lg">
                    {/* Main Dropdown */}
                    <div className="bg-white border border-gray-200 w-48">
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem}
                          className="relative group"
                          onMouseEnter={() => handleSubmenuHover([subItem])}
                          onMouseLeave={() => handleSubmenuHover([])}
                        >
                          <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center">
                            {subItem}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>

                          {/* Nested Submenus */}
                          {activeSubmenus[0] === subItem && (
                            <div className="absolute left-full top-0 bottom-0 w-48 bg-white border-t border-b border-r border-gray-200">
                              {["Sub Item 1", "Sub Item 2", "Sub Item 3"].map((subSubItem) => (
                                <div
                                  key={subSubItem}
                                  className="relative group"
                                  onMouseEnter={() => handleSubmenuHover([subItem, subSubItem])}
                                  onMouseLeave={() => handleSubmenuHover([subItem])}
                                >
                                  <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center">
                                    {subSubItem}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>

                                  {/* Second Level Submenu */}
                                  {activeSubmenus[1] === subSubItem && (
                                    <div className="absolute left-full top-0 bottom-0 w-48 bg-white border-t border-b border-r border-gray-200 rounded-r-lg">
                                      {["Sub Sub Item 1", "Sub Sub Item 2", "Sub Sub Item 3"].map((subSubSubItem) => (
                                        <button
                                          key={subSubSubItem}
                                          className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                          {subSubSubItem}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Additional Submenu Columns */}
                    {activeSubmenus.map((_, index) => (
                      <div
                        key={index}
                        className="h-full bg-white border-t border-b border-r border-gray-200 w-48"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <select className="text-gray-700 bg-transparent border-none focus:outline-none">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>

          <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            Contact Sales
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Book a Free Demo
          </button>
        </div>
      </div>
    </nav>
  );
}