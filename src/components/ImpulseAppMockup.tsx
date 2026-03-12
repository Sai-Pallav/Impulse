import React from 'react';
import { 
  Home, FileText, Code, Users, BookOpen, Layers, Trophy, Gamepad2, 
  Video, Bell, User, Search, Sparkles, MessageCircle, ArrowRight, 
  Zap, Filter, Book
} from 'lucide-react';

export function ImpulseAppMockup() {
  const scrollToFeature = (id: string) => {
    const element = document.getElementById(`feature-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const sidebarItems = [
    { icon: FileText, label: 'Resume', id: 'resume' },
    { icon: Code, label: 'Code', id: 'code' },
    { icon: Users, label: 'Community', id: 'community' },
    { icon: BookOpen, label: 'Learn', id: 'learn' },
    { icon: Layers, label: 'Resources', id: 'resource' },
    { icon: Trophy, label: 'Leaderboard', id: 'leaderboard' },
    { icon: Gamepad2, label: 'Games', id: 'games' },
    { icon: Video, label: 'Mock Interview', id: 'mock-interview' },
    { icon: Bell, label: 'Notifications', id: 'auto-flow' },
    { icon: User, label: 'Profile', id: 'resume' },
  ];

  return (
    <div className="w-full h-full bg-[#f8f9fa] flex text-slate-800 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">IMPULSE</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </div>
          
          {sidebarItems.map((item, i) => (
            <div 
              key={i} 
              onClick={() => scrollToFeature(item.id)}
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium cursor-pointer transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-900">Guest Mode</div>
              <div className="text-xs text-blue-600">Tap to Sign In</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <div className="px-8 py-6 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 tracking-tight leading-none mb-1">IMPULSE</h2>
            <p className="text-sm text-slate-500">Hello, Guest User</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 hover:bg-yellow-100 transition-colors">
              <Trophy className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition-colors">
              <Sparkles className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-12">
          {/* User Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search users by username..." 
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>

          {/* Hiring Banner */}
          <div className="bg-[#0f9d58] rounded-[2rem] p-10 flex items-center justify-between relative overflow-hidden mb-6 shadow-md">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-2">We are Hiring!</h2>
              <p className="text-emerald-50 text-lg mb-8">Join our team of elite developers.</p>
              <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Banner Graphic */}
            <div className="relative z-10 mr-10">
              <div className="w-48 h-48 bg-[#00b4d8] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                {/* Laptop Graphic */}
                <div className="absolute bottom-10 w-32 h-20 bg-slate-800 rounded-t-lg border-4 border-slate-700 flex items-center justify-center">
                  <span className="text-white font-mono text-2xl font-bold">&lt;/&gt;</span>
                </div>
                <div className="absolute bottom-8 w-40 h-2 bg-slate-300 rounded-b-lg"></div>
                {/* Shadow */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/10 rotate-45 transform origin-bottom-left"></div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-6 h-2 rounded-full bg-blue-600"></div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-[#2d1b4e] mb-4 flex items-center justify-center gap-3">
              Find the Right Job, Faster <Zap className="w-10 h-10 text-[#2d1b4e] fill-current" />
            </h1>
            <p className="text-slate-500 text-lg">
              Search thousands of opportunities across top platforms in seconds
            </p>
          </div>

          {/* Job Search */}
          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="flex items-center bg-white p-2 rounded-full shadow-md border border-slate-100">
              <div className="pl-4 pr-2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="flex-1 py-3 bg-transparent text-slate-700 focus:outline-none text-lg"
              />
              <button className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Search
              </button>
              <button className="ml-2 p-3 text-slate-500 hover:bg-slate-100 rounded-full transition-colors border border-slate-200">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="flex justify-center gap-16 max-w-4xl mx-auto">
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => scrollToFeature('auto-apply')}
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm text-slate-800">Auto Apply</span>
            </div>
            
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => scrollToFeature('algo-explorer')}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00b4d8] text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm text-slate-800">Algo Explorer</span>
            </div>
            
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => scrollToFeature('learn')}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#eab308] text-white flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                <Book className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm text-slate-800">Learn</span>
            </div>
            
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => scrollToFeature('auto-flow')}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#a855f7] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm text-slate-800">Auto Flow</span>
            </div>
            
            <div 
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => scrollToFeature('resume')}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#a855f7] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8" />
              </div>
              <span className="font-semibold text-sm text-slate-800">Resume</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
