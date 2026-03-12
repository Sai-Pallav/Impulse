/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Layout, Shield, Zap, Link, BarChart3, Globe, Sparkles, GitBranch, LifeBuoy, FileText, Code, BookOpen, Users, Video, Gamepad2, Layers, Trophy } from 'lucide-react';

const features = [
  {
    id: 'auto-apply',
    title: 'Auto Apply',
    description: 'Stop filling out the same forms over and over. Our Auto Apply feature automatically submits your profile to matching jobs with a single click.',
    image: 'https://picsum.photos/seed/autoapplyui/1200/900?blur=2',
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    id: 'algo-explorer',
    title: 'Algo Explorer',
    description: 'Master data structures and algorithms with interactive visualizations. Practice coding problems and see how your solutions perform in real-time.',
    image: 'https://picsum.photos/seed/algoui/1200/900?blur=2',
    icon: <Code className="w-6 h-6 text-cyan-500" />
  },
  {
    id: 'learn',
    title: 'Interactive Learning',
    description: 'Access hundreds of courses and tutorials designed to help you level up your skills. Track your progress and earn certificates as you learn.',
    image: 'https://picsum.photos/seed/learnui/1200/900?blur=2',
    icon: <BookOpen className="w-6 h-6 text-yellow-500" />
  },
  {
    id: 'auto-flow',
    title: 'Auto Flow',
    description: 'Design custom workflows to automate your job search. Set up alerts, schedule interviews, and manage your applications all in one place.',
    image: 'https://picsum.photos/seed/autoflowui/1200/900?blur=2',
    icon: <Sparkles className="w-6 h-6 text-purple-500" />
  },
  {
    id: 'resume',
    title: 'Resume Builder',
    description: 'Create a professional resume in minutes. Our AI-powered builder helps you highlight your best skills and experiences to stand out to recruiters.',
    image: 'https://picsum.photos/seed/resumeui/1200/900?blur=2',
    icon: <FileText className="w-6 h-6 text-purple-500" />
  },
  {
    id: 'community',
    title: 'Vibrant Community',
    description: 'Connect with thousands of other developers. Share your projects, get feedback, and collaborate on open-source initiatives.',
    image: 'https://picsum.photos/seed/communityui/1200/900?blur=2',
    icon: <Users className="w-6 h-6 text-rose-500" />
  },
  {
    id: 'mock-interview',
    title: 'Mock Interview',
    description: 'Practice your interviewing skills with AI-driven mock interviews. Get real-time feedback on your answers, body language, and pacing.',
    image: 'https://picsum.photos/seed/mockinterviewui/1200/900?blur=2',
    icon: <Video className="w-6 h-6 text-indigo-500" />
  },
  {
    id: 'games',
    title: 'Games',
    description: 'Take a break and sharpen your mind with our collection of developer-focused mini-games and logic puzzles.',
    image: 'https://picsum.photos/seed/gamesui/1200/900?blur=2',
    icon: <Gamepad2 className="w-6 h-6 text-green-500" />
  },
  {
    id: 'resource',
    title: 'Resources',
    description: 'Access a curated library of cheat sheets, architecture diagrams, and best practices to help you build better software.',
    image: 'https://picsum.photos/seed/resourcesui/1200/900?blur=2',
    icon: <Layers className="w-6 h-6 text-orange-500" />
  },
  {
    id: 'code',
    title: 'Code Environment',
    description: 'Write, test, and deploy code directly from your browser. Our cloud-based IDE supports over 40 languages with built-in collaboration.',
    image: 'https://picsum.photos/seed/codeui/1200/900?blur=2',
    icon: <Code className="w-6 h-6 text-slate-500" />
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    description: 'Compete with developers worldwide. Climb the ranks by solving challenges, contributing to open source, and helping others.',
    image: 'https://picsum.photos/seed/leaderboardui/1200/900?blur=2',
    icon: <Trophy className="w-6 h-6 text-yellow-600" />
  }
];

import { ImpulseAppMockup } from './components/ImpulseAppMockup';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">I</span>
            </div>
            Impulse
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-8 border border-slate-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            Introducing Impulse 2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            The operating system for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">modern product teams.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Unify your workflow, automate the mundane, and focus on what actually matters. Impulse brings your entire company into one seamless workspace.
          </motion.p>
        </div>

        {/* Hero Image Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto mt-20 relative"
        >
          <div className="rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white p-2 md:p-4">
            <div className="rounded-xl md:rounded-[1.5rem] overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[16/9]">
              <ImpulseAppMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Everything you need to scale</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Powerful features designed to help your team move faster and build better products.</p>
          </div>

          <div className="flex flex-col gap-32 md:gap-48">
            {features.map((feature, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <div 
                  key={feature.id} 
                  id={`feature-${feature.id}`}
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                >
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1 space-y-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3 pt-4">
                      {['Real-time syncing', 'Unlimited history', 'Granular permissions'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Image/Mockup */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] bg-white p-2">
                      <div className="rounded-xl md:rounded-[1.5rem] overflow-hidden relative aspect-[4/3] bg-slate-100">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">I</span>
                </div>
                Impulse
              </div>
              <p className="text-slate-500 max-w-xs mb-6">
                Designing the future of work, one pixel at a time. Built for teams that demand excellence.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Impulse Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
