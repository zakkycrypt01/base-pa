'use client';

import Link from 'next/link';
import { Button } from '@/app/components';

export default function LandingPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered',
      description: 'Advanced AI agents that understand context and learn from interactions',
    },
    {
      icon: '⛓️',
      title: 'Blockchain Ready',
      description: 'Built on Coinbase Developer Platform for secure transactions',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Real-time responses with optimized performance',
    },
    {
      icon: '🔒',
      title: 'Enterprise Grade',
      description: 'Bank-level security and reliability for your data',
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Comprehensive insights into agent performance and usage',
    },
    {
      icon: '🔌',
      title: 'API First',
      description: 'Easy integration with REST and WebSocket APIs',
    },
  ];

  const useCases = [
    {
      title: 'DeFi Management',
      description: 'Automate portfolio management and trading strategies',
      icon: '💰',
    },
    {
      title: 'Customer Support',
      description: 'AI-powered chatbots for 24/7 customer assistance',
      icon: '💬',
    },
    {
      title: 'Smart Contracts',
      description: 'Interact with blockchain contracts intelligently',
      icon: '📝',
    },
    {
      title: 'Data Analysis',
      description: 'Real-time blockchain data processing and insights',
      icon: '📈',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{fontFamily: 'var(--font-display)'}}>
              <span className="text-gradient">The Future of AI Agents</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Build intelligent blockchain agents that understand context, learn from interactions, and execute complex tasks autonomously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/chat">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Building
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Always free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to build and deploy intelligent AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="glass border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg" style={{animationDelay: `${idx * 50}ms`}}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>
              <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what you can build with AgentKit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="glass border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group" style={{animationDelay: `${idx * 50}ms`}}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <Link href="/chat" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Developers', value: '10K+' },
              { label: 'Agents Created', value: '50K+' },
              { label: 'Transactions', value: '$1B+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, idx) => (
              <div key={idx} className="glass border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass border border-white/10 rounded-2xl p-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of developers building the next generation of AI-powered applications
            </p>
            <Link href="/chat">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
