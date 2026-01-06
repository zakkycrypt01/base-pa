'use client';

import { Card, CardHeader, CardTitle, CardBody } from '@/app/components';

export default function FeaturesPage() {
  const capabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Understand and respond to complex natural language queries with contextual awareness',
      icon: '💬',
      features: ['Intent Recognition', 'Entity Extraction', 'Sentiment Analysis', 'Multi-language Support'],
    },
    {
      title: 'Blockchain Integration',
      description: 'Native support for blockchain operations and smart contract interactions',
      icon: '⛓️',
      features: ['Token Operations', 'Smart Contracts', 'Wallet Management', 'Transaction Monitoring'],
    },
    {
      title: 'Real-time Data',
      description: 'Access and process real-time blockchain data and market information',
      icon: '📊',
      features: ['Live Pricing', 'Market Data', 'Transaction History', 'Analytics Dashboard'],
    },
    {
      title: 'Learning & Adaptation',
      description: 'Agents that learn from interactions and improve over time',
      icon: '🧠',
      features: ['Pattern Recognition', 'User Preferences', 'Context Memory', 'Predictive Insights'],
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance features for regulated industries',
      icon: '🔒',
      features: ['Encryption', 'Audit Logs', 'Access Control', 'Compliance Reports'],
    },
    {
      title: 'Extensibility',
      description: 'Easily extend agents with custom tools and integrations',
      icon: '🔧',
      features: ['Custom Tools', 'API Integrations', 'Plugin System', 'Webhook Support'],
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>
            <span className="text-gradient">Powerful Capabilities</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what makes AgentKit the most advanced AI agent platform on blockchain
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, idx) => (
            <Card key={idx} className="hover:border-blue-500/50 transition-all duration-300" style={{animationDelay: `${idx * 100}ms`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-5xl mb-2">{capability.icon}</div>
                    <CardTitle>{capability.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p className="mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2" style={{fontFamily: 'var(--font-display)'}}>
              Why Choose AgentKit?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-300 font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center text-gray-300 font-semibold">AgentKit</th>
                  <th className="px-4 py-3 text-center text-gray-300 font-semibold">Other Solutions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Blockchain Native', agentkit: true, other: false },
                  { feature: 'AI-Powered Agents', agentkit: true, other: true },
                  { feature: 'Real-time Data', agentkit: true, other: false },
                  { feature: 'Enterprise Security', agentkit: true, other: true },
                  { feature: 'No Code Required', agentkit: true, other: false },
                  { feature: '24/7 Support', agentkit: true, other: false },
                  { feature: 'Free Tier', agentkit: true, other: false },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-gray-300">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      {row.agentkit ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.other ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
