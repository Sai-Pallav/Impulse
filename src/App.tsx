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
    description: "Apply to multiple jobs instantly with a single click. Stop filling out the same details repeatedly across different platforms. This feature cuts down manual effort and saves you hours during mass applications. When you apply to dozens of jobs weekly, this tool becomes absolutely necessary.",
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    id: 'all-jobs',
    title: 'All Jobs in One Platform',
    description: "Find everything listed in one place instead of jumping between different job portals. Stop wasting time searching across multiple websites. You get better visibility by seeing more opportunities at once. Centralized access gives you a real advantage when you are serious about getting placed.",
    icon: <Globe className="w-6 h-6 text-indigo-500" />
  },
  {
    id: 'algo-explorer',
    title: 'Algo Explorer',
    description: "Understand sorting algorithms visually with Algo Explorer. You get to see how the logic works step by step instead of just reading code. This approach builds real conceptual clarity rather than forcing you to memorize patterns. Visualizing the problem helps you truly understand the solution.",
    icon: <Code className="w-6 h-6 text-cyan-500" />
  },
  {
    id: 'resume',
    title: 'Resume Builder and ATS Score',
    description: "Build a professional resume directly on the platform and get your ATS score instantly. Find out right away if recruiters can actually read your resume. Many students face rejection simply because their resume fails ATS checks and not due to a lack of skills. This tool helps you fix formatting and keyword mistakes early on.",
    icon: <FileText className="w-6 h-6 text-purple-500" />
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    description: "Track your performance and embrace healthy competition. See exactly where you stand compared to other learners based on the problems you solve on the Code page. Competition exposes areas for improvement quickly. Use your ranking as direct feedback to track your progress and stay motivated. Challenge yourself to climb higher and reach the top.",
    icon: <Trophy className="w-6 h-6 text-yellow-600" />
  },
  {
    id: 'auto-flow',
    title: 'AutoFlow',
    description: "Streamline your learning journey with a clear and structured path. Follow a guided flow instead of relying on random preparation. Having a solid direction prevents the common pitfall of studying without a plan. Consistent structure always beats relying purely on motivation.",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />
  },
  {
    id: 'mock-interview',
    title: 'Mock Interview',
    description: "Practice in a simulated environment to prepare for real interview pressure. Knowing the right answers is completely different from delivering them with confidence. Practice speaking your answers out loud so you are fully prepared for the real thing.",
    icon: <Video className="w-6 h-6 text-indigo-500" />
  },
  {
    id: 'code',
    title: 'CODE Page',
    description: "Solve data structure and algorithm problems in any programming language. Collaborate with peers to brainstorm solutions and use the interactive whiteboard. Test your code against numerous test cases while tracking your time with integrated timers. You can even listen to your favorite music while coding to maintain focus. We designed this space to make learning engaging and highly effective.",
    icon: <Code className="w-6 h-6 text-slate-500" />
  },
  {
    id: 'community',
    title: 'COMMUNITY Page',
    description: "Connect and grow with peers who share your goals. Post messages, discuss new ideas, and set milestones to track your progress. Ask questions and gain valuable insights from fellow learners in active discussions. This collaborative hub lets knowledge and motivation flow freely as you build a strong network.",
    icon: <Users className="w-6 h-6 text-rose-500" />
  },
  {
    id: 'learn',
    title: 'LEARN Page',
    description: "Access a wide range of resources to master any programming language or tech topic. Watch curated video tutorials, read detailed documentation, and test your knowledge with quick quizzes. Follow the learning flowchart so you always know exactly what to study next. We made everything structured and easy to follow so you never run out of ways to improve.",
    icon: <BookOpen className="w-6 h-6 text-yellow-500" />
  },
  {
    id: 'resource',
    title: 'RESOURCES Page',
    description: "Explore a huge variety of study materials right at your fingertips. Access documents, videos, practice exercises, system design guides, and career tools. We organized all the content to help you learn as efficiently as possible. Everything you need to practice coding or understand complex concepts is right here waiting for you.",
    icon: <Layers className="w-6 h-6 text-orange-500" />
  }
];



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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 text-slate-600 text-sm font-medium mb-8 border border-slate-200/50 backdrop-blur-sm"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-2 w-2 rounded-full bg-indigo-500"
            ></motion.span>
            Introducing Impulse
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            The operating system for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">modern product teams.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Unify your workflow, automate the mundane, and focus on what actually matters. Impulse brings your entire company into one seamless workspace.
          </motion.p>
        </div>

        {/* Hero Image Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto mt-20 relative px-4"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] bg-white p-2 md:p-4 hover:shadow-[0_40px_80px_-25px_rgba(0,0,0,0.15)] transition-shadow duration-500"
          >
            <div className="rounded-xl md:rounded-[1.5rem] overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[16/9]">
              <div className="w-full h-full bg-slate-100 flex items-center justify-center group overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-slate-300 flex flex-col items-center gap-4 transition-colors group-hover:text-slate-400"
                >
                  <Layout className="w-20 h-20" />
                  <span className="text-sm font-medium uppercase tracking-wider">App Interface Mockup</span>
                </motion.div>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
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
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center gap-12 md:gap-24 group`}
                >
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="flex-1 space-y-6"
                  >
                    <motion.div 
                      whileInView={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* Placeholder/Mockup */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 w-full"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] bg-white p-2 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-500"
                    >
                      <div className="rounded-xl md:rounded-[1.5rem] overflow-hidden relative aspect-[4/3] bg-slate-100 flex items-center justify-center">
                        <div className="text-slate-300 flex flex-col items-center gap-2 group-hover:text-slate-400 transition-colors duration-500">
                          <Layout className="w-12 h-12" />
                          <span className="text-xs font-medium uppercase tracking-wider">{feature.title} Mockup</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
