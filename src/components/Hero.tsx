import { FileEdit, Compass, Bot, CheckCircle } from 'lucide-react';

export function Hero() {
  const checklist = [
    'Industry Relevant Programmes',
    'Accredited Qualifications',
    'Professional Short Courses',
    'Executive Education',
    'Research & Innovation',
    'Global Opportunities'
  ];

  return (
    <div className="relative bg-gray-900 w-full xl:h-[600px] overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000" 
        alt="Campus Building" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 py-16 xl:py-0 flex flex-col xl:flex-row items-center justify-between">
        
        {/* Left Side: Headlines */}
        <div className="max-w-2xl bg-white/90 xl:bg-transparent p-6 xl:p-0 rounded-2xl xl:rounded-none backdrop-blur-sm xl:backdrop-blur-none mt-10 xl:mt-0">
          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-[#0a3a70] block">Shaping Future</span>
            <span className="text-[#158a43] block">Accounting Professionals</span>
          </h1>
          <p className="text-gray-800 xl:text-gray-200 text-lg mb-8 max-w-xl font-medium drop-shadow-md">
            Empowering minds. Building careers. Transforming communities through excellence in accounting education and professional development.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#0a3a70] text-white px-6 py-3 rounded-md flex items-center justify-center font-semibold hover:bg-blue-800 transition-colors">
              <FileEdit className="w-5 h-5 mr-2" />
              Apply Now
            </button>
            <button className="bg-[#158a43] text-white px-6 py-3 rounded-md flex items-center justify-center font-semibold hover:bg-green-700 transition-colors">
              <Compass className="w-5 h-5 mr-2" />
              Explore Programmes
            </button>
            <button className="bg-[#f37021] text-white px-6 py-3 rounded-md flex items-center justify-center font-semibold hover:bg-orange-600 transition-colors">
              <Bot className="w-5 h-5 mr-2" />
              Chat with us
            </button>
          </div>

          <div className="flex items-center space-x-2 mt-8 justify-center xl:justify-start">
            <div className="w-3 h-3 rounded-full bg-[#0a3a70]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 xl:bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 xl:bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 xl:bg-gray-400"></div>
          </div>
        </div>

        {/* Right Side: Welcome Card */}
        <div className="bg-[#0a3a70] rounded-2xl p-8 text-white max-w-md w-full shadow-2xl mt-12 xl:mt-0 xl:mr-10 border border-blue-800">
          <h2 className="text-2xl font-bold mb-2">Welcome to CAS</h2>
          <p className="text-blue-200 text-sm mb-6">
            Your digital gateway to world-class accounting education, professional development and lifelong success.
          </p>
          <ul className="space-y-4">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center text-sm font-medium">
                <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
