import React, { useState, useEffect } from 'react';
import charityImg from './assets/Portfolioimages/charityevent.jpg';
import litterImg from './assets/Portfolioimages/litterpicking.jpg';
import easterImg2 from './assets/Portfolioimages/easterassembly2.jpg';
import mesGroup1 from './assets/Portfolioimages/mesgroup.JPG';
import mesGroup2 from './assets/Portfolioimages/Mes2.jpg';
import easterVideo from './assets/Portfolioimages/easterassemblyvideo.mp4';
import careHomeImg from './assets/Portfolioimages/carehomeservice.jpg';
import igniteKidsImg from './assets/Portfolioimages/igniteKidsyouthgroup.jpg';
import christmasImg from './assets/Portfolioimages/christmasassembly.jpg';
import easterImg1 from './assets/Portfolioimages/easterassembly.jpg';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Activity,
  Video,
  ChevronRight,
  ChevronDown,
  Download
} from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter text-white">
            CHIAZOKAM<span className="text-amber-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-amber-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-400 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-amber-400 transition-colors">Education</button>
          </div>
          <button onClick={() => scrollToSection('contact')} className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Available for New Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight">
            Youth & Community <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              Professional.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Empowering young people across church, school, and community settings. Leveraging mentorship, safeguarding, and data analytics to build confident, isolated-free futures.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('experience')} className="flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold transition-all hover:bg-amber-400 hover:scale-105">
              View My Impact <ChevronRight size={18} />
            </button>
            <button onClick={() => scrollToSection('gallery')} className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all hover:bg-white/20 hover:scale-105 backdrop-blur-sm">
              See Moments in Action
            </button>
            <a href="chiaz alozie.docx" download="Chiazokam_Alozie_CV.docx" className="flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/40 px-8 py-4 rounded-full font-bold transition-all hover:bg-amber-500 hover:text-slate-950 hover:scale-105 backdrop-blur-sm">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Core Competencies Marquee */}
      <div className="w-full bg-amber-500 py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center text-slate-950 font-black text-xl tracking-widest uppercase">
          <span className="mx-8">• Youth Mentorship & Advocacy</span>
          <span className="mx-8">• Safeguarding & Child Protection</span>
          <span className="mx-8">• Programme Planning</span>
          <span className="mx-8">• Conflict De-escalation</span>
          <span className="mx-8">• Community Outreach</span>
          <span className="mx-8">• Emotional Wellbeing</span>
          <span className="mx-8">• Behaviour Support</span>
          <span className="mx-8">• Data Analytics</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-[marquee_20s_linear_infinite] flex items-center text-slate-950 font-black text-xl tracking-widest uppercase" aria-hidden="true">
          <span className="mx-8">• Youth Mentorship & Advocacy</span>
          <span className="mx-8">• Safeguarding & Child Protection</span>
          <span className="mx-8">• Programme Planning</span>
          <span className="mx-8">• Conflict De-escalation</span>
          <span className="mx-8">• Community Outreach</span>
          <span className="mx-8">• Emotional Wellbeing</span>
          <span className="mx-8">• Behaviour Support</span>
          <span className="mx-8">• Data Analytics</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">More Than Just <br/><span className="text-amber-500">Mentorship.</span></h2>
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I am known for a calm, empathetic, and reliable approach to fostering safe, inclusive, and highly engaging youth environments. I champion individuals overcoming behavioural difficulties, low confidence, and social isolation.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Uniquely, I leverage my academic background in <strong>Business Systems and Data Analytics</strong> to strengthen frontline work—optimising participation monitoring and using insights to drive programme improvements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center gap-4 hover:border-amber-500/50 transition-colors">
              <div className="bg-amber-500/20 p-4 rounded-full text-amber-400"><ShieldCheck size={32}/></div>
              <h3 className="font-bold text-white">Enhanced DBS</h3>
              <p className="text-sm text-slate-500">Fully certified & cleared</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center gap-4 hover:border-amber-500/50 transition-colors transform translate-y-8">
              <div className="bg-orange-500/20 p-4 rounded-full text-orange-400"><HeartHandshake size={32}/></div>
              <h3 className="font-bold text-white">Pastoral Support</h3>
              <p className="text-sm text-slate-500">Consistent & empathetic</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center gap-4 hover:border-amber-500/50 transition-colors">
              <div className="bg-blue-500/20 p-4 rounded-full text-blue-400"><Users size={32}/></div>
              <h3 className="font-bold text-white">Outreach</h3>
              <p className="text-sm text-slate-500">Expanding community access</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center gap-4 hover:border-amber-500/50 transition-colors transform translate-y-8">
              <div className="bg-emerald-500/20 p-4 rounded-full text-emerald-400"><Activity size={32}/></div>
              <h3 className="font-bold text-white">Data Driven</h3>
              <p className="text-sm text-slate-500">Tracking impact & growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">Professional <span className="text-amber-500">Journey</span></h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          
          {/* Job 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-amber-500 text-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} className="font-bold"/>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group-hover:border-amber-500/30">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-amber-400 text-sm font-bold tracking-wider">SEP 2024 – PRESENT</span>
                <h3 className="text-xl font-bold text-white">Youth Worker — MES Scheme</h3>
                <span className="text-slate-400 font-medium">Church of England • Wellingborough, UK</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Spearheading weekly wellbeing sessions for ~24 young people (Years 4–6).</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Delivering targeted mentoring engaging up to 100 young people.</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Optimised participation monitoring by implementing tracking systems.</li>
              </ul>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group-hover:border-amber-500/30">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-amber-400 text-sm font-bold tracking-wider">APR 2025 – PRESENT</span>
                <h3 className="text-xl font-bold text-white">Parish Church Council Member</h3>
                <span className="text-slate-400 font-medium">Church of England • Wellingborough, UK</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Driving strategic discussions on safeguarding and youth engagement.</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Orchestrating inclusive initiatives for a congregation of 200.</li>
              </ul>
            </div>
          </div>

          {/* Job 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group-hover:border-amber-500/30">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-amber-400 text-sm font-bold tracking-wider">JUL 2023 – AUG 2024</span>
                <h3 className="text-xl font-bold text-white">Community Development Lead</h3>
                <span className="text-slate-400 font-medium">NYSC • Abuja, Nigeria</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Directed youth outreach, expanding health education and life skills.</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Engineered workshops engaging 500+ young people.</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Managed and trained volunteer teams during high-impact events.</li>
              </ul>
            </div>
          </div>

          {/* Job 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group-hover:border-amber-500/30">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-amber-400 text-sm font-bold tracking-wider">APR 2015 – AUG 2017</span>
                <h3 className="text-xl font-bold text-white">Youth Volunteer</h3>
                <span className="text-slate-400 font-medium">Christ Church Bedford • Bedford, UK</span>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Facilitated weekly youth sessions for 30 young people aged 11–18.</li>
                <li className="flex gap-2"><span className="text-amber-500">▹</span> Forged impactful mentoring relationships.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section - Moments in Action */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Moments in <span className="text-amber-500">Action</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A visual journey of community engagement, youth mentorship, and impactful events. <br/><span className="text-xs text-amber-500/70">(Images will automatically appear once files are added to the folder)</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[250px]">
            
            {/* 1x Charity Picture */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 md:col-span-2 lg:col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/charityevent.jpg" alt="Charity Event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1593113565214-80af34bf9919?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Charity Event</h3>
                <p className="text-sm text-amber-400 mt-1">Community Outreach</p>
              </div>
            </div>

            {/* 2x Buckden Tower's Residential */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/litterpicking.jpg" alt="Buckden Tower's Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Litter Picking</h3>
                <p className="text-sm text-amber-400 mt-1">Community Clean-up</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/easterassembly2.jpg" alt="Buckden Tower's Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Easter Assembly</h3>
                <p className="text-sm text-amber-400 mt-1">Picture 2</p>
              </div>
            </div>

            {/* 2x MES Group Picture */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 md:col-span-2 xl:col-span-1 border border-white/10">
              <img src="\src\assets\Portfolioimages\mesgroup.JPG" alt="MES Group" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953eb1f5f6?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">MES Group</h3>
                <p className="text-sm text-amber-400 mt-1">Picture 1</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/Mes2.jpg" alt="MES Group" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953eb1f5f6?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">MES Group</h3>
                <p className="text-sm text-amber-400 mt-1">Picture 2</p>
              </div>
            </div>

            {/* 1x Easter Assembly Video (Takes up more space) */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <video 
                src="/src/assets/Portfolioimages/easterassemblyvideo.mp4" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                controls
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center pointer-events-none">
                <h3 className="text-3xl font-black text-white">Easter Assembly</h3>
                <p className="text-lg text-amber-400 mt-1">Video Presentation</p>
              </div>
            </div>

            {/* 1x Care Home Service */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/carehomeservice.jpg" alt="Care Home Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Care Home</h3>
                <p className="text-sm text-amber-400 mt-1">Service</p>
              </div>
            </div>

            {/* 1x Christmas Assembly at Redwell */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/igniteKidsyouthgroup.jpg" alt="Christmas Assembly" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Ignite Kids Youth Group</h3>
                <p className="text-sm text-amber-400 mt-1">Redwell</p>
              </div>
            </div>

            {/* 2x Easter Assembly Pictures */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/christmasassembly.jpg" alt="Christmas Assembly 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Christmas Assembly</h3>
                <p className="text-sm text-amber-400 mt-1">Group Picture 1</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden bg-slate-800 col-span-1 border border-white/10">
              <img src="/src/assets/Portfolioimages/easterassembly.jpg" alt="Easter Assembly 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="text-xl font-bold text-white">Easter Assembly</h3>
                <p className="text-sm text-amber-400 mt-1">Group Picture 2</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">Academic <span className="text-amber-500">Foundation</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degree 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-amber-500/10 transition-colors duration-500">
              <GraduationCap size={160} />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-4">SEP 2022 – SEP 2023</span>
              <h3 className="text-2xl font-bold text-white mb-2">MSc Data Analytics</h3>
              <p className="text-slate-400 font-medium mb-6">London Metropolitan University • London, UK</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <Activity size={20} className="text-amber-500 shrink-0"/>
                  <span>Developed strong reporting, organisational, and programme evaluation skills applicable to youth settings.</span>
                </li>
                <li className="flex gap-3">
                  <Activity size={20} className="text-amber-500 shrink-0"/>
                  <span>Advanced competency in <strong className="text-white">Power BI, Python, SQL</strong>, and data visualisation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Degree 2 */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-amber-500/10 transition-colors duration-500">
              <GraduationCap size={160} />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-4">SEP 2019 – JUL 2022</span>
              <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) Business Information Systems</h3>
              <p className="text-slate-400 font-medium mb-6">Canterbury Christ Church University • Canterbury, UK</p>
              <p className="text-slate-300">
                Bridged the gap between business operations and technological solutions, fostering a structured approach to problem-solving and project management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-white mb-2">Let's Connect.</h2>
            <p className="text-slate-400">Open to Relocate • Flexible Availability</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <a href="mailto:chiazialozie@outlook.com" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl transition-colors text-white font-medium">
              <Mail className="text-amber-500" size={20}/>
              chiazialozie@outlook.com
            </a>
            <a href="tel:+447340696740" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl transition-colors text-white font-medium">
              <Phone className="text-amber-500" size={20}/>
              +44 7340 696740
            </a>
            <a href="src\assets\cv\chiaz alozie.docx" download="Chiazokam_Alozie_CV.docx" className="flex items-center justify-center gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-6 py-4 rounded-2xl transition-colors text-amber-400 font-medium shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Download className="text-amber-500" size={20}/>
              Download CV
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Based in Wellingborough, UK
          </div>
          <p>© {new Date().getFullYear()} Chiazokam Alozie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
