import { 
  FileEdit, UserCircle, Users, CreditCard, 
  GraduationCap, BookOpen, ClipboardList, LineChart, 
  CalendarDays, Bot 
} from 'lucide-react';

export function QuickAccess() {
  const items = [
    { label: 'Apply Online', icon: FileEdit, color: 'text-blue-600' },
    { label: 'Student Self-Service', icon: UserCircle, color: 'text-green-600' },
    { label: 'Staff Self-Service', icon: Users, color: 'text-blue-500' },
    { label: 'Pay Fees', icon: CreditCard, color: 'text-orange-500' },
    { label: 'Learning Platform', icon: GraduationCap, color: 'text-green-500' },
    { label: 'Library', icon: BookOpen, color: 'text-blue-800' },
    { label: 'Examinations', icon: ClipboardList, color: 'text-orange-400' },
    { label: 'Results', icon: LineChart, color: 'text-green-600' },
    { label: 'Academic Calendar', icon: CalendarDays, color: 'text-blue-700' },
    { label: 'AI Assistant', icon: Bot, color: 'text-green-500' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 relative z-20 xl:-mt-16 -mt-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col xl:flex-row items-center border border-gray-100">
        
        {/* Title */}
        <div className="mb-6 xl:mb-0 xl:mr-10 xl:border-r border-gray-200 xl:pr-10 text-center xl:text-left flex-shrink-0">
          <h3 className="text-2xl font-black leading-tight">
            <span className="text-[#0a3a70] block">Quick</span>
            <span className="text-[#158a43] block">Access</span>
          </h3>
        </div>

        {/* Icons Grid/Row */}
        <div className="w-full overflow-x-auto pb-4 xl:pb-0 hide-scrollbar">
          <div className="flex items-start justify-between min-w-max space-x-8 xl:space-x-12 px-2">
            {items.map((item, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="flex flex-col items-center group min-w-[80px]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 mb-3 group-hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center max-w-[90px] leading-tight group-hover:text-[#0a3a70]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
