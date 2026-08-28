import { GraduationCap, ChevronRight, Users, BookOpen, UserCheck, Handshake, TrendingUp, Building2 } from 'lucide-react';

export function ContentGrid() {
  const programmes = [
    'Bachelor of Accounting Science',
    'Bachelor of Commerce in Accounting',
    'Postgraduate Diplomas',
    'Professional Qualifications (ACCA, CIMA)',
    'Executive MBA'
  ];

  const news = [
    {
      title: 'CAS achieves 100% pass rate in ACCA Strategic Level Exams',
      date: '12 May 2025',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'New Corporate Training Programmes Launched',
      date: '06 May 2025',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'CAS Research Conference 2025 Announced',
      date: '01 May 2025',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const events = [
    { month: 'MAY', day: '20', title: 'Career Fair 2025', date: '20 May 2025 \u2022 09:00 AM', location: 'CAS Main Campus' },
    { month: 'JUN', day: '05', title: 'Research & Innovation Day', date: '05 June 2025 \u2022 09:00 AM', location: 'CAS Auditorium' },
    { month: 'JUN', day: '12', title: 'ACCA Information Session', date: '12 June 2025 \u2022 02:00 PM', location: 'Online via MS Teams' },
  ];

  const stats = [
    { icon: Users, value: '6,500+', label: 'Students Enrolled', color: 'text-[#0a3a70]' },
    { icon: BookOpen, value: '25+', label: 'Programmes', color: 'text-[#158a43]' },
    { icon: UserCheck, value: '150+', label: 'Expert Lecturers', color: 'text-[#f37021]' },
    { icon: Handshake, value: '40+', label: 'Corporate Partners', color: 'text-[#0a3a70]' },
    { icon: TrendingUp, value: '95%', label: 'Graduate Employability', color: 'text-[#158a43]' },
    { icon: Building2, value: '5', label: 'Campuses & Centres', color: 'text-[#f37021]' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      {/* Featured Programmes */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden flex flex-col h-full">
        <h3 className="text-xl font-bold text-[#0a3a70] mb-4 pb-2 border-b-2 border-gray-100 inline-block">Featured Programmes</h3>
        <ul className="space-y-4 mb-8 flex-grow z-10">
          {programmes.map((prog, idx) => (
            <li key={idx} className="flex items-start text-sm font-medium text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a3a70] mt-1.5 mr-3 flex-shrink-0"></span>
              {prog}
            </li>
          ))}
        </ul>
        <button className="bg-[#0a3a70] text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center justify-between w-max hover:bg-blue-800 transition-colors z-10">
          View All Programmes
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
        <GraduationCap className="w-48 h-48 absolute -bottom-10 -right-10 text-gray-50 opacity-50 pointer-events-none" />
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
        <div className="flex justify-between items-end mb-4 border-b-2 border-gray-100 pb-2">
          <h3 className="text-xl font-bold text-[#0a3a70]">Latest News</h3>
          <a href="#" className="text-sm font-bold text-[#158a43] hover:underline">View All</a>
        </div>
        <div className="space-y-5 flex-grow">
          {news.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4 group cursor-pointer">
              <img src={item.image} alt="News thumbnail" className="w-20 h-16 rounded-md object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity" />
              <div>
                <h4 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#0a3a70] transition-colors">{item.title}</h4>
                <p className="text-xs text-[#0a3a70] mt-1 font-medium">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
        <div className="flex justify-between items-end mb-4 border-b-2 border-gray-100 pb-2">
          <h3 className="text-xl font-bold text-[#158a43]">Upcoming Events</h3>
          <a href="#" className="text-sm font-bold text-[#158a43] hover:underline">View All</a>
        </div>
        <div className="space-y-5 flex-grow">
          {events.map((evt, idx) => (
            <div key={idx} className="flex items-start space-x-4 group cursor-pointer">
              <div className="flex flex-col items-center justify-center bg-gray-50 rounded-md border border-gray-200 overflow-hidden w-12 flex-shrink-0">
                <span className="bg-[#0a3a70] text-white text-[10px] font-bold w-full text-center py-0.5">{evt.month}</span>
                <span className="text-lg font-black text-gray-800 py-1">{evt.day}</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0a3a70] leading-tight group-hover:text-blue-700 transition-colors">{evt.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{evt.date}</p>
                <p className="text-xs text-gray-500">{evt.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAS at a Glance */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-[#0a3a70] mb-4 pb-2 border-b-2 border-gray-100 inline-block">CAS at a Glance</h3>
        <div className="grid grid-cols-2 gap-y-6 gap-x-2 flex-grow">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <stat.icon className={`w-8 h-8 ${stat.color} flex-shrink-0 opacity-80`} />
              <div>
                <h4 className="text-lg font-black text-gray-800 leading-none">{stat.value}</h4>
                <p className="text-[11px] font-semibold text-gray-500 mt-1 leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
