import { 
  User, Users, GraduationCap, Briefcase, Info, Handshake, Building, 
  Search, Lock, ChevronRight 
} from 'lucide-react';

export function TopNav() {
  const navItems = [
    { label: 'About Us', icon: Info },
    { label: 'Students', icon: User },
    { label: 'Staff', icon: Users },
    { 
      label: 'Alumni', 
      icon: GraduationCap,
      dropdownColor: 'bg-[#168a42]',
      dropdown: [
        { 
          label: 'Alumni Network',
          subMenu: [
            'Alumni Registration',
            'Alumni Association'
          ]
        },
        { label: 'Success Stories' },
        { label: 'Events' },
        { label: 'Give Back to CAS' },
        { label: 'Mentorship' }
      ]
    },
    { 
      label: 'Partners', 
      icon: Handshake,
      dropdown: [
        { label: 'Affiliate Partners' },
        { label: 'Corporate Partners' },
        { label: 'Strategic Partners' },
        { 
          label: 'Partner with us',
          subMenu: [
            'Sponsor',
            'Recruitment',
            'Internships',
            'Consultancy Services',
            'Employer Portal'
          ]
        }
      ]
    },
    { label: 'BDU', icon: Building },
    { 
      label: 'Careers & Opportunities', 
      icon: Briefcase,
      dropdown: [
        { label: 'Vacancies' },
        { label: 'Tenders' },
        { label: 'CAS CV Database' },
        { label: 'CAS Supplier Database' }
      ]
    },
  ];

  return (
    <div className="relative z-[60] bg-gray-100 py-2 px-6 text-sm flex justify-between items-center text-gray-700 hidden lg:flex">
      <div className="flex space-x-6">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <a href="#" className="flex items-center hover:text-[#0a3a70] transition-colors py-1">
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </a>
            {item.dropdown && (
              <div className={`absolute left-0 top-full mt-0 w-56 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 ${item.dropdownColor || 'bg-[#f16f21]'}`}>
                {item.dropdown.map((sub, idx) => (
                  <div key={idx} className="relative group/sub">
                    <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-black/10 transition-colors w-full text-left">
                      {sub.label}
                      {sub.subMenu && <ChevronRight className="w-4 h-4" />}
                    </a>
                    {sub.subMenu && (
                      <div className={`absolute left-full top-0 ml-0 w-56 shadow-lg rounded-md py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-50 border-l border-white/20 ${item.dropdownColor || 'bg-[#f16f21]'}`}>
                        {sub.subMenu.map((nested, nIdx) => (
                          <a key={nIdx} href="#" className="block px-4 py-2 text-sm text-white hover:bg-black/10 transition-colors">
                            {nested}
                          </a>
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
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search CAS..." 
            className="pl-4 pr-10 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-[#0a3a70] text-sm"
          />
          <Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="bg-[#0a3a70] text-white px-4 py-1.5 rounded-md flex items-center hover:bg-blue-800 transition-colors">
          <Lock className="w-4 h-4 mr-2" />
          Login
        </button>
      </div>
    </div>
  );
}
