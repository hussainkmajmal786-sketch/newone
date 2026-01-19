
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventCard from './components/EventCard';
import Schedule from './components/Schedule';
import Leaderboard from './components/Leaderboard';
import Contact from './components/Contact';
import Registration from './components/Registration';
import RegistrationModal from './components/RegistrationModal';
import AINexus from './components/AINexus';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import EventDetailModal from './components/EventDetailModal';
import VideoModal from './components/VideoModal';
import TeamDashboard from './components/TeamDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { EVENTS, SPONSORS } from './constants';
import { EventItem, TeamMember } from './types';
import { ArrowUp, LayoutGrid, Info, Zap, Clock, Filter, UserCheck, BarChart3 } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ 
    name: string, 
    role: 'coordinator' | 'member', 
    memberData?: TeamMember, 
    teamName?: string 
  } | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'Coding' | 'Robotics' | 'Design' | 'Business' | 'Other'>('All');

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredEvents = activeTab === 'All' 
    ? EVENTS 
    : EVENTS.filter(event => event.category === activeTab);

  const eventTabs: (typeof activeTab)[] = ['All', 'Coding', 'Robotics', 'Design', 'Business', 'Other'];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Tech Grid Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Navbar 
          onOpenLogin={() => setIsLoginOpen(true)} 
          user={currentUser ? currentUser.name : null}
          onLogout={() => setCurrentUser(null)}
        />
        
        <main>
          {/* Coordinator Panel */}
          {currentUser?.role === 'coordinator' && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[40] w-full max-w-4xl px-4 animate-in slide-in-from-top-10">
              <div className="bg-indigo-600/90 backdrop-blur-md text-white p-4 rounded-2xl flex items-center justify-between shadow-2xl border border-indigo-400/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Coordinator Dashboard Active</h4>
                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Management view enabled</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-mono bg-white/10 px-2 py-1 rounded">ID: ALPHA-001</span>
                  <button 
                    onClick={() => setShowAnalytics(true)}
                    className="bg-white text-indigo-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          )}

          <Hero onWatchTrailer={() => setIsVideoOpen(true)} />

          {currentUser?.role === 'member' && currentUser.memberData && currentUser.teamName && (
            <TeamDashboard 
              member={currentUser.memberData} 
              teamName={currentUser.teamName}
              events={EVENTS}
            />
          )}

          {currentUser?.role === 'coordinator' && (
            <section className="py-24 bg-indigo-950/20 border-y border-indigo-900/50 animate-in fade-in slide-in-from-bottom-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 bg-indigo-500 rounded-2xl shadow-xl shadow-indigo-500/20">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-white">Activated <span className="text-indigo-400">Programs</span></h2>
                    <p className="text-slate-400">Click on an event to view volunteer instructions. <span className="text-amber-400 font-bold underline">Note: Times are variable.</span></p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {EVENTS.filter(e => ['Idea Pitching', 'Sell the Product', 'Treasure Hunt', 'Poster Presentation'].includes(e.title)).map((event) => (
                    <div 
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="group cursor-pointer bg-slate-900 border-2 border-indigo-500/20 rounded-[2.5rem] overflow-hidden transition-all hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-indigo-950/40 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-4 right-4 bg-indigo-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                          Live Tracking
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">{event.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-indigo-400 font-bold mono text-xs">{event.time}</span>
                            <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest flex items-center gap-1 mt-1">
                              <Clock className="w-2.5 h-2.5" />
                              Variable Start
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                            <span className="text-xs font-bold text-white uppercase tracking-widest px-2">Monitor</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <About />

          <section id="events" className="py-24 bg-slate-950/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Competitions & <span className="text-cyan-400">Labs</span></h2>
                <p className="text-slate-400">Discover your next challenge. Categories spanning from Web3 to Robotics.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-16">
                {eventTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                      activeTab === tab 
                      ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-lg shadow-cyan-500/20' 
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="animate-in fade-in zoom-in duration-300">
                    <EventCard 
                      event={event} 
                      onClick={() => setSelectedEvent(event)} 
                    />
                  </div>
                ))}
                
                {/* Coming Soon Placeholder */}
                <div className="group relative bg-slate-900/20 border-2 border-dashed border-slate-800 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center hover:border-cyan-500/30 hover:bg-slate-900/40 transition-all duration-300 animate-in fade-in zoom-in duration-300 cursor-default min-h-[450px]">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
                  <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500 border border-slate-700/50 group-hover:border-cyan-500/30">
                    <Zap className="w-10 h-10 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">Phase II Loading...</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                    Additional competition protocols are currently being decrypted. Stay tuned for new tracks.
                  </p>
                  <div className="mt-8 flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-700 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700 animate-bounce delay-100"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700 animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Schedule />
          
          <Registration onOpenRegistration={() => setIsRegistrationOpen(true)} />

          <Leaderboard />
          <Contact />

          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent -z-10"></div>
            <div className="max-w-5xl mx-auto px-4 text-center">
              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3rem] shadow-2xl relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-black uppercase text-sm shadow-xl shadow-cyan-500/20">
                  Limited slots available
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to <span className="text-cyan-400">Sync?</span></h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of students for 48 hours of non-stop learning, building, and winning.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setIsLoginOpen(true)}
                    className="bg-cyan-500 text-slate-950 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <UserCheck className="w-6 h-6" />
                    Member Access
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-slate-800 text-white px-10 py-5 rounded-full font-bold text-xl border border-slate-700 hover:bg-slate-700 transition-all"
                  >
                    Contact Organizers
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        
        {/* Enhanced AI Assistant */}
        <AINexus />
        
        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)} 
          onLogin={(userData) => setCurrentUser(userData)}
        />
        <RegistrationModal
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
        {showAnalytics && (
          <AnalyticsDashboard onClose={() => setShowAnalytics(false)} />
        )}
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 shadow-xl hover:bg-slate-800 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
