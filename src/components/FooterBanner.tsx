import { Bot, ChevronRight, Video, FileText, Book, Phone } from 'lucide-react';

export function FooterBanner() {
  return (
    <div className="bg-[#0a3a70] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        
        {/* Left: Ask AI Widget */}
        <div className="flex items-center space-x-4 bg-white/10 p-3 rounded-xl min-w-[280px]">
          <div className="bg-white rounded-full p-2">
            <Bot className="w-6 h-6 text-[#0a3a70]" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Chat with us</h4>
            <p className="text-xs text-blue-200">I'm here to help with admissions,<br/>programmes, fees and more!</p>
          </div>
          <ChevronRight className="w-5 h-5 ml-auto text-blue-200" />
        </div>

        {/* Middle: Core Values */}
        <div className="flex items-center space-x-3 text-sm font-bold xl:text-base hidden md:flex">
          <span>Excellence.</span>
          <span className="w-2 h-2 rounded-full bg-[#158a43]"></span>
          <span>Innovation.</span>
          <span className="w-2 h-2 rounded-full bg-[#158a43]"></span>
          <span>Professionalism.</span>
          <span className="w-2 h-2 rounded-full bg-[#158a43]"></span>
          <span>Integrity.</span>
        </div>

        {/* Right: Action Links */}
        <div className="flex items-center space-x-6 text-sm font-semibold">
          <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
            <Video className="w-4 h-4 mr-2" />
            Virtual Tour
          </a>
          <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
            <FileText className="w-4 h-4 mr-2" />
            Prospectus
          </a>
          <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
            <Book className="w-4 h-4 mr-2" />
            Brochures
          </a>
          <a href="#" className="flex items-center hover:text-blue-300 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
