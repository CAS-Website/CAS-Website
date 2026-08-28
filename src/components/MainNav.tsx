import { ChevronDown, Menu } from 'lucide-react';

export function MainNav() {
  const navLinks = [
    { label: 'Home', active: true },
    { label: 'Programmes', dropdown: true },
    { label: 'Research & Innovation', dropdown: true },
    { label: 'Digital Services', dropdown: true },
    { label: 'Library', dropdown: false },
    { label: 'Donations', dropdown: false },
    { label: 'News & Events', dropdown: false },
    { label: 'Contact Us', dropdown: false },
  ];

  return (
    <nav className="bg-white px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-12 xl:space-x-16">
        <div className="flex items-center cursor-pointer -my-2">
          <svg 
          viewBox="0 0 260 145" 
          className="h-[4.5rem] w-auto" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circles */}
          <circle cx="65" cy="50" r="48" fill="#11498b" />
          <circle cx="130" cy="50" r="48" fill="#168a42" />
          <circle cx="195" cy="50" r="48" fill="#f16f21" />

          {/* Letters */}
          <g fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="72" textAnchor="middle">
            <text x="63" y="76">C</text>
            <text x="130" y="76">A</text>
            <text x="195" y="76">S</text>
          </g>

          {/* Keyhole overlay for 'A' */}
          <g fill="#168a42">
            <circle cx="130" cy="54" r="7" />
            <path d="M 123 76 L 137 76 L 132 54 L 128 54 Z" />
          </g>

          {/* Text Below */}
          <g fill="#555555" fontFamily="'Arial Narrow', Arial, sans-serif" textAnchor="middle" fontWeight="600">
            <text x="132" y="118" fontSize="18" letterSpacing="11">CENTRE FOR</text>
            <text x="132" y="138" fontSize="20" letterSpacing="1.5">ACCOUNTING STUDIES</text>
          </g>
        </svg>
        </div>

        <div className="hidden xl:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className={`flex items-center transition-colors hover:text-[#0a3a70] ${
                link.active ? 'text-[#0a3a70]' : ''
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
            </a>
          ))}
        </div>
      </div>
      
      <button className="xl:hidden text-gray-700">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
